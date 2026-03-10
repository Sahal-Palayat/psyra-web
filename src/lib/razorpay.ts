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
 */
export interface PaymentData {
  bookingId: string;
  bookingType: "psychologist" | "general";
  totalAmount: number;

 name: string;
  email: string;
  phone: string;
  age: string;
  modeOfTherapy: string;
  issue: string;
  otherIssue?: string;
  sessionType: string;
  therapyType: string;
  packageTitle: string;
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
  // Payment failure callback (custom handling)
  onPaymentFailed?: (error: { code: string; description: string; source: string; step: string; reason: string }) => void;
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
      body: JSON.stringify(paymentData),
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


