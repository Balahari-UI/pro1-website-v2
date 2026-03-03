import { sendEmail } from "../../lib/mailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, phone, message, jobtitle, state, company, formName } =
      await req.json();

    await sendEmail({
      to: process.env.TO_EMAIL,
      subject: `New message from ${formName}`,
      // html: `<p>Name: ${name}</p>
      // <p>Email: ${email}</p>
      // <p>Phone: ${phone}</p>
      // <p>Job Title: ${jobtitle}</p>
      // <p>State: ${state}</p>
      // <p>Company: ${company}</p>
      // <p>Message: ${message}</p>
      // `,
      html: `<div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">

          <!-- Header -->
          <div style="background: #0056b3; padding: 20px; color: white; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">📄 ${
              formName || "Service Request"
            }</h1>
            <p style="margin: 5px 0 0; font-size: 14px; opacity: 0.9;">
              A client has submitted a service inquiry via your website
            </p>
          </div>

          <!-- Body -->
          <div style="padding: 20px; line-height: 1.6; color: #333;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; font-weight: bold; width: 150px; background: #f9f9f9;">Name</td>
                <td style="padding: 8px;">${name || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; background: #f9f9f9;">Email</td>
                <td style="padding: 8px;">${email || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; background: #f9f9f9;">Job Title</td>
                <td style="padding: 8px;">${jobtitle || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; background: #f9f9f9;">Company</td>
                <td style="padding: 8px;">${company || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; background: #f9f9f9;">Phone</td>
                <td style="padding: 8px;">${phone || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; background: #f9f9f9;">State</td>
                <td style="padding: 8px;">${state || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; background: #f9f9f9; vertical-align: top;">Message</td>
                <td style="padding: 8px;">${(message || "").replace(
                  /\n/g,
                  "<br/>"
                )}</td>
              </tr>
            </table>
          </div>

        </div>
      </div>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 },
    );
  }
}
