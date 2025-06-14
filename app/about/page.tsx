import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-6 flex flex-col items-center">
      <Image
        src="/about-photo.jpeg"
        alt="About Us photo"
        width={400}
        height={500}
        className="rounded-xl mb-6 shadow-md object-cover"
        priority
      />
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">About Us</h1>
      <p className="text-lg text-gray-800 dark:text-gray-200">
      Hi — I’m Avery Brendle, a Durham‐based technology-risk and automation specialist who helps small and mid-sized businesses trade busywork for smart, time-saving workflows.
For more than six years I’ve led cybersecurity and audit projects at companies like Coinbase and Fidelity, where I built Python- and AWS-powered tools that cut ticket queues, sped up reviews, and gave teams clearer insight into their data.
Today, I translate those enterprise-grade practices into plain-English solutions—so owners can stay secure, compliant, and focused on growth instead of paperwork. When you’re ready to see what a week of targeted AI automation can do for your bottom line, let’s talk.
      </p>
    </main>
  );
} 