const inquiryTemplate = ({
  name = "",
  email = "",
  phone = "",
  eventType = "",
  preferredDate = "",
  preferredTime = "",
  message = "",
 companyPhone="",
 companyEmail="",
 companyAddress=""

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
      
        <tr>
          <td style="background:#D8ECFF;padding:25px 20px;text-align:center;">
            <h1 style="margin:0;color:#00539C;font-size:22px;">New Customer Event Inquiry!</h1>
          </td>
        </tr>

        <tr>
          <td style="padding:25px;color:#333;">
            <p>A new event inquiry has been received from a customer via the website contact form. Please review the details below and respond at the earliest convenience.</p>

            <h2 style="font-size:18px;margin-top:30px;color:#00539C;">Customer Details</h2>

            <table width="100%" style="background:#F7F7F7;padding:15px;border-radius:8px;margin-top:10px;">
              <tr><td><strong>Customer Name:</strong> ${name}</td></tr>
              <tr><td><strong>Email Address:</strong> ${email}</td></tr>
              <tr><td><strong>Phone Number:</strong> ${phone}</td></tr>
              <tr><td><strong>Inquiry Type:</strong> ${eventType}</td></tr>
              <tr><td><strong>Preferred Date:</strong> ${preferredDate}</td></tr>
              <tr><td><strong>Preferred Time:</strong> ${preferredTime}</td></tr>
            </table>

            <h2 style="font-size:18px;margin-top:30px;color:#00539C;">Customer Message</h2>

            <p style="font-style:italic;color:#555;margin-top:10px;">${message}</p>

            <p style="margin-top:30px;">Best Regards,<br><strong>Momentz Events Support System</strong></p>

            <p style="margin-top:5px;">
              📞 ${companyPhone}<br>
              ✉️ ${companyEmail}
            </p>

            <hr style="margin:30px 0;border:none;border-top:1px solid #ddd;">

            <p style="font-size:12px;color:#888;text-align:center;">
              © 2025 Momentz Events. All rights reserved.<br>
              Momentz Events Pty Ltd<br>
             ${companyAddress}
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
`;
export default inquiryTemplate;
