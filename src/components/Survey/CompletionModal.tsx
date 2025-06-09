    "use client";

    import { useEffect } from "react";
    import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    } from "@/components/ui/dialog";
    import { Button } from "@/components/ui/button";
    import { CheckCircle, Award, Star } from "lucide-react";

    interface CompletionModalProps {
    isOpen: boolean;
    onClose: () => void;
    }

    export default function CompletionModal({
    isOpen,
    onClose,
    }: CompletionModalProps) {
    // Animation for stars
    useEffect(() => {
        if (isOpen) {
        const stars = document.querySelectorAll(".completion-star");
        stars.forEach((star, index) => {
            setTimeout(() => {
            star.classList.add("animate-bounce");
            }, index * 200);
        });
        }
    }, [isOpen]);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-gradient-to-b from-white to-emerald-50 border-emerald-100 sm:max-w-md">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full p-4 shadow-xl shadow-emerald-500/30">
                <CheckCircle className="h-8 w-8 text-white" />
            </div>
            </div>

            <DialogHeader className="pt-6">
            <DialogTitle className="text-center text-2xl font-bold text-gray-800">
                Completed!
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600">
                Thank you for taking the time to complete. Your feedback is valuable
                to us.
            </DialogDescription>
            </DialogHeader>

            {/* Stars animation */}
            <div className="relative h-16 mb-4">
            <div className="completion-star absolute left-1/4 top-0">
                <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
            </div>
            <div className="completion-star absolute left-1/2 -translate-x-1/2 top-2">
                <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
            </div>
            <div className="completion-star absolute right-1/4 top-0">
                <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
            </div>
            </div>
        </DialogContent>
        </Dialog>
    );
    }
