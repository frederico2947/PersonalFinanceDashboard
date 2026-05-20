import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import SummaryCard from '../components/SummaryCard';
import { useFinanceStore } from '../store/financeStore';
import { formatCurrency, getMonthLabel } from '../utils/formatters';

const CURRENT_MONTH = new Date().toISOString().slice(0, 7);

export default function Dashboard() {
  const { getMonthlyStats, getMonthlyChartData } = useFinanceStore();
  const { income, expenses, savings } = getMonthlyStats(CURRENT_MONTH);
  const chartData = getMonthlyChartData().map((d) => ({
    ...d,
    month: getMonthLabel(d.month + '-01'),
  }));

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
        <p className="text-gray-500 text-sm mt-1">Overview of your finances this month</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <SummaryCard title="Total Income" value={formatCurrency(income)} subtitle="This month" icon="💵" color="green" />
        <SummaryCard title="Total Expenses" value={formatCurrency(expenses)} subtitle="This month" icon="💸" color="red" />
        <SummaryCard title="Net Savings" value={formatCurrency(savings)} subtitle="This month" icon="🏦" color="blue" />
      </div>

      {/* Monthly Chart */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-700 mb-6">Monthly Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `$${v}`} />
            <Tooltip formatter={(v) => formatCurrency(v)} />
            <Legend />
            <Bar dataKey="income" name="Income" fill="#10b981" radius={[4, 4, 0, 0]} />
            <Bar dataKey="expenses" name="Expenses" fill="#ef4444" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
