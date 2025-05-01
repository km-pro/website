import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

const EMAIL_CONFIG = {
  from: import.meta.env.EMAIL_USER,
  to: import.meta.env.EMAIL_USER,
  fromName: 'Форма Заказа Звонка',
};

const transporter = nodemailer.createTransport({
  host: import.meta.env.EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: import.meta.env.EMAIL_USER,
    pass: import.meta.env.EMAIL_PASSWORD,
  },
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const referer = request.headers.get('referer') || '';
    const host = request.headers.get('host') || '';

    const data = {
      name: formData.get('name') || '',
      phone: formData.get('phone') || '',
      timestamp: new Date().toISOString(),
    };

    console.log('Received callback request:', data);

    const htmlBody = `
      <!DOCTYPE html>
      <html lang="ru">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Заявка на обратный звонок</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f9f9f9;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border: 1px solid #e0e0e0; border-radius: 5px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
          <div style="background-color: #004a87; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Заявка на обратный звонок</h1>
          </div>
          
          <div style="padding: 20px;">
            <p style="margin-bottom: 25px; color: #666; font-size: 16px;">Поступила новая заявка на обратный звонок.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #eee; width: 30%; font-weight: bold; color: #004a87;">Имя:</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #eee;">${htmlEscape(data.name.toString())}</td>
              </tr>
              <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #eee; font-weight: bold; color: #004a87;">Телефон:</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #eee;">
                  <a href="tel:${htmlEscape(data.phone.toString())}" style="color: #004a87; text-decoration: none;">${htmlEscape(data.phone.toString())}</a>
                </td>
              </tr>
            </table>
            
            <div style="background-color: #f5f5f5; border-radius: 4px; padding: 15px; margin-top: 20px; font-size: 14px; color: #666;">
              <p style="margin: 0 0 10px 0;"><strong>Дополнительная информация:</strong></p>
              <p style="margin: 0 0 5px 0;"><strong>Страница-источник:</strong> ${htmlEscape(referer)}</p>
              <p style="margin: 0 0 5px 0;"><strong>Дата и время:</strong> ${new Date().toLocaleString('ru-RU')}</p>
            </div>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 14px; color: #888;">
            <p style="margin: 0;">© ${new Date().getFullYear()} Constructor Group.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"${EMAIL_CONFIG.fromName}" <${EMAIL_CONFIG.from}>`,
      to: EMAIL_CONFIG.to,
      subject: `Заявка на обратный звонок с сайта ${host}`,
      html: htmlBody,
      charset: 'utf-8',
    };

    await sendEmail(mailOptions);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Заявка успешно отправлена',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    console.error('Error processing callback request:', error);

    return new Response(
      JSON.stringify({
        success: false,
        message: 'Произошла ошибка при обработке заявки',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
};

async function sendEmail(mailOptions: nodemailer.SendMailOptions): Promise<void> {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        reject(error);
      } else {
        console.log('Email sent:', info.response);
        resolve();
      }
    });
  });
}

function htmlEscape(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
