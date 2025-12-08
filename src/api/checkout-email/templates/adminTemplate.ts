const adminTemplate = ({
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
} = {}) => `

<!-- OUTER WRAPPER -->
<table width="100%" cellpadding="0" cellspacing="0" 
       style="background:#f7f4ee;padding:20px;font-family:Arial,sans-serif;">
  <tr>
    <td align="center">

      <!-- RESPONSIVE MAIN CONTAINER -->
      <table width="100%" cellpadding="0" cellspacing="0"
             style="max-width:650px;background:#ffffff;border-radius:10px;overflow:hidden;">

        <!-- Logo -->
        <tr>
          <td align="center" style="padding:20px;">
            <img src="https://files.cloudstick.io/email-templates/momentz-logo%20(2).png"
                 style="width:60px;height:auto;display:block;" alt="Momentz Logo">
          </td>
        </tr>

        <!-- Header -->
        <tr>
          <td style="background:#faf8f3;padding:25px;text-align:center;border-bottom:1px solid #eee2d5;">
            <h1 style="margin:0;color:#7a6448;font-size:22px;line-height:26px;">
              New Checkout Order Received
            </h1>
            <p style="margin:6px 0 0;color:#777;font-size:14px;">
              A customer has completed a checkout.
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:25px;color:#333;font-size:15px;line-height:22px;">

            <!-- CUSTOMER INFORMATION -->
            <h2 style="font-size:18px;color:#7a6448;margin-bottom:10px;">Customer Information</h2>
            <table width="100%" style="background:#faf8f3;padding:15px;border-radius:10px;border:1px solid #eee2d5;">
              <tr><td><strong>First Name:</strong> ${firstName}</td></tr>
              <tr><td><strong>Last Name:</strong> ${lastName}</td></tr>
              <tr><td><strong>Email:</strong> ${email}</td></tr>
              <tr><td><strong>Phone:</strong> ${phone}</td></tr>
            </table>

            <!-- EVENT INFO -->
            <h2 style="font-size:18px;color:#7a6448;margin-top:25px;margin-bottom:10px;">Event Information</h2>
            <table width="100%" style="background:#faf8f3;padding:15px;border-radius:10px;border:1px solid #eee2d5;">
              <tr><td><strong>Event Date:</strong> ${eventDate}</td></tr>
              <tr><td><strong>Event Type:</strong> ${eventType}</td></tr>
            </table>

            <!-- DELIVERY INFO -->
            ${
              deliveryRequired || deliveryDate || deliveryTime || deliveryAddress || deliveryConditions
                ? `
                <h2 style="font-size:18px;color:#7a6448;margin-top:25px;margin-bottom:10px;">Delivery Options</h2>
                <table width="100%" style="background:#faf8f3;padding:15px;border-radius:10px;border:1px solid #eee2d5;">
                  ${deliveryRequired ? `<tr><td><strong>Delivery Required:</strong> ${deliveryRequired}</td></tr>` : ""}
                  ${deliveryDate ? `<tr><td><strong>Delivery Date:</strong> ${deliveryDate}</td></tr>` : ""}
                  ${deliveryTime ? `<tr><td><strong>Delivery Time:</strong> ${deliveryTime}</td></tr>` : ""}
                  ${deliveryAddress ? `<tr><td><strong>Delivery Address:</strong> ${deliveryAddress}</td></tr>` : ""}
                  ${deliveryConditions ? `<tr><td><strong>Delivery Conditions:</strong> ${deliveryConditions}</td></tr>` : ""}
                </table>
                `
                : ""
            }

            <!-- ADDITIONAL INFO -->
            <h2 style="font-size:18px;color:#7a6448;margin-top:25px;margin-bottom:10px;">Additional Information</h2>
            <p style="background:#faf8f3;padding:15px;border-radius:10px;border:1px solid #eee2d5;margin:0;">
              ${specialRequests || "No additional notes provided."}
            </p>

            <!-- ORDER SUMMARY -->
            <h2 style="font-size:18px;color:#7a6448;margin-top:25px;margin-bottom:10px;">Order Summary</h2>

            <table width="100%" style="background:#faf8f3;padding:10px;border-radius:10px;border:1px solid #eee2d5;">

              ${items
                .map(
                  (item) => `
                  <tr>
                    <td style="padding:10px 0;vertical-align:top;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>

                          <!-- ITEM IMAGE -->
                          <td style="width:70px;">
                            ${
                              item.image
                                ? `<img src="${item.image}"
                                        style="width:60px;height:auto;border-radius:5px;display:block;">`
                                : ""
                            }
                          </td>

                          <!-- ITEM DETAILS -->
                          <td style="padding-left:10px;">
                            <strong>${item.name}</strong><br/>
                            Qty: ${item.quantity} × ${item.rentalDays || 1} days
                          </td>

                          <!-- PRICE -->
                          <td style="text-align:right;font-weight:600;white-space:nowrap;">
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

            <!-- TOTALS -->
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
                <td style="font-size:20px;font-weight:700;color:#7a6448;">Total:</td>
                <td style="font-size:20px;font-weight:700;color:#7a6448;text-align:right;">$${total}</td>
              </tr>
            </table>

            <!-- FOOTER -->
            <p style="margin-top:30px;">
            </p>
            <p style="margin:5px 0 0;line-height:20px;">
              📞 ${companyPhone}<br>
              ✉️ ${companyEmail}
            </p>

            <hr style="border:none;border-top:1px solid #ddd;margin:25px 0;">

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

export default adminTemplate;
