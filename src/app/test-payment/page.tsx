"use client";
import { RazorpayPayment } from "@/components/Payment/RazorpayPayment";

export default function TestPaymentPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#005657] mb-4">
            Razorpay Payment Test
          </h1>
          <p className="text-gray-600">
            Test the Razorpay payment integration with dummy data
          </p>
        </div>

        <RazorpayPayment 
          onPaymentSuccess={(response) => {
            console.log('Payment successful:', response);
            alert('Payment completed successfully! Check console for details.');
          }}
          onPaymentError={(error) => {
            console.error('Payment error:', error);
            alert('Payment failed. Check console for error details.');
          }}
        />

        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg border">
          <h3 className="text-lg font-semibold text-[#005657] mb-4">
            API Endpoints Used:
          </h3>
          <div className="space-y-2 text-sm">
             <div className="p-3 bg-gray-50 rounded">
               <strong>POST</strong> <code className="bg-gray-200 px-2 py-1 rounded">
                 {process.env.NEXT_PUBLIC_API_URL}/psyra-payment/create
               </code>
               <p className="text-gray-600 mt-1">Creates payment order with Razorpay</p>
             </div>
             <div className="p-3 bg-gray-50 rounded">
               <strong>POST</strong> <code className="bg-gray-200 px-2 py-1 rounded">
                 {process.env.NEXT_PUBLIC_API_URL}/consultation/book-slot
               </code>
               <p className="text-gray-600 mt-1">Books the session after payment success</p>
             </div>
          </div>
        </div>

        <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            Test Instructions:
          </h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Click "Test Razorpay Payment" button</li>
            <li>• Use test card: 4111 1111 1111 1111</li>
            <li>• Use any future expiry date</li>
            <li>• Use any CVV (e.g., 123)</li>
            <li>• Check browser console for detailed logs</li>
            <li>• Payment will be processed with live Razorpay keys</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
