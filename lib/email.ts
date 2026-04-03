import { Resend } from 'resend';
import { siteConfig } from '@/lib/site-config';

// Lazy-init: Resend throws if instantiated without a key,
// which breaks builds when env vars aren't set.
let _resend: Resend | null = null;
function getResend() {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

interface AppointmentDetails {
  fullName: string;
  phone: string;
  treatmentNeeded: string | null;
  preferredDate: string;
  preferredTime: string | null;
  createdAt: string;
}

export async function sendAppointmentNotification(details: AppointmentDetails) {
  const {
    fullName,
    phone,
    treatmentNeeded,
    preferredDate,
    preferredTime,
    createdAt,
  } = details;

  const { clinicName, senderName, recipientEmail } = siteConfig.email;

  const htmlBody = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
      <div style="background: #0f2b46; padding: 28px 32px;">
        <h1 style="color: #ffffff; font-size: 20px; margin: 0;">🦷 New Appointment Request</h1>
        <p style="color: #94a3b8; font-size: 13px; margin: 6px 0 0;">${clinicName} — Website Booking</p>
      </div>
      <div style="padding: 28px 32px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #334155;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; width: 140px;">Full Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
              <a href="tel:${phone}" style="color: #0d9488; text-decoration: none;">${phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600;">Treatment</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">${treatmentNeeded || 'General Checkup'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600;">Preferred Date</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">${preferredDate}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600;">Preferred Time</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">${preferredTime || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600;">Submitted At</td>
            <td style="padding: 10px 0; color: #64748b;">${new Date(createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
          </tr>
        </table>
        <div style="margin-top: 24px; padding: 16px; background: #f0fdfa; border-radius: 8px; border: 1px solid #ccfbf1;">
          <p style="margin: 0; font-size: 13px; color: #0f766e;">
            📞 Please call the patient to confirm their appointment.
          </p>
        </div>
      </div>
      <div style="background: #f8fafc; padding: 16px 32px; text-align: center;">
        <p style="margin: 0; font-size: 11px; color: #94a3b8;">This is an automated notification from your website booking system.</p>
      </div>
    </div>
  `;

  const { data, error } = await getResend().emails.send({
    from: `${senderName} <onboarding@resend.dev>`,
    to: [recipientEmail],
    subject: `New Appointment Request — ${fullName}`,
    html: htmlBody,
  });

  if (error) {
    console.error('Email send error:', error);
    throw error;
  }

  return data;
}
