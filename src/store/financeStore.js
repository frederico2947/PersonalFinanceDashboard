import { create } from 'zustand';
import { mockTransactions, mockBudgets } from '../data/mockData';

const loadFromStorage = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
};

export const useFinanceStore = create((set, get) => ({
  transactions: loadFromStorage('transactions', mockTransactions),
  budgets: loadFromStorage('budgets', mockBudgets),

  addTransaction: (transaction) => {
    const newTx = { ...transaction, id: Date.now() };
    const updated = [newTx, ...get().transactions];
    localStorage.setItem('transactions', JSON.stringify(updated));
    set({ transactions: updated });
  },

  deleteTransaction: (id) => {
    const updated = get().transactions.filter((t) => t.id !== id);
    localStorage.setItem('transactions', JSON.stringify(updated));
    set({ transactions: updated });
  },

  updateBudget: (category, limit) => {
    const updated = get().budgets.map((b) =>
      b.category === category ? { ...b, limit } : b
    );
    localStorage.setItem('budgets', JSON.stringify(updated));
    set({ budgets: updated });
  },

  getMonthlyStats: (month) => {
    const txs = get().transactions.filter((t) => t.date.startsWith(month));
    const income = txs.filter((t) => t.type === 'income').reduce((s, t) => s + t.amount, 0);
    const expenses = txs.filter((t) => t.type === 'expense').reduce((s, t) => s + Math.abs(t.amount), 0);
    return { income, expenses, savings: income - expenses };
  },

  getExpensesByCategory: (month) => {
    const txs = get().transactions.filter(
      (t) => t.type === 'expense' && t.date.startsWith(month)
    );
    const map = {};
    txs.forEach((t) => {
      map[t.category] = (map[t.category] || 0) + Math.abs(t.amount);
    });
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  },

  getMonthlyChartData: () => {
    const txs = get().transactions;
    const map = {};
    txs.forEach((t) => {
      const month = t.date.slice(0, 7);
      if (!map[month]) map[month] = { month, income: 0, expenses: 0 };
      if (t.type === 'income') map[month].income += t.amount;
      else map[month].expenses += Math.abs(t.amount);
    });
    return Object.values(map).sort((a, b) => a.month.localeCompare(b.month));
  },
}));
