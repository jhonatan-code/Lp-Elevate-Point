// /v1/: the same design, content rewritten from the call insights (CTM export Jan 1 – Oct 29 2026, 2,717 answered
// calls, aggregated locally as counts only; no caller detail was read or copied). Every fact comes from
// elevatepoint.org (the live LP, About Us, the PHP/IOP/adolescent program pages).
//
// What the calls asked most, and where this page answers it:
//   insurance (741 calls) and Medicaid (498) / Medicare (197), most of them turned away → INSURANCE + FAQ
//   Downtown Brooklyn location (176) and transit (109)          → HERO, FACILITY, LOCATION, FAQ
//   mental health as the main concern (340)                      → TREAT
//   detox / inpatient (380 together), which are referred out     → FIT
//   teens and family callers (228)                               → PROGRAMS, FAMILY in FAQ
//   evening / work schedules (110), program length (115)         → SERVICES, FAQ
//   psychiatry and medication (147)                              → TEAM, FAQ
//   confidentiality (264)                                        → FAQ, form note
// ⚠️ To confirm with the client before launch: the "no Medicaid or Medicare" line (what admissions told 59% and 67%
// of those callers), and that evening IOP runs 5:30–8:30 PM (the IOP page shows it as an example schedule).
import base from './content.js';

export default {
  ...base,

  HERO: {
    ...base.HERO,
    h1: 'Outpatient Addiction & Mental Health Treatment in Downtown Brooklyn',
    h2: 'PHP and IOP with morning, daytime and evening schedules.',
    text: 'Near the York St and High St subway stations, with on-site parking. We work with most PPO and POS plans that have out-of-network benefits, and admissions checks yours for free.',
    cta: 'Check My Coverage',
    stats: [
      { value: '30+', label: 'Combined Years Experience' },
      { value: '8+', label: 'Subway Lines Near Us' },
      { value: '3–5', label: 'Days a Week in IOP' },
    ],
    trust: true,
  },

  PROGRAMS: {
    ...base.PROGRAMS,
    title: 'Treatment That Fits Around Work, School and Family',
    text: [
      'Most people who call us are still working, studying or caring for someone. Our programs are outpatient: you get structured care during the day or evening and go home every night.',
      'Adults choose from PHP, IOP or outpatient. Teens attend IOP or outpatient on a schedule that keeps them in school, with family therapy built in.',
    ],
    items: [
      { ...base.PROGRAMS.items[0], levels: 'PHP, IOP & OP' },
      { ...base.PROGRAMS.items[1], levels: 'IOP & OP + family therapy' },
    ],
  },

  INSURANCE: {
    ...base.INSURANCE,
    title: 'Insurance: Check Before You Call',
    text: 'We work with commercial PPO and POS plans that offer out-of-network benefits, including the carriers below. We do not accept Medicaid or Medicare. If that is your coverage, admissions can point you to programs that do.',
    cta: 'Check My Coverage',
  },

  SERVICES: {
    ...base.SERVICES,
    title: 'Three Levels of Care, One Team',
    text: 'Our clinical team recommends a starting point after looking at your safety, substance use, mental health and home life. As you progress, you step down to fewer hours with the same clinicians.',
    items: [
      { abbr: 'PHP', title: 'Partial Hospitalization (PHP)', text: 'Full-day treatment, typically five days a week, for people who need the most support. You return home each evening.' },
      { abbr: 'IOP', title: 'Intensive Outpatient (IOP)', text: 'Three to five days a week for a few hours at a time, in morning, daytime or evening tracks, so you can keep your job or classes.' },
      { abbr: 'OP', title: 'Outpatient Program (OP)', text: 'A step-down level with fewer sessions each week while you settle back into daily life.' },
    ],
  },

  // Who this program is for, and what happens if it is not the right level (detox and inpatient are referred out)
  FIT: {
    title: 'Is Elevate Point the Right Level of Care?',
    text: 'We are an outpatient program. If you need medical detox or a residential stay first, we help you find one and you can step down to us after.',
    yes: {
      title: 'A good fit if you',
      items: [
        'Need help with alcohol, drugs, or a mental health condition, or both',
        'Can live at home and travel to Downtown Brooklyn, or join virtual sessions',
        'Want to keep working, studying or parenting during treatment',
        'Have a PPO or POS plan with out-of-network benefits, or can self-pay',
      ],
    },
    refer: {
      title: 'We will refer you if you',
      items: [
        'Need medically supervised detox before starting',
        'Need 24-hour inpatient or residential care',
        'Are covered only by Medicaid or Medicare',
      ],
    },
  },

  TREAT: {
    ...base.TREAT,
    title: 'Addiction, Mental Health, or Both',
    text: 'Many of the people we treat come to us for anxiety, depression or trauma, with or without substance use. We treat both at the same time, with psychiatric care on site.',
    items: [
      { title: 'Substance Use', text: 'Alcohol, cannabis, opioids and fentanyl, cocaine, benzodiazepines such as Xanax, kratom and other drugs.', label: 'Includes:', features: ['Detox referrals when needed', 'PHP, IOP & OP', 'Medication-assisted treatment', 'Individual, group & family therapy'] },
      { title: 'Mental Health', text: 'Depression, anxiety and panic, trauma and PTSD, OCD, ADHD, bipolar disorder, burnout and grief.', label: 'Includes:', features: ['Psychiatric evaluations', 'Medication management', 'CBT and DBT skills groups', 'Art therapy, yoga & mindfulness'] },
      { title: 'Dual Diagnosis', text: 'When addiction and a mental health condition feed each other, we treat them together in one plan.', label: 'Includes:', features: ['One integrated treatment plan', 'Inpatient referrals when needed', 'Day & evening schedules', 'In-person & virtual care'] },
    ],
  },

  TEAM: {
    title: 'Led by an Addiction Psychiatrist',
    text: 'Psychiatric evaluations, medication management and therapy happen under one roof, with a clinical team that works together on your plan.',
    items: [
      { name: 'Joseph Nissenfeld, MD', role: 'Medical Director', photo: 'joseph-nissenfeld.webp', bio: 'Psychiatrist with a fellowship in addiction psychiatry at NYU School of Medicine and over a decade at Bellevue Hospital, where he directed outpatient programs.' },
      { name: 'Rebecca Silverstein, LCSW', role: 'Program Director', photo: 'rebecca-silverstein.jpg', bio: 'Licensed Clinical Social Worker with 13 years of experience treating substance use and co-occurring mental health conditions, using CBT and DBT.' },
      { name: 'Kristen Stramka, LMHC, CASAC', role: 'Clinical Director', photo: 'kristen-stramka.webp', bio: 'Licensed Mental Health Counselor and Master-level CASAC with over eight years across outpatient and inpatient addiction care.' },
    ],
  },

  STEPS: {
    title: 'How to Get Started',
    items: [
      { title: 'Call or send the form', text: 'Talk to admissions, or leave your number and we call you back. Everything you share is confidential.' },
      { title: 'Free benefits check', text: 'We check your plan and explain deductibles, co-pays and any preauthorization before you commit.' },
      { title: 'Clinical assessment', text: 'A clinician reviews your history and needs, then recommends PHP, IOP or outpatient.' },
      { title: 'Pick your schedule', text: 'Choose morning, daytime or evening, in person or virtual, and set your first day.' },
    ],
  },

  FACILITY: {
    ...base.FACILITY,
    title: 'A Calm, Sunlit Space in Downtown Brooklyn',
    text: 'Our center at 203 Jay Street has a doorman lobby, on-site parking, floor-to-ceiling windows and a planted terrace. York St, High St, Jay St–MetroTech and Borough Hall stations are all nearby.',
  },

  VERIFY: {
    ...base.VERIFY,
    title: 'Know Your Costs Before Day One',
    text: [
      'Admissions verifies your benefits for free and walks you through what your plan covers for PHP, IOP or outpatient care, including deductibles, co-pays and preauthorization.',
      'No insurance, or a plan we cannot use? Ask about self-pay. If we are not the right fit, we will tell you on the first call and suggest where to go next.',
    ],
  },

  FAQ: {
    ...base.FAQ,
    title: 'Questions People Ask When They Call',
    text: 'Straight answers to what callers ask us most.',
    items: [
      { q: 'Do you take my insurance?', a: 'We work with most commercial PPO and POS plans that offer out-of-network coverage, including Aetna, Cigna, UnitedHealthcare, Empire and Horizon BlueCross BlueShield, NYSHIP and GEHA. Call {phone} or send the form and admissions will verify your benefits for free.' },
      { q: 'Do you accept Medicaid or Medicare?', a: 'No. Elevate Point does not accept Medicaid or Medicare. If that is your coverage, admissions can suggest programs in New York City that do.' },
      { q: 'Can I keep working or going to school?', a: 'Yes. IOP runs three to five days a week in morning, daytime or evening tracks, and PHP lets you go home every evening. Many clients keep their jobs and classes during treatment.' },
      { q: 'How long does treatment last?', a: 'It depends on your needs. PHP and IOP usually run for several weeks, then you step down to outpatient. Your clinician reviews your progress and adjusts the plan with you.' },
      { q: 'Do you offer detox or inpatient care?', a: 'No, we are an outpatient program. If you need medical detox or a residential stay first, we refer you and you can continue with us afterward.' },
      { q: 'Do you treat teens?', a: 'Yes. Our adolescent IOP and outpatient programs fit around school, and parents take part through family therapy and parent guidance sessions.' },
      { q: 'Can I see a psychiatrist and get medication?', a: 'Yes. Psychiatric evaluations and medication management, including medication-assisted treatment, are part of the program under our Medical Director, an addiction psychiatrist.' },
      { q: 'Where are you, and can I attend virtually?', a: 'We are at 203 Jay Street in Downtown Brooklyn, near the York St and High St subway stations, with on-site parking. Virtual care is also available.' },
      { q: 'Is it confidential?', a: 'Yes. Your information and treatment details are protected, and we follow strict confidentiality standards.' },
    ],
  },
};
