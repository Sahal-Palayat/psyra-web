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

<p class="text-xl text-gray-700 leading-relaxed mb-8">
  Burnout is more than "being tired." It is a deep emotional, physical, and mental exhaustion 
  caused by overwhelming stress. Most people notice it only when it becomes severe — 
  but early signs start long before that.
</p>

<div class="p-5 bg-amber-50 border border-amber-200 rounded-xl mb-10 flex gap-4">
  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
    <span class="text-amber-600 text-lg">⚠</span>
  </div>
  <div>
    <p class="font-semibold text-amber-800 mb-1">Early Warning</p>
    <p class="text-amber-700 text-sm">Burnout builds up slowly and quietly — usually disguised as routine stress.</p>
  </div>
</div>

<h2 class="text-2xl font-bold text-[#005657] mb-6 flex items-center gap-3">
  <span class="w-10 h-10 rounded-lg bg-[#00989D] text-white flex items-center justify-center text-lg font-bold">1</span>
  Emotional Signs of Burnout
</h2>

<div class="grid md:grid-cols-2 gap-4 mb-10">
  <div class="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <p class="font-medium text-gray-800 mb-1">Feeling emotionally drained</p>
    <p class="text-sm text-gray-500">Every day feels like you're running on empty</p>
  </div>
  <div class="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <p class="font-medium text-gray-800 mb-1">Loss of motivation</p>
    <p class="text-sm text-gray-500">Things you once enjoyed no longer excite you</p>
  </div>
  <div class="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <p class="font-medium text-gray-800 mb-1">Increased irritability</p>
    <p class="text-sm text-gray-500">Small things trigger big emotional reactions</p>
  </div>
  <div class="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <p class="font-medium text-gray-800 mb-1">Feeling detached</p>
    <p class="text-sm text-gray-500">Disconnection from work, people, and purpose</p>
  </div>
</div>

<div class="my-8 py-6 border-y border-gray-200">
  <blockquote class="text-xl italic text-[#005657] text-center font-light">
    "If you're living in survival mode for too long, burnout becomes inevitable."
  </blockquote>
</div>

<h2 class="text-2xl font-bold text-[#005657] mb-6 flex items-center gap-3">
  <span class="w-10 h-10 rounded-lg bg-[#00989D] text-white flex items-center justify-center text-lg font-bold">2</span>
  Physical Signs of Burnout
</h2>

<div class="flex flex-wrap gap-3 mb-10">
  <span class="px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium border border-red-100">Persistent headaches</span>
  <span class="px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium border border-red-100">Difficulty sleeping</span>
  <span class="px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium border border-red-100">Heavy fatigue</span>
  <span class="px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium border border-red-100">Muscle tension</span>
  <span class="px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium border border-red-100">Body pain</span>
</div>

<h2 class="text-2xl font-bold text-[#005657] mb-6 flex items-center gap-3">
  <span class="w-10 h-10 rounded-lg bg-[#00989D] text-white flex items-center justify-center text-lg font-bold">3</span>
  Behavioral Signs
</h2>

<div class="space-y-3 mb-10">
  <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
    <div class="w-2 h-2 rounded-full bg-[#00989D]"></div>
    <span class="text-gray-700">Procrastination increases significantly</span>
  </div>
  <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
    <div class="w-2 h-2 rounded-full bg-[#00989D]"></div>
    <span class="text-gray-700">Feeling overwhelmed by simple tasks</span>
  </div>
  <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
    <div class="w-2 h-2 rounded-full bg-[#00989D]"></div>
    <span class="text-gray-700">Pulling away from social interactions</span>
  </div>
  <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
    <div class="w-2 h-2 rounded-full bg-[#00989D]"></div>
    <span class="text-gray-700">Loss of interest in hobbies and activities</span>
  </div>
</div>

<div class="p-5 bg-[#E8F6F6] border border-[#B8E0E0] rounded-xl mb-10 flex gap-4">
  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-[#00989D] flex items-center justify-center">
    <span class="text-white text-lg">💡</span>
  </div>
  <div>
    <p class="font-semibold text-[#005657] mb-1">Quick Tip</p>
    <p class="text-gray-700 text-sm">Take 5-minute breaks every hour — small resets prevent burnout from building up.</p>
  </div>
</div>

<h2 class="text-2xl font-bold text-[#005657] mb-6 flex items-center gap-3">
  <span class="w-10 h-10 rounded-lg bg-[#00989D] text-white flex items-center justify-center text-lg font-bold">4</span>
  How to Recover From Burnout
</h2>

<div class="space-y-4 mb-10">
  <div class="flex items-start gap-4 p-5 bg-white border-2 border-[#E8F6F6] rounded-xl">
    <span class="flex-shrink-0 w-8 h-8 rounded-full bg-[#00989D] text-white font-bold flex items-center justify-center">1</span>
    <div>
      <p class="font-semibold text-gray-800">Prioritize rest & sleep</p>
      <p class="text-sm text-gray-500">Your body needs time to recover from chronic stress</p>
    </div>
  </div>
  <div class="flex items-start gap-4 p-5 bg-white border-2 border-[#E8F6F6] rounded-xl">
    <span class="flex-shrink-0 w-8 h-8 rounded-full bg-[#00989D] text-white font-bold flex items-center justify-center">2</span>
    <div>
      <p class="font-semibold text-gray-800">Reduce unnecessary workloads</p>
      <p class="text-sm text-gray-500">Learn to say no and set clear boundaries</p>
    </div>
  </div>
  <div class="flex items-start gap-4 p-5 bg-white border-2 border-[#E8F6F6] rounded-xl">
    <span class="flex-shrink-0 w-8 h-8 rounded-full bg-[#00989D] text-white font-bold flex items-center justify-center">3</span>
    <div>
      <p class="font-semibold text-gray-800">Talk to a therapist or coach</p>
      <p class="text-sm text-gray-500">Professional support can accelerate recovery</p>
    </div>
  </div>
  <div class="flex items-start gap-4 p-5 bg-white border-2 border-[#E8F6F6] rounded-xl">
    <span class="flex-shrink-0 w-8 h-8 rounded-full bg-[#00989D] text-white font-bold flex items-center justify-center">4</span>
    <div>
      <p class="font-semibold text-gray-800">Practice mindfulness or breathing</p>
      <p class="text-sm text-gray-500">Calming techniques help regulate your nervous system</p>
    </div>
  </div>
  <div class="flex items-start gap-4 p-5 bg-white border-2 border-[#E8F6F6] rounded-xl">
    <span class="flex-shrink-0 w-8 h-8 rounded-full bg-[#00989D] text-white font-bold flex items-center justify-center">5</span>
    <div>
      <p class="font-semibold text-gray-800">Reconnect with hobbies & people</p>
      <p class="text-sm text-gray-500">Social support and joy activities aid healing</p>
    </div>
  </div>
</div>

<div class="p-8 bg-gradient-to-br from-[#005657] to-[#00989D] rounded-2xl text-white">
  <h3 class="text-xl font-bold mb-3">Conclusion</h3>
  <p class="text-white/90 leading-relaxed">
    Burnout is serious but fully reversible. Listening to your early signs and giving yourself
    space to rest can prevent long-term emotional exhaustion. You deserve to feel whole again.
  </p>
</div>
    `,
    createdAt: "2025-11-24",
  },
]
