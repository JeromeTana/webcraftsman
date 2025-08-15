import { SurveyFormTemplate } from "@/Components/Email/SurveyFormTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email) {
      return Response.json(
        { error: "Missing required fields" }, 
        { status: 400 }
      );
    }

    // Create full name for backward compatibility
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();

    const { data, error } = await resend.emails.send({
      from: "Jerome from WEBCRAFTSMAN <jerome@mail.webcraftsman.co>",
      to: ["jerome@webcraftsman.co"], // Your email where you want to receive form submissions
      subject: `New Website Strategy Survey: ${fullName}`,
      react: SurveyFormTemplate({ formData: { ...formData, fullName } }),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error }, { status: 500 });
    }

    // Optionally, you can also send a confirmation email to the user
    try {
      await resend.emails.send({
        from: "Jerome from WEBCRAFTSMAN <jerome@mail.webcraftsman.co>",
        to: [formData.email],
        subject:
          "ขอบคุณสำหรับการตอบแบบสำรวจกลยุทธ์เว็บไซต์บน webcraftsman.co ครับ",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #333;">ขอบคุณครับ คุณ${formData.firstName}</h1>
        <p>ทางเราได้รับแบบสำรวจกลยุทธ์เว็บไซต์ของคุณแล้ว และจะติดต่อกลับเพื่อพูดคุยเกี่ยวกับโปรเจกต์ของคุณอย่างเร็วที่สุดครับ</p>
        <p>ในระหว่างนี้ คุณ${formData.firstName}สามารถนัดหมายเพื่อปรึกษาเพิ่มเติมจากตารางที่กำลังแสดงบนเว็บไซต์ได้ตามสะดวกครับ</p>
        <br>
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
