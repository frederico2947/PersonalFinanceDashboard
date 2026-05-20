import { useState } from 'react';
import { useFinanceStore } from '../store/financeStore';
import { formatCurrency } from '../utils/formatters';
import { CATEGORY_COLORS } from '../data/mockData';

const CURRENT_MONTH = new Date().toISOString().slice(0, 7);

export default function Budget() {
  const { budgets, getExpensesByCategory, updateBudget } = useFinanceStore();
  const expenseData = getExpensesByCategory(CURRENT_MONTH);
  const [editingCategory, setEditingCategory] = useState(null);
  const [editValue, setEditValue] = useState('');

  const getSpent = (category) =>
    expenseData.find((e) => e.name === category)?.value || 0;

  const handleEdit = (category, currentLimit) => {
    setEditingCategory(category);
    setEditValue(currentLimit);
  };

  const handleSave = (category) => {
    updateBudget(category, parseFloat(editValue));
    setEditingCategory(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Budget</h2>
        <p className="text-gray-500 text-sm mt-1">Track your spending limits for this month</p>
      </div>

      <div className="space-y-4">
        {budgets.map(({ category, limit }) => {
          const spent = getSpent(category);
          const pct = Math.min((spent / limit) * 100, 100);
          const over = spent > limit;
          const color = CATEGORY_COLORS[category] || '#6366f1';

          return (
            <div key={category} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                  <span className="font-medium text-gray-700">{category}</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className={over ? 'text-red-500 font-semibold' : 'text-gray-500'}>
                    {formatCurrency(spent)} / {' '}
                    {editingCategory === category ? (
                      <span className="inline-flex items-center gap-2">
                        <input
                          type="number"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          className="w-20 border border-indigo-300 rounded px-2 py-0.5 text-sm focus:outline-none"
                        />
                        <button onClick={() => handleSave(category)} className="text-indigo-600 font-medium hover:underline">Save</button>
                      </span>
                    ) : (
                      <span
                        className="cursor-pointer hover:text-indigo-600 transition-colors"
                        onClick={() => handleEdit(category, limit)}
                        title="Click to edit"
                      >
                        {formatCurrency(limit)}
                      </span>
                    )}
                  </span>
                  {over && <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-medium">Over budget!</span>}
                </div>
              </div>

              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div
                  className="h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${pct}%`, backgroundColor: over ? '#ef4444' : color }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-1.5">{pct.toFixed(0)}% used</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
