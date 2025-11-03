import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAdditionalInformation extends Struct.ComponentSchema {
  collectionName: 'components_shared_additional_informations';
  info: {
    displayName: 'Additional Information';
  };
  attributes: {
    SpecialRequests: Schema.Attribute.Text;
  };
}

export interface SharedCartData extends Struct.ComponentSchema {
  collectionName: 'components_shared_cart_data';
  info: {
    displayName: 'cartData';
  };
  attributes: {
    category: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    price: Schema.Attribute.Decimal;
    quantity: Schema.Attribute.Integer;
    rentalDays: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface SharedCheckoutDetails extends Struct.ComponentSchema {
  collectionName: 'components_shared_checkout_details';
  info: {
    displayName: 'checkout Details';
  };
  attributes: {
    customerInformation: Schema.Attribute.Component<
      'shared.customer-information',
      false
    >;
  };
}

export interface SharedCheckoutOrderSummary extends Struct.ComponentSchema {
  collectionName: 'components_shared_checkout_order_summaries';
  info: {
    displayName: 'Checkout Order Summary';
  };
  attributes: {
    category: Schema.Attribute.String;
    Delivery: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    price: Schema.Attribute.Decimal;
    quantity: Schema.Attribute.Integer;
    rentalDays: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface SharedCustomerINformation extends Struct.ComponentSchema {
  collectionName: 'components_shared_customer_i_nformations';
  info: {
    displayName: 'CustomerI nformation';
  };
  attributes: {
    emailAddress: Schema.Attribute.Email;
    firstName: Schema.Attribute.String;
    lastName: Schema.Attribute.String;
    phoneNumber: Schema.Attribute.BigInteger;
  };
}

export interface SharedCustomerInformation extends Struct.ComponentSchema {
  collectionName: 'components_shared_customer_informations';
  info: {
    displayName: 'Customer Information';
  };
  attributes: {
    emailAddress: Schema.Attribute.Email;
    firstName: Schema.Attribute.String;
    lastName: Schema.Attribute.String;
    phoneNumber: Schema.Attribute.BigInteger;
  };
}

export interface SharedDeliveryAndSetup extends Struct.ComponentSchema {
  collectionName: 'components_shared_delivery_and_setups';
  info: {
    displayName: 'Delivery & Setup';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedDeliveryOptions extends Struct.ComponentSchema {
  collectionName: 'components_shared_delivery_options';
  info: {
    displayName: 'Delivery Options';
  };
  attributes: {
    DeliveryAddress: Schema.Attribute.Text;
    DeliveryCondition: Schema.Attribute.Text;
    DeliveryDate: Schema.Attribute.Date;
    DeliveryTime: Schema.Attribute.Time;
  };
}

export interface SharedEmailConfirmation extends Struct.ComponentSchema {
  collectionName: 'components_shared_email_confirmations';
  info: {
    displayName: 'Email Confirmation';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedEventInformation extends Struct.ComponentSchema {
  collectionName: 'components_shared_event_informations';
  info: {
    displayName: 'event Information';
  };
  attributes: {
    eventDate: Schema.Attribute.Date;
    eventType: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedOrderSummary extends Struct.ComponentSchema {
  collectionName: 'components_shared_order_summaries';
  info: {
    displayName: 'orderSummary';
  };
  attributes: {
    Delivery: Schema.Attribute.String;
    Insurance: Schema.Attribute.String;
    Subtotal: Schema.Attribute.Decimal;
    Total: Schema.Attribute.Decimal;
  };
}

export interface SharedPersonalConsultation extends Struct.ComponentSchema {
  collectionName: 'components_shared_personal_consultations';
  info: {
    displayName: ' Personal Consultation';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSpecifications extends Struct.ComponentSchema {
  collectionName: 'components_shared_specifications';
  info: {
    displayName: 'specifications';
  };
  attributes: {
    Diameter: Schema.Attribute.String;
    Height: Schema.Attribute.String;
    Material: Schema.Attribute.String;
    Setup: Schema.Attribute.String;
    Weight: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.additional-information': SharedAdditionalInformation;
      'shared.cart-data': SharedCartData;
      'shared.checkout-details': SharedCheckoutDetails;
      'shared.checkout-order-summary': SharedCheckoutOrderSummary;
      'shared.customer-i-nformation': SharedCustomerINformation;
      'shared.customer-information': SharedCustomerInformation;
      'shared.delivery-and-setup': SharedDeliveryAndSetup;
      'shared.delivery-options': SharedDeliveryOptions;
      'shared.email-confirmation': SharedEmailConfirmation;
      'shared.event-information': SharedEventInformation;
      'shared.media': SharedMedia;
      'shared.order-summary': SharedOrderSummary;
      'shared.personal-consultation': SharedPersonalConsultation;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.specifications': SharedSpecifications;
    }
  }
}
