"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { useToast } from "@/hooks/use-toast"

export default function PsyraChiefPsychologistApplication() {
  //   const { toast } = useToast()
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    workExperience: "",
    qualification: "",
    specializedAreas: "",
    socialMediaAccounts: "",
    recentPhoto: "",
    resume: "",
    videoPresentation: "",
    whyJoinPsyra: "",
    mentalHealthIdea: "",
    additionalInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.fullName ||
      !formData.mobileNumber ||
      !formData.workExperience ||
      !formData.qualification ||
      !formData.recentPhoto ||
      !formData.resume ||
      !formData.videoPresentation ||
      !formData.whyJoinPsyra ||
      !formData.mentalHealthIdea
    ) {
      return;
    }

    if (Number.parseInt(formData.workExperience) < 3) {
      return;
    }

    console.log("Psyra Application submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8 px-4">
      <div className="max-w-4xl mx-auto mt-16">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="mb-6">
            <h1 className="text-5xl font-bold text-emerald-800 mb-2">Psyra</h1>
            <h2 className="text-3xl font-semibold text-teal-700 mb-6">
              Chief Psychologist Application
            </h2>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-emerald-100">
            <div className="text-2xl mb-4">🌟 Join the Psyra Team! 🌟</div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Psyra is on a mission to create a mentally healthier India through
              compassionate care, impactful programs, and innovative solutions.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We are looking for an{" "}
              <strong>Experienced Chief Psychologist</strong> to guide our
              clinical vision, maintain quality standards, and lead our
              psychologist network.
            </p>

            <div className="bg-emerald-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-emerald-800 mb-4">
                Minimum Requirements:
              </h3>
              <ul className="text-left text-gray-700 space-y-2">
                <li>• 3+ years of professional experience in psychology</li>
                <li>• Strong presentation & communication skills</li>
                <li>• Strong work ethic with a focus on impact</li>
                <li>• Based in or willing to relocate to Kochi</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              To better understand your profile, we request you to complete this
              form and share a short video presentation (1 minute) highlighting
              your skills or any topic of your choice. This will help us assess
              your communication style and personality.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <p className="text-amber-800 font-medium">
                ⚠️ Incomplete applications may not be considered.
              </p>
            </div>

            <p className="text-gray-700 text-lg font-medium">
              Join us in our journey to transform mental health care. We look
              forward to discovering the unique value you can bring to our team!
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card className="border-emerald-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-800">
                Basic Information
              </CardTitle>
              <CardDescription className="text-emerald-600">
                Please provide your basic details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div>
                <Label
                  htmlFor="fullName"
                  className="text-lg font-medium text-gray-700"
                >
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  className="mt-2 h-12 text-lg border-emerald-200 focus:border-emerald-400"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <Label
                  htmlFor="mobileNumber"
                  className="text-lg font-medium text-gray-700"
                >
                  Mobile Number *
                </Label>
                <Input
                  id="mobileNumber"
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={(e) =>
                    handleInputChange("mobileNumber", e.target.value)
                  }
                  className="mt-2 h-12 text-lg border-emerald-200 focus:border-emerald-400"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Professional Information */}
          <Card className="border-emerald-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-800">
                Professional Background
              </CardTitle>
              <CardDescription className="text-emerald-600">
                Your qualifications and experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div>
                <Label
                  htmlFor="workExperience"
                  className="text-lg font-medium text-gray-700"
                >
                  Work Experience (in years) *
                </Label>
                <p className="text-sm text-gray-600 mb-2">
                  Exclude internships. Minimum 3 years required
                </p>
                <Select
                  onValueChange={(value) =>
                    handleInputChange("workExperience", value)
                  }
                >
                  <SelectTrigger className="h-12 text-lg border-emerald-200 focus:border-emerald-400">
                    <SelectValue placeholder="Select your years of experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3 years</SelectItem>
                    <SelectItem value="4">4 years</SelectItem>
                    <SelectItem value="5">5 years</SelectItem>
                    <SelectItem value="6">6 years</SelectItem>
                    <SelectItem value="7">7 years</SelectItem>
                    <SelectItem value="8">8 years</SelectItem>
                    <SelectItem value="9">9 years</SelectItem>
                    <SelectItem value="10">10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label
                  htmlFor="qualification"
                  className="text-lg font-medium text-gray-700"
                >
                  Qualification *
                </Label>
                <Input
                  id="qualification"
                  value={formData.qualification}
                  onChange={(e) =>
                    handleInputChange("qualification", e.target.value)
                  }
                  className="mt-2 h-12 text-lg border-emerald-200 focus:border-emerald-400"
                  placeholder="e.g., M.A. Psychology, Ph.D. Clinical Psychology"
                  required
                />
              </div>

              <div>
                <Label
                  htmlFor="specializedAreas"
                  className="text-lg font-medium text-gray-700"
                >
                  Specialized Areas
                </Label>
                <Textarea
                  id="specializedAreas"
                  value={formData.specializedAreas}
                  onChange={(e) =>
                    handleInputChange("specializedAreas", e.target.value)
                  }
                  className="mt-2 border-emerald-200 focus:border-emerald-400"
                  placeholder="e.g., Clinical Psychology, Cognitive Behavioral Therapy, Child Psychology..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Digital Presence & Documents */}
          <Card className="border-emerald-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-800">
                Digital Presence & Documents
              </CardTitle>
              <CardDescription className="text-emerald-600">
                Share your online presence and required documents
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div>
                <Label
                  htmlFor="socialMediaAccounts"
                  className="text-lg font-medium text-gray-700"
                >
                  Active Social Media Accounts (Attach Link)
                </Label>
                <Input
                  id="socialMediaAccounts"
                  value={formData.socialMediaAccounts}
                  onChange={(e) =>
                    handleInputChange("socialMediaAccounts", e.target.value)
                  }
                  className="mt-2 h-12 text-lg border-emerald-200 focus:border-emerald-400"
                  placeholder="LinkedIn, Instagram, or other professional social media links"
                />
              </div>

              <div>
                <Label
                  htmlFor="recentPhoto"
                  className="text-lg font-medium text-gray-700"
                >
                  A Recent Photo 🔗 *
                </Label>
                <p className="text-sm text-gray-600 mb-2">
                  Please provide a link to a recent photo of yourself. You may
                  upload it to Google Drive (ensure the link is accessible) or
                  share a link from any of your public social media accounts.
                  Passport-style photos are not required; a natural, candid
                  photo is preferred.
                </p>
                <Input
                  id="recentPhoto"
                  value={formData.recentPhoto}
                  onChange={(e) =>
                    handleInputChange("recentPhoto", e.target.value)
                  }
                  className="mt-2 h-12 text-lg border-emerald-200 focus:border-emerald-400"
                  placeholder="https://drive.google.com/... or social media photo link"
                  required
                />
              </div>

              <div>
                <Label
                  htmlFor="resume"
                  className="text-lg font-medium text-gray-700"
                >
                  Resume 🔗 *
                </Label>
                <p className="text-sm text-gray-600 mb-2">
                  Please provide a link to your resume. You may upload it to
                  Google Drive (ensure the link is accessible) or share a link
                  from any public portfolio or professional website.
                </p>
                <Input
                  id="resume"
                  value={formData.resume}
                  onChange={(e) => handleInputChange("resume", e.target.value)}
                  className="mt-2 h-12 text-lg border-emerald-200 focus:border-emerald-400"
                  placeholder="https://drive.google.com/... or portfolio link"
                  required
                />
              </div>

              <div>
                <Label
                  htmlFor="videoPresentation"
                  className="text-lg font-medium text-gray-700"
                >
                  1-Minute Video Presentation (Link 🔗) *
                </Label>
                <p className="text-sm text-gray-600 mb-2">
                  In your video, feel free to speak on any topic in{" "}
                  <strong>Malayalam</strong> of your choice. The goal is to
                  showcase your communication skills, confidence, and
                  personality. Please ensure clear video and sound quality, good
                  lighting, a formal appearance, and a distraction-free
                  background. You may upload the video to any platform (like
                  YouTube as an Unlisted video, Instagram, or Any Channel) and
                  share the link.
                </p>
                <Input
                  id="videoPresentation"
                  value={formData.videoPresentation}
                  onChange={(e) =>
                    handleInputChange("videoPresentation", e.target.value)
                  }
                  className="mt-2 h-12 text-lg border-emerald-200 focus:border-emerald-400"
                  placeholder="YouTube, Instagram, or other video platform link"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Vision & Ideas */}
          <Card className="border-emerald-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-800">
                Your Vision & Ideas
              </CardTitle>
              <CardDescription className="text-emerald-600">
                Help us understand your perspective and vision
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div>
                <Label
                  htmlFor="whyJoinPsyra"
                  className="text-lg font-medium text-gray-700"
                >
                  Why do you want to join Psyra as Chief Psychologist? *
                </Label>
                <Textarea
                  id="whyJoinPsyra"
                  value={formData.whyJoinPsyra}
                  onChange={(e) =>
                    handleInputChange("whyJoinPsyra", e.target.value)
                  }
                  className="mt-2 border-emerald-200 focus:border-emerald-400"
                  placeholder="Share your motivation and what draws you to Psyra's mission..."
                  rows={5}
                  required
                />
              </div>

              <div>
                <Label
                  htmlFor="mentalHealthIdea"
                  className="text-lg font-medium text-gray-700"
                >
                  Share one idea you believe could improve mental health
                  services in India. *
                </Label>
                <p className="text-sm text-gray-600 mb-2">
                  This helps us understand your vision and thought process.
                </p>
                <Textarea
                  id="mentalHealthIdea"
                  value={formData.mentalHealthIdea}
                  onChange={(e) =>
                    handleInputChange("mentalHealthIdea", e.target.value)
                  }
                  className="mt-2 border-emerald-200 focus:border-emerald-400"
                  placeholder="Describe your innovative idea for improving mental health services..."
                  rows={5}
                  required
                />
              </div>

              <div>
                <Label
                  htmlFor="additionalInfo"
                  className="text-lg font-medium text-gray-700"
                >
                  Anything else you'd like to share or ask us? (Optional)
                </Label>
                <p className="text-sm text-gray-600 mb-2">
                  Share any thoughts, additional information, or questions.
                </p>
                <Textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) =>
                    handleInputChange("additionalInfo", e.target.value)
                  }
                  className="mt-2 border-emerald-200 focus:border-emerald-400"
                  placeholder="Any additional thoughts, questions, or information you'd like to share..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center pb-8">
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-12 py-4 text-xl font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              Submit Application 🌟
            </Button>
            <p className="text-sm text-gray-600 mt-4">
              By submitting this application, you confirm that all information
              provided is accurate and complete.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
