import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      timestamp: new Date().toISOString(),
    };

    console.log('Received feedback form submission:', data);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Форма успешно отправлена',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    console.error('Error processing feedback form:', error);

    return new Response(
      JSON.stringify({
        success: false,
        message: 'Произошла ошибка при обработке формы',
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
