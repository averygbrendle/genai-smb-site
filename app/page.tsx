import Link from "next/link";

function HeroSection() {
  return (
    <section className="py-16 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Still wasting hours on paperwork, emails, and data entry?
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Turn busywork into free time with AI automations built <strong>for your business</strong>—ready in 7 days.
        </h2>
        <p className="text-xl mb-8 text-gray-600">
          We replace manual tasks with smart, affordable AI teammates, so you can get back to running the business you love.
        </p>
        <Link href="/#contact" className="btn-primary inline-block">
          Book My Free 30-Minute AI Audit
        </Link>
      </div>
    </section>
  );
}

function PainSolutionGrid() {
  const items = [
    {
      pain: "I'm buried in repetitive admin work.",
      solution: "Automations handle the admin 24/7."
    },
    {
      pain: "My team spends hours copy-pasting between tools.",
      solution: "AI moves data between apps instantly."
    },
    {
      pain: "I know AI is important, but I don't know where to start.",
      solution: "We deliver a working solution in a week—no technical lift from you."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4">
                <h3 className="text-red-600 font-semibold mb-2">Pain</h3>
                <p className="text-gray-800">{item.pain}</p>
              </div>
              <div>
                <h3 className="text-green-600 font-semibold mb-2">AI Solution</h3>
                <p className="text-gray-800">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCards() {
  const card = {
    title: "Other Fixes",
    pains: [
      "Manual data entry and repetitive tasks eating up valuable time",
      "Client communication and document management taking hours each day",
      "Scheduling, invoicing, and follow-ups creating administrative overhead"
    ],
    solutions: [
      "AI automation that handles routine work, freeing you to focus on growth",
      "Smart assistants that manage client interactions and organize documents automatically",
      "Automated systems that handle scheduling, billing, and customer updates 24/7"
    ]
  };

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-2xl font-semibold mb-6">{card.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-red-600 font-semibold mb-4">Common Pains</h4>
              <ul className="space-y-3">
                {card.pains.map((pain, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span className="text-gray-800">{pain}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-green-600 font-semibold mb-4">AI Solutions</h4>
              <ul className="space-y-3">
                {card.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span className="text-gray-800">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <ol className="space-y-6 mb-12">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
            <div>
              <h3 className="font-semibold mb-2">Discovery Call (30 min)</h3>
              <p className="text-gray-600">You tell us where the headaches are.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
            <div>
              <h3 className="font-semibold mb-2">Prototype (48 hrs)</h3>
              <p className="text-gray-600">We show a live demo solving one pain point.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
            <div>
              <h3 className="font-semibold mb-2">Go-Live (Day 7)</h3>
              <p className="text-gray-600">Your custom solution is integrated with your existing tools.</p>
            </div>
          </li>
        </ol>
        <div className="bg-white p-8 rounded-xl shadow-sm text-center">
          <p className="text-xl mb-4">
            Flat-Fee Launch: <strong>$3,000</strong>. Early-Adopter Deal: <strong>50% off for the first 3 clients</strong>.
          </p>
          <p className="text-gray-600 italic">
            If it doesn&apos;t save you <em>at least</em> 5 hours a week, you don&apos;t pay us—simple.
          </p>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-8">Ready to win back your time?</h3>
        <Link href="/#contact" className="btn-primary inline-block">
          Schedule My AI Audit
        </Link>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-semibold mb-6">Get Started</h3>
          <form action="https://formspree.io/f/xrbqgrpa" method="POST" className="grid grid-cols-1 gap-4">
            <input type="text" name="name" placeholder="Name" required className="border border-gray-300 p-3 rounded-lg" />
            <input type="email" name="email" placeholder="Email" required className="border border-gray-300 p-3 rounded-lg" />
            <input type="text" name="business" placeholder="Business Type (law firm, clinic, etc.)" className="border border-gray-300 p-3 rounded-lg" />
            <textarea name="message" placeholder="What do you want AI to help with?" className="border border-gray-300 p-3 rounded-lg" rows={3}></textarea>
            <button type="submit" className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <PainSolutionGrid />
      <IndustryCards />
      <OfferSection />
      <CTASection />
      <ContactForm />
    </>
  );
}

