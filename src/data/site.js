// Shared facts for the Elevate Point Google Ads landing page (migration of www.elevatepoint.org/drug-rehab-lp/,
// started 2026-10-29). The live LP is the only paid destination still up (/outpatient-lp/, /alcohol-lp/ and
// /longisland-lp/ return 404).

export const ORG = {
  name: 'Elevate Point',
  long: 'Elevate Point Brooklyn',
  site: 'https://www.elevatepoint.org/',
  street: '203 Jay Street',
  city: 'Brooklyn, NY 11201',
  address: '203 Jay Street, Brooklyn, NY 11201',
};

// CTM tracking number for this LP (given 2026-10-29 in ClickUp 1dfm34xzcct). The live LP's buttons show 646.566.0140
// and its header the main line 646.760.7324; neither is used here (paid calls stay in their own channel).
export const PHONE = { display: '(646) 733-4950', href: 'tel:+16467334950' };

// SMS line for "Text Us" (the live LP's header button), on the LP's tracking number.
export const SMS = { href: 'sms:+16467334950' };

// GTM container for this LP (given 2026-10-29).
export const GTM_ID = import.meta.env.PUBLIC_GTM_ID || 'GTM-KKD2C2XX';

// The lead form's script resolves the number by page; one number today.
export const phoneFor = () => PHONE;

// Carriers for the reactor's insurance_carrier field: the logos the live LP shows, plus the two ways to say "none".
// The reactor takes free text, so these are sent as written.
export const CARRIERS = [
  'Aetna', 'Cigna', 'UnitedHealthcare', 'BlueCross BlueShield', 'Empire BlueCross BlueShield', 'Horizon BlueCross BlueShield',
  'NYSHIP', 'GEHA', 'Harvard Pilgrim', 'Highmark', 'UMR', 'Meritain Health', 'Oxford', 'Other', 'Self-pay / no insurance',
];
