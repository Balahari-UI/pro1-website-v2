import { sendEmail } from "../../lib/mailer";
import { NextResponse } from "next/server";

async function verifyRecaptchaToken(token, req) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const expectedHost = process.env.RECAPTCHA_EXPECTED_HOST;

  if (!secret) {
    throw new Error("Server misconfiguration: missing RECAPTCHA_SECRET_KEY");
  }

  if (!token) {
    return {
      ok: false,
      reason: "Missing reCAPTCHA token",
    };
  }

  const remoteIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const formData = new URLSearchParams({
    secret,
    response: token,
  });

  if (remoteIp) {
    formData.append("remoteip", remoteIp);
  }

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    return {
      ok: false,
      reason: "Unable to verify reCAPTCHA with Google",
    };
  }

  const result = await response.json();
  if (!result.success) {
    return {
      ok: false,
      reason: `reCAPTCHA failed (${(result["error-codes"] || []).join(", ") || "unknown error"})`,
    };
  }

  if (expectedHost && result.hostname && result.hostname !== expectedHost) {
    return {
      ok: false,
      reason: `Invalid reCAPTCHA hostname: ${result.hostname}`,
    };
  }

  return { ok: true };
}

export async function POST(req) {
  try {
    const { name, email, phone, message, jobtitle, state, company, formName } =
      await req.json();

    await sendEmail({
      to: process.env.TO_EMAIL,
      subject: `New message from ${formName}`,
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
                <td style="padding: 8px;">${(message || "—").replace(
                  /\n/g,
                  "<br/>",
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
