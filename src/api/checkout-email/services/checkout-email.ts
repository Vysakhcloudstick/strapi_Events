import { factories } from "@strapi/strapi";
import nodemailer from "nodemailer";

export default factories.createCoreService("api::checkout-email.checkout-email", () => ({
  async sendEmail({ to, subject, data, template }: { to: string; subject: string; data?: any; template?: (data: any) => string }) {
    const transporter = nodemailer.createTransport({
      host: "smtp.mailer91.com",
      port: 587,
      secure: false,
      auth: {
        user: "emailer@notification.momentzevents.com.au",
        pass: "JuWarGcebpcJEOCl",
      },
      tls: { rejectUnauthorized: false },
    });

    const html = template ? template(data) : null;

    const info = await transporter.sendMail({
      from: `"Momentz Events" <emailer@notification.momentzevents.com.au>`,
      to,
      subject,
      html,
    });

    console.log("📩 Email sent info:", info);
    return info;
  },
}));
