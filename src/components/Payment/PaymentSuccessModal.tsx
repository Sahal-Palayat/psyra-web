"use client";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, Clock, User, Mail, Phone } from "lucide-react";

interface PaymentSuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    paymentData: {
        name: string;
        email: string;
        phone: string;
        packageTitle: string;
        date: string;
        timeSlot: string;
        amount: number;
    };
}

export const PaymentSuccessModal = ({
    isOpen,
    onClose,
    paymentData,
}: PaymentSuccessModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            <div
                className="fixed inset-0 bg-black/50 transition-opacity"
                onClick={onClose}
                aria-hidden="true"
            />

            <div className="flex min-h-full items-center justify-center p-2 sm:p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative w-full max-w-md bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden"
                >
                    {/* Header */}
                    <div className="bg-[#005657] text-white p-6 flex-shrink-0 relative">
                        {/* ✅ Close button in the top-right */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                            aria-label="Close modal"
                        >
                            <svg
                                className="w-5 h-5 sm:w-6 sm:h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Success icon */}
                        <div className="flex items-center justify-center">
                            <CheckCircle className="w-12 h-12 text-white" />
                        </div>

                        <h2 className="text-xl font-bold text-center mt-4">
                            Payment Successful!
                        </h2>
                        <p className="text-green-100 text-center mt-2">
                            Your therapy session has been booked successfully
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
