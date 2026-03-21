import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function sendMail({ name, email, message }: ContactFormData) {
  try {
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@yourdomain.com',
      to: process.env.CONTACT_EMAIL || 'your@email.com',
      subject: `New Contact from ${safeName}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Contact Form Message

        Name: ${name}
        Email: ${email}

        Message:
        ${message}
      `
    });

    if (error) {
      console.error(error);
      throw new Error(error.message);
    }

    return { success: true, data };
  } catch (error) {
    console.error('Send email error:', error);
    throw error;
  }
}
















