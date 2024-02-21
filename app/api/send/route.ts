import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  console.log(name, email, message);
  return Response.json({ name, email, message });
  // try {
  //   const data = await resend.emails.send({
  //     from: "Acme <onboarding@resend.dev>",
  //     to: ["delivered@resend.dev"],
  //     subject: "Hello world",
  //     text: "Hello",
  //     react: EmailTemplate({ name: "John", email: "abc@m}", message: "dsf" }),
  //   });

  //   return Response.json(data);
  // } catch (error) {
  //   return Response.json({ error });
  // }
}
