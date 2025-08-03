import { SurveyFormTemplate } from "@/Components/Email/SurveyFormTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.businessName) {
      return Response.json(
        { error: "Missing required fields" }, 
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Jerome <jerome@mail.webcraftsman.co>",
      to: ["naronkrach@gmail.com"], // Your email where you want to receive form submissions
      subject: `New Website Strategy Survey: ${formData.businessName}`,
      react: SurveyFormTemplate({ formData }),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error }, { status: 500 });
    }

    // Optionally, you can also send a confirmation email to the user
    try {
      await resend.emails.send({
        from: "Jerome <jerome@mail.webcraftsman.co>",
        to: [formData.email],
        subject: "Thank you for your website strategy survey!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #333;">Thank you, ${formData.fullName}!</h1>
            <p>I've received your website strategy survey and will be in touch soon to discuss your project.</p>
            <p>In the meantime, feel free to schedule a consultation call at your convenience.</p>
            <p>Best regards,<br>Jerome<br>WEBCRAFTSMAN</p>
          </div>
        `,
      });
    } catch (confirmationError) {
      console.error("Failed to send confirmation email:", confirmationError);
      // Don't fail the main request if confirmation email fails
    }

    return Response.json({ 
      success: true, 
      message: "Survey submitted successfully",
      data 
    });
  } catch (error) {
    console.error("Survey submission error:", error);
    return Response.json(
      { error: "Failed to submit survey" }, 
      { status: 500 }
    );
  }
}
