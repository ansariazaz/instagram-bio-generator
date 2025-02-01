import { 
    Lightbulb, 
    Plane, 
    Building2, 
    Users, 
    Heart, 
    Home, 
    Building, 
    PenTool, 
    Calculator,
    UtensilsCrossed,
    Dumbbell,
    Camera,
    Facebook,
    Music,
    Code,
    Book,
    Globe,
    ShoppingCart,
    Film,
    Gamepad,
    type LucideIcon 
  } from "lucide-react";
  
  export interface Template {
    id: string;
    name: string;
    icon: LucideIcon;
    description: string;
    prompt: string;
    prompts?: string[];
  }
  
  export const templates: Template[] = [
    {
      id: "facebook",
      name: "Facebook",
      icon: Facebook,
      description: "Facebook post templates",
      prompt: "Create a Facebook post",
      prompts: [
        "Write an engaging Facebook post about the company described below.",
        "Produce a Facebook status about the benefits of {{ topic }}.",
        "Write a Facebook post about {{ topic }}",
        "Give me an interesting question to post on my Facebook Group about {{ topic }}.",
        "Rephrase the content above as a catchy Facebook post.",
        "Generate question ideas for a Facebook poll/quiz about {{ topic }}.",
        "Craft a compelling story on how {{ product/service }} changed your life for the better.",
        "Share a behind-the-scenes look at {{ company/project }} and the hard work that goes into it.",
        "Create a Facebook post that highlights the unique features of {{ product/service }}."
      ]
    },
    {
      id: "interactive",
      name: "Interactive",
      icon: Lightbulb,
      description: "Engaging and interactive content",
      prompt: "Create an engaging and interactive social media post about",
      prompts: [
        "Create an engaging poll about {{ topic }}",
        "Write a question that encourages audience participation about {{ topic }}",
        "Design a quiz post about {{ topic }}",
        "Create an interactive challenge related to {{ topic }}",
        "Write a 'Fill in the blank' post about {{ topic }}",
        "Generate a 'This or That' question about {{ topic }}"
      ]
    },
    {
      id: "inspirational",
      name: "Inspirational",
      icon: Plane,
      description: "Uplifting and motivational content",
      prompt: "Write an inspirational social media post about",
      prompts: [
        "Share an inspiring success story about {{ topic }}",
        "Create a motivational quote post about {{ topic }}",
        "Write an uplifting message about overcoming challenges in {{ topic }}",
        "Share a transformational journey related to {{ topic }}",
        "Create an encouraging message for people struggling with {{ topic }}"
      ]
    },
    {
      id: "business",
      name: "Business",
      icon: Building2,
      description: "Professional business content",
      prompt: "Generate a professional business-focused post about",
      prompts: [
        "Share industry insights about {{ topic }}",
        "Create a professional update about {{ topic }}",
        "Write a business tip related to {{ topic }}",
        "Share market analysis about {{ topic }}",
        "Create a professional announcement about {{ topic }}"
      ]
    },
    {
      id: "lifestyle",
      name: "Lifestyle",
      icon: Users,
      description: "Lifestyle and personal content",
      prompt: "Create a lifestyle-focused social media post about",
      prompts: [
        "Share a day in your life related to {{ topic }}",
        "Write about your favorite hobbies and how they relate to {{ topic }}",
        "Create a post about your travel experiences and how they connect to {{ topic }}",
        "Share tips for maintaining a healthy work-life balance in the context of {{ topic }}",
        "Write about your favorite books/movies and how they inspire your lifestyle choices."
      ]
    },
    {
      id: "ngos",
      name: "NGOs",
      icon: Heart,
      description: "Non-profit and cause-related content",
      prompt: "Write a compelling post for non-profit organization about",
      prompts: [
        "Share the impact of your organization's work on {{ topic }}",
        "Create a call-to-action post for donations or volunteers for {{ topic }}",
        "Write a success story about how your NGO has helped the community with {{ topic }}",
        "Share a behind-the-scenes look at your NGO's efforts in {{ topic }}",
        "Create an awareness post about the importance of {{ topic }}"
      ]
    },
    {
      id: "realtors",
      name: "Realtors",
      icon: Home,
      description: "Real estate related content",
      prompt: "Generate a real estate focused post about",
      prompts: [
        "Share tips for first-time homebuyers in the context of {{ topic }}",
        "Write about the latest trends in the real estate market related to {{ topic }}",
        "Create a post showcasing a new property listing in {{ topic }}",
        "Share advice on how to stage a home for sale in the context of {{ topic }}",
        "Write about the benefits of investing in real estate in {{ topic }}"
      ]
    },
    {
      id: "marketing",
      name: "Marketing",
      icon: Building,
      description: "Marketing and promotional content",
      prompt: "Create a marketing-focused social media post about",
      prompts: [
        "Share a promotional offer for {{ product/service }}",
        "Write about the benefits of using {{ product/service }}",
        "Create a post highlighting customer testimonials for {{ product/service }}",
        "Share a case study on how {{ product/service }} helped a client",
        "Write about the latest trends in marketing related to {{ topic }}"
      ]
    },
    {
      id: "authors",
      name: "Authors",
      icon: PenTool,
      description: "Content for authors and writers",
      prompt: "Write an author-focused social media post about",
      prompts: [
        "Share an excerpt from your latest book related to {{ topic }}",
        "Write about your writing process and how it connects to {{ topic }}",
        "Create a post about your favorite authors and how they inspire your work",
        "Share tips for aspiring writers in the context of {{ topic }}",
        "Write about the themes and messages in your books related to {{ topic }}"
      ]
    },
    {
      id: "accountants",
      name: "Accountants",
      icon: Calculator,
      description: "Financial and accounting content",
      prompt: "Generate a finance-focused post about",
      prompts: [
        "Share tips for managing personal finances in the context of {{ topic }}",
        "Write about the latest trends in the accounting industry related to {{ topic }}",
        "Create a post explaining a complex financial concept in simple terms",
        "Share advice on how to prepare for tax season in the context of {{ topic }}",
        "Write about the benefits of hiring a professional accountant for {{ topic }}"
      ]
    },
    {
      id: "restaurants",
      name: "Restaurants",
      icon: UtensilsCrossed,
      description: "Restaurant and food-related content",
      prompt: "Create a restaurant-focused social media post about",
      prompts: [
        "Share a new menu item or special dish related to {{ topic }}",
        "Write about the inspiration behind your restaurant's cuisine in the context of {{ topic }}",
        "Create a post showcasing a behind-the-scenes look at your kitchen",
        "Share customer reviews and testimonials for your restaurant",
        "Write about the importance of using fresh, local ingredients in your dishes"
      ]
    },
    {
      id: "fitness",
      name: "Fitness",
      icon: Dumbbell,
      description: "Fitness and wellness content",
      prompt: "Write a fitness-focused social media post about",
      prompts: [
        "Share a workout routine related to {{ topic }}",
        "Write about the benefits of a healthy lifestyle in the context of {{ topic }}",
        "Create a post showcasing your fitness journey and progress",
        "Share tips for staying motivated to exercise in the context of {{ topic }}",
        "Write about the importance of nutrition in achieving fitness goals"
      ]
    },
    {
      id: "photographers",
      name: "Photographers",
      icon: Camera,
      description: "Photography-related content",
      prompt: "Generate a photography-focused post about",
      prompts: [
        "Share tips for capturing great photos in the context of {{ topic }}",
        "Write about your favorite photography techniques and how they relate to {{ topic }}",
        "Create a post showcasing your latest photo shoot",
        "Share advice for aspiring photographers in the context of {{ topic }}",
        "Write about the importance of lighting and composition in photography"
      ]
    },
    {
      id: "music",
      name: "Music",
      icon: Music,
      description: "Music and entertainment content",
      prompt: "Create a music-focused social media post about",
      prompts: [
        "Share a new song or album release related to {{ topic }}",
        "Write about your favorite musical influences and how they inspire your work",
        "Create a post showcasing a behind-the-scenes look at your recording process",
        "Share tips for aspiring musicians in the context of {{ topic }}",
        "Write about the importance of music in everyday life"
      ]
    },
    {
      id: "tech",
      name: "Tech",
      icon: Code,
      description: "Technology and innovation content",
      prompt: "Generate a tech-focused social media post about",
      prompts: [
        "Share the latest tech trends related to {{ topic }}",
        "Write about the impact of technology on {{ topic }}",
        "Create a post showcasing a new tech product or innovation",
        "Share tips for staying up-to-date with the latest tech developments",
        "Write about the future of technology in the context of {{ topic }}"
      ]
    },
    {
      id: "education",
      name: "Education",
      icon: Book,
      description: "Educational and learning content",
      prompt: "Create an education-focused social media post about",
      prompts: [
        "Share tips for effective studying in the context of {{ topic }}",
        "Write about the importance of lifelong learning in the context of {{ topic }}",
        "Create a post showcasing a new educational resource or tool",
        "Share advice for students and educators in the context of {{ topic }}",
        "Write about the future of education and how it relates to {{ topic }}"
      ]
    },
    {
      id: "travel",
      name: "Travel",
      icon: Globe,
      description: "Travel and adventure content",
      prompt: "Generate a travel-focused social media post about",
      prompts: [
        "Share your favorite travel destinations related to {{ topic }}",
        "Write about your travel experiences and how they connect to {{ topic }}",
        "Create a post showcasing a recent trip or adventure",
        "Share tips for planning the perfect vacation in the context of {{ topic }}",
        "Write about the importance of cultural immersion while traveling"
      ]
    },
    {
      id: "ecommerce",
      name: "E-commerce",
      icon: ShoppingCart,
      description: "E-commerce and online shopping content",
      prompt: "Create an e-commerce-focused social media post about",
      prompts: [
        "Share a new product launch related to {{ topic }}",
        "Write about the benefits of shopping online in the context of {{ topic }}",
        "Create a post showcasing customer reviews and testimonials",
        "Share tips for running a successful online store in the context of {{ topic }}",
        "Write about the future of e-commerce and how it relates to {{ topic }}"
      ]
    },
    {
      id: "film",
      name: "Film",
      icon: Film,
      description: "Film and cinema content",
      prompt: "Generate a film-focused social media post about",
      prompts: [
        "Share a review of a recent movie related to {{ topic }}",
        "Write about your favorite films and how they inspire your work",
        "Create a post showcasing a behind-the-scenes look at a film production",
        "Share tips for aspiring filmmakers in the context of {{ topic }}",
        "Write about the importance of storytelling in cinema"
      ]
    },
    {
      id: "gaming",
      name: "Gaming",
      icon: Gamepad,
      description: "Gaming and esports content",
      prompt: "Create a gaming-focused social media post about",
      prompts: [
        "Share a review of a new video game related to {{ topic }}",
        "Write about your favorite gaming moments and how they connect to {{ topic }}",
        "Create a post showcasing a behind-the-scenes look at game development",
        "Share tips for aspiring gamers in the context of {{ topic }}",
        "Write about the future of gaming and esports in the context of {{ topic }}"
      ]
    }
  ];
  
  export const toneOptions = [
    "Polite",
    "Witty",
    "Enthusiastic",
    "Friendly",
    "Informational",
    "Funny",
    "Professional",
    "Casual",
    "Inspirational",
    "Humorous",
    "Serious",
    "Playful"
  ];