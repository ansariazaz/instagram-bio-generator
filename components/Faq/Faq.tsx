// Import necessary dependencies
import { useState } from "react";

// Define the FAQ data interface
interface FAQ {
  title: string;
  content: string;
}

// Define props for the FAQ component
interface FAQComponentProps {
  faqs: FAQ[];
}

const FAQComponent: React.FC<FAQComponentProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow">
            <button
              className="w-full text-left p-4 flex justify-between items-center font-medium bg-gray-100 hover:bg-gray-200"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.title}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-screen p-4 bg-white" : "max-h-0"
              }`}
            >
              <p className="text-gray-700">{faq.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function FAQPage() {
  const data = {
    rows: [
      {
        title: "How to add a link to your Instagram bio?",
        content:
          "Go to your profile, tap 'Edit Profile,' enter the URL in the 'Website' field, and save.",
      },
      {
        title: "How to see an old Instagram bio?",
        content:
          "Instagram doesn’t have a feature for old bios. You can use external tools or check past screenshots.",
      },
      {
        title: "What to put in your Instagram bio?",
        content:
          "Include your name, a short description, contact details, and links or hashtags. Stay true to yourself.",
      },
      {
        title: "How to find the bio section on Instagram?",
        content:
          "Visit someone's profile, and the bio will be below their profile picture and username.",
      },
      {
        title: "How can an Instagram bio generator help?",
        content:
          "Yes, it can help you create a better bio, which can attract more followers over time. Your bio is the first thing people see, so it makes a big impression.",
      },
      {
        title: "Does this generator require personal information?",
        content:
          "No, you don’t need to give any personal details. Just enter a few keywords, and the tool will do the rest.",
      },
      {
        title: "How safe is this Instagram bio generator?",
        content:
          "Of course! It is 100% safe to use this tool. SSL encryption protects our website's privacy and security.",
      },
      {
        title: "Can you change your Instagram bio?",
        content:
          "Yes, you can change it as many times as you want. There’s no limit.",
      },
    ],
  };

  return <FAQComponent faqs={data.rows} />;
}
