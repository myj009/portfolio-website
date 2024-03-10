import { EmailTemplate } from "@/components/EmailTemplate";
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: NextApiResponse) {
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
    if (data.error) {
      return new Response(data.error.message, {
        status: 500,
      });
    }

    return Response.json(data);
  } catch (error) {
    return new Response("Unexpected error occured", {
      status: 500,
    });
  }
}
