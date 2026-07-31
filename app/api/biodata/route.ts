import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const data = await request.json()

  const {
    fullName, age, gender, religion, caste, motherTongue,
    height, education, occupation, city, country,
    maritalStatus, aboutYou, partnerExpectations,
    contactEmail, contactPhone, photo,
  } = data

  const submittedDate = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
  const firstName = fullName?.split(' ')[0] || 'there'

  const attachment = buildPhotoAttachment(photo, fullName)
  const photoHtml = attachment
    ? `<div style="text-align: center; margin-bottom: 32px;">
         <img src="cid:${PHOTO_CID}" alt="${fullName || 'Applicant'}" style="max-width: 260px; width: 100%; border-radius: 8px; border: 1px solid rgba(220,107,82,0.25);" />
       </div>`
    : ''

  const biodataHtml = `
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

        ${photoHtml}

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
          Submitted via rishtey.us &middot; ${submittedDate}
        </p>
      </div>
    </div>
  `

  const biodataText = `
NEW BIODATA SUBMISSION — Rishtey Matchmaking
Submitted: ${submittedDate}

PERSONAL DETAILS
Full Name: ${fullName || '—'}
Age: ${age || '—'}
Gender: ${gender || '—'}
Marital Status: ${maritalStatus || '—'}
Height: ${height || '—'}
Mother Tongue: ${motherTongue || '—'}

BACKGROUND
Religion: ${religion || '—'}
Caste / Community: ${caste || '—'}
Education: ${education || '—'}
Occupation: ${occupation || '—'}
City: ${city || '—'}
Country: ${country || '—'}

ABOUT
${aboutYou || '—'}

PARTNER EXPECTATIONS
${partnerExpectations || '—'}

CONTACT
Email: ${contactEmail || '—'}
Phone: ${contactPhone || '—'}

PHOTO
${attachment ? `Attached — ${attachment.filename}` : 'Not provided'}
  `.trim()

  const confirmationHtml = `
    <div style="font-family: Georgia, serif; max-width: 640px; margin: 0 auto; color: #3D1F14; background: #FDF6F0;">

      <div style="background: linear-gradient(135deg, #DC6B52 0%, #C94980 100%); padding: 48px 40px 40px; text-align: center;">
        <p style="color: rgba(253,246,240,0.7); font-size: 11px; letter-spacing: 0.35em; text-transform: uppercase; margin: 0 0 16px; font-family: Arial, sans-serif;">Rishtey Matchmaking</p>
        <h1 style="color: #FDF6F0; font-style: italic; font-weight: 400; font-size: 34px; margin: 0 0 10px; line-height: 1.2;">
          We are honored to receive your biodata, ${firstName}.
        </h1>
        <p style="color: rgba(253,246,240,0.75); font-size: 15px; margin: 0; line-height: 1.6; font-family: Arial, sans-serif;">
          Your journey toward a meaningful connection has begun.
        </p>
      </div>

      <div style="padding: 48px 40px; background: #FDF6F0; border-left: 1px solid rgba(220,107,82,0.15); border-right: 1px solid rgba(220,107,82,0.15);">

        <p style="font-size: 16px; color: #3D1F14; line-height: 1.9; margin: 0 0 24px; font-family: Arial, sans-serif;">
          Dear ${firstName},
        </p>

        <p style="font-size: 15px; color: rgba(61,31,20,0.75); line-height: 1.9; margin: 0 0 20px; font-family: Arial, sans-serif;">
          Thank you for trusting Rishtey with something as precious as your story. We have received your biodata and are truly grateful you chose us to be part of this chapter of your life.
        </p>

        <p style="font-size: 15px; color: rgba(61,31,20,0.75); line-height: 1.9; margin: 0 0 32px; font-family: Arial, sans-serif;">
          A dedicated Rishtey matchmaker will personally review your profile and reach out to you within <strong style="color: #DC6B52;">48 hours</strong>. We take great care in understanding who you are — not just what is on paper, but the person behind it.
        </p>

        <div style="text-align: center; margin: 32px 0;">
          <div style="display: inline-block; width: 60px; height: 1px; background: rgba(220,107,82,0.3); vertical-align: middle;"></div>
          <span style="font-size: 18px; margin: 0 12px; color: #DC6B52;">&#10022;</span>
          <div style="display: inline-block; width: 60px; height: 1px; background: rgba(220,107,82,0.3); vertical-align: middle;"></div>
        </div>

        <div style="background: rgba(220,107,82,0.06); border-left: 3px solid #DC6B52; border-radius: 4px; padding: 24px 28px; margin-bottom: 32px;">
          <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #DC6B52; margin: 0 0 16px; font-family: Arial, sans-serif;">What happens next</p>
          <ul style="margin: 0; padding: 0; list-style: none; font-family: Arial, sans-serif;">
            <li style="font-size: 14px; color: rgba(61,31,20,0.7); line-height: 1.8; padding: 4px 0;">&#10003; &nbsp;Your matchmaker reviews your biodata with care</li>
            <li style="font-size: 14px; color: rgba(61,31,20,0.7); line-height: 1.8; padding: 4px 0;">&#10003; &nbsp;We identify compatible profiles from our network</li>
            <li style="font-size: 14px; color: rgba(61,31,20,0.7); line-height: 1.8; padding: 4px 0;">&#10003; &nbsp;We reach out to you at <strong>${contactEmail}</strong> within 48 hours</li>
            <li style="font-size: 14px; color: rgba(61,31,20,0.7); line-height: 1.8; padding: 4px 0;">&#10003; &nbsp;Every step is kept strictly confidential</li>
          </ul>
        </div>

        <p style="font-size: 14px; color: rgba(61,31,20,0.5); line-height: 1.8; margin: 0; font-family: Arial, sans-serif; font-style: italic;">
          If you have any questions in the meantime, simply reply to this email — we are always here.
        </p>

      </div>

      <div style="background: #3D1F14; padding: 28px 40px; text-align: center;">
        <p style="font-style: italic; font-size: 15px; color: rgba(253,246,240,0.7); margin: 0 0 12px; line-height: 1.6;">
          "Every great love story begins with a single step."
        </p>
        <p style="font-size: 11px; color: rgba(253,246,240,0.35); margin: 0; letter-spacing: 0.12em; font-family: Arial, sans-serif;">
          &copy; ${new Date().getFullYear()} Rishtey Matchmaking &nbsp;&middot;&nbsp; rishtey.us
        </p>
      </div>

    </div>
  `

  const confirmationText = `
Dear ${firstName},

Thank you for trusting Rishtey with your story. We have received your biodata and a dedicated matchmaker will reach out to you within 48 hours.

What happens next:
- Your matchmaker reviews your biodata with care
- We identify compatible profiles from our network
- We reach out to you at ${contactEmail} within 48 hours
- Every step is kept strictly confidential

If you have any questions, simply reply to this email.

Warm regards,
The Rishtey Matchmaking Team
rishtey.us
  `.trim()

  // Send biodata to the Rishtey team
  const { data: biodataSent, error: biodataError } = await resend.emails.send({
    from: 'Rishtey Matchmaking <hello@rishtey.us>',
    to: 'rishteycontact@gmail.com',
    replyTo: contactEmail || undefined,
    subject: `New Biodata — ${fullName || 'Unknown'} (${city || ''}, ${country || ''})`,
    html: biodataHtml,
    text: biodataText,
    attachments: attachment ? [attachment] : undefined,
  })

  if (biodataError) {
    console.error('Biodata email failed:', biodataError)
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 })
  }
  console.log('Biodata email sent:', { id: biodataSent?.id, photoAttached: Boolean(attachment) })

  // Send confirmation to the applicant — failure here does not block the submission
  if (contactEmail) {
    const { data: confirmSent, error: confirmError } = await resend.emails.send({
      from: 'Rishtey Matchmaking <hello@rishtey.us>',
      to: contactEmail,
      replyTo: 'rishteycontact@gmail.com',
      subject: `We have received your biodata, ${firstName}`,
      html: confirmationHtml,
      text: confirmationText,
    })
    if (confirmError) {
      console.error('Confirmation email failed:', confirmError)
    } else {
      console.log('Confirmation email sent:', { id: confirmSent?.id, to: contactEmail })
    }
  }

  return NextResponse.json({ success: true })
}

const PHOTO_CID = 'applicant-photo'
const MAX_PHOTO_BYTES = 12 * 1024 * 1024

const EXTENSIONS: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/heic': 'heic',
  'image/heif': 'heif',
  'image/gif': 'gif',
}

type Photo = { name?: string; type?: string; dataUrl?: string }

// The photo arrives as a base64 data URL in the JSON payload. Anything we cannot
// read as an image is silently dropped — a bad photo must not lose a submission.
// `contentId` makes Resend send it inline so it also renders inside the email.
function buildPhotoAttachment(photo: Photo | undefined, fullName: string) {
  if (!photo?.dataUrl) return null

  const match = /^data:(image\/[a-z0-9.+-]+);base64,(.+)$/i.exec(photo.dataUrl)
  if (!match) return null

  const [, contentType, base64] = match
  const content = Buffer.from(base64, 'base64')
  if (content.length === 0 || content.length > MAX_PHOTO_BYTES) return null

  const extension = EXTENSIONS[contentType.toLowerCase()] || 'jpg'
  const safeName = (fullName || 'applicant').replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()

  return {
    filename: `${safeName || 'applicant'}-photo.${extension}`,
    content: base64,
    contentType,
    contentId: PHOTO_CID,
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
