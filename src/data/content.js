// Copy of the live Google Ads LP, www.elevatepoint.org/drug-rehab-lp/ (page 1333), read 2026-10-29. Text is verbatim;
// the order follows the page except where the all-projects page-end rule (FAQ → CTA → footer) moves a block up.
// Links to the main site are replaced by in-page anchors: an Ads LP has no outbound links. "Learn More" buttons and
// the empty "1 Elevate Point" counter of the live page are left out.

export const FORM = {
  heading: 'Verify Your Benefits Now',
  sms: 'By checking this box I provide express consent to receive customer support SMS from Elevate Point LLC up to 30 times/month. Standard message and data rates apply. Text STOP to opt-out, reply HELP for help.',
  note: 'Free, confidential verification of benefits.',
};

const FEATURES = ['PHP, IOP & OP Programs', 'Day & Evening Schedules', 'In-Person & Virtual Care', 'Individual, Group & Family Therapy'];

export default {
  HERO: {
    h1: 'Premiere Addiction Treatment Designed for You',
    h2: 'Discover an Oasis of Healing & Recovery.',
    text: 'Our state-of-the-art addiction treatment center in Brooklyn is designed for the flexible needs of New York City residents. We are proud to offer one of the most advanced PHP, IOP, and outpatient programs in NYC.',
    cta: 'Get Help Now',
    photo: 'dsc06274.webp',
    photoAlt: 'Sunlit lounge with plants and floor-to-ceiling windows at Elevate Point in Brooklyn',
    // ⚠️ Kept verbatim from the live LP. "100% Client Satisfaction" has no source on the site.
    stats: [
      { value: '30+', label: 'Combined Years Experience' },
      { value: '8+', label: 'Subway Lines Near Us' },
      { value: '100%', label: 'Client Satisfaction' },
    ],
  },

  PROGRAMS: {
    kicker: 'Luxury Treatment on Your Time',
    title: 'Outpatient Addiction Treatment in Brooklyn, New York',
    text: ['Growth takes time. Healing requires patience.', 'We’ve got both, within a stunning environment designed to support flourishing at any age at our luxury rehab in Brooklyn, NYC.'],
    quote: '“We focus on personalized recovery through innovative treatment approaches.”',
    quoteBy: '– Elevate Point',
    items: [
      { title: 'Adult Programs', levels: 'PHP, IOP & OP', photo: 'adult-lounge.webp', alt: 'Adult lounge with green seating and round moss panels on the ceiling' },
      { title: 'Teens & Adolescents', levels: 'IOP & OP', photo: 'adolescent-lounge.webp', alt: 'Adolescent lounge with soft seating and plants' },
    ],
  },

  INSURANCE: {
    kicker: 'Paying for Treatment',
    title: 'We Accept Most Major Insurance Plans',
    text: 'Elevate Point in Brooklyn is proud to work with most major PPO & POS insurance plans that offer out-of-network coverage. To find out your personal options for treatment, contact our caring admissions coordinators to request a free verification of benefits.',
    cta: 'Verify Insurance',
    // The live LP's logo strip (the longer second strip adds Harvard Pilgrim and Highmark)
    logos: [
      { file: 'insurance.webp', alt: 'Aetna' },
      { file: 'insurance-2-1.webp', alt: 'Cigna' },
      { file: 'insurance-1-1.webp', alt: 'UnitedHealthcare' },
      { file: 'insurance-2.webp', alt: 'BlueCross BlueShield' },
      { file: 'insurance-9.webp', alt: 'Empire BlueCross BlueShield' },
      { file: 'insurance-7.webp', alt: 'Horizon BlueCross BlueShield' },
      { file: 'insurance-8.webp', alt: 'NYSHIP' },
      { file: 'insurance-11.webp', alt: 'GEHA' },
      { file: 'insurance-12.webp', alt: 'Harvard Pilgrim Health Care' },
      { file: 'insurance-13.webp', alt: 'Highmark' },
      { file: 'insurance-14.webp', alt: 'UMR' },
      { file: 'insurance-15.webp', alt: 'Meritain Health' },
    ],
  },

  SERVICES: {
    kicker: 'Treatment Services',
    title: 'Our Addiction Treatment Services in Brooklyn, NYC',
    text: 'At Elevate Point, we believe recovery should be compassionate, personalized, and empowering. As a trusted drug rehab in NYC, we combine evidence-based treatment, expert clinical care, and a welcoming environment to help clients heal and thrive. Our approach is built on understanding each person’s unique story, because lasting recovery starts with truly being seen and supported.',
    items: [
      { abbr: 'PHP', title: 'Partial Hospitalization (PHP)', text: 'For those needing more robust support, our PHP offers daily intensive treatment in a tranquil environment—while still giving you the flexibility to manage personal responsibilities.' },
      { abbr: 'IOP', title: 'Intensive Outpatient (IOP)', text: 'Elevate Point’s IOP fits around your schedule, allowing you to uphold work, family, or school commitments while engaging in structured, evidence-based care.' },
      { abbr: 'OP', title: 'Outpatient Program (OP)', text: 'Our outpatient program in Brooklyn offers you a step-down level of care that allows you to re-adjust to life while slowly continuing outpatient care.' },
    ],
  },

  BAND: {
    title: 'There\'s a Light on the Other Side of Addiction. Follow It.',
    text: 'Our recovery experts in Brooklyn, NY will help you move into your next stage of life in a spa-like state-of-the-art setting.',
    photo: 'dsc06296.webp',
  },

  TREAT: {
    kicker: 'What We Treat',
    title: 'What We Treat at Elevate Point Brooklyn',
    text: 'At Elevate Point in Brooklyn, we designed our addiction treatment programs in NYC to be rooted in a client-first approach that utilizes dual-diagnosis approaches that treat the mind, body, and spirit.',
    cta: 'Get Started',
    items: [
      { title: 'Substance Abuse', text: 'Our substance abuse treatment programs in NYC provide a solid foundation for lifelong recovery.', label: 'Program Features:', features: ['Detoxification Referrals', ...FEATURES] },
      { title: 'Alcohol Abuse', text: 'When looking for an alcohol rehab in Brooklyn, Elevate Point is your best choice for long-term sobriety solutions.', label: 'Features:', features: ['Detoxification Referrals', ...FEATURES] },
      { title: 'Dual-Diagnosis', text: 'When addiction co-occurs with mental health conditions you need effective dual-diagnosis treatment in NYC.', label: 'Features:', features: ['Inpatient Referrals', ...FEATURES] },
    ],
  },

  FACILITY: {
    kicker: 'modern facilities in Brooklyn',
    title: 'We Elevated Treatment to a Whole New Level',
    text: 'From the moment you arrive at Elevate Point, you’re greeted with a sense of comfort and ease. The doorman lobby creates a welcoming and secure entry, setting the tone for the experience inside. Convenient on-site parking ensures residents and visitors can access the facility effortlessly, making every arrival simple and stress-free.',
    // "tenants" and "greenary" are typos on the live page, fixed here
    items: [
      { title: 'Biophilic Design', text: 'We leveraged Biophilic design tenets and incorporated an abundance of plant life and greenery, creating a deeper connection with nature.', photo: 'dsc06797.webp', alt: 'Outdoor terrace lined with bamboo planters' },
      { title: 'Open Concept', text: 'From floor-to-ceiling windows that flood the interior with natural light, to our open, functional group rooms, we create a warm and uplifting atmosphere at every turn.', photo: 'dsc06325.webp', alt: 'Open group room with green seating under round moss ceiling panels' },
      { title: 'Central Location', text: 'Step outside and you’ll find a mix of local cafés, green parks, cultural attractions, and everyday conveniences that make our neighborhoods one of the best in NYC.', photo: 'outdoor-terrace.webp', alt: 'Rooftop terrace with Brooklyn buildings in the background' },
    ],
    // The live LP's photo strip
    gallery: [
      { file: 'dsc06765.webp', alt: 'Lounge corner with green armchairs' },
      { file: 'dsc06639.webp', alt: 'Group therapy room with natural light' },
      { file: 'dsc06685.webp', alt: 'Quiet seating area by the windows' },
      { file: 'dsc06549.webp', alt: 'Dining and activity room' },
      { file: 'dsc06447.webp', alt: 'Group room with plants' },
      { file: 'dsc06395.webp', alt: 'Lounge with bean bags and moss ceiling panels' },
      { file: 'dsc06318.webp', alt: 'Kitchen and dining space' },
      { file: 'dsc06284.webp', alt: 'Sunlit lounge with wooden seating' },
    ],
  },

  // Google reviews from the "Elevate Point - Alcohol & Drug Rehab NYC" listing (5.0, 24 reviews, all 5 stars), read
  // 2026-10-29. Six of similar length picked so the cards line up; text verbatim; profile photos from the listing in
  // src/assets/reviews. The live LP's widget showed six others (two of them are no longer on the listing).
  REVIEWS: {
    kicker: 'TESTIMONIALS',
    title: 'What Our Clients Say About Elevate Point in Brooklyn',
    items: [
      { name: 'Scott Green', when: '11 months ago', photo: 'scott-green.png', text: 'I’ve referred clients to Elevate Point and have consistently been impressed by the level of care they provide. The team is exceptionally professional, compassionate, and attentive, and the environment is truly first-class. Elevate Point sets a new standard for behavioral health and addiction treatment in Brooklyn.' },
      { name: 'James Walton', when: 'a year ago', photo: 'james-walton.png', text: 'I have been here at elevate since sometime in early spring,beginning in 4 nights per week then to 3. I have enjoyed the program and feel that I’ve gained an awful lot of knowledge and confidence in myself to beat my dependence on alcohol. It has been quite sometime since I’ve had a clear effect it had on myself and my family. I am So glad that Serenity recommended me here everyone has been so supportive and Truly caring, too many to mention! Me and my family are very grateful to have had this Opportunity to get back on the right path to a successful,sober and healthy life!!!! Thank you Elevate !!!' },
      { name: 'Halison Mwampulule', when: '7 months ago', photo: 'halison-mwampulule.png', text: 'I’ve been to other programs before, but nothing compares to Elevate Point. The structure, the therapists, and the level of care are on another level. I’ve made more progress here in a few weeks than I did in months elsewhere.' },
      { name: 'Mark Anthony', when: '7 months ago', photo: 'mark-anthony.png', text: 'One of the things I appreciated most about Elevate Point was the location. Being in Downtown Brooklyn made it so easy to get to from anywhere, and the convenience really helped me stay consistent with my treatment.' },
      { name: 'Dhanya Unnikrishnan', when: '7 months ago', photo: 'dhanya-unnikrishnan.png', text: 'What makes Elevate Point different is their holistic approach. It’s not just therapy , it’s everything from mindfulness to real-life coping skills. They treat you like a whole person, not just a diagnosis.' },
      { name: 'PAWANDEV MAHATO', when: '7 months ago', photo: 'pawandev-mahato.png', text: 'From the moment I walked into Elevate Point, I felt welcomed and understood. The environment is beautiful and calming, and the team goes above and beyond to make you feel safe. EP gave me hope again.' },
    ],
  },

  VERIFY: {
    kicker: 'Verify Your Benefits Now',
    title: 'We Work with Most Major Insurance Plans',
    text: [
      'Elevate Point is committed to making high-quality addiction and dual diagnosis care as accessible as possible.',
      'Our program in Brooklyn accepts most major PPO health insurance plans. This allows clients to receive comprehensive treatment—including Partial Hospitalization (PHP), Intensive Outpatient (IOP), and standard outpatient services—while reducing out-of-pocket costs.',
      'Our admissions team provides complimentary insurance verification and will walk you through your specific PPO coverage, including deductibles, co-pays, and any preauthorization requirements.',
    ],
    cta: 'Call to Verify',
  },

  FAQ: {
    kicker: 'Faqs',
    title: 'Commonly Asked Questions About Treatment at Elevate Point',
    text: 'Forget what holds you back. Begin today at Elevate Point.',
    // The first answer's "click the contact button" points at the form on this page; the number follows PHONE.
    items: [
      { q: 'How do I enroll in a program at Elevate Point?', a: 'Enrolling in an Elevate Point treatment program is easy. If you’re looking for a trusted drug rehab in Brooklyn, NY or mental health treatment, just click the contact button or call {phone} and a member of our team will help you determine the best program for your needs or the needs of your teen.' },
      { q: 'How long do the programs at Elevate Point last?', a: 'The length of each program will vary based on your unique needs. Our outpatient and intensive outpatient programs offer flexible scheduling, while our partial hospitalization program provides structured support.' },
      { q: 'Is my participation in the program confidential?', a: 'Yes. Your privacy is our priority. We follow strict confidentiality standards and your information and treatment details are well-protected.' },
      { q: 'Do you accept insurance for treatment at Elevate Point?', a: 'Yes. We work with most major commercial insurance carriers that offer out-of-network coverage for substance abuse & mental health treatment.' },
    ],
  },

  CLOSING: {
    title: 'Your Journey to Healing Starts Now.',
    text: 'Our recovery experts in Brooklyn, NY will help you move into your next stage of life in a spa-like state-of-the-art setting.',
    cta: 'Verify Benefits',
    photo: 'dsc06278.webp',
  },
};
