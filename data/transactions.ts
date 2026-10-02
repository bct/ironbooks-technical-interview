export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
}

export const transactions: Transaction[] = [
  { id: "t1", date: "2026-01-04", description: "Sherwin-Williams - Paint & Primer", amount: -412.33 },
  { id: "t2", date: "2026-01-05", description: "Home Depot - Drop Cloths, Tape, Brushes", amount: -189.47 },
  { id: "t3", date: "2026-01-06", description: "Deposit - Johnson Residence Exterior", amount: 2800.0 },
  { id: "t4", date: "2026-01-08", description: "Shell Gas Station", amount: -76.2 },
  { id: "t5", date: "2026-01-10", description: "Payment to M. Alvarez (sub-contractor)", amount: -950.0 },
  { id: "t6", date: "2026-01-12", description: "State Farm Insurance - Monthly Premium", amount: -215.0 },
  { id: "t7", date: "2026-01-14", description: "Facebook Ads", amount: -60.0 },
  { id: "t8", date: "2026-01-15", description: "Deposit - Thompson Office Interior", amount: 4200.0 },
  { id: "t9", date: "2026-01-16", description: "Sprayer Rental - United Rentals", amount: -340.0 },
  { id: "t10", date: "2026-01-18", description: "Staples - Invoices & Printer Ink", amount: -42.15 },
  { id: "t11", date: "2026-01-20", description: "Square Processing Fee", amount: -58.9 },
  { id: "t12", date: "2026-01-22", description: "City Power & Light - Shop Utility Bill", amount: -134.6 },
  { id: "t13", date: "2026-01-24", description: "Benjamin Moore Paints", amount: -567.8 },
  { id: "t14", date: "2026-01-26", description: "Deposit - Garcia Fence Staining", amount: 1150.0 },
  { id: "t15", date: "2026-01-28", description: "Payment to R. Nguyen (sub-contractor)", amount: -780.0 },
  { id: "t16", date: "2026-01-29", description: "Costco - Ladders & Scaffolding Parts", amount: -623.11 },
  { id: "t17", date: "2026-01-30", description: "Valvoline Oil Change - Work Van", amount: -89.99 },
  { id: "t18", date: "2026-01-31", description: "Google Workspace Subscription", amount: -18.0 },
  { id: "t19", date: "2026-02-02", description: "Amazon.com", amount: -94.28 },
];
