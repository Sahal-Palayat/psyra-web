"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Shield,
  Eye,
  Database,
  UserCheck,
  Globe,
  Server,
  Cookie,
  Users,
  Clock,
  ExternalLink,
  RefreshCw,
} from "lucide-react";

export default function PrivacyPolicy() {
  const privacySections = [
    {
      id: "information-collection",
      title: "1. Information We Collect",
      icon: <Database className="w-5 h-5" />,
      content: `We may collect the following types of information when you access our services:`,
      subsections: [
        {
          title: "a) Personal Information",
          items: [
            "Name, email address, phone number, address, gender, age, date of birth",
            "Login credentials (username and encrypted password)",
            "Contact preferences",
          ],
        },
        {
          title: "b) Health Information",
          items: [
            "Medical history, current symptoms, mental health records",
            "Reports, prescriptions, assessments and therapy notes (as applicable)",
            "Responses and participation in wellness programs, therapy, or consultations",
          ],
        },
        {
          title: "c) Operational and Technical Data",
          items: [
            "Device information (browser, OS, device model)",
            "Log data (IP address, access time, pages visited)",
            "Cookies and analytics data (to improve user experience)",
          ],
        },
        {
          title: "d) Organizational Information",
          items: [
            "In case of corporate or academic programs: name of institution, role, attendance, and participation data in training sessions",
          ],
        },
      ],
    },
    {
      id: "information-use",
      title: "2. How We Use Your Information",
      icon: <UserCheck className="w-5 h-5" />,
      content: `We use your information to:`,
      details: [
        "Provide mental health and wellness services (consultation, therapy, workshops, training)",
        "Facilitate scheduling, notifications, and communication with providers",
        "Maintain personal health records securely",
        "Customize your experience and improve our services",
        "Conduct analytics and feedback evaluations (anonymized)",
        "Process payments and manage billing",
        "Respond to support queries and feedback",
      ],
    },
    {
      id: "consent",
      title: "3. Consent and Authorization",
      icon: <Shield className="w-5 h-5" />,
      content: `Your consent and authorization details:`,
      details: [
        "By creating an account or using our services, you consent to the collection, use, and sharing of your data as outlined in this policy",
        "For minors or individuals under guardianship, a parent/legal guardian must provide consent",
        "You may withdraw your consent at any time, subject to legal or contractual restrictions",
      ],
    },
    {
      id: "data-sharing",
      title: "4. Data Sharing and Disclosure",
      icon: <Globe className="w-5 h-5" />,
      content: `We do not sell or rent your personal data to third parties. We may share data:`,
      details: [
        "With licensed mental health professionals and facilitators providing your care",
        "With authorized team members for scheduling, coordination, or support",
        "With government or legal authorities when required by law",
        "With corporate or academic clients (only aggregate/anonymous feedback and attendance data unless prior consent is obtained)",
      ],
    },
  ];

  const additionalSections = [
    {
      title: "5. Data Storage and Security",
      icon: <Server className="w-5 h-5" />,
      content: [
        "Your data is stored on secure, HIPAA-compliant and GDPR-compliant cloud infrastructure",
        "All personal health information is encrypted during storage and transmission",
        "Access is restricted to authorized personnel only, on a need-to-know basis",
        "We implement regular audits, access control, and security protocols to protect your information",
      ],
    },
    {
      title: "6. Cookies and Tracking Technologies",
      icon: <Cookie className="w-5 h-5" />,
      content: [
        "Cookies and similar technologies are used to enhance site performance and user experience",
        "You may disable cookies in your browser settings, though some features may not function properly as a result",
      ],
    },
    {
      title: "7. Your Rights",
      icon: <Eye className="w-5 h-5" />,
      content: [
        "Access your data and personal health records",
        "Correct or update inaccurate information",
        "Request deletion of your user account and associated data",
        "Opt-out of marketing or promotional emails (service notifications cannot be disabled)",
        "To exercise these rights, contact us at support@psyra.in",
      ],
    },
    {
      title: "8. Data Retention",
      icon: <Clock className="w-5 h-5" />,
      content: [
        "We retain your data as long as your account is active or as required by law",
        "On account deletion, all personal and health data will be permanently erased, except billing or legal records we are required to retain",
      ],
    },
    {
      title: "9. Children and Minors",
      icon: <Users className="w-5 h-5" />,
      content: [
        "Our services are intended for users aged 18 and above",
        "For minors receiving care, consent must be provided by a parent/guardian",
        "Psyra.in does not knowingly collect data from children without proper authorization",
      ],
    },
    {
      title: "10. Third-Party Services",
      icon: <ExternalLink className="w-5 h-5" />,
      content: [
        "Our platform may contain links to third-party sites or services",
        "This Privacy Policy does not apply to them, and we are not responsible for their content, privacy practices, or security",
      ],
    },
    {
      title: "11. Updates to this Policy",
      icon: <RefreshCw className="w-5 h-5" />,
      content: [
        "We may revise this Privacy Policy from time to time",
        "All updates will be posted on this page with a new effective date",
        "Your continued use of the platform after changes indicates your agreement to the revised policy",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F9FC] to-white">
      {/* Header */}
      <div className="bg-[#005657] text-white py-16">
        <div className="max-w-4xl  mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex mt-14 items-center gap-4 mb-4">
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
        {/* Effective Date */}

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
            Psyra.in ("we", "our", or "us") is committed to protecting your
            privacy and maintaining the confidentiality of the personal and
            health information you share with us. This Privacy Policy outlines
            how we collect, use, disclose, and safeguard your information when
            you visit or use our website, mobile applications, or related
            services (collectively referred to as the "Platform").
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

              {section.subsections && (
                <div className="space-y-4">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#005657] mb-3">
                        {subsection.title}
                      </h4>
                      <ul className="space-y-2">
                        {subsection.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <div className="w-2 h-2 bg-[#B6E5DF] rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {section.details && (
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
              )}
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
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#B6E5DF] rounded-full flex items-center justify-center text-[#005657]">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-[#005657]">
                  {section.title}
                </h3>
              </div>
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
            {/* <div>
              <h4 className="font-semibold mb-2">Privacy Officer</h4>
              <p className="text-[#B6E5DF]">support@psyra.in</p>
            </div> */}
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
