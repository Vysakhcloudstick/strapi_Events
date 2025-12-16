import { factories } from "@strapi/strapi";
import inquiryTemplate from "../templates/inquiry-template";
import autoReplyTemplate from "../templates/auto-reply-template";

export default factories.createCoreController("api::email.email", ({ strapi }) => ({
  async send(ctx) {
    const data = ctx.request.body;

    console.log("🔥 Incoming Inquiry:", data);

    const requiredFields = ["name", "email", "message"];
    const missing = requiredFields.filter(f => !data[f]);
    if (missing.length > 0) {
      return ctx.badRequest(`Missing required fields: ${missing.join(", ")}`);
    }

    const adminEmail = "anoopvsmadhav@gmail.com"; 
    try {
      await strapi.service("api::email.email").sendEmail({
        to: adminEmail,
        subject: "New Inquiry Received",
        data,
        template: inquiryTemplate,
      });

      await strapi.service("api::email.email").sendEmail({
        to: data.email,
        subject: "Thank You! We've Received Your Inquiry",
        data,
        template: autoReplyTemplate,
      });

      return ctx.send({ message: "Emails sent successfully" });
    } catch (err) {
      console.error("🔥 Email sending error:", err);
      return ctx.internalServerError("Failed to send emails: " + err.message);
    }
  },
}));
