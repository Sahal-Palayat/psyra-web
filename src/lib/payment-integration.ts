// 
// Payment integration for Book Session button (NEW FLOW)
import {
  createPaymentOrder,
  openRazorpayPayment,
  RAZORPAY_CONFIG,
  type RazorpayOptions,
  type RazorpayPaymentResponse,
} from "./razorpay";
import { toast } from "./toast";

/**
 * ✅ Minimal data required for payment
 * Backend is the source of truth
 */
export interface BookingPaymentData {
  bookingId: string;
  bookingType: "psychologist" | "general";
  totalAmount: number;
}

/**
 * Main payment function
 */
export const processPayment = async (
  paymentData: BookingPaymentData,
  onSuccess?: (response: RazorpayPaymentResponse) => void,
  onError?: (error: Error) => void,
  onDismiss?: () => void
): Promise<void> => {
  try {

    // 🔹 STEP 1: Create Razorpay order via backend
    const orderResponse = await createPaymentOrder({
      bookingId: paymentData.bookingId,
      bookingType: paymentData.bookingType,
      totalAmount: paymentData.totalAmount,
    });

    // 🔹 STEP 2: Configure Razorpay
    const razorpayOptions: RazorpayOptions = {
      key: RAZORPAY_CONFIG.key_id || "",
      amount: orderResponse.amount, // already in paise
      currency: orderResponse.currency,
      name: "Psyra",
      description: "Therapy Session Payment",
      order_id: orderResponse.orderId,

      handler: async (response: RazorpayPaymentResponse) => {
        onSuccess?.(response);
      },

      theme: {
        color: "#005657",
      },

      modal: {
        ondismiss: () => {
          onDismiss?.();
        },
      },
    };
    // 🔹 STEP 3: Open Razorpay modal
    await openRazorpayPayment(razorpayOptions);
  } catch (error) {
    console.error("Payment error:", error);
    toast.error("Payment Failed", "Please try again.");
    onError?.(error instanceof Error ? error : new Error("Payment failed"));
  }
};
