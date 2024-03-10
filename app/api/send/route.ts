import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  console.log(name, email, message);

  try {
    const data = await resend.emails.send({
      from: "contact@resend.dev",
      to: "mohammadjagora@gmail.com",
      subject: `Message from ${name}`,
      html: `<div>
      <div><p><strong>Email:</strong> ${email}</p></div>
      <div><strong>Message</strong></div>
      <div>${message}</div>
      </div>`,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
