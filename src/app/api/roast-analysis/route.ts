import { RoastAnalysisTemplate } from "@/Components/Email/RoastAnalysisTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, websiteUrl, source, timestamp } = body;

    // Validate required fields
    if (!name || !email || !phone || !websiteUrl) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const formData = {
      name,
      email,
      phone,
      websiteUrl,
      source: source || "roast-analysis",
      timestamp: timestamp || new Date().toISOString(),
    };

    // Send email notification
    const { data, error } = await resend.emails.send({
      from: "Jerome <jerome@mail.webcraftsman.co>",
      to: ["naronkrach@gmail.com"], // Your notification email
      subject: `New Website Analysis Request from ${name}`,
      react: RoastAnalysisTemplate({ formData }),
    });

    if (error) {
      console.error("Email send error:", error);
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json({ 
      success: true, 
      message: "Form submitted successfully",
      emailId: data?.id 
    });
  } catch (error) {
    console.error("API error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
