import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, ...formData } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    let emailContent = "";
    let subject = "";

    if (type === "contact") {
      subject = "New Contact Form Submission - KR Law, APC";
      emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1b2632;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>Name:</strong> ${
              formData.fullName || formData.firstName + " " + formData.lastName
            }</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-left: 4px solid #1b2632;">
              ${formData.message}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from the KR Law, APC website contact form.
          </p>
        </div>
      `;
    } else if (type === "practice-area") {
      subject = "New Case Consultation Request - KR Law, APC";
      emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1b2632;">New Case Consultation Request</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>Name:</strong> ${formData.fullName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>City:</strong> ${formData.city}</p>
            <p><strong>State:</strong> ${formData.state}</p>
            <p><strong>Address:</strong> ${formData.address}</p>
            <p><strong>Postal Code:</strong> ${formData.postalCode}</p>
            <p><strong>Case Type:</strong> ${formData.caseType}</p>
            <p><strong>Case Details:</strong></p>
            <div style="background: white; padding: 15px; border-left: 4px solid #1b2632;">
              ${formData.message}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This is a case consultation request from the KR Law, APC website.
          </p>
        </div>
      `;
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: subject,
      html: emailContent,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
      },
      { status: 500 }
    );
  }
}
