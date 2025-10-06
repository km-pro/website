import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const envVars = {
    EMAIL_HOST: process.env.EMAIL_HOST,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD ? '***SET***' : undefined,
    PUBLIC_GA_ID: process.env.PUBLIC_GA_ID,
    PUBLIC_GTM_ID: process.env.PUBLIC_GTM_ID,
    PUBLIC_YANDEX_METRIKA_ID: process.env.PUBLIC_YANDEX_METRIKA_ID,
    PUBLIC_GOOGLE_REMARKETING_ID: process.env.PUBLIC_GOOGLE_REMARKETING_ID,
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
  };

  return new Response(JSON.stringify(envVars, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
