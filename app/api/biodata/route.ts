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

  const firstName = fullName?.split(' ')[0] || 'there'
  const confirmationHtml = `
    <div style="font-family: Georgia, serif; max-width: 640px; margin: 0 auto; color: #3D1F14; background: #FDF6F0;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #DC6B52 0%, #C94980 100%); padding: 48px 40px 40px; text-align: center;">
        <p style="color: rgba(253,246,240,0.7); font-size: 11px; letter-spacing: 0.35em; text-transform: uppercase; margin: 0 0 16px; font-family: Arial, sans-serif;">Rishtey Matchmaking</p>
        <div style="font-size: 36px; margin-bottom: 16px;">🪔</div>
        <h1 style="color: #FDF6F0; font-style: italic; font-weight: 400; font-size: 34px; margin: 0 0 10px; line-height: 1.2;">
          We're honoured to receive your biodata, ${firstName}.
        </h1>
        <p style="color: rgba(253,246,240,0.75); font-size: 15px; margin: 0; line-height: 1.6; font-family: Arial, sans-serif;">
          Your journey towards a meaningful connection has begun.
        </p>
      </div>

      <!-- Body -->
      <div style="padding: 48px 40px; background: #FDF6F0; border-left: 1px solid rgba(220,107,82,0.15); border-right: 1px solid rgba(220,107,82,0.15);">

        <p style="font-size: 16px; color: #3D1F14; line-height: 1.9; margin: 0 0 24px; font-family: Arial, sans-serif;">
          Dear ${firstName},
        </p>

        <p style="font-size: 15px; color: rgba(61,31,20,0.75); line-height: 1.9; margin: 0 0 20px; font-family: Arial, sans-serif;">
          Thank you for trusting Rishtey with something as precious as your story. We have received your biodata and are truly grateful you chose us to be part of this chapter of your life.
        </p>

        <p style="font-size: 15px; color: rgba(61,31,20,0.75); line-height: 1.9; margin: 0 0 32px; font-family: Arial, sans-serif;">
          A dedicated Rishtey matchmaker will personally review your profile and reach out to you within <strong style="color: #DC6B52;">48 hours</strong>. We take great care in understanding who you are — not just what's on paper, but the person behind it.
        </p>

        <!-- Divider with diya -->
        <div style="text-align: center; margin: 32px 0;">
          <div style="display: inline-block; width: 60px; height: 1px; background: rgba(220,107,82,0.3); vertical-align: middle;"></div>
          <span style="font-size: 18px; margin: 0 12px;">✦</span>
          <div style="display: inline-block; width: 60px; height: 1px; background: rgba(220,107,82,0.3); vertical-align: middle;"></div>
        </div>

        <!-- What to expect -->
        <div style="background: rgba(220,107,82,0.06); border-left: 3px solid #DC6B52; border-radius: 4px; padding: 24px 28px; margin-bottom: 32px;">
          <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #DC6B52; margin: 0 0 16px; font-family: Arial, sans-serif;">What happens next</p>
          <ul style="margin: 0; padding: 0; list-style: none; font-family: Arial, sans-serif;">
            <li style="font-size: 14px; color: rgba(61,31,20,0.7); line-height: 1.8; padding: 4px 0;">
              ✓ &nbsp;Your matchmaker reviews your biodata with care
            </li>
            <li style="font-size: 14px; color: rgba(61,31,20,0.7); line-height: 1.8; padding: 4px 0;">
              ✓ &nbsp;We identify compatible profiles from our network
            </li>
            <li style="font-size: 14px; color: rgba(61,31,20,0.7); line-height: 1.8; padding: 4px 0;">
              ✓ &nbsp;We reach out to you at <strong>${contactEmail}</strong> within 48 hours
            </li>
            <li style="font-size: 14px; color: rgba(61,31,20,0.7); line-height: 1.8; padding: 4px 0;">
              ✓ &nbsp;Every step is kept strictly confidential
            </li>
          </ul>
        </div>

        <p style="font-size: 14px; color: rgba(61,31,20,0.5); line-height: 1.8; margin: 0; font-family: Arial, sans-serif; font-style: italic;">
          If you have any questions in the meantime, simply reply to this email — we are always here.
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #3D1F14; padding: 28px 40px; text-align: center;">
        <p style="font-style: italic; font-size: 15px; color: rgba(253,246,240,0.7); margin: 0 0 12px; line-height: 1.6;">
          "Every great love story begins with a single step."
        </p>
        <p style="font-size: 11px; color: rgba(253,246,240,0.35); margin: 0; letter-spacing: 0.12em; font-family: Arial, sans-serif;">
          © ${new Date().getFullYear()} Rishtey Matchmaking &nbsp;·&nbsp; rishtey.us
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
