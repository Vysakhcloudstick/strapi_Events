import { factories } from "@strapi/strapi";
import nodemailer from "nodemailer";

export default factories.createCoreService("api::email.email", () => ({


  async sendEmail({ to, subject, data, template }) {
    console.log("📩 Service received data:", data);

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

    return transporter.sendMail({
      from: `"Momentz Events" <emailer@notification.momentzevents.com.au>`,
      to,
      subject,
      html,
    });
  },

}));
