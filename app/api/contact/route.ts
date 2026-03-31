import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json({ error: 'Email and message are required' }, { status: 400 });
    }

    // Configure your SMTP settings via environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER || 'no-reply@studiely.com',
      to: 'support@studiely.com',
      subject: `New Contact Form Submission from ${email}`,
      text: `You have received a new message from your website contact form.\n\nSender Email: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="color: #6366f1; border-bottom: 2px solid #eaeaea; padding-bottom: 10px;">New Contact Submission</h2>
          <p><strong>Sender Email:</strong> ${email}</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="margin-top: 0;"><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; font-size: 16px; line-height: 1.5;">${message}</p>
          </div>
          <p style="color: #888; font-size: 12px; margin-top: 30px; text-align: center;">This message was sent from the Studiely Contact Us form.</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email. Please ensure SMTP credentials are correct.' }, { status: 500 });
  }
}
