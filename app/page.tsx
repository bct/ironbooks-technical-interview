import { transactions } from "@/data/transactions";
import { categories } from "@/data/categories";
import { getApprovedCategories } from "@/lib/categorization-store";
import TransactionTable from "@/components/TransactionTable";

export const dynamic = "force-dynamic";

export default function Home() {
  const approvedCategories = getApprovedCategories();

  return (
    <main>
      <h1>Brushstroke Painting Co. — Transactions</h1>
      <p className="subtitle">
        Assign a category to each transaction, then approve it.
      </p>
      <TransactionTable
        transactions={transactions}
        categories={categories}
        approvedCategories={approvedCategories}
      />
    </main>
  );
}
