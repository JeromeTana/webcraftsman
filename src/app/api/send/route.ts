import { DemoTemplate } from "@/Components/Email/DemoOptin";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Jerome <jerome@mail.webcraftsman.co>",
      to: ["naronkrach@gmail.com"],
      subject: "Hello world",
      react: DemoTemplate({ firstName: "John" }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
