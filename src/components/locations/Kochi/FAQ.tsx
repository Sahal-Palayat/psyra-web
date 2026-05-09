const faqs = [
  {
    question:
      "Is online Malayalam counselling in Kochi effective?",
    answer:
      "Yes. Online Malayalam counselling can be highly effective for anxiety, stress, depression, relationship concerns, emotional wellbeing, and personal challenges when guided by experienced psychologists.",
  },
  {
    question:
      "Can I speak to a psychologist in Malayalam?",
    answer:
      "Yes. Psyra offers online counselling sessions in Malayalam to help individuals communicate emotions more comfortably and openly during therapy.",
  },
  {
    question:
      "How do online counselling sessions work with Psyra?",
    answer:
      "After booking a session, individuals can attend confidential online video counselling sessions from the comfort of their home using a secure online platform.",
  },
  {
    question:
      "Are online therapy sessions confidential?",
    answer:
      "Yes. All online counselling sessions are conducted privately and confidentially to provide a safe and supportive environment for emotional conversations.",
  },
  {
    question:
      "Who can attend online counselling sessions?",
    answer:
      "Individuals, couples, students, working professionals, and families across Kochi and Kerala can attend online Malayalam counselling sessions based on their emotional and mental health needs.",
  },
  {
    question:
      "What issues are commonly addressed in online counselling?",
    answer:
      "Online counselling sessions commonly support anxiety, stress, overthinking, depression, relationship issues, family conflicts, emotional burnout, and self-esteem concerns.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        {/* HEADING */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-[#008C95] mb-4">
            Frequently Asked Questions
          </p>

          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight text-[#1E1E1E] mb-6">
            Online Malayalam Counselling FAQs
          </h2>

          <p className="text-[17px] leading-8 text-[#5F5F5F]">
            Find answers to common questions about online Malayalam counselling
            sessions in Kochi, therapy process, confidentiality, and emotional
            support with Psyra.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F8F8F8] border border-[#ECECEC] rounded-[28px] p-8"
            >
              {/* QUESTION */}
              <h3 className="text-xl lg:text-2xl font-medium text-[#1E1E1E] mb-5 leading-snug">
                {faq.question}
              </h3>

              {/* ANSWER */}
              <p className="text-[16px] leading-8 text-[#5F5F5F]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}