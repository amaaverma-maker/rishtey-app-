import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const data = await request.json()

  const {
    fullName, age, gender, religion, caste, motherTongue,
    height, education, occupation, city, country,
    maritalStatus, aboutYou, partnerExpectations,
    contactEmail, contactPhone,
  } = data

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  const html = `
    <div style="font-family: Georgia, serif; max-width: 640px; margin: 0 auto; color: #3D1F14;">
      <div style="background: #3D1F14; padding: 32px 40px; text-align: center;">
        <h1 style="color: #FDF6F0; font-style: italic; font-weight: 400; font-size: 28px; margin: 0;">
          New Biodata Submission
        </h1>
        <p style="color: rgba(253,246,240,0.6); font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; margin: 8px 0 0;">
          Rishtey Matchmaking
        </p>
      </div>

      <div style="padding: 40px; background: #FDF6F0; border: 1px solid rgba(220,107,82,0.2);">

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
          <tr><td colspan="2" style="padding: 0 0 12px; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #DC6B52; border-bottom: 1px solid rgba(220,107,82,0.2);">Personal Details</td></tr>
          ${row('Full Name', fullName)}
          ${row('Age', age)}
          ${row('Gender', gender)}
          ${row('Marital Status', maritalStatus)}
          ${row('Height', height)}
          ${row('Mother Tongue', motherTongue)}
        </table>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
          <tr><td colspan="2" style="padding: 0 0 12px; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #DC6B52; border-bottom: 1px solid rgba(220,107,82,0.2);">Background</td></tr>
          ${row('Religion', religion)}
          ${row('Caste / Community', caste)}
          ${row('Education', education)}
          ${row('Occupation', occupation)}
          ${row('City', city)}
          ${row('Country', country)}
        </table>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
          <tr><td colspan="2" style="padding: 0 0 12px; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #DC6B52; border-bottom: 1px solid rgba(220,107,82,0.2);">About</td></tr>
          ${blockRow('About Themselves', aboutYou)}
          ${blockRow('Partner Expectations', partnerExpectations)}
        </table>

        <table style="width: 100%; border-collapse: collapse;">
          <tr><td colspan="2" style="padding: 0 0 12px; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #DC6B52; border-bottom: 1px solid rgba(220,107,82,0.2);">Contact</td></tr>
          ${row('Email', contactEmail)}
          ${row('Phone', contactPhone)}
        </table>

      </div>

      <div style="background: #F0E4D8; padding: 20px 40px; text-align: center;">
        <p style="font-size: 11px; color: rgba(61,31,20,0.5); margin: 0; letter-spacing: 0.05em;">
          Submitted via rishtey.app · ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </div>
    </div>
  `

  const confirmationHtml = `
    <div style="font-family: Georgia, serif; max-width: 640px; margin: 0 auto; color: #3D1F14;">
      <div style="background: linear-gradient(135deg, #DC6B52, #C94980); padding: 40px; text-align: center;">
        <h1 style="color: #FDF6F0; font-style: italic; font-weight: 400; font-size: 32px; margin: 0 0 8px;">
          Thank you, ${fullName || 'there'}.
        </h1>
        <p style="color: rgba(253,246,240,0.8); font-size: 13px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0;">
          Rishtey Matchmaking
        </p>
      </div>

      <div style="padding: 40px; background: #FDF6F0; border: 1px solid rgba(220,107,82,0.2); text-align: center;">
        <div style="width: 48px; height: 2px; background: #E8960C; margin: 0 auto 28px;"></div>
        <p style="font-style: italic; font-size: 22px; color: #3D1F14; line-height: 1.6; margin: 0 0 24px;">
          "We have received your biodata and will be in touch within 48 hours."
        </p>
        <p style="font-size: 14px; color: rgba(61,31,20,0.6); line-height: 1.8; margin: 0 0 32px;">
          A dedicated Rishtey matchmaker will review your profile personally and reach out to you at <strong>${contactEmail}</strong>.
          Your information is kept strictly confidential.
        </p>
        <div style="width: 48px; height: 2px; background: #C94980; margin: 0 auto 32px;"></div>
        <p style="font-size: 13px; color: rgba(61,31,20,0.4); margin: 0;">
          In the meantime, if you have any questions feel free to reply to this email.
        </p>
      </div>

      <div style="background: #3D1F14; padding: 24px 40px; text-align: center;">
        <p style="font-size: 11px; color: rgba(253,246,240,0.4); margin: 0; letter-spacing: 0.1em;">
          © Rishtey Matchmaking · ${new Date().getFullYear()}
        </p>
      </div>
    </div>
  `

  try {
    // Email to rishteycontact@gmail.com with full biodata
    await transporter.sendMail({
      from: `"Rishtey" <${process.env.GMAIL_USER}>`,
      to: 'rishteycontact@gmail.com',
      replyTo: contactEmail || undefined,
      subject: `New Biodata — ${fullName || 'Unknown'} (${city || ''}, ${country || ''})`,
      html,
    })

    // Confirmation email to the person who submitted
    if (contactEmail) {
      await transporter.sendMail({
        from: `"Rishtey Matchmaking" <${process.env.GMAIL_USER}>`,
        to: contactEmail,
        subject: `We've received your biodata, ${fullName?.split(' ')[0] || 'there'} 🪔`,
        html: confirmationHtml,
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Email send failed:', err)
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 })
  }
}

function row(label: string, value: string) {
  if (!value) return ''
  return `
    <tr>
      <td style="padding: 10px 0 10px; font-size: 11px; letter-spacing: 0.05em; color: rgba(61,31,20,0.5); width: 38%; vertical-align: top; text-transform: uppercase;">${label}</td>
      <td style="padding: 10px 0 10px; font-size: 14px; color: #3D1F14; vertical-align: top;">${value}</td>
    </tr>
  `
}

function blockRow(label: string, value: string) {
  if (!value) return ''
  return `
    <tr>
      <td colspan="2" style="padding: 10px 0 16px; vertical-align: top;">
        <div style="font-size: 11px; letter-spacing: 0.05em; color: rgba(61,31,20,0.5); text-transform: uppercase; margin-bottom: 6px;">${label}</div>
        <div style="font-size: 14px; color: #3D1F14; line-height: 1.7; white-space: pre-wrap;">${value}</div>
      </td>
    </tr>
  `
}
