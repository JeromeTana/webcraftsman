import { QuoteFormTemplate } from "@/Components/Email/QuoteFormTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log("Received form data:", formData); // Debug log

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.services || !formData.businessDescription) {
      console.error("Validation failed - missing fields:", {
        hasFullName: !!formData.fullName,
        hasEmail: !!formData.email,
        hasServices: !!formData.services,
        hasBusinessDescription: !!formData.businessDescription
      });
      return Response.json(
        { error: "Missing required fields: fullName, email, services, and businessDescription are required" }, 
        { status: 400 }
      );
    }

    // Format services for display
    const servicesText = Array.isArray(formData.services) 
      ? formData.services.join(", ")
      : formData.services;

    const { data, error } = await resend.emails.send({
      from: "Jerome from WEBCRAFTSMAN <jerome@mail.webcraftsman.co>",
      to: ["jerome@webcraftsman.co"], // Your email where you want to receive form submissions
      subject: `New Quote Request: ${servicesText} - ${formData.fullName}`,
      react: QuoteFormTemplate({ 
        formData: { 
          ...formData, 
          projectType: servicesText,
          projectDescription: formData.businessDescription,
        } 
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error }, { status: 500 });
    }

    // Send confirmation email to the user
    try {
      await resend.emails.send({
        from: "Jerome from WEBCRAFTSMAN <jerome@mail.webcraftsman.co>",
        to: [formData.email],
        subject: "Quote Request Received - We'll get back to you within 24 hours!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
            <div style="background-color: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h1 style="color: #1f2937; margin-bottom: 24px; font-size: 28px;">Thank you for your quote request! 🎉</h1>
              
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                Hi ${formData.fullName},
              </p>
              
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                We've successfully received your quote request for <strong>${servicesText}</strong>. 
                Thank you for considering WEBCRAFTSMAN for your project!
              </p>
              
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 6px; margin: 24px 0;">
                <h3 style="color: #1f2937; margin: 0 0 12px 0; font-size: 18px;">What happens next?</h3>
                <ul style="color: #374151; margin: 0; padding-left: 20px; line-height: 1.6;">
                  <li style="margin-bottom: 8px;">We'll review your requirements and project details</li>
                  <li style="margin-bottom: 8px;">You'll receive a personalized quote via email within 24 hours</li>
                  <li style="margin-bottom: 8px;">We'll schedule a consultation call to discuss your project in detail</li>
                </ul>
              </div>
              
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                If you have any questions or need to update your requirements, feel free to reply to this email 
                or contact us directly.
              </p>
              
              <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 14px; margin: 0;">
                  Best regards,<br>
                  <strong>Jerome Tana</strong><br>
                  WEBCRAFTSMAN<br>
                  <a href="https://webcraftsman.co" style="color: #3b82f6;">webcraftsman.co</a>
                </p>
              </div>
            </div>
            
            <p style="color: #6b7280; font-size: 12px; text-align: center; margin-top: 24px;">
              This email was sent because you submitted a quote request on our website.
            </p>
          </div>
        `,
      });
    } catch (confirmationError) {
      console.error("Failed to send confirmation email:", confirmationError);
      // Don't fail the entire request if confirmation email fails
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Quote form submission error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}