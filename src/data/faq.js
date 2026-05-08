import { organization } from './organization';

const { phones, email } = organization;

export const faqs = [
  {
    question: 'What is the WeUpLiftU Foundation?',
    answer:
      'The WeUpLiftU Foundation is a Utah-based 501(c)(3) nonprofit organization dedicated to supporting veterans, active duty military, first responders, and youth educational programs through healing, mentorship, and transformational experiences.',
  },
  {
    question: 'What is the mission of the WeUpLiftU Foundation?',
    answer:
      'Our mission is to harness the power of community and leadership to create impactful fundraising events that positively affect those who have dedicated their lives to serving others. We address PTSD and trauma through holistic healing, self-efficacy, and education.',
  },
  {
    question: 'What inspired the creation of the WeUpLiftU Foundation?',
    answer:
      'Founders Butch Brien and Karl Kelley were inspired after witnessing how community and charity events could transform lives. With personal connections to veteran and first responder communities, they recognized that accessible, holistic support was critically needed.',
  },
  {
    question: 'Who are the primary beneficiaries of the WeUpLiftU Foundation?',
    answer:
      'Our programs primarily support Utah active duty military, veterans, Davis County first responders (police and firefighters), and youth educational programs including Boy Scouts.',
  },
  {
    question: 'How does the WeUpLiftU Foundation allocate its funding?',
    answer:
      'The majority of our funding — 85% or more — is allocated to therapeutic programs for veterans and first responders. The remaining portion supports youth educational initiatives. We are committed to ensuring your donation reaches those who need it most.',
  },
  {
    question: 'What programs does the WeUpLiftU Foundation operate?',
    answer:
      'Our initiatives include: the Annual Golf Fundraiser at Hill Air Force Base, Operation Surf (week-long surfing healing experiences), Rewilding Mustang Medicine (emotional regulation with horses), Warrior Rizen (6,500-acre ranch experiences in Morgan, UT), OpenWater (Southern California water immersion), and Crisis Management Training.',
  },
  {
    question: 'How can I support the WeUpLiftU Foundation?',
    answer:
      'You can support us through a financial donation (100% goes to programs), volunteering your time and skills, participating in our events like the Annual Golf Tournament, or simply spreading awareness about our mission.',
  },
  {
    question: 'How can I contact the WeUpLiftU Foundation?',
    answer: `You can reach ${phones[0].name} at ${phones[0].number} or ${phones[1].name} at ${phones[1].number}. You can also send us a message through our Contact page and we'll get back to you promptly.`,
  },
];
