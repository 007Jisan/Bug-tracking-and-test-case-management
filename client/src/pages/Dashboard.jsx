import { Bug, CheckCircle2, Clock, FolderKanban } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">System Overview</h1>
        <p className="text-sm text-slate-500 mt-1">Welcome back! Here is what's happening across your projects today.</p>
      </div>

      {/* Analytics Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Card 1 */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Total Active Bugs</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">24</h3>
            </div>
            <div className="bg-red-50 p-2.5 rounded-lg">
              <Bug className="w-5 h-5 text-red-600" />
            </div>
          </div>
          <p className="text-xs text-red-600 mt-4 flex items-center font-medium">
            <span className="text-red-500 mr-1">↑ 12%</span> from last week
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Pending Retest</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">8</h3>
            </div>
            <div className="bg-amber-50 p-2.5 rounded-lg">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
          </div>
          <p className="text-xs text-amber-600 mt-4 flex items-center font-medium">
             Needs QA verification
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Test Cases Passed</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">142</h3>
            </div>
            <div className="bg-green-50 p-2.5 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <p className="text-xs text-green-600 mt-4 flex items-center font-medium">
            <span className="text-green-500 mr-1">↑ 4%</span> completion rate
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Active Projects</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">3</h3>
            </div>
            <div className="bg-indigo-50 p-2.5 rounded-lg">
              <FolderKanban className="w-5 h-5 text-indigo-600" />
            </div>
          </div>
          <p className="text-xs text-indigo-600 mt-4 flex items-center font-medium">
             Across 2 teams
          </p>
        </div>

      </div>

      {/* Recent Activity Placeholder */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mt-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Recent Activity</h2>
        <div className="flex items-center justify-center py-10 border-2 border-dashed border-slate-100 rounded-lg bg-slate-50">
          <p className="text-sm text-slate-400 font-medium">Activity feed will appear here when connected to the database.</p>
        </div>
      </div>

    </div>
  );
}