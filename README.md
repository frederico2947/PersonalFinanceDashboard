# 💰 Personal Finance Dashboard

A clean, responsive personal finance dashboard built with **React**, **Tailwind CSS**, and **Recharts**. Track income, expenses, budgets, and savings — all in your browser with local data persistence.

![Dashboard Preview](https://img.shields.io/badge/status-active-brightgreen) ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react) ![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss) ![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)

---

## ✨ Features

| Page | Features |
|---|---|
| **Dashboard** | Income/Expense/Savings summary cards, monthly bar chart |
| **Transactions** | Add & delete transactions, filter by type & category |
| **Budget** | Per-category spending limits with progress bars, click-to-edit limits |
| **Reports** | Expense breakdown pie chart, savings trend line chart |

- 💾 **Local persistence** — data saved to `localStorage`, survives page refresh
- 📱 **Responsive layout** — sidebar + main content area
- 🎨 **Color-coded categories** — consistent colors across all charts

---

## 🛠 Tech Stack

- **[React 19](https://react.dev/)** — UI framework
- **[Vite 8](https://vite.dev/)** — build tool & dev server
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first styling
- **[Recharts](https://recharts.org/)** — composable chart library
- **[Zustand](https://zustand-demo.pmnd.rs/)** — lightweight state management
- **[React Router v7](https://reactrouter.com/)** — client-side routing
- **[Lucide React](https://lucide.dev/)** — icon library

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/frederico2947/PersonalFinanceDashboard.git
cd PersonalFinanceDashboard/PersonalFinanceDashboard

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── data/
│   └── mockData.js          # Seed transactions, budgets & category colors
├── store/
│   └── financeStore.js      # Zustand store with localStorage persistence
├── utils/
│   └── formatters.js        # Currency & date formatting helpers
├── components/
│   ├── Layout.jsx            # Sidebar navigation wrapper
│   └── SummaryCard.jsx       # Reusable stat card component
└── pages/
    ├── Dashboard.jsx         # Overview with summary cards & bar chart
    ├── Transactions.jsx      # Transaction list with add/delete/filter
    ├── Budget.jsx            # Budget limits with progress bars
    └── Reports.jsx           # Pie & line charts
```

---

## 📸 Pages Overview

### Dashboard
Summary cards showing this month's income, expenses, and net savings, plus a multi-month bar chart comparison.

### Transactions
Full transaction history with category/type filters. Add new transactions via a form, and delete existing ones.

### Budget
Set spending limits per category. Progress bars update in real-time based on this month's transactions. Click a limit to edit it inline.

### Reports
Pie chart showing expense distribution by category, and a line chart tracking income, expenses, and savings over time.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

