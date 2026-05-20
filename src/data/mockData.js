export const CATEGORIES = [
  'Food & Dining',
  'Transportation',
  'Shopping',
  'Entertainment',
  'Health',
  'Housing',
  'Utilities',
  'Income',
];

export const CATEGORY_COLORS = {
  'Food & Dining': '#f97316',
  Transportation: '#3b82f6',
  Shopping: '#a855f7',
  Entertainment: '#ec4899',
  Health: '#22c55e',
  Housing: '#ef4444',
  Utilities: '#eab308',
  Income: '#10b981',
};

export const mockTransactions = [
  { id: 1, date: '2026-05-01', description: 'Monthly Salary', amount: 5000, type: 'income', category: 'Income' },
  { id: 2, date: '2026-05-02', description: 'Grocery Store', amount: -120, type: 'expense', category: 'Food & Dining' },
  { id: 3, date: '2026-05-03', description: 'Netflix', amount: -15, type: 'expense', category: 'Entertainment' },
  { id: 4, date: '2026-05-04', description: 'Gas Station', amount: -60, type: 'expense', category: 'Transportation' },
  { id: 5, date: '2026-05-05', description: 'Electric Bill', amount: -90, type: 'expense', category: 'Utilities' },
  { id: 6, date: '2026-05-06', description: 'Online Shopping', amount: -200, type: 'expense', category: 'Shopping' },
  { id: 7, date: '2026-05-07', description: 'Doctor Visit', amount: -50, type: 'expense', category: 'Health' },
  { id: 8, date: '2026-05-08', description: 'Restaurant', amount: -45, type: 'expense', category: 'Food & Dining' },
  { id: 9, date: '2026-05-10', description: 'Freelance Payment', amount: 800, type: 'income', category: 'Income' },
  { id: 10, date: '2026-05-11', description: 'Rent', amount: -1200, type: 'expense', category: 'Housing' },
  { id: 11, date: '2026-04-01', description: 'Monthly Salary', amount: 5000, type: 'income', category: 'Income' },
  { id: 12, date: '2026-04-03', description: 'Grocery Store', amount: -110, type: 'expense', category: 'Food & Dining' },
  { id: 13, date: '2026-04-05', description: 'Bus Pass', amount: -40, type: 'expense', category: 'Transportation' },
  { id: 14, date: '2026-04-07', description: 'Gym Membership', amount: -30, type: 'expense', category: 'Health' },
  { id: 15, date: '2026-04-10', description: 'Rent', amount: -1200, type: 'expense', category: 'Housing' },
  { id: 16, date: '2026-04-12', description: 'Streaming Services', amount: -25, type: 'expense', category: 'Entertainment' },
  { id: 17, date: '2026-04-15', description: 'Freelance Payment', amount: 600, type: 'income', category: 'Income' },
  { id: 18, date: '2026-04-20', description: 'Clothes Shopping', amount: -150, type: 'expense', category: 'Shopping' },
  { id: 19, date: '2026-03-01', description: 'Monthly Salary', amount: 5000, type: 'income', category: 'Income' },
  { id: 20, date: '2026-03-04', description: 'Grocery Store', amount: -130, type: 'expense', category: 'Food & Dining' },
  { id: 21, date: '2026-03-06', description: 'Car Insurance', amount: -100, type: 'expense', category: 'Transportation' },
  { id: 22, date: '2026-03-10', description: 'Rent', amount: -1200, type: 'expense', category: 'Housing' },
  { id: 23, date: '2026-03-15', description: 'Electronics', amount: -300, type: 'expense', category: 'Shopping' },
  { id: 24, date: '2026-03-18', description: 'Pharmacy', amount: -35, type: 'expense', category: 'Health' },
  { id: 25, date: '2026-03-25', description: 'Bonus', amount: 1000, type: 'income', category: 'Income' },
];

export const mockBudgets = [
  { category: 'Food & Dining', limit: 300 },
  { category: 'Transportation', limit: 150 },
  { category: 'Shopping', limit: 200 },
  { category: 'Entertainment', limit: 100 },
  { category: 'Health', limit: 100 },
  { category: 'Housing', limit: 1300 },
  { category: 'Utilities', limit: 120 },
];
