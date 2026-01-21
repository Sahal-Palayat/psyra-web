// // Razorpay configuration and service
// export const RAZORPAY_CONFIG = {
//   key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//   key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET,
// };

// // Razorpay payment response interface
// export interface RazorpayPaymentResponse {
//   razorpay_payment_id: string;
//   razorpay_order_id: string;
//   razorpay_signature: string;
// }

// // Razorpay order response interface
// export interface RazorpayOrderResponse {
//   orderId: string;
//   amount: number;
//   currency: string;
//   orderDbId: string;
// }

// // Backend API response interface
// export interface CreateOrderResponse {
//   status: boolean;
//   message: string;
//   data: RazorpayOrderResponse;
// }

// // Razorpay instance interface
// export interface RazorpayInstance {
//   open: () => void;
//   close: () => void;
// }

// // Window interface extension for Razorpay
// declare global {
//   interface Window {
//     Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
//   }
// }

// // Payment data interface
// export interface PaymentData {
//   sessionDetails: {
//     date: string;
//     timeSlot: string;
//     psychologistId: string;
//     name: string;
//     email: string;
//     phone: string;
//     age: string;
//     modeOfTherapy: string;
//     issue: string;
//     agreeToTerms: boolean;
//     sessionType: string;
//     therapyType: string;
//     packageTitle: string;
//   };
//   totalAmount: number;
// }

// // Razorpay options interface
// export interface RazorpayOptions {
//   key: string;
//   amount: number;
//   currency: string;
//   name: string;
//   description: string;
//   order_id: string;
//   handler: (response: RazorpayPaymentResponse) => void;
//   prefill: {
//     name: string;
//     email: string;
//     contact: string;
//   };
//   notes: {
//     sessionDetails: string;
//   };
//   theme: {
//     color: string;
//   };
//   modal?: {
//     ondismiss: () => void;
//   };
//   // Optional method configuration to enable/disable payment methods
//   method?: {
//     upi?: boolean | {
//       flow?: string;
//       vpa?: string;
//       apps?: string[];
//     };
//     card?: boolean;
//     netbanking?: boolean;
//     wallet?: boolean;
//     paylater?: boolean;
//   };
//   // Optional top-level UPI configuration (alternative approach)
//   upi?: {
//     mode?: string;
//     apps?: string[];
//   };
//   // Optional UI configuration for Checkout display (e.g., GPay first)
//   config?: {
//     display?: {
//       payment_method?: {
//         upi?: {
//           rp_branding?: boolean;
//           preferred_apps_order?: string[];
//         };
//       };
//       blocks?: Record<string, {
//         name: string;
//         instruments: Array<{
//           method: string;
//           flows?: string[];
//           apps?: string[];
//         }>;
//       }>;
//       sequence?: string[];
//       preferences?: {
//         show_default_blocks?: boolean;
//       };
//     };
//   };
//   // Allow additional vendor-supported fields without type errors
//   [key: string]: unknown;
// }

// // Create payment order
// export const createPaymentOrder = async (paymentData: PaymentData): Promise<RazorpayOrderResponse> => {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/psyra-payment/create`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(paymentData),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to create payment order');
//     }

//     const apiResponse: CreateOrderResponse = await response.json();
    
//     if (!apiResponse.status) {
//       throw new Error(apiResponse.message || 'Failed to create payment order');
//     }

//     return apiResponse.data;
//   } catch (error) {
//     console.error('Error creating payment order:', error);
//     throw error;
//   }
// };


// // Initialize Razorpay
// export const initializeRazorpay = (): Promise<boolean> => {
//   return new Promise((resolve) => {
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.onload = () => {
//       resolve(true);
//     };
//     script.onerror = () => {
//       resolve(false);
//     };
//     document.body.appendChild(script);
//   });
// };

// // Open Razorpay payment modal
// export const openRazorpayPayment = async (options: RazorpayOptions): Promise<RazorpayInstance> => {
//   const razorpayLoaded = await initializeRazorpay();
  
//   if (!razorpayLoaded) {
//     throw new Error('Razorpay SDK failed to load');
//   }

//   const razorpay = new window.Razorpay(options);
//   razorpay.open();
  
//   return razorpay;
// };

// Razorpay configuration
export const RAZORPAY_CONFIG = {
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET,
};

// Razorpay payment response
export interface RazorpayPaymentResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

// Razorpay order response (from backend)
export interface RazorpayOrderResponse {
  orderId: string;
  amount: number;
  currency: string;
}

// Backend API response
export interface CreateOrderResponse {
  status: boolean;
  message: string;
  data: RazorpayOrderResponse;
}

// Window Razorpay type
declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => {
      open: () => void;
      close: () => void;
    };
  }
}

/**
 * ✅ NEW PaymentData
 * Matches backend contract exactly
 */
export interface PaymentData {
  bookingId: string;
  bookingType: "psychologist" | "general";
  totalAmount: number;
}

// Razorpay checkout options
export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayPaymentResponse) => void;
  theme?: {
    color?: string;
  };
  modal?: {
    ondismiss?: () => void;
  };
  [key: string]: unknown;
}

/**
 * ✅ Create payment order (BACKEND CREATES orderId)
 */
export const createPaymentOrder = async (
  paymentData: PaymentData
): Promise<RazorpayOrderResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/psyra-payment/create`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bookingId: paymentData.bookingId,
        bookingType: paymentData.bookingType,
        totalAmount: paymentData.totalAmount,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create payment order");
  }

  const apiResponse: CreateOrderResponse = await response.json();

  if (!apiResponse.status) {
    throw new Error(apiResponse.message || "Payment order failed");
  }

  return apiResponse.data;
};

// Load Razorpay SDK
// export const initializeRazorpay = (): Promise<boolean> => {
//   return new Promise((resolve) => {
//     if (document.getElementById("razorpay-sdk")) {
//       resolve(true);
//       return;
//     }

//     const script = document.createElement("script");
//     script.id = "razorpay-sdk";
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.onload = () => resolve(true);
//     script.onerror = () => resolve(false);
//     document.body.appendChild(script);
//   });
// };

export const initializeRazorpay = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }

    if ((window as any).Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
};



// Open Razorpay modal
// export const openRazorpayPayment = async (
//   options: RazorpayOptions
// ) => {
//   const loaded = await initializeRazorpay();

//   if (!loaded) {
//     throw new Error("Razorpay SDK failed to load");
//   }

//   const razorpay = new window.Razorpay(options);
//   razorpay.open();
// };

export const openRazorpayPayment = async (
  options: RazorpayOptions
) => {
  const loaded = await initializeRazorpay();

  if (!loaded) {
    throw new Error("Razorpay SDK failed to load");
  }

  const razorpay = new window.Razorpay(options);
  razorpay.open();
};


