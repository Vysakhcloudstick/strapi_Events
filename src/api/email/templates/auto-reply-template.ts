const autoReplyTemplate = ({
  name = "",
  email = "",
  phone = "",
  eventType = "",
  preferredDate = "",
  preferredTime = "",
  message = "",
  companyPhone = "",
  companyEmail = "",
  companyAddress = ""
} = {}) => `

 <div class="header" style="text-align: center; margin-bottom: 20px;">
    <img class="logoImg" style="max-width: 50px; height: auto;" 
         src="https://files.cloudstick.io/email-templates/momentz-logo%20(2).png" 
         alt="Momentz Logo">
</div>

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:20px;font-family:Arial,sans-serif;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">

        <!-- HEADER -->
        <tr>
          <td style="background:#D8ECFF;padding:25px 20px;text-align:center;">
            <h1 style="margin:0;color:#00539C;font-size:22px;">Thank You for Your Inquiry</h1>
          </td>
        </tr>

        <!-- INTRO -->
        <tr>
          <td style="padding:25px;color:#333;">
            <p>Hi ${name || "there"},</p>

            <p>
              Thank you for reaching out to <strong>Momentz Events</strong>!  
              We’ve received your inquiry and one of our team members will contact you within 
              <strong>24 hours</strong> to assist you further.
            </p>

            <p>Here’s a summary of your request:</p>

            <!-- SUMMARY TITLE -->
            <h2 style="font-size:18px;margin-top:30px;color:#00539C;text-align:center;">
              Inquiry Summary
            </h2>

            <!-- SUMMARY BOX -->
            <table width="100%" style="background:#F7F7F7;padding:15px;border-radius:8px;margin-top:10px;">
              <tr><td><strong>Name:</strong> ${name}</td></tr>
              <tr><td><strong>Email:</strong> ${email}</td></tr>
              <tr><td><strong>Phone:</strong> ${phone}</td></tr>
              <tr><td><strong>Event Type:</strong> ${eventType}</td></tr>
              <tr><td><strong>Preferred Date:</strong> ${preferredDate}</td></tr>
              <tr><td><strong>Preferred Time:</strong> ${preferredTime}</td></tr>
            </table>

            <!-- MESSAGE -->
            <h2 style="font-size:18px;margin-top:30px;color:#00539C;">Your Message</h2>

            <p style="background:#fafafa;padding:15px;border-left:4px solid #00539C;border-radius:5px;">
              ${message}
            </p>

            <p style="margin-top:25px;">
              If you need immediate assistance, feel free to contact us using the details below.
            </p>

            <p>Warm regards,<br><strong>Momentz Events Team</strong></p>

            <!-- CONTACT INFO -->
            <p style="margin-top:5px;">
              📞 ${companyPhone}<br>
              ✉️ ${companyEmail}
            </p>

            <hr style="margin:30px 0;border:none;border-top:1px solid #ddd;">

            <!-- FOOTER -->
            <p style="font-size:12px;color:#888;text-align:center;">
              © 2025 Momentz Events. All rights reserved.<br>
              Momentz Events Pty Ltd<br>
              ${companyAddress}
            </p>
          </td>
        </tr>

        <!-- OFFER FOOTER BAR -->
        <tr>
          <td style="background:#007bff;color:#fff;text-align:center;padding:15px;font-size:14px;">
            Exclusive Offer: Get 25% off your next booking!
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
`;

export default autoReplyTemplate;
