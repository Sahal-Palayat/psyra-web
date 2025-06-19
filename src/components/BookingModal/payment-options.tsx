// "use client"
// import { useState } from "react"
// import Image from "next/image"
// import { createBookingOrder } from "@/services/payment"
// import { loadRazorpay } from "@/lib/razorpay"
// import type { BookingData } from "../../types/booking"

// type PaymentOptionsProps = {
//   isEnabled: boolean
//   bookingData: BookingData
//   onPaymentComplete: (paymentId: string, orderId: string) => void
//   sessionPrice: number
// }

// interface BookingOrderDetails {
//   userId?: string
//   patientDetails: {
//     fullName: string
//     email: string
//     phone: string
//     age: string
//     modeOfTherapy: string
//     issue: string
//     otherIssue?: string
//   }
//   sessionDetails: {
//     packageTitle: string
//     date: string
//     timeSlot: string
//     price: number
//   }
//   totalAmount: number
// }

// interface RazorpayResponse {
//   razorpay_payment_id: string
//   razorpay_order_id: string
//   razorpay_signature: string
// }

// interface RazorpayOptions {
//   key: string
//   amount: number
//   currency: string
//   name: string
//   description?: string
//   image?: string
//   order_id?: string
//   handler: (response: RazorpayResponse) => void
//   prefill?: {
//     name?: string
//     email?: string
//     contact?: string
//   }
//   notes?: Record<string, string>
//   theme?: {
//     color?: string
//   }
// }

// export function PaymentOptions({ isEnabled, bookingData, onPaymentComplete, sessionPrice }: PaymentOptionsProps) {
//   const [paymentMethod, setPaymentMethod] = useState("razorpay")
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState("")

//   // Prepare booking order details
//   const orderDetails: BookingOrderDetails = {
//     userId: "user_1", // This should come from auth context
//     patientDetails: {
//       fullName: bookingData.name,
//       email: bookingData.email,
//       phone: bookingData.phone,
//       age: bookingData.age,
//       modeOfTherapy: bookingData.modeOfTherapy,
//       issue: bookingData.issue,
//       otherIssue: bookingData.otherIssue,
//     },
//     sessionDetails: {
//       packageTitle: bookingData.packageTitle,
//       date: bookingData.date ? bookingData.date.toISOString() : "",
//       timeSlot: bookingData.timeSlot || "",
//       price: sessionPrice,
//     },
//     totalAmount: sessionPrice,
//   }

//   const clearBookingFromStorage = () => {
//     try {
//       localStorage.removeItem("currentBooking")
//       console.log("Booking data cleared from localStorage")
//     } catch (error) {
//       console.error("Error clearing booking from localStorage:", error)
//     }
//   }

//   const handlePayment = async () => {
//     if (!isEnabled) {
//       setError("Please complete your booking details first")
//       return
//     }

//     setIsLoading(true)
//     setError("")

//     try {
//       // 1. Create order on backend
//       const order = await createBookingOrder(orderDetails)

//       // 2. Load Razorpay script
//       const razorpay = await loadRazorpay()

//       if (!razorpay) {
//         throw new Error("Razorpay SDK failed to load")
//       }

//       // 3. Initialize Razorpay payment
//       const options: RazorpayOptions = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_LIVE_ID ?? "",
//         amount: order.data.amount,
//         currency: order.data.currency,
//         name: "Psyra Mental Health",
//         description: `Therapy Session - ${bookingData.packageTitle}`,
//         order_id: order.data.id,
//         handler: (response: RazorpayResponse) => {
//           clearBookingFromStorage()
//           onPaymentComplete(response.razorpay_payment_id, response.razorpay_order_id)
//         },
//         prefill: {
//           name: bookingData.name || "",
//           email: bookingData.email || "",
//           contact: bookingData.phone || "",
//         },
//         notes: {
//           sessionType: bookingData.packageTitle,
//           therapyMode: bookingData.modeOfTherapy,
//           issue: bookingData.issue,
//           appointmentDate: bookingData.date?.toDateString() || "",
//           timeSlot: bookingData.timeSlot || "",
//         },
//         theme: {
//           color: "#005657",
//         },
//       }

//       const paymentObject = new razorpay(options)
//       paymentObject.open()
//     } catch (error) {
//       console.error("Payment error:", error)
//       setError("Payment failed. Please try again.")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="space-y-6">
//       {!isEnabled && (
//         <div className="bg-[#B6E5DF]/20 p-4 rounded-xl border border-[#B6E5DF] text-[#005657] text-sm flex items-center">
//           <span className="text-xl mr-2">📋</span>
//           <p>Please complete your appointment details and personal information before proceeding to payment.</p>
//         </div>
//       )}

//       {isEnabled && (
//         <div className="bg-[#B6E5DF]/30 p-4 rounded-xl border border-[#B6E5DF] text-[#005657] text-sm flex items-center">
//           <span className="text-xl mr-2">💳</span>
//           <p>Secure payment for your therapy session. Your mental health journey starts here!</p>
//         </div>
//       )}

