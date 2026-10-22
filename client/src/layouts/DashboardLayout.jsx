import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, Bug, FileCheck2, Bell, Search, UserCircle } from 'lucide-react';

export default function DashboardLayout() {
  const location = useLocation();

  // Helper function to check if a link is the current active page
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans">
      
      {/* --- PREMIUM SIDEBAR --- */}
      <aside className="w-64 bg-[#0F172A] text-slate-300 flex flex-col shadow-2xl z-20">
        <div className="h-16 flex items-center px-6 border-b border-slate-800/60 bg-[#0F172A]">
          <Bug className="w-6 h-6 text-indigo-500 mr-2" />
          <h1 className="text-xl font-bold text-white tracking-wide">Bug<span className="text-indigo-500">Tracker</span></h1>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          <p className="px-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Main Menu</p>
          
          <Link to="/dashboard" className={`flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 ${isActive('/dashboard') ? 'bg-indigo-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`}>
            <LayoutDashboard className="w-5 h-5 mr-3 opacity-90" />
            <span className="font-medium">Dashboard</span>
          </Link>
          
          <Link to="/projects" className={`flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 ${isActive('/projects') ? 'bg-indigo-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`}>
            <FolderKanban className="w-5 h-5 mr-3 opacity-90" />
            <span className="font-medium">Projects</span>
          </Link>
          
          <Link to="/bugs" className={`flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 ${isActive('/bugs') ? 'bg-indigo-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`}>
            <Bug className="w-5 h-5 mr-3 opacity-90" />
            <span className="font-medium">Bug Tracking</span>
          </Link>
          
          <Link to="/test-cases" className={`flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 ${isActive('/test-cases') ? 'bg-indigo-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`}>
            <FileCheck2 className="w-5 h-5 mr-3 opacity-90" />
            <span className="font-medium">Test Cases</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-800/60 bg-slate-900/50">
          <div className="flex items-center gap-3">
            <UserCircle className="w-8 h-8 text-slate-400" />
            <div>
              <p className="text-sm font-medium text-white">Admin User</p>
              <p className="text-xs text-slate-500">System Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT WRAPPER --- */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* PREMIUM TOP NAVBAR */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center bg-slate-100 rounded-full px-4 py-1.5 w-64 border border-slate-200 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
            <Search className="w-4 h-4 text-slate-400 mr-2" />
            <input type="text" placeholder="Search issues..." className="bg-transparent border-none outline-none text-sm w-full text-slate-700 placeholder-slate-400" />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-slate-400 hover:text-indigo-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
              </span>
            </button>
            <div className="h-6 w-px bg-slate-200"></div>
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors">
              Logout
            </Link>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-8 text-slate-800">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}