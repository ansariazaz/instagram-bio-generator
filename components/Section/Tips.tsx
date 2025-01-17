import React from "react";

const Tips = () => {
    const tips = [
        {
          title: "Use Keywords/Hashtags",
          description:
            "Add relevant keywords or hashtags to boost your visibility in searches.",
        },
        {
          title: "Be Concise",
          description: "Keep your bio short and to the point (150 characters max).",
        },
        {
          title: "Highlight Your Brand",
          description: "Show what makes your brand unique.",
        },
        {
          title: "Show Personality",
          description: "Add a personal touch to connect with others.",
        },
        {
          title: "Add a Link",
          description:
            "Include a link to direct people to your website or projects.",
        },
      ];
  return (
    <section className="py-12 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600">
            Instagram Bio Writing Tips
          </h2>
        </div>
        <ul className="space-y-6">
          {tips.map((tip, index) => (
            <li
              key={index}
              className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <div className="text-blue-600 text-lg font-semibold">&#8226;</div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tips;
