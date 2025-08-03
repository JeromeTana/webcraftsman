import { FormStep } from './types';

export const FORM_STEPS: FormStep[] = [
  {
    id: 1,
    question: "Do you currently have a website?",
    field: "hasWebsite",
    type: "select",
    options: [
      "Yes, but it needs improvement",
      "Yes, and it's working fine",
      "No, I need a new website",
    ],
    helpText: "Knowing your current situation helps me determine if we need a redesign or a brand new website."
  },
  {
    id: 2,
    question: "What's your main goal for your website?",
    field: "mainGoal",
    type: "select",
    options: [
      "Get more customers and sales",
      "Look more professional and credible",
      "Share information about my business",
      "Improve online visibility",
    ],
    helpText: "Understanding your primary objective allows me to focus on the features that matter most to you."
  },
  {
    id: 3,
    question: "Which is your biggest struggle right now?",
    field: "biggestChallenge",
    type: "select",
    options: [
      "Not getting enough customers online",
      "My website looks outdated",
      "I'm losing customers to competitors",
      "No online presence at all",
    ],
    helpText: "Identifying your pain points helps me prioritize solutions that will have the biggest impact."
  },
  {
    id: 4,
    question: "When would you like to start this project?",
    field: "timeline",
    type: "select",
    options: [
      "ASAP - I need this urgently",
      "Within 1-2 weeks",
      "Within 1 month",
      "I'm just exploring options",
    ],
    helpText: "Your timeline helps me plan the project scope and set realistic expectations for delivery."
  },
  {
    id: 5,
    question: "What's your budget range for this project?",
    field: "budget",
    type: "select",
    options: [
      "Under $2,000 - Basic website",
      "$2,000 - $5,000 - Professional website",
      "$5,000 - $10,000 - Premium website",
      "$10,000+ - Enterprise solution",
    ],
    helpText: "Budget information allows me to recommend the best package and features within your range."
  },
  {
    id: 6,
    question: "Do you have content ready for your website?",
    field: "contentReady",
    type: "select",
    options: [
      "Yes, I have everything ready",
      "I have some content prepared",
      "No, I need help creating content",
    ],
    helpText: "Content readiness affects the timeline and helps me plan what support you'll need."
  },
  // {
  //   id: 7,
  //   question: "When would be the best time for a consultation?",
  //   field: "consultationTiming",
  //   type: "select",
  //   options: [
  //     "Today - I'm available now",
  //     "This week - Schedule for later",
  //     "Next week - I need more time",
  //     "I'll contact you when ready",
  //   ],
  //   helpText: "This helps me schedule our consultation at the most convenient time for you."
  // },
  {
    id: 7,
    question: "Tell me about your business",
    field: "businessName", // This step handles multiple business fields
    type: "business",
    helpText: "Understanding your business helps me create a more targeted strategy and recommendations."
  },
  {
    id: 8,
    question: "Your website strategy is ready!",
    field: "fullName", // This step handles multiple fields
    type: "contact",
    helpText: "I need these details to create a personalized proposal and provide the best recommendations for your business."
  }
];

export const INITIAL_FORM_DATA = {
  businessName: "",
  businessDescription: "",
  hasWebsite: "",
  currentWebsiteUrl: "",
  mainGoal: "",
  biggestChallenge: "",
  timeline: "",
  budget: "",
  contentReady: "",
  fullName: "",
  email: "",
  phone: "",
  // consultationTiming: "",
};

export const TOTAL_STEPS = FORM_STEPS.length;
