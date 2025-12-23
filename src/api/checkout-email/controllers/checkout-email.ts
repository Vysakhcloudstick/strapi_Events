import { factories } from "@strapi/strapi";
import adminTemplate from "../templates/adminTemplate";
import clientTemplate from "../templates/clientTemplate";

export default factories.createCoreController(
  "api::checkout-email.checkout-email",
  ({ strapi }) => ({
    async send(ctx) {
        console.log("🔥 Incoming checkoutData:", ctx.request.body);
      const {
        firstName = "",
        lastName = "",
        email = "",
        phone = "",
        eventDate = "",
        eventType = "",
        deliveryRequired = false,
        deliveryDate = "",
        deliveryTime = "",
        deliveryAddress = "",
        deliveryConditions = "",
        specialRequests = "",
        items = [],
        subtotal = "",
        deliveryCost = "",
        total = "",
        companyPhone = "",
        companyEmail = "",
        companyAddress = "",
      } = ctx.request.body;

      // Validate required fields
      if (!firstName || !lastName || !email) {
        return ctx.badRequest("First name, last name, and email are required");
      }

      const formData = {
        firstName,
        lastName,
        email,
        phone,
        eventDate,
        eventType,
        deliveryRequired,
        deliveryDate,
        deliveryTime,
        deliveryAddress,
        deliveryConditions,
        specialRequests,
        items,
        subtotal,
        deliveryCost,
        total,
        companyPhone,
        companyEmail,
        companyAddress,
      };

      const adminEmail = "anoopvsmadhav@gmail.com";

      try {
        // 1️⃣ Send email to admin
        await strapi.service("api::checkout-email.checkout-email").sendEmail({
          to: adminEmail,
          subject: `New Checkout Request from ${firstName} ${lastName}`,
          data: formData,
          template: adminTemplate,
        });

        // 2️⃣ Send auto-reply email to client
        await strapi.service("api::checkout-email.checkout-email").sendEmail({
          to: email,
          subject: "Thank you! We've received your  checkout request",
          data: formData,
          template: clientTemplate,
        });

        ctx.send({ message: "Emails sent successfully" });
      } catch (err) {
        console.error("Email sending error:", err);
        return ctx.internalServerError("Failed to send emails: " + err.message);
      }
    },
  })
);
