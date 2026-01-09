import type { FaqItem } from "@/constants/locationFaq";

export default function LocationFaq({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section className="pb-20 pt-4 mx-4 md:mx-16" id="faq">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group rounded-xl border border-teal-100 px-4 py-5 transition-all"
          >
            <summary className="cursor-pointer list-none flex justify-between items-center text-[16px] md:text-[20px] text-[#005657]">
              {faq.question}
              <span className="text-teal-600 text-xl transition-transform group-open:rotate-45">
                +
              </span>
            </summary>

            <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out">
              <div className="overflow-hidden">
                <p className="mt-3 text-[15px] md:text-[19px] text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
