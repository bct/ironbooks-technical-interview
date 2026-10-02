export interface Category {
  id: string;
  name: string;
}

export const categories: Category[] = [
  { id: "materials", name: "Materials & Supplies" },
  { id: "labor", name: "Subcontractor Labor" },
  { id: "equipment", name: "Equipment & Tools" },
  { id: "vehicle", name: "Vehicle & Fuel" },
  { id: "insurance", name: "Insurance" },
  { id: "marketing", name: "Advertising & Marketing" },
  { id: "office", name: "Office Supplies" },
  { id: "income", name: "Client Income" },
  { id: "fees", name: "Bank & Processing Fees" },
  { id: "utilities", name: "Utilities" },
];