//       {/* Session Summary */}
//       {isEnabled && (
//         <div className="bg-white p-4 rounded-xl border border-gray-200 space-y-3">
//           <h4 className="font-semibold text-[#005657] mb-3">Session Summary</h4>
//           <div className="space-y-2 text-sm">
//             <div className="flex justify-between">
//               <span className="text-gray-600">Service:</span>
//               <span className="font-medium text-[#005657]">{bookingData.packageTitle}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Date & Time:</span>
//               <span className="font-medium text-[#005657]">
//                 {bookingData.date?.toLocaleDateString()} at {bookingData.timeSlot}
//               </span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Mode:</span>
//               <span className="font-medium text-[#005657]">{bookingData.modeOfTherapy}</span>
//             </div>
//             <div className="flex justify-between border-t pt-2">
//               <span className="font-semibold text-[#005657]">Total Amount:</span>
//               <span className="font-bold text-[#005657] text-lg">₹{sessionPrice}</span>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Payment Method Selection */}
//       <div className="space-y-4">
//         <h4 className="font-semibold text-[#005657]">Select Payment Method</h4>

//         <div className="flex items-center space-x-2 border-2 border-[#B6E5DF] p-4 rounded-xl bg-white hover:bg-[#B6E5DF]/10 transition-colors">
//           <input
//             type="radio"
//             id="razorpay"
//             name="paymentMethod"
//             value="razorpay"
//             checked={paymentMethod === "razorpay"}
//             onChange={() => setPaymentMethod("razorpay")}
//             disabled={!isEnabled}
//             className="h-4 w-4 text-[#005657] focus:ring-[#B6E5DF] border-gray-300"
//           />
//           <label htmlFor="razorpay" className="flex items-center cursor-pointer flex-1">
//             <div className="flex items-center justify-between w-full">
//               <div className="flex items-center">
//                 <Image
//                   src="/placeholder.svg?height=40&width=100"
//                   alt="Razorpay"
//                   width={100}
//                   height={40}
//                   className="h-8 w-20 mr-3"
//                 />
//                 <div>
//                   <p className="font-medium text-[#005657]">Razorpay</p>
//                   <p className="text-xs text-gray-500">Credit/Debit Card, UPI, Net Banking</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-1">
//                 <span className="text-xs text-gray-400">🔒</span>
//                 <span className="text-xs text-gray-400">Secure</span>
//               </div>
//             </div>
//           </label>
//         </div>

//         {/* Additional payment methods can be added here */}
//         <div className="flex items-center space-x-2 border-2 border-gray-200 p-4 rounded-xl bg-gray-50 opacity-60">
//           <input
//             type="radio"
//             id="wallet"
//             name="paymentMethod"
//             value="wallet"
//             disabled={true}
//             className="h-4 w-4 text-gray-400 border-gray-300"
//           />
//           <label htmlFor="wallet" className="flex items-center cursor-not-allowed flex-1">
//             <div className="flex items-center justify-between w-full">
//               <div className="flex items-center">
//                 <div className="h-8 w-20 bg-gray-200 rounded mr-3 flex items-center justify-center">
//                   <span className="text-xs text-gray-400">Wallet</span>
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-400">Digital Wallet</p>
//                   <p className="text-xs text-gray-400">Coming Soon</p>
//                 </div>
//               </div>
//             </div>
//           </label>
//         </div>
//       </div>

//       {error && (
//         <div className="bg-red-50 p-4 rounded-xl border border-red-200 text-red-700 text-sm flex items-center">
//           <span className="text-xl mr-2">⚠️</span>
//           <p>{error}</p>
//         </div>
//       )}

//       <button
//         onClick={handlePayment}
//         disabled={!isEnabled || isLoading}
//         className={`w-full text-white rounded-xl h-12 mt-4 font-semibold transition-all duration-300 ${
//           isEnabled && !isLoading
//             ? "bg-[#005657] hover:bg-[#004546] hover:shadow-lg transform hover:scale-[1.02]"
//             : "bg-gray-400 cursor-not-allowed"
//         }`}
//       >
//         {isLoading ? (
//           <div className="flex items-center justify-center">
//             <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//             Processing Payment...
//           </div>
//         ) : (
//           `Pay ₹${sessionPrice} - Book Session 🧠`
//         )}
//       </button>

//       {/* Security and Trust Indicators */}
//       <div className="space-y-3">
//         <div className="flex justify-center items-center space-x-4 mt-4">
//           <div className="flex items-center space-x-1">
//             <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
//               <span className="text-sm">🔒</span>
//             </div>
//             <p className="text-xs text-gray-500">256-bit SSL Encrypted</p>
//           </div>
//           <div className="flex items-center space-x-1">
//             <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
//               <span className="text-sm">🛡️</span>
//             </div>
//             <p className="text-xs text-gray-500">PCI DSS Compliant</p>
//           </div>
//         </div>

//         <div className="text-center">
//           <p className="text-xs text-gray-500">Secure payment powered by Razorpay • Your data is protected</p>
//         </div>
//       </div>

//       {!isEnabled && (
//         <p className="text-sm text-[#005657]/70 text-center">
//           Complete your appointment details to proceed with secure payment.
//         </p>
//       )}

//       {/* Cancellation Policy */}
//       {isEnabled && (
//         <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-600">
//           <p className="font-medium mb-1">📋 Cancellation Policy:</p>
//           <p>• Free cancellation up to 24 hours before your session</p>
//           <p>• Reschedule anytime with 2 hours notice</p>
//           <p>• Full refund for cancellations within policy terms</p>
//         </div>
//       )}
//     </div>
//   )
// }
