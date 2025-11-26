import type { Blog } from "@/types/blog";

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Why Therapy Works: What Actually Happens in a Session",
    name: "why-therapy-works",
    category: "Therapy",
    shortDescription:
      "Understand what truly happens in therapy sessions and why therapy works for mental and emotional wellbeing.",
    thumbnail: "/therapy-session-banner.jpg",
    content: `

<div class="mb-10">
  <img 
    src="/therapy-session.jpg" 
    alt="Therapy session in a calm, welcoming room" 
    class="rounded-2xl shadow-lg w-full object-cover h-[400px]"
  />
</div>

<div class="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
  <span class="font-medium text-[#00989D]">Dr. Neha Rao</span>
  <span>•</span>
  <span>Clinical Psychologist</span>
  <span>•</span>
  <span>12 min read</span>
</div>

<p class="text-xl text-gray-700 leading-relaxed mb-8 font-light">
  Therapy has become one of the most powerful tools for emotional well-being, stress relief,
  and inner healing. Yet many people hesitate before booking their first session simply because
  they don't know what actually happens inside a therapist's room.
</p>

<div class="my-10 py-8 px-6 border-l-4 border-[#00989D] bg-gradient-to-r from-[#F0FAFA] to-transparent">
  <p class="text-2xl font-light text-[#005657] italic leading-relaxed">
    "Most people wonder whether therapy is just talking, or if therapists give advice. This blog will break down exactly what happens—and why therapy is so transformative."
  </p>
</div>

<h2 class="text-3xl font-bold text-[#005657] mb-6 mt-12">What Actually Happens in a Therapy Session?</h2>

<p class="text-gray-700 leading-relaxed mb-6">
  People often imagine therapy as lying on a couch while someone quietly takes notes. But real
  therapy is far deeper—and far more transformative. Here's what actually happens:
</p>

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-[#F7FAFA] p-6 rounded-xl border border-[#E0F0F0]">
    <h3 class="text-lg font-bold text-[#00989D] mb-3">Safe & Private Space</h3>
    <p class="text-gray-600 text-sm leading-relaxed">
      Therapy begins with safety. You are free to express emotions, fears, and experiences without
      judgment. Everything you share remains confidential.
    </p>
  </div>
  <div class="bg-[#F7FAFA] p-6 rounded-xl border border-[#E0F0F0]">
    <h3 class="text-lg font-bold text-[#00989D] mb-3">Your Own Pace</h3>
    <p class="text-gray-600 text-sm leading-relaxed">
      You don't need to prepare. You don't need to plan what to say. Your therapist guides you gently through the process.
    </p>
  </div>
  <div class="bg-[#F7FAFA] p-6 rounded-xl border border-[#E0F0F0]">
    <h3 class="text-lg font-bold text-[#00989D] mb-3">Pattern Recognition</h3>
    <p class="text-gray-600 text-sm leading-relaxed">
      Your therapist observes recurring emotional triggers, thought loops causing anxiety, and childhood patterns affecting adult life.
    </p>
  </div>
  <div class="bg-[#F7FAFA] p-6 rounded-xl border border-[#E0F0F0]">
    <h3 class="text-lg font-bold text-[#00989D] mb-3">Goal Setting</h3>
    <p class="text-gray-600 text-sm leading-relaxed">
      Together you build goals: reduce anxiety, control overthinking, build confidence, heal from trauma, improve communication.
    </p>
  </div>
</div>

<h2 class="text-3xl font-bold text-[#005657] mb-6 mt-12">Why Therapy Works — The Science</h2>

<p class="text-gray-700 leading-relaxed mb-6">
  Therapy works because it changes your brain, your thoughts, your emotions, and your behaviors. Here's the science:
</p>

<div class="flex flex-col md:flex-row gap-4 my-8">
  <div class="flex-1 p-6 bg-gradient-to-br from-[#00989D] to-[#005657] rounded-xl text-white">
    <p class="text-sm font-medium opacity-80 mb-2">Cognitive Change</p>
    <p class="text-lg font-light">Your thoughts become healthier, reducing stress and anxiety over time.</p>
  </div>
  <div class="flex-1 p-6 bg-gradient-to-br from-[#00B5B8] to-[#00989D] rounded-xl text-white">
    <p class="text-sm font-medium opacity-80 mb-2">Emotional Regulation</p>
    <p class="text-lg font-light">You learn to process emotions instead of suppressing them.</p>
  </div>
</div>

<h2 class="text-3xl font-bold text-[#005657] mb-6 mt-12">Types of Therapy</h2>

<ul class="space-y-3 text-gray-700">
  <li class="flex items-start gap-3">
    <span class="w-2 h-2 rounded-full bg-[#00989D] mt-2 flex-shrink-0"></span>
    <span><strong>CBT</strong> — Changes negative thought patterns</span>
  </li>
  <li class="flex items-start gap-3">
    <span class="w-2 h-2 rounded-full bg-[#00989D] mt-2 flex-shrink-0"></span>
    <span><strong>DBT</strong> — Manages intense emotions effectively</span>
  </li>
  <li class="flex items-start gap-3">
    <span class="w-2 h-2 rounded-full bg-[#00989D] mt-2 flex-shrink-0"></span>
    <span><strong>Psychodynamic Therapy</strong> — Explores childhood patterns</span>
  </li>
  <li class="flex items-start gap-3">
    <span class="w-2 h-2 rounded-full bg-[#00989D] mt-2 flex-shrink-0"></span>
    <span><strong>Trauma Therapy</strong> — Heals deep emotional wounds</span>
  </li>
</ul>

<div class="mt-12 p-8 bg-[#F0FAFA] rounded-2xl border border-[#D0E8E8]">
  <h3 class="text-xl font-bold text-[#005657] mb-4">Conclusion</h3>
  <p class="text-gray-700 leading-relaxed">
    Therapy helps you heal, understand yourself, and build a stronger emotional life. Whether
    online or offline, therapy offers clarity, healing, and emotional empowerment for everyone.
  </p>
</div>
    `,
    createdAt: "2025-11-23",
  },
  {
    id: "2",
    title: "How Overthinking Affects Your Mental Health",
    name: "how-overthinking-affects-you",
    category: "Mindfulness",
    shortDescription:
      "Overthinking drains energy, increases anxiety, and affects your daily life. Here's why it happens and how to stop it.",
    thumbnail: "/overthinking.webp",
    content: `


<div class="flex items-center gap-4 text-sm text-gray-500 mb-6">
  <span class="font-medium text-[#00989D]">Dr. Aadhira Menon</span>
  <span>•</span>
  <span>7 min read</span>
</div>

<div class="aspect-video rounded-xl overflow-hidden mb-10">
  <img 
    src="/overthinking.jpg" 
    alt="Person overthinking with abstract thought visualization"
    class="w-full h-full object-cover"
  />
</div>

<p class="text-xl text-gray-600 leading-relaxed mb-10">
  Overthinking is one of the most common issues people face today. It's exhausting, mentally draining,
  and often leads to anxiety or sleepless nights. But why do we overthink? And how can we break the cycle?
</p>

<div class="space-y-12">

  <div class="flex gap-6">
    <div class="flex-shrink-0">
      <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00989D] text-white font-bold text-xl">1</span>
    </div>
    <div>
      <h2 class="text-2xl font-bold text-[#005657] mb-4">Why We Overthink</h2>
      <p class="text-gray-700 mb-4">Understanding the root causes helps us address the problem:</p>
      <div class="grid grid-cols-2 gap-3">
        <div class="p-4 bg-gray-50 rounded-lg text-sm text-gray-600">Fear of wrong decisions</div>
        <div class="p-4 bg-gray-50 rounded-lg text-sm text-gray-600">Past emotional experiences</div>
        <div class="p-4 bg-gray-50 rounded-lg text-sm text-gray-600">Lack of emotional clarity</div>
        <div class="p-4 bg-gray-50 rounded-lg text-sm text-gray-600">High self-expectations</div>
      </div>
    </div>
  </div>

  <div class="p-6 rounded-xl bg-gradient-to-r from-[#E8F6F6] to-[#F0FAFA] border-l-4 border-[#00989D]">
    <p class="font-medium text-[#005657] mb-1">Key Insight</p>
    <p class="text-gray-700">Overthinking is not a personality trait — it's a habit the brain learns over time, and habits can be changed.</p>
  </div>

  <div class="flex gap-6">
    <div class="flex-shrink-0">
      <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00989D] text-white font-bold text-xl">2</span>
    </div>
    <div>
      <h2 class="text-2xl font-bold text-[#005657] mb-4">How Overthinking Affects You</h2>
      <p class="text-gray-700 mb-4">It impacts everyday life in ways you may not notice:</p>
      <div class="space-y-3">
        <div class="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
          <div class="w-3 h-3 rounded-full bg-red-400"></div>
          <span class="text-gray-700">Difficulty sleeping and restless nights</span>
        </div>
        <div class="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
          <div class="w-3 h-3 rounded-full bg-orange-400"></div>
          <span class="text-gray-700">Constant self-doubt in decisions</span>
        </div>
        <div class="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
          <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
          <span class="text-gray-700">Reduced productivity at work</span>
        </div>
        <div class="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
          <div class="w-3 h-3 rounded-full bg-teal-400"></div>
          <span class="text-gray-700">Anxiety spikes during routine tasks</span>
        </div>
      </div>
    </div>
  </div>

  <div class="flex gap-6">
    <div class="flex-shrink-0">
      <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00989D] text-white font-bold text-xl">3</span>
    </div>
    <div>
      <h2 class="text-2xl font-bold text-[#005657] mb-4">Ways to Stop Overthinking</h2>
      <p class="text-gray-700 mb-4">Practical techniques to regain control:</p>
      <ol class="space-y-4">
        <li class="flex items-start gap-4">
          <span class="flex-shrink-0 w-8 h-8 rounded-full bg-[#E8F6F6] text-[#00989D] font-semibold flex items-center justify-center text-sm">a</span>
          <div>
            <p class="font-medium text-gray-800">Practice grounding techniques</p>
            <p class="text-sm text-gray-500">Focus on your senses to bring yourself back to the present moment</p>
          </div>
        </li>
        <li class="flex items-start gap-4">
          <span class="flex-shrink-0 w-8 h-8 rounded-full bg-[#E8F6F6] text-[#00989D] font-semibold flex items-center justify-center text-sm">b</span>
          <div>
            <p class="font-medium text-gray-800">Limit decision-making fatigue</p>
            <p class="text-sm text-gray-500">Simplify daily choices to save mental energy for important decisions</p>
          </div>
        </li>
        <li class="flex items-start gap-4">
          <span class="flex-shrink-0 w-8 h-8 rounded-full bg-[#E8F6F6] text-[#00989D] font-semibold flex items-center justify-center text-sm">c</span>
          <div>
            <p class="font-medium text-gray-800">Journal your thoughts</p>
            <p class="text-sm text-gray-500">Writing helps externalize and process recurring thoughts</p>
          </div>
        </li>
        <li class="flex items-start gap-4">
          <span class="flex-shrink-0 w-8 h-8 rounded-full bg-[#E8F6F6] text-[#00989D] font-semibold flex items-center justify-center text-sm">d</span>
          <div>
            <p class="font-medium text-gray-800">Engage in mindfulness exercises</p>
            <p class="text-sm text-gray-500">Regular meditation trains your brain to stay present</p>
          </div>
        </li>
      </ol>
    </div>
  </div>

</div>

<div class="mt-12 p-8 bg-[#005657] rounded-2xl text-white">
  <h3 class="text-xl font-bold mb-3">Final Thought</h3>
  <p class="text-white/90 leading-relaxed">
    Overthinking is a learned pattern — and with the right tools, it can be unlearned. 
    Start small, and practice mindfulness daily to regain control over your thoughts.
  </p>
</div>
    `,
    createdAt: "2025-11-24",
  },
  {
    id: "3",
    title: "Signs of Burnout You Should Never Ignore",
    name: "signs-of-burnout",
    category: "Wellbeing",
    shortDescription:
      "Burnout doesn't happen overnight. Here are early symptoms, causes, and how to recover before it gets severe.",
    thumbnail: "/burnout-banner.webp",
    content: `

<div class="relative mb-10">
  <img 
    src="/burnout.jpg" 
    alt="Person showing signs of burnout" 
    class="rounded-2xl w-full h-[350px] object-cover"
  />
  <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl">
    <div class="flex items-center gap-3 text-white/80 text-sm">
      <span class="font-medium">Dr. Rishita S</span>
      <span>•</span>
      <span>9 min read</span>
    </div>
  </div>
</div>


<div class="prose prose-lg max-w-none text-[#333] leading-relaxed">

  <!-- KEY POINTS -->
  <section class="mb-10">
    <h2 class="text-3xl font-bold text-[#2D2B62] mb-4">Key Points</h2>
    <ul class="list-disc pl-6">
      <li>Burnout is a state of chronic stress that leads to exhaustion, detachment, and feelings of ineffectiveness.</li>
      <li>Physical signs of burnout may include chronic fatigue and insomnia.</li>
      <li>Signs of detachment may present as pessimism or self-isolation.</li>
      <li>Sufferers of burnout ultimately experience a lack of productivity and poor job performance.</li>
    </ul>
  </section>

  <!-- INTRO PARAGRAPH -->
  <section class="mb-10">
    <p>
      Burnout is one of those road hazards in life that high-achievers really should keep a close eye out for,
      but sadly—often because of their "I can do everything" personalities—they rarely see it coming. Because
      high-achievers are often so passionate about what they do, they tend to ignore the fact that they're working
      exceptionally long hours, taking on exceedingly heavy workloads, and putting enormous pressure on themselves
      to excel—all of which make them ripe for burnout.
    </p>
  </section>

  <!-- WHAT IS BURNOUT -->
  <section class="mb-12">
    <h2 class="text-3xl font-bold text-[#2D2B62] mb-4">What is burnout?</h2>
    <p>Burnout is a state of chronic stress that leads to:</p>

    <ul class="list-disc pl-6 my-4">
      <li>Physical and emotional exhaustion</li>
      <li>Cynicism and detachment</li>
      <li>Feelings of ineffectiveness and lack of accomplishment</li>
    </ul>

    <p>
      When in the throes of full-fledged burnout, you are no longer able to function effectively on a personal or
      professional level. However, burnout doesn't happen suddenly. It develops slowly and insidiously over time,
      often without you noticing. Still, our bodies and minds do give warnings, and recognizing them early can save
      you from worsening stress.
    </p>
  </section>

  <!-- SIGNS OF BURNOUT -->
  <section class="mb-12">
    <h2 class="text-3xl font-bold text-[#2D2B62] mb-6">What are the signs of burnout?</h2>

    <p>
      Each of the three areas described above is characterized by certain signs and symptoms. These symptoms lie along
      a continuum — meaning burnout is an advanced stage of unmanaged stress. The earlier you recognize the signs, the
      easier it is to intervene and rebalance your life.
    </p>

    <!-- Physical & Emotional Exhaustion -->
    <h3 class="text-2xl font-semibold text-[#6C63FF] mt-10 mb-3">
      Signs of Physical and Emotional Exhaustion
    </h3>

    <ul class="list-disc pl-6 space-y-3">
      <li><strong>Chronic fatigue:</strong> tiredness in early stages → full exhaustion later.</li>
      <li><strong>Insomnia:</strong> trouble sleeping initially → chronic sleeplessness in later stages.</li>
      <li><strong>Forgetfulness / impaired concentration:</strong> difficulty focusing which worsens over time.</li>
      <li><strong>Physical symptoms:</strong> chest pain, palpitations, shortness of breath, dizziness, headaches, etc.</li>
      <li><strong>Increased illness:</strong> weakened immunity leading to frequent sickness.</li>
      <li><strong>Loss of appetite:</strong> occasional meal skipping → complete loss of appetite later.</li>
      <li><strong>Anxiety:</strong> mild tension → severe anxiety affecting work and personal life.</li>
      <li><strong>Depression:</strong> mild sadness → severe hopelessness; seek help if extreme.</li>
      <li><strong>Anger:</strong> irritability → full anger outbursts; seek help if violent thoughts appear.</li>
    </ul>

    <!-- Cynicism & Detachment -->
    <h3 class="text-2xl font-semibold text-[#6C63FF] mt-12 mb-3">
      Signs of Cynicism and Detachment
    </h3>

    <ul class="list-disc pl-6 space-y-3">
      <li><strong>Loss of enjoyment:</strong> first at work → eventually in all life areas.</li>
      <li><strong>Pessimism:</strong> negative self-talk → distrust in others and emotional withdrawal.</li>
      <li><strong>Isolation:</strong> avoiding socializing → anger when approached; changing schedules to avoid people.</li>
      <li><strong>Detachment:</strong> feeling disconnected; avoiding responsibilities; shutting down emotionally.</li>
    </ul>

    <!-- Ineffectiveness & Lack of Accomplishment -->
    <h3 class="text-2xl font-semibold text-[#6C63FF] mt-12 mb-3">
      Signs of Ineffectiveness and Lack of Accomplishment
    </h3>

    <ul class="list-disc pl-6 space-y-3">
      <li><strong>Apathy and hopelessness:</strong> feeling nothing matters; worsening over time.</li>
      <li><strong>Increased irritability:</strong> frustration from feeling ineffective; may damage relationships.</li>
      <li><strong>Lack of productivity and poor performance:</strong> long hours but declining output; tasks piling up.</li>
    </ul>
  </section>

  <!-- FINAL PARAGRAPHS -->
  <section class="mb-16">
    <p>
      If you're not experiencing any of these symptoms, that’s great — but keep these signs in mind.
      Burnout is subtle and gradually builds up as you push through your busy life.
    </p>

    <p class="mt-4">
      If you are experiencing some of these symptoms, take it as a wake-up call. Assess the stress levels in your life
      and make necessary changes before burnout progresses further. Burnout doesn’t resolve on its own — conscious
      lifestyle changes are necessary.
    </p>

    <p class="mt-4 font-medium">
      Making small adjustments now can help you stay balanced, protect your wellbeing, and prevent burnout from taking control.
    </p>
  </section>

</div>

    `,
    createdAt: "2025-11-24",
  },
]
