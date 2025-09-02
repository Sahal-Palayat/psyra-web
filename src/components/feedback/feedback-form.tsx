"use client";
import { useState, useEffect } from "react";
import type React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useRouter } from "next/navigation";

interface FeedbackFormProps {
  encodedData?: string;
}

interface UserData {
  name: string;
  mobile: string;
  psymateId: string;
}

const FeedbackForm = ({ encodedData }: FeedbackFormProps) => {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    mobile: "",
    psymateId: "",
  });
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState<number | null>(null);
  const router = useRouter();

  // Emoji feedback options
  const emojiOptions = [
    { emoji: "😞", label: "Poor", value: 1, color: "text-red-500" },
    { emoji: "😐", label: "Average", value: 2, color: "text-yellow-500" },
    { emoji: "😊", label: "Good", value: 3, color: "text-green-500" },
  ];

  // Decode user data from URL on component mount
  useEffect(() => {
    if (encodedData) {
      try {
        const decodedString = atob(encodedData);
        const [name, mobile, psymateId] = decodedString.split("|");

        setUserData({
          name: name || "",
          mobile: mobile || "",
          psymateId: psymateId || "",
        });
      } catch (error) {
        console.error("Error decoding user data:", error);
      }
    }
  }, [encodedData]);
  console.log(userData, "USER DATAAAGAGAGGAAGGA");

  const handleEmojiSelect = (index: number, value: number) => {
    setSelectedEmoji(index);
    setRating(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!feedback.trim() || rating === 0) {
      alert("Please provide feedback and select a rating");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with your actual API endpoint
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/feedback`,
        {
          name: userData.name,
          mobile: userData.mobile,
          feedback: feedback.trim(),
          rating,
          psymateId: userData.psymateId,
          timestamp: new Date().toISOString(),
        }
      );

      setShowSuccess(true);
      setFeedback("");
      setRating(0);
      setSelectedEmoji(null);
      //   if (response.ok) {
      //   } else {
      //     throw new Error("Failed to submit feedback")
      //   }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Share Your Experience
          </h1>
          <p className="text-teal-100 text-sm">
            {userData.name ? `Hi ${userData.name}!` : "Hi there!"} We'd love to
            hear about your session
          </p>
        </div>

        {/* Emoji Selection */}
        <div className="p-6 pb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            How was your experience?
          </h3>
          <div className="flex justify-center space-x-8 mb-6">
            {emojiOptions.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleEmojiSelect(index, option.value)}
                className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${
                  selectedEmoji === index
                    ? "bg-teal-50 border-2 border-teal-500 shadow-md"
                    : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"
                }`}
              >
                <span className="text-4xl mb-2">{option.emoji}</span>
                <span
                  className={`text-sm font-medium ${
                    selectedEmoji === index ? "text-teal-700" : "text-gray-600"
                  }`}
                >
                  {option.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Feedback Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-6">
          <div className="mb-4">
            <label
              htmlFor="feedback"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Tell us more about your experience
            </label>
            <Textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your thoughts, suggestions, or any specific feedback about your session..."
              className="w-full min-h-[120px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || !feedback.trim() || rating === 0}
            className="max-w-md  bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white py-3 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Submitting...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                Submit Feedback
              </div>
            )}
          </Button>
        </form>
      </motion.div>

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle className="w-8 h-8 text-green-600" />
              </motion.div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600 mb-6">
                Your feedback has been received. We appreciate you taking the
                time to share your experience with us.
              </p>

              <Button
                onClick={() => {
                  setShowSuccess(false);
                  router.push("/")
                }}
                className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-6 py-2 rounded-lg font-medium"
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackForm;
