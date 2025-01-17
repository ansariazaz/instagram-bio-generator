import React from "react";

const Feature = () => {
    const features = [
        {
          title: "No Additional Software Needed",
          description:
            "Use our Instagram Bio Generator without downloading anything. Just open it in any browser, and you’re good to go—no extra extensions or programs needed.",
          image: "/feature1.png", // Replace with actual image paths
          reverse: false,
        },
        {
          title: "Totally Free",
          description:
            "All the features are completely free to use. No hidden charges or annoying popups are asking you to spend to access anything. Everything on our Instagram Bio Generator is available for free.",
          image: "/feature2.png", // Replace with actual image paths
          reverse: true,
        },
        {
          title: "Works on Any Device",
          description:
            "This tool works on all devices and browsers, including PCs, smartphones, and tablets. It will work effectively with any browser you own.",
          image: "/feature3.png", // Replace with actual image paths
          reverse: false,
        },
        {
          title: "Stays Within Instagram’s Character Limit",
          description:
            "Instagram only lets you use 150 characters for your bio, so you need to be innovative to make it interesting. Our AI-generated Instagram bio tool will help you create a bio that fits Instagram’s limits and matches the purpose of your account.",
          image: "/feature4.png", // Replace with actual image paths
          reverse: true,
        },
        {
          title: "AI Creates Your Bio",
          description:
            "We use AI to make sure the Instagram bio you create with our free generator is perfect for your profile—catchy, effective, and just right. You can trust that it will help your Instagram stand out and grow.",
          image: "/feature5.png", // Replace with actual image paths
          reverse: false,
        },
      ];
  return (
    <section className="py-12 bg-blue-50 mt-10">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          Features of Our Instagram Bio Generator
        </h2>
        <p className="text-gray-600 mb-8">
          Discover how our bio generator helps you stand out.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
