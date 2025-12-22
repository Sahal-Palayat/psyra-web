"use client";
import { motion } from "framer-motion";
import {
  Shield,
  FileText,
  Users,
  Lock,
  Building,
  Calendar,
  CreditCard,
  UserX,
  AlertTriangle,
  Scale,
  XCircle,
} from "lucide-react";

export default function TermsAndConditions() {
  const sections = [
    {
      id: "services",
      title: "1. Services Offered",
      icon: <Users className="w-5 h-5" />,
      content: `Psyra.in provides a range of mental wellness services, including but not limited to:`,
      details: [
        "Online and in-person mental health consultations",
        "Corporate wellness programs and training",
        "Academic training sessions and student well-being initiatives",
        "Workshops, webinars, and events focused on psychological well-being",
      ],
      note: "These services may be offered through our website, mobile app, or partner platforms.",
    },
    {
      id: "eligibility",
      title: "2. Eligibility and Account Responsibility",
      icon: <Shield className="w-5 h-5" />,
      content: `Account creation and usage requirements:`,
      details: [
        "You must be at least 18 years old to create an account and use our services",
        "If you are under 18, a parent or legal guardian must register on your behalf",
        "You agree to provide accurate and current information during registration",
        "You are responsible for maintaining the confidentiality of your account credentials",
        "Unauthorized use of another person's account is strictly prohibited",
      ],
    },
    {
      id: "consultations",
      title: "3. Consultations and Mental Health Support",
      icon: <Lock className="w-5 h-5" />,
      content: `Important information about our mental health services:`,
      details: [
        "Mental health consultations are provided by qualified professionals affiliated with Psyra.in",
        "These sessions are not intended for emergency or crisis situations",
        "In case of emergency, contact emergency services or visit the nearest hospital",
        "Online consultations supplement—not replace—regular clinical care",
        "The platform is not liable for outcomes from incomplete or inaccurate information",
      ],
    },
    {
      id: "corporate",
      title: "4. Corporate & Academic Programs",
      icon: <Building className="w-5 h-5" />,
      content: `Specialized programs for organizations and institutions:`,
      details: [
        "Psyra.in offers tailored wellness and training programs for corporates and educational institutions",
        "Specific terms will be governed by separate agreements or MoUs with the organization",
        "All training content and materials remain the intellectual property of Psyra.in",
        "Confidentiality, duration, scope, and fees are defined in individual contracts",
      ],
    },
  ];

  const additionalTerms = [
    {
      title: "5. Workshops, Events & Webinars",
      icon: <Calendar className="w-5 h-5" />,
      content: [
        "Registration for workshops and events must be done through official channels",
        "Psyra.in reserves the right to cancel or reschedule events",
        "Registered users will be notified and offered alternative dates or refunds where applicable",
        "Users must adhere to event guidelines and maintain appropriate conduct throughout",
      ],
    },
    {
      title: "6. Payments and Refunds",
      icon: <CreditCard className="w-5 h-5" />,
      content: [
        "Payments for consultations, trainings, or events must be made in advance",
        "All fees are non-refundable unless otherwise stated in the service-specific policy",
        "Psyra.in does not store payment method details",
        "Transactions are handled via secure third-party payment gateways",
      ],
    },
    {
      title: "7. Privacy and Data Use",
      icon: <Shield className="w-5 h-5" />,
      content: [
        "All personal and health-related data is handled securely per data protection laws",
        "Data shared through the platform is accessible only to authorized professionals",
        "Aggregated, anonymized data may be used for research and service improvement",
        "Please refer to our Privacy Policy for detailed information",
      ],
    },
    {
      title: "8. User Conduct",
      icon: <UserX className="w-5 h-5" />,
      content: [
        "Do not impersonate another individual or provide false information",
        "Do not share harmful, threatening, or abusive content",
        "Do not record or share any consultation without written consent",
        "Do not use the platform for any unlawful or unauthorized purpose",
        "Violation may lead to account suspension or termination without notice",
      ],
    },
    {
      title: "9. Intellectual Property",
      icon: <FileText className="w-5 h-5" />,
      content: [
        "All content, branding, and training materials are exclusive property of Psyra.in",
        "Platform functionality and graphics are protected intellectual property",
        "You may not reuse, copy, or distribute any content without written permission",
        "Unauthorized use of intellectual property may result in legal action",
      ],
    },
    {
      title: "10. Limitation of Liability",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: [
        "Psyra.in is not liable for service interruptions due to technical issues",
        "We are not responsible for third-party failures or network problems",
        "No liability for indirect, incidental, or consequential damages",
        "Users are responsible for their own safety and well-being",
        "Delays in accessing healthcare providers due to scheduling issues",
      ],
    },
    {
      title: "11. Termination",
      icon: <XCircle className="w-5 h-5" />,
      content: [
        "Either party may terminate their use of services at any time",
        "Upon termination, you lose access to your account and associated data",
        "Data retention follows applicable law or company policy",
        "Psyra.in reserves the right to delete inactive or abusive accounts",
        "Refunds for unused services may be provided at our discretion",
      ],
    },
    {
      title: "12. Modifications",
      icon: <Scale className="w-5 h-5" />,
      content: [
        "We may revise these Terms of Use from time to time",
        "Updated terms will be posted on this page and effective immediately",
        "Continued use after changes constitutes acceptance of new terms",
        "Users are responsible for reviewing terms periodically",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F9FC] to-white">
      {/* Header */}
      <div className="bg-[#005657] text-white py-16">
        <div className="max-w-4xl mt-18 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Use
            </h1>
            <p className="text-xl text-[#B6E5DF] max-w-2xl">
              Welcome to Psyra.in – Your Mental Wellness Partner
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Effective Date */}

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-[#005657] mb-4">
            Agreement to Terms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <>
              {
                'By accessing or using our website, mobile applications, or services (collectively, "Platform"), you agree to comply with and be bound by the following Terms of Use.'
              }
            </>
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800 font-medium">
              ⚠️ If you do not agree to these Terms, please do not use our
              services.
            </p>
          </div>
        </motion.div>

        {/* Main Sections */}
        <div className="space-y-6 mb-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#B6E5DF] rounded-full flex items-center justify-center text-[#005657]">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-[#005657]">
                  {section.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {section.content}
              </p>

              <ul className="space-y-2 mb-4">
                {section.details.map((detail, detailIndex) => (
                  <li
                    key={detailIndex}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-[#B6E5DF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {section.note && (
                <div className="bg-[#B6E5DF]/20 rounded-lg p-3">
                  <p className="text-[#005657] text-sm font-medium">
                    {section.note}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Terms */}
        <div className="space-y-6 mb-12">
          {additionalTerms.map((term, index) => (
            <motion.div
              key={term.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#B6E5DF] rounded-full flex items-center justify-center text-[#005657]">
                  {term.icon}
                </div>
                <h3 className="text-xl font-bold text-[#005657]">
                  {term.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {term.content.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-[#B6E5DF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="bg-gradient-to-r from-[#005657] to-[#007A7B] rounded-xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Questions About These Terms?
          </h3>
          <p className="text-[#B6E5DF] mb-6">
            If you have any questions about these Terms of Use, please do not
            hesitate to contact us.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {/* <div>
              <h4 className="font-semibold mb-2">Email Support</h4>
              <p className="text-[#B6E5DF]">support@psyra.in</p>
            </div> */}
            <div>
              <h4 className="font-semibold mb-2">Phone Support</h4>
              <p className="text-[#B6E5DF]">+91 88917 24199</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
