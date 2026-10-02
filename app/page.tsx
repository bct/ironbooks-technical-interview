import { transactions } from "@/data/transactions";
import { categories } from "@/data/categories";
import TransactionTable from "@/components/TransactionTable";

export default function Home() {
  return (
    <main>
      <h1>Brushstroke Painting Co. — Transactions</h1>
      <p className="subtitle">
        Assign a category to each transaction below.
      </p>
      <TransactionTable transactions={transactions} categories={categories} />
    </main>
  );
}
