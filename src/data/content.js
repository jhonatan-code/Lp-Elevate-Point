// Copy of the live Google Ads LP, www.elevatepoint.org/drug-rehab-lp/ (page 1333), read 2026-10-29, revised with María's
// pre-launch review (ClickUp 1dfm34xzcct, 2026-10-30): new H1 and stats, Why Elevate Point, team, steps, named
// conditions, care schedules, one insurance section and more FAQs. Every added fact is from elevatepoint.org.
// Links to the main site are replaced by in-page anchors: an Ads LP has no outbound links. "Learn More" buttons and
// the empty "1 Elevate Point" counter of the live page are left out.

export const FORM = {
  heading: 'Verify Your Benefits Now',
  sms: 'By checking this box I provide express consent to receive customer support SMS from Elevate Point LLC up to 30 times/month. Standard message and data rates apply. Text STOP to opt-out, reply HELP for help.',
  note: 'Free, confidential verification of benefits.',
};

export default {
  // H1 matches the ads (María's review, 2026-10-30). Stats are all sourced: years from the live LP, the review count
  // from the Google listing (read 2026-10-29), the three levels from the program pages. The live LP's
  // "100% Client Satisfaction" (no source, Ads policy risk) and "8+ Subway Lines" are gone.
  HERO: {
    h1: 'Outpatient Addiction Treatment in Brooklyn',
    h2: 'Discover an Oasis of Healing & Recovery.',
    text: 'Our state-of-the-art addiction treatment center in Brooklyn is designed for the flexible needs of New York City residents. We are proud to offer PHP, IOP, and outpatient programs in NYC.',
    cta: 'Verify Insurance',
    photo: 'dsc06274.webp',
    photoAlt: 'Sunlit lounge with plants and floor-to-ceiling windows at Elevate Point in Brooklyn',
    stats: [
      { value: '30+', label: 'Combined Years of Experience' },
      { value: '24', label: 'Five-Star Google Reviews' },
      { value: '3', label: 'Levels of Care: PHP, IOP & OP' },
    ],
    trust: true,
  },

  PROGRAMS: {
    kicker: 'Luxury Treatment on Your Time',
    title: 'Outpatient Addiction Treatment in Brooklyn, New York',
    text: ['Growth takes time. Healing requires patience.', 'We’ve got both, within a stunning environment designed to support healing for adults and teens at our outpatient center in Brooklyn.'],
    quote: '“We focus on personalized recovery through innovative treatment approaches.”',
    quoteBy: '– Elevate Point',
    items: [
      // Real photos of the center in place of the live LP's 3D renderings (María asked for better images)
      { title: 'Adult Programs', levels: 'PHP, IOP & OP', photo: 'dsc06331.webp', alt: 'Lounge with armchairs, a long table and round moss panels on the ceiling' },
      { title: 'Teens (13–17)', levels: 'IOP & OP', photo: 'dsc06555.webp', alt: 'Lounge with yellow and green sofas by floor-to-ceiling windows' },
    ],
  },

  INSURANCE: {
    kicker: 'Paying for Treatment',
    title: 'We Accept Most Major Insurance Plans',
    // The live LP's two insurance blocks, merged into one (María's review): this intro, plus the verification copy
    text: [
      'Elevate Point in Brooklyn is proud to work with most major PPO & POS insurance plans that offer out-of-network coverage. To find out your personal options for treatment, contact our caring admissions coordinators to request a free verification of benefits.',
      'Our admissions team provides complimentary insurance verification and will walk you through your specific PPO coverage, including deductibles, co-pays, and any preauthorization requirements.',
    ],
    // Under the logos, so they don't read as in-network
    note: 'Elevate Point is an out-of-network provider. We work with PPO and POS plans from these carriers that include out-of-network benefits.',
    cta: 'Verify Insurance',
    callCta: 'Call to Verify',
    // Carrier logos in their brand colors where an official color version was at hand (2026-10-29); Empire, Horizon,
    // NYSHIP and GEHA are still the live LP's black files (no color version reachable yet). `w` sets a logo's width by
    // eye where its file's padding or shape makes it look too big or too small (user, 2026-10-29).
    logos: [
      { file: 'color-aetna.svg', alt: 'Aetna', w: 140 },
      { file: 'color-cigna.svg', alt: 'Cigna' },
      { file: 'color-unitedhealthcare.svg', alt: 'UnitedHealthcare', w: 155 },
      { file: 'color-bcbs.png', alt: 'BlueCross BlueShield', w: 150 },
      { file: 'insurance-9.webp', alt: 'Empire BlueCross BlueShield', w: 150 },
      { file: 'insurance-7.webp', alt: 'Horizon BlueCross BlueShield', w: 200 },
      { file: 'color-highmark.svg', alt: 'Highmark' },
      { file: 'insurance-8.webp', alt: 'NYSHIP', w: 140 },
      { file: 'color-harvard-pilgrim.png', alt: 'Harvard Pilgrim Health Care', w: 180 },
      { file: 'insurance-11.webp', alt: 'GEHA', w: 120 },
      { file: 'color-umr.svg', alt: 'UMR', w: 80 },
      { file: 'color-meritain.svg', alt: 'Meritain Health' },
    ],
  },

  SERVICES: {
    kicker: 'Treatment Services',
    title: 'Our Addiction Treatment Services in Brooklyn, NYC',
    text: 'At Elevate Point, we believe recovery should be compassionate, personalized, and empowering. As a trusted drug rehab in NYC, we combine evidence-based treatment, expert clinical care, and a welcoming environment to help clients heal and thrive. Our approach is built on understanding each person’s unique story, because lasting recovery starts with truly being seen and supported.',
    // `schedule` and `therapies` come from the program pages on elevatepoint.org (PHP, IOP, outpatient). The site
    // gives no weekly hours for OP, so its schedule line stays general.
    items: [
      { abbr: 'PHP', title: 'Partial Hospitalization (PHP)', text: 'For those needing more robust support, our PHP offers daily intensive treatment in a tranquil environment.',
        schedule: 'Daytime, 5–6 days a week, up to 20 hours of therapy weekly. You go home each evening.',
        therapies: 'Individual, group and family therapy, CBT and DBT skills, medication management' },
      { abbr: 'IOP', title: 'Intensive Outpatient (IOP)', text: 'Elevate Point’s IOP fits around your schedule, allowing you to uphold work, family, or school commitments while engaging in structured, evidence-based care.',
        schedule: '3–5 days a week, 3–5 hours a day, in a morning, afternoon or evening track.',
        therapies: 'CBT and DBT skills groups, individual, group and family therapy' },
      { abbr: 'OP', title: 'Outpatient Program (OP)', text: 'Our outpatient program in Brooklyn offers you a step-down level of care that allows you to re-adjust to life while slowly continuing outpatient care.',
        schedule: 'Fewer sessions each week than IOP, as you step down and settle back into daily life.',
        therapies: 'Individual and group therapy, CBT and DBT skills, family therapy' },
    ],
  },

  // "Why Elevate Point" (María's review): the differentiators in one place, every one stated on elevatepoint.org.
  // Her list also had "small groups": the site never says it, so it is left out.
  WHY: {
    title: 'Why Elevate Point',
    text: 'What sets our Brooklyn program apart, at a glance.',
    items: [
      { icon: 'school', title: 'A separate teen track', text: 'Adolescent IOP and outpatient for ages 13–17, scheduled after school, with family therapy built in.' },
      { icon: 'clock', title: 'Day and evening schedules', text: 'Morning, afternoon and evening IOP tracks, so treatment fits around work or school.' },
      { icon: 'video', title: 'In-person and virtual care', text: 'Come to our center or join sessions from home when you need to.' },
      { icon: 'pin', title: 'Easy to reach', text: 'Downtown Brooklyn, near four subway stations, with on-site parking for clients and visitors.' },
      { icon: 'puzzle', title: 'A plan built for you', text: 'Personalized treatment plans from a clinical team led by an addiction psychiatrist.' },
      { icon: 'leaf', title: 'A space that helps you heal', text: 'Biophilic design, floor-to-ceiling windows and an outdoor terrace lined with greenery.' },
    ],
  },

  BAND: {
    title: 'There\'s a Light on the Other Side of Addiction. Follow It.',
    text: 'Our Brooklyn team will help you take the next step in recovery while you keep up with work, school, and family.',
    photo: 'dsc06296.webp',
  },

  TREAT: {
    kicker: 'What We Treat',
    title: 'What We Treat',
    text: 'At Elevate Point in Brooklyn, we designed our addiction treatment programs in NYC to be rooted in a client-first approach that utilizes dual-diagnosis approaches that treat the mind, body, and spirit.',
    cta: 'Get Started',
    // Each card names what it treats instead of repeating one feature list (María's review). Conditions and services
    // are the ones with their own pages on elevatepoint.org.
    items: [
      { title: 'Substance Use', text: 'Alcohol, opioids and fentanyl, cocaine, benzodiazepines, cannabis, meth, kratom and prescription drugs.', label: 'Includes:', features: ['Detox referrals when needed', 'PHP, IOP & OP', 'Medication-assisted treatment', 'Individual, group & family therapy'] },
      { title: 'Mental Health', text: 'Depression, anxiety and panic, trauma and PTSD, bipolar disorder, OCD, ADHD, burnout and grief.', label: 'Includes:', features: ['Psychiatric evaluations', 'Medication management', 'CBT and DBT skills groups', 'Art therapy, yoga & mindfulness'] },
      { title: 'Dual Diagnosis', text: 'When addiction and a mental health condition feed each other, we treat both together in one plan.', label: 'Includes:', features: ['One integrated treatment plan', 'Inpatient referrals when needed', 'Day & evening schedules', 'In-person & virtual care'] },
    ],
  },

  FACILITY: {
    kicker: 'modern facilities in Brooklyn',
    title: 'We Elevated Treatment to a Whole New Level',
    text: 'From the moment you arrive at Elevate Point, you’re greeted with a sense of comfort and ease. The doorman lobby creates a welcoming and secure entry, setting the tone for the experience inside. Convenient on-site parking ensures clients and visitors can access the facility effortlessly, making every arrival simple and stress-free.',
    // Fixed from the live page: "tenants" and "greenary" (typos), "residents" → "clients" (it's outpatient), and the
    // unsupported "one of the best neighborhoods in NYC" cut (María's review)
    items: [
      { title: 'Biophilic Design', text: 'We leveraged Biophilic design tenets and incorporated an abundance of plant life and greenery, creating a deeper connection with nature.', photo: 'dsc06797.webp', alt: 'Outdoor terrace lined with bamboo planters' },
      { title: 'Open Concept', text: 'From floor-to-ceiling windows that flood the interior with natural light, to our open, functional group rooms, we create a warm and uplifting atmosphere at every turn.', photo: 'dsc06325.webp', alt: 'Open group room with green seating under round moss ceiling panels' },
      { title: 'Central Location', text: 'Step outside and you’ll find a mix of local cafés, green parks, cultural attractions, and everyday conveniences.', photo: 'dsc06777.webp', alt: 'Outdoor terrace with planters and tables beside a brick building' },
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
    title: 'What Our Clients Say',
    // Shown on the score panel (María's review). Update it when the listing grows.
    count: 24,
    items: [
      { name: 'Scott Green', when: '11 months ago', photo: 'scott-green.png', text: 'I’ve referred clients to Elevate Point and have consistently been impressed by the level of care they provide. The team is exceptionally professional, compassionate, and attentive, and the environment is truly first-class. Elevate Point sets a new standard for behavioral health and addiction treatment in Brooklyn.' },
      { name: 'James Walton', when: 'a year ago', photo: 'james-walton.png', text: 'I have been here at elevate since sometime in early spring,beginning in 4 nights per week then to 3. I have enjoyed the program and feel that I’ve gained an awful lot of knowledge and confidence in myself to beat my dependence on alcohol. It has been quite sometime since I’ve had a clear effect it had on myself and my family. I am So glad that Serenity recommended me here everyone has been so supportive and Truly caring, too many to mention! Me and my family are very grateful to have had this Opportunity to get back on the right path to a successful,sober and healthy life!!!! Thank you Elevate !!!' },
      { name: 'Halison Mwampulule', when: '7 months ago', photo: 'halison-mwampulule.png', text: 'I’ve been to other programs before, but nothing compares to Elevate Point. The structure, the therapists, and the level of care are on another level. I’ve made more progress here in a few weeks than I did in months elsewhere.' },
      { name: 'Mark Anthony', when: '7 months ago', photo: 'mark-anthony.png', text: 'One of the things I appreciated most about Elevate Point was the location. Being in Downtown Brooklyn made it so easy to get to from anywhere, and the convenience really helped me stay consistent with my treatment.' },
      { name: 'Dhanya Unnikrishnan', when: '7 months ago', photo: 'dhanya-unnikrishnan.png', text: 'What makes Elevate Point different is their holistic approach. It’s not just therapy , it’s everything from mindfulness to real-life coping skills. They treat you like a whole person, not just a diagnosis.' },
      { name: 'PAWANDEV MAHATO', when: '7 months ago', photo: 'pawandev-mahato.png', text: 'From the moment I walked into Elevate Point, I felt welcomed and understood. The environment is beautiful and calming, and the team goes above and beyond to make you feel safe. EP gave me hope again.' },
    ],
  },

  // Meet the Team, after the reviews (María's review): the three program leaders from elevatepoint.org/about-us/
  TEAM: {
    title: 'Meet the Clinical Team',
    text: 'Psychiatric evaluations, medication management and therapy happen under one roof, with a clinical team that works together on your plan.',
    items: [
      { name: 'Joseph Nissenfeld, MD', role: 'Medical Director', photo: 'joseph-nissenfeld.webp', bio: 'Psychiatrist with a fellowship in addiction psychiatry at NYU School of Medicine and over a decade at Bellevue Hospital, where he directed outpatient programs.' },
      { name: 'Rebecca Silverstein, LCSW', role: 'Program Director', photo: 'rebecca-silverstein.jpg', bio: 'Licensed Clinical Social Worker with 13 years of experience treating substance use and co-occurring mental health conditions, using CBT and DBT.' },
      { name: 'Kristen Stramka, LMHC, CASAC', role: 'Clinical Director', photo: 'kristen-stramka.webp', bio: 'Licensed Mental Health Counselor and Master-level CASAC with over eight years across outpatient and inpatient addiction care.' },
    ],
  },

  // How to get started, the three steps María wrote, before the FAQ (nothing may sit between the FAQ and the final CTA)
  STEPS: {
    title: 'How to Get Started',
    items: [
      { title: 'Call or text us', text: 'Reach admissions for a free, confidential consultation.' },
      { title: 'We verify your benefits', text: 'We check your insurance for free and explain what it covers.' },
      { title: 'Start treatment', text: 'Schedule your assessment and pick the program and schedule that fit.' },
    ],
  },

  // Map section (added 2026-10-29). Stations and lines are the subway stops around 203 Jay Street (A, C, F, R, 2, 3, 4,
  // 5: the live LP's "8+ subway lines near us"). Parking is from the live LP's facility text.
  LOCATION: {
    title: 'Visit Us in Downtown Brooklyn',
    text: 'Our center is at 203 Jay Street, near the Brooklyn Bridge, with four subway stations around it and on-site parking for clients and visitors.',
    // Ordered by distance on the Google map (the pin sits on Jay St between Sands St and Nassau St)
    stations: [
      { name: 'York St', lines: ['F'] },
      { name: 'High St', lines: ['A', 'C'] },
      { name: 'Jay St–MetroTech', lines: ['A', 'C', 'F', 'R'] },
      { name: 'Borough Hall', lines: ['2', '3', '4', '5'] },
    ],
    parking: 'On-site parking',
  },

  FAQ: {
    kicker: 'Faqs',
    title: 'Commonly Asked Questions',
    text: 'Forget what holds you back. Begin today at Elevate Point.',
    // The live LP's four questions plus the topics María asked for (schedule, teens, virtual care, detox, cost). Hours,
    // ages and days come from the program pages on elevatepoint.org; the IOP track times are the examples given there.
    // The first answer's "click the contact button" points at the form on this page; the number follows PHONE.
    items: [
      { q: 'How do I enroll in a program at Elevate Point?', a: 'Enrolling in an Elevate Point treatment program is easy. If you’re looking for a trusted drug rehab in Brooklyn, NY or mental health treatment, just click the contact button or call {phone} and a member of our team will help you determine the best program for your needs or the needs of your teen.' },
      { q: 'How long do the programs at Elevate Point last?', a: 'Most people start in PHP or IOP and step down to outpatient as they progress. PHP meets 5–6 days a week; IOP meets 3–5 days a week for 3–5 hours a day. How long you stay at each level depends on your progress, and your clinical team reviews it with you as you go.' },
      { q: 'Do you offer evening hours?', a: 'Yes. IOP runs in morning, afternoon and evening tracks, for example 9:00 AM–12:30 PM, 1:00–4:30 PM or 5:30–8:30 PM, so you can keep working or studying. PHP meets during the day and you go home each evening.' },
      { q: 'Do you treat teens?', a: 'Yes. Our adolescent IOP and outpatient programs are for ages 13–17. Teen IOP is 3–5 sessions a week, 9–12 hours in total, after school or in the evening, and families take part through family therapy.' },
      { q: 'Can I attend virtually?', a: 'Yes. We offer both in-person and virtual care, so you can join sessions from home when you need to.' },
      { q: 'Do you offer detox?', a: 'We are an outpatient program and do not provide detox on site. If you need medical detox or inpatient care first, we refer you, and you can continue with us afterward.' },
      { q: 'How much does treatment cost?', a: 'It depends on your plan and your level of care. We work with PPO and POS plans that have out-of-network benefits, and admissions verifies yours for free, including deductibles, co-pays and preauthorization, before you start. Self-pay is also available.' },
      { q: 'Is my participation in the program confidential?', a: 'Yes. Your privacy is our priority. We follow strict confidentiality standards and your information and treatment details are well-protected.' },
      { q: 'Do you accept insurance for treatment at Elevate Point?', a: 'Yes. We work with most major commercial insurance carriers that offer out-of-network coverage for substance abuse & mental health treatment.' },
    ],
  },

  CLOSING: {
    title: 'Your Journey to Healing Starts Now.',
    text: 'Our Brooklyn team will help you take the next step in recovery while you keep up with work, school, and family.',
    cta: 'Verify Benefits',
    photo: 'dsc06278.webp',
  },
};
