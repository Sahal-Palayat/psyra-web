"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Shield,
  Eye,
  Lock,
  Database,
  UserCheck,
  Globe,
} from "lucide-react";

export default function Consent() {
  const privacySections = [
    {
      id: "information-collection",
      title: "1. Information We Collect",
      icon: <Database className="w-5 h-5" />,
      content: `We collect information you provide directly to us, such as when you create an account, book appointments, or communicate with our therapists. This includes personal information, health information, and communication records.`,
      details: [
        "Personal identifiers (name, email, phone number, date of birth)",
        "Health information and mental health history",
        "Session notes and treatment records",
        "Payment and billing information",
        "Device and usage information",
        "Communication preferences",
      ],
    },
    {
      id: "information-use",
      title: "2. How We Use Your Information",
      icon: <UserCheck className="w-5 h-5" />,
      content: `We use your information to provide, maintain, and improve our mental health services, communicate with you, and ensure the safety and security of our platform.`,
      details: [
        "Providing mental health services and treatment",
        "Scheduling and managing appointments",
        "Communicating with you about your care",
        "Processing payments and billing",
        "Improving our services and platform",
        "Complying with legal and regulatory requirements",
      ],
    },
    {
      id: "information-sharing",
      title: "3. Information Sharing and Disclosure",
      icon: <Globe className="w-5 h-5" />,
      content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.`,
      details: [
        "With your healthcare providers for treatment purposes",
        "With your explicit consent for specific purposes",
        "To comply with legal obligations or court orders",
        "To protect the safety of individuals or the public",
        "With service providers who assist in our operations",
        "In case of business transfers or mergers",
      ],
    },
    {
      id: "data-security",
      title: "4. Data Security and Protection",
      icon: <Lock className="w-5 h-5" />,
      content: `We implement comprehensive security measures to protect your personal and health information from unauthorized access, use, or disclosure.`,
      details: [
        "End-to-end encryption for all communications",
        "Secure data storage with industry-standard protocols",
        "Regular security audits and assessments",
        "Access controls and authentication measures",
        "Employee training on privacy and security",
        "Incident response and breach notification procedures",
      ],
    },
  ];

  const additionalSections = [
    {
      title: "5. Your Privacy Rights",
      content: [
        "Access your personal information and health records",
        "Request corrections to inaccurate information",
        "Request deletion of your personal information",
        "Opt-out of certain communications",
        "Request a copy of your data in a portable format",
        "File complaints with regulatory authorities",
      ],
    },
    {
      title: "6. Data Retention",
      content: [
        "Treatment records retained as required by law (typically 7-10 years)",
        "Personal information retained while your account is active",
        "Communication records retained for quality assurance",
        "Payment information retained for tax and legal purposes",
        "Marketing preferences retained until you opt-out",
        "Anonymized data may be retained for research purposes",
      ],
    },
    {
      title: "7. International Data Transfers",
      content: [
        "Data primarily stored and processed in India",
        "Some service providers may be located outside India",
        "Appropriate safeguards in place for international transfers",
        "Compliance with applicable data protection laws",
        "Your consent obtained for necessary transfers",
        "Right to object to international transfers",
      ],
    },
    {
      title: "8. Cookies and Tracking Technologies",
      content: [
        "Essential cookies for platform functionality",
        "Analytics cookies to improve user experience",
        "Preference cookies to remember your settings",
        "No advertising or tracking cookies",
        "Ability to control cookie preferences",
        "Clear information about cookie usage",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F9FC] to-white">
      {/* Header */}
      <div className="bg-[#005657] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#B6E5DF] hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#B6E5DF] rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#005657]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-xl text-[#B6E5DF] max-w-2xl">
              Your privacy is our priority. Learn how we protect and handle your
              personal information.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#B6E5DF]/20 rounded-xl p-6 mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-[#005657] rounded-full flex items-center justify-center">
              <Eye className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-lg font-semibold text-[#005657]">
              Privacy Notice
            </h2>
          </div>
          <p className="text-[#005657]/80 mb-2">
            <strong>Last Updated:</strong> December 23, 2024
          </p>
          <p className="text-[#005657]/80">
            <strong>Effective Date:</strong> December 23, 2024
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-[#005657] mb-4">
            Our Commitment to Your Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Psyra, we understand that your mental health information is
            deeply personal and sensitive. This Privacy Policy explains how we
            collect, use, protect, and share your information when you use our
            mental health services and platform.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We are committed to maintaining the highest standards of privacy and
            confidentiality, in compliance with applicable healthcare privacy
            laws, including HIPAA (where applicable) and Indian data protection
            regulations.
          </p>
          <div className="bg-[#B6E5DF]/20 rounded-lg p-4">
            <p className="text-[#005657] font-medium">
              🔒 Your trust is essential to the therapeutic relationship. We
              will never compromise your privacy or use your information for
              purposes other than providing you with the best possible mental
              health care.
            </p>
          </div>
        </motion.div>

        {/* Main Privacy Sections */}
        <div className="space-y-6 mb-12">
          {privacySections.map((section, index) => (
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
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-[#005657] mb-3">Details:</h4>
                <ul className="space-y-2">
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="space-y-6 mb-12">
          {additionalSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-xl font-bold text-[#005657] mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
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

        {/* Contact for Privacy Concerns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="bg-gradient-to-r from-[#005657] to-[#007A7B] rounded-xl p-8 text-white"
        >
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-[#B6E5DF]" />
            <h3 className="text-2xl font-bold">
              Privacy Questions or Concerns?
            </h3>
          </div>
          <p className="text-[#B6E5DF] mb-6">
            If you have questions about this Privacy Policy or concerns about
            how we handle your information, please contact our Privacy Officer.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Privacy Officer</h4>
              <p className="text-[#B6E5DF]">privacy@psyra.com</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Data Protection Hotline</h4>
              <p className="text-[#B6E5DF]">+91 88917 24199</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-sm text-[#B6E5DF]">
              We will respond to privacy inquiries within 48 hours during
              business days.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
