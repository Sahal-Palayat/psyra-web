"use client";
import { useState } from 'react';
import { 
  createPaymentOrder, 
  openRazorpayPayment, 
  RAZORPAY_CONFIG,
  type PaymentData,
  type RazorpayOptions,
  type RazorpayPaymentResponse
} from '@/lib/razorpay';

interface RazorpayPaymentProps {
  onPaymentSuccess?: (response: RazorpayPaymentResponse) => void;
  onPaymentError?: (error: Error) => void;
}

export const RazorpayPayment = ({ onPaymentSuccess, onPaymentError }: RazorpayPaymentProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'failed'>('idle');

  // Dummy data for testing
  const dummyPaymentData: PaymentData = {
    sessionDetails: {
      date: "2025-09-20",
      timeSlot: "10:00-11:00",
      psychologistId: "66f2a5c9e1a3b2f3d4c5a6b7",
      name: "Rafnas pp",
      email: "john.doe@example.com",
      phone: "9876543210",
      age: "29",
      modeOfTherapy: "Online",
      issue: "Anxiety",
      agreeToTerms: true,
      sessionType: "Individual",
      therapyType: "CBT",
      packageTitle: "Introductory Session"
    },
    totalAmount: 100
  };

  const handlePayment = async () => {
    setIsLoading(true);
    setPaymentStatus('processing');

    try {
      // Step 1: Create payment order with backend
      console.log('Creating payment order...', dummyPaymentData);
      const orderResponse = await createPaymentOrder(dummyPaymentData);
      console.log('Payment order created:', orderResponse);

      // Step 2: Configure Razorpay options
      const razorpayOptions: RazorpayOptions = {
        key: RAZORPAY_CONFIG.key_id,
        amount: dummyPaymentData.totalAmount * 100, // Convert to paise
        currency: 'INR',
        name: 'Psyra',
        description: `Payment for ${dummyPaymentData.sessionDetails.packageTitle}`,
        order_id: orderResponse.order_id, // From backend response
         handler: async (response: RazorpayPaymentResponse) => {
           console.log('Payment response:', response);
           
           // Payment successful - no verification needed
           setPaymentStatus('success');
           onPaymentSuccess?.(response);
           alert('Payment successful! Your session has been booked.');
         },
        prefill: {
          name: dummyPaymentData.sessionDetails.name,
          email: dummyPaymentData.sessionDetails.email,
          contact: dummyPaymentData.sessionDetails.phone,
        },
        notes: {
          sessionDetails: JSON.stringify(dummyPaymentData.sessionDetails)
        },
        theme: {
          color: '#005657'
        },
        modal: {
          ondismiss: () => {
            setIsLoading(false);
            setPaymentStatus('idle');
            console.log('Payment modal dismissed');
          }
        }
      };

      // Step 4: Open Razorpay payment modal
      await openRazorpayPayment(razorpayOptions);

    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus('failed');
      setIsLoading(false);
      const errorInstance = error instanceof Error ? error : new Error('Payment failed');
      onPaymentError?.(errorInstance);
      alert('Payment failed. Please try again.');
    }
  };

  const getButtonText = () => {
    switch (paymentStatus) {
      case 'processing':
        return 'Processing...';
      case 'success':
        return 'Payment Successful!';
      case 'failed':
        return 'Payment Failed - Try Again';
      default:
        return 'Test Razorpay Payment';
    }
  };

  const getButtonClass = () => {
    const baseClass = "px-6 py-3 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
    
    switch (paymentStatus) {
      case 'processing':
        return `${baseClass} bg-yellow-500 text-white hover:bg-yellow-600`;
      case 'success':
        return `${baseClass} bg-green-500 text-white hover:bg-green-600`;
      case 'failed':
        return `${baseClass} bg-red-500 text-white hover:bg-red-600`;
      default:
        return `${baseClass} bg-[#005657] text-white hover:bg-[#005657]/90`;
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border">
      <h3 className="text-xl font-bold text-[#005657] mb-4">
        Razorpay Payment Test
      </h3>
      
      <div className="mb-4 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-gray-700 mb-2">Test Data:</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>Name:</strong> {dummyPaymentData.sessionDetails.name}</p>
          <p><strong>Email:</strong> {dummyPaymentData.sessionDetails.email}</p>
          <p><strong>Phone:</strong> {dummyPaymentData.sessionDetails.phone}</p>
          <p><strong>Package:</strong> {dummyPaymentData.sessionDetails.packageTitle}</p>
          <p><strong>Amount:</strong> ₹{dummyPaymentData.totalAmount}</p>
        </div>
      </div>

      <button
        onClick={handlePayment}
        disabled={isLoading || paymentStatus === 'processing'}
        className={getButtonClass()}
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Processing...</span>
          </div>
        ) : (
          getButtonText()
        )}
      </button>

      {paymentStatus === 'success' && (
        <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded-lg">
          <p className="text-green-700 text-sm">
            ✅ Payment completed successfully! Check console for details.
          </p>
        </div>
      )}

      {paymentStatus === 'failed' && (
        <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded-lg">
          <p className="text-red-700 text-sm">
            ❌ Payment failed. Check console for error details.
          </p>
        </div>
      )}

      <div className="mt-4 text-xs text-gray-500">
        <p>This is a test payment using Razorpay live keys.</p>
        <p>Check browser console for detailed logs.</p>
      </div>
    </div>
  );
};
