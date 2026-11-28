// Where Pisteday's accounts live (see README: Accounts). Both values are
// public by design: the anon key only allows what the database's row level
// security allows. Left empty, the app runs without accounts and everything
// is free (as before accounts existed).
window.SKIROUTER_CONFIG = {
  // Off: no accounts, so Pisteday keeps no personal data (no email, date of
  // birth or country); preferences and saved routes stay on the phone and
  // everything is free. To turn accounts on again, fill in the project:
  //   supabaseUrl: 'https://ynqnppaxwfwuhhpabwvq.supabase.co',
  //   supabaseAnonKey: 'sb_publishable_3KbsRYHjYh7ahqDyr_XBAQ_qcpF9tN0',
  supabaseUrl: '',
  supabaseAnonKey: '', // Project settings → API Keys → publishable (public by design)
  seasonPrice: '9.99',  // shown in the app; what is charged is SEASON_PRICE in the checkout function
  // false = test phase: sign in is needed, but there is no payment and every
  // signed-in account has what the season pass gives (day planner, saved
  // days). true goes together with app_settings.payments_on in the database
  // (README: Accounts → Test phase). Back to false for testers:
  // every account has Premium, nothing to buy.
  payments: false,
};
