import { createTransport } from 'nodemailer';
import CONSTANTS from '../../../data/constants.json';

const transporter = createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});

export async function POST(req) {
  const { name, email, message } = await req.json();

  console.log(`You have an email from: ${name} - ${email} - ${message}`);

  const info = await transporter
    .sendMail({
      from: `next-portfolio-blog" <${process.env.EMAIL_USERNAME}>`,
      to: `next-portfolio-blog <${CONSTANTS.CONTACT_EMAIL}>`,
      subject: `Contact form - next-portfolio-blog`,
      html: `
            <p>You have an email from:</p> 
            <p>${name}</p>  
            <p>${email}</p>
            <p>${message}</p>
          `,
    })
    .catch((err) => console.error(err));

  return Response.json({ status: 'ok', messageId: info.messageId || null });
}
