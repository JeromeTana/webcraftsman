import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      websiteUrl,
      fullName,
      email,
      phone,
      businessType,
      source = "ads-landing-page"
    } = body;

    // Validate required fields
    if (!websiteUrl || !fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate URL format
    try {
      new URL(websiteUrl.startsWith("http") ? websiteUrl : `https://${websiteUrl}`);
    } catch {
      return NextResponse.json(
        { error: "Invalid website URL" },
        { status: 400 }
      );
    }

    const submissionData = {
      websiteUrl,
      fullName,
      email,
      phone,
      businessType,
      source,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent"),
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown",
    };

    // Log submission (in production, send to your CRM/database)
    console.log("Ad lead form submission:", submissionData);

    // Here you would typically:
    // 1. Save to database
    // 2. Send to CRM (HubSpot, Salesforce, etc.)
    // 3. Send notification email
    // 4. Add to email marketing list
    // 5. Trigger automation workflows

    // Example: Send to a webhook or API
    // await fetch('YOUR_CRM_WEBHOOK_URL', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(submissionData)
    // });

    // Example: Send notification email
    // await sendNotificationEmail(submissionData);

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
      submissionId: Date.now().toString(),
    });

  } catch (error) {
    console.error("Ad form submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Helper function to send notification email (example)
async function sendNotificationEmail(data: any) {
  // Implement your email sending logic here
  // This could use services like SendGrid, Resend, Nodemailer, etc.
  console.log("Would send notification email for:", data.email);
}
