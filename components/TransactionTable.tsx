"use client";

import { useState } from "react";
import type { Transaction } from "@/data/transactions";
import type { Category } from "@/data/categories";

interface Props {
  transactions: Transaction[];
  categories: Category[];
  approvedCategories: Record<string, string>;
}

export default function TransactionTable({
  transactions,
  categories,
  approvedCategories: initialApprovedCategories,
}: Props) {
  const [approvedCategories, setApprovedCategories] = useState<
    Record<string, string>
  >(initialApprovedCategories);
  const [pendingCategories, setPendingCategories] = useState<
    Record<string, string>
  >(initialApprovedCategories);
  const [approvingId, setApprovingId] = useState<string | null>(null);

  function handleCategoryChange(transactionId: string, categoryId: string) {
    setPendingCategories((prev) => ({
      ...prev,
      [transactionId]: categoryId,
    }));
  }

  async function handleApprove(transactionId: string) {
    const categoryId = pendingCategories[transactionId];
    if (!categoryId) return;

    setApprovingId(transactionId);
    try {
      const response = await fetch("/api/categorizations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transactionId, categoryId }),
      });
      const updated = await response.json();
      setApprovedCategories(updated);
    } finally {
      setApprovingId(null);
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => {
          const pending = pendingCategories[transaction.id] ?? "";
          const approved = approvedCategories[transaction.id] ?? "";
          const isDirty = pending !== approved;

          return (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td
                className={`amount ${
                  transaction.amount < 0 ? "negative" : "positive"
                }`}
              >
                {formatAmount(transaction.amount)}
              </td>
              <td>
                <select
                  className={approved ? "" : "uncategorized"}
                  value={pending}
                  onChange={(e) =>
                    handleCategoryChange(transaction.id, e.target.value)
                  }
                >
                  <option value="">Uncategorized</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                {isDirty && pending && (
                  <button
                    onClick={() => handleApprove(transaction.id)}
                    disabled={approvingId === transaction.id}
                  >
                    {approvingId === transaction.id
                      ? "Approving…"
                      : "Approve"}
                  </button>
                )}
                {!isDirty && approved && <span className="approved">✓ Approved</span>}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function formatAmount(amount: number): string {
  const formatted = Math.abs(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return amount < 0 ? `-${formatted}` : formatted;
}
