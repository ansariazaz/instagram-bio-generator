import React from "react";
import Faq from "react-faq-component";

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

const styles = {
  titleTextColor: "#252B42",
  rowTitleColor: "#000000",
  rowContentColor: "#737373",
};

const config = {
  animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

const FaqSection = () => {
  return (
    <div style={{ marginTop: "40px" }}>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export default FaqSection;
