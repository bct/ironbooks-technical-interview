"use client";

import { useState } from "react";
import type { Transaction } from "@/data/transactions";
import type { Category } from "@/data/categories";

interface Props {
  transactions: Transaction[];
  categories: Category[];
}

export default function TransactionTable({ transactions, categories }: Props) {
  const [categoryByTransaction, setCategoryByTransaction] = useState<
    Record<string, string>
  >({});

  function handleCategoryChange(transactionId: string, categoryId: string) {
    setCategoryByTransaction((prev) => ({
      ...prev,
      [transactionId]: categoryId,
    }));
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => {
          const selected = categoryByTransaction[transaction.id] ?? "";
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
                  className={selected ? "" : "uncategorized"}
                  value={selected}
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
