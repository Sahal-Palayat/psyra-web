// Razorpay configuration and service
export const RAZORPAY_CONFIG = {
  key_id: "rzp_live_RIlnITlLDQ7xrk",
  key_secret: "uvrrdPpz7egI45pBkC2EoaT7",
};

// Payment data interface
export interface PaymentData {
  sessionDetails: {
    date: string;
    timeSlot: string;
    psychologistId: string;
    name: string;
    email: string;
    phone: string;
    age: string;
    modeOfTherapy: string;
    issue: string;
    agreeToTerms: boolean;
    sessionType: string;
    therapyType: string;
    packageTitle: string;
  };
  totalAmount: number;
}

// Razorpay options interface
export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: any) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes: {
    sessionDetails: string;
  };
  theme: {
    color: string;
  };
  modal?: {
    ondismiss: () => void;
  };
}

// Create payment order
export const createPaymentOrder = async (paymentData: PaymentData) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/psyra-payment/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });

    if (!response.ok) {
      throw new Error('Failed to create payment order');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating payment order:', error);
    throw error;
  }
};


// Initialize Razorpay
export const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

// Open Razorpay payment modal
export const openRazorpayPayment = async (options: RazorpayOptions) => {
  const razorpayLoaded = await initializeRazorpay();
  
  if (!razorpayLoaded) {
    throw new Error('Razorpay SDK failed to load');
  }

  const razorpay = new (window as any).Razorpay(options);
  razorpay.open();
  
  return razorpay;
};
