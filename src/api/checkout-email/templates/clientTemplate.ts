const clientTemplate = ({
  firstName = "",
  lastName = "",
  email = "",
  phone = "",
  eventType = "",
  eventDate = "",
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
  companyAddress = ""
} = {}) => `

<!-- OUTER WRAPPER -->
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f7f7;padding:15px;font-family:Arial,sans-serif;">
  <tr>
    <td align="center">

      <!-- MAIN CONTAINER -->
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:10px;overflow:hidden;">

        <!-- Logo -->
        <tr>
          <td align="center" style="padding:20px;">
            <img src="https://files.cloudstick.io/email-templates/momentz-logo%20(2).png"
                 alt="Momentz Logo"
                 style="width:60px;height:auto;display:block;">
          </td>
        </tr>

        <!-- Header -->
        <tr>
          <td style="background:#D8ECFF;padding:25px;text-align:center;">
            <h1 style="margin:0;color:#00539C;font-size:22px;line-height:26px;">
              Your Order has Been successfully Placed!
            </h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:20px;color:#333;font-size:15px;line-height:22px;">

            <p style="margin:0 0 12px;">Hi ${firstName} ${lastName},</p>
            <p style="margin:0 0 20px;">Thank you for your order! Here’s a summary of your checkout request:</p>

            <!-- Customer Details -->
            <h2 style="font-size:18px;color:#00539C;margin:25px 0 10px;">Customer Details</h2>
            <table width="100%" style="background:#F0F4FF;padding:15px;border-radius:10px;">
              <tr><td><strong>First Name:</strong> ${firstName}</td></tr>
              <tr><td><strong>Last Name:</strong> ${lastName}</td></tr>
              <tr><td><strong>Email:</strong> ${email}</td></tr>
              <tr><td><strong>Phone:</strong> ${phone}</td></tr>
              <tr><td><strong>Event Type:</strong> ${eventType}</td></tr>
              <tr><td><strong>Event Date:</strong> ${eventDate}</td></tr>
            </table>

            <!-- Delivery Info -->
            ${
              deliveryRequired || deliveryDate || deliveryTime || deliveryAddress || deliveryConditions
                ? `
                <h2 style="font-size:18px;color:#00539C;margin:25px 0 10px;">Delivery Information</h2>
                <table width="100%" style="background:#EAF9FF;padding:15px;border-radius:10px;">
                  ${deliveryRequired ? `<tr><td><strong>Delivery Required:</strong> ${deliveryRequired}</td></tr>` : ""}
                  ${deliveryDate ? `<tr><td><strong>Delivery Date:</strong> ${deliveryDate}</td></tr>` : ""}
                  ${deliveryTime ? `<tr><td><strong>Delivery Time:</strong> ${deliveryTime}</td></tr>` : ""}
                  ${deliveryAddress ? `<tr><td><strong>Delivery Address:</strong> ${deliveryAddress}</td></tr>` : ""}
                  ${deliveryConditions ? `<tr><td><strong>Delivery Conditions:</strong> ${deliveryConditions}</td></tr>` : ""}
                </table>
                `
                : ""
            }

            <!-- Special Requests -->
            <h2 style="font-size:18px;color:#00539C;margin:25px 0 10px;">Additional Information</h2>
            <p style="background:#FFF6E5;padding:15px;border-radius:10px;margin:0;color:#444;">
              ${specialRequests || "No additional notes provided."}
            </p>

            <!-- Order Summary -->
            <h2 style="font-size:18px;color:#00539C;margin:25px 0 10px;">Order Summary</h2>
            <table width="100%" style="background:#F0F4FF;padding:10px;border-radius:10px;border:1px solid #ddd;">

              ${items
                .map(
                  (item) => `
                  <tr>
                    <td style="padding:10px 0;vertical-align:top;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="width:70px;">
                            ${
                              item.image
                                ? `<img src="${item.image}"
                                        style="width:60px;height:auto;border-radius:5px;display:block;">`
                                : ""
                            }
                          </td>
                          <td style="padding-left:10px;">
                            <strong>${item.name}</strong><br/>
                            Qty: ${item.quantity} × ${item.rentalDays || 1} days
                          </td>
                          <td style="text-align:right;font-weight:600;">
                            $${item.price}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                `
                )
                .join("")}
            </table>

            <!-- Totals -->
            <table width="100%" style="margin-top:20px;">
              <tr>
                <td style="font-size:15px;">Subtotal:</td>
                <td style="font-size:15px;text-align:right;">$${subtotal}</td>
              </tr>
              <tr>
                <td style="font-size:15px;">Delivery:</td>
                <td style="font-size:15px;text-align:right;">${deliveryCost}</td>
              </tr>
              <tr>
                <td style="font-size:20px;font-weight:700;color:#00539C;">Total:</td>
                <td style="font-size:20px;font-weight:700;color:#00539C;text-align:right;">$${total}</td>
              </tr>
            </table>

            <!-- Footer -->
            <p style="margin-top:30px;">Best regards,<br><strong>Momentz Events Support</strong></p>
            <p style="margin-top:5px;line-height:20px;">
              📞 ${companyPhone}<br>
              ✉️ ${companyEmail}<br>
            </p>

            <hr style="border:none;border-top:1px solid #ddd;margin:30px 0;">
            <p style="font-size:12px;color:#777;text-align:center;margin:0;">
              © 2025 Momentz Events. All rights reserved.
            </p>

          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
`;

export default clientTemplate;
