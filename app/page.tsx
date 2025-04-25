export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black p-6">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-4 text-black">Custom AI Agents for Small Businesses</h1>
        <p className="text-lg mb-8 text-gray-800">
          We build GPT-powered automation tailored to your business — chatbots, report writers, AI assistants, and more — delivered in just 7 days.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-4 rounded-2xl shadow border border-gray-200">
            <h2 className="text-xl font-semibold mb-2 text-black">Law Firms</h2>
            <p className="text-gray-800">Client intake bots, contract summarizers, internal memo assistants.</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow border border-gray-200">
            <h2 className="text-xl font-semibold mb-2 text-black">Medical Clinics</h2>
            <p className="text-gray-800">Patient FAQs, scheduling agents, post-visit note generators.</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow border border-gray-200">
            <h2 className="text-xl font-semibold mb-2 text-black">Contractors</h2>
            <p className="text-gray-800">Invoice summary bots, client update agents, document assistants.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow border border-gray-100">
          <h3 className="text-2xl font-semibold mb-2 text-black">Our Offer</h3>
          <p className="mb-4 text-gray-800">
            We'll build you a custom AI automation agent, integrated with your workflows (Slack, email, Notion, Sheets, and more).
            Delivered in 7 days. Flat fee: $3,000. First 3 clients get 50% off.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow border border-gray-200">
          <h3 className="text-xl font-semibold mb-2 text-black">Interested?</h3>
          <p className="mb-4 text-gray-800">Fill out this quick form and we’ll reach out:</p>
          <form action="https://formspree.io/f/xrbqgrpa" method="POST" className="grid grid-cols-1 gap-4">
  <input type="text" name="name" placeholder="Name" required className="border border-gray-300 p-2 rounded-xl" />
  <input type="email" name="email" placeholder="Email" required className="border border-gray-300 p-2 rounded-xl" />
  <input type="text" name="business" placeholder="Business Type (law firm, clinic, etc.)" className="border border-gray-300 p-2 rounded-xl" />
  <textarea name="message" placeholder="What do you want AI to help with?" className="border border-gray-300 p-2 rounded-xl" rows="3"></textarea>
  <button type="submit" className="bg-red-500 text-white rounded-xl px-4 py-2 hover:bg-red-600">
    Get Started
  </button>
</form>
        </div>
      </div>
    </div>
  );
}
