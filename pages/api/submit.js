import { neon } from '@neondatabase/serverless';
import { geolocation } from '@vercel/edge';

export default async function handler(req) {
  const {
    data: { name, email_address, company_website, company_size, message },
  } = await new Response(req.body).json();

  const { country, city } = geolocation(req);

  const sql = neon(process.env.DATABASE_URL);

  try {
    await sql`INSERT INTO contact_us (name, email_address, company_website, company_size, message, country_code, city)
              VALUES(${name}, ${email_address}, ${company_website}, ${company_size}, ${message}, ${country}, ${city});`;

    return Response.json({
      message: 'A Ok!',
    });
  } catch (error) {
    return Response.json({
      message: 'Error',
    });
  }
}

export const config = {
  runtime: 'edge',
};
