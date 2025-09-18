// Payment integration for Book Session button
import { 
  createPaymentOrder, 
  openRazorpayPayment, 
  RAZORPAY_CONFIG,
  type PaymentData,
  type RazorpayOptions,
  type RazorpayPaymentResponse,
} from './razorpay';

// Payment data interface for booking
export interface BookingPaymentData {
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
  date: string;
  timeSlot: string;
  psychologistId?: string;
  totalAmount: number;
}

// Convert booking data to payment data
export const convertToPaymentData = (bookingData: BookingPaymentData): PaymentData => {
  return {
    sessionDetails: {
      date: bookingData.date,
      timeSlot: bookingData.timeSlot,
      psychologistId: bookingData.psychologistId || "",
      name: bookingData.name,
      email: bookingData.email,
      phone: bookingData.phone,
      age: bookingData.age,
      modeOfTherapy: bookingData.modeOfTherapy,
      issue: bookingData.issue,
      agreeToTerms: bookingData.agreeToTerms,
      sessionType: bookingData.sessionType,
      therapyType: bookingData.therapyType,
      packageTitle: bookingData.packageTitle
    },
    totalAmount: bookingData.totalAmount
  };
};

// Main payment function for Book Session button
export const processPayment = async (
  bookingData: BookingPaymentData,
  onSuccess?: (response: RazorpayPaymentResponse) => void,
  onError?: (error: Error) => void
): Promise<void> => {
  try {
    console.log('Starting payment process...', bookingData);
    
    // Convert booking data to payment format
    const paymentData = convertToPaymentData(bookingData);
    
    // Step 1: Create payment order with backend
    console.log('Creating payment order...', paymentData);
    const orderResponse = await createPaymentOrder(paymentData);
    console.log('Payment order created:', orderResponse);

    // Step 2: Configure Razorpay options
    const razorpayOptions: RazorpayOptions = {
      key: RAZORPAY_CONFIG.key_id,
      amount: paymentData.totalAmount * 100, // Convert to paise
      currency: 'INR',
      name: 'Psyra',
      description: `Payment for ${paymentData.sessionDetails.packageTitle}`,
      order_id: orderResponse.order_id, // From backend response
      handler: async (response: RazorpayPaymentResponse) => {
        console.log('Payment response:', response);
        
        // Payment successful
        onSuccess?.(response);
        alert('Payment successful! Your session has been booked.');
      },
      prefill: {
        name: paymentData.sessionDetails.name,
        email: paymentData.sessionDetails.email,
        contact: paymentData.sessionDetails.phone,
      },
      notes: {
        sessionDetails: JSON.stringify(paymentData.sessionDetails)
      },
      theme: {
        color: '#005657'
      },
      modal: {
        ondismiss: () => {
          console.log('Payment modal dismissed');
        }
      }
    };

    // Step 3: Open Razorpay payment modal
    await openRazorpayPayment(razorpayOptions);

  } catch (error) {
    console.error('Payment error:', error);
    const errorInstance = error instanceof Error ? error : new Error('Payment failed');
    onError?.(errorInstance);
    alert('Payment failed. Please try again.');
  }
};
