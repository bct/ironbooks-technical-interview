// In-memory only: resets whenever the server process restarts. Survives a
// page refresh because it lives here, not in the browser.
//
// Pinned to globalThis because Next's dev compiler builds the page route and
// the API route as separate module graphs; a plain module-level variable
// would give each its own copy instead of one shared store.
const globalForStore = globalThis as unknown as {
  approvedCategories?: Map<string, string>;
};

const approvedCategories =
  globalForStore.approvedCategories ?? new Map<string, string>();
globalForStore.approvedCategories = approvedCategories;

export function getApprovedCategories(): Record<string, string> {
  return Object.fromEntries(approvedCategories);
}

export function approveCategory(transactionId: string, categoryId: string) {
  approvedCategories.set(transactionId, categoryId);
}
