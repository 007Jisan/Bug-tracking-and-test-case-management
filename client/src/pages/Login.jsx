import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bug, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  // State to toggle hiding/showing the password
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault(); // Prevents the page from reloading when you click submit
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] font-sans p-4">
      
      {/* Main Login Card */}
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
        
        {/* --- LEFT SIDE: Branding --- */}
        <div className="w-full md:w-5/12 bg-[#0F172A] text-white p-10 flex flex-col justify-between relative overflow-hidden">
          {/* Abstract background circles for design */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full border-4 border-indigo-500"></div>
            <div className="absolute top-1/2 right-[-50px] w-40 h-40 rounded-full border-4 border-blue-400"></div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-8 relative z-10">
              <Bug className="w-8 h-8 text-indigo-500" />
              <h1 className="text-2xl font-bold tracking-wide">Bug<span className="text-indigo-500">Tracker</span></h1>
            </div>
            <h2 className="text-3xl font-semibold mb-4 leading-tight relative z-10">Streamline your QA workflow.</h2>
            <p className="text-slate-400 text-sm relative z-10 leading-relaxed">
              The centralized, web-based bug tracking and test management system designed for high-performing engineering teams.
            </p>
          </div>
          
          <div className="text-xs text-slate-500 relative z-10 mt-10 md:mt-0">
            &copy; 2026 BugTracker Pro. All rights reserved.
          </div>
        </div>

        {/* --- RIGHT SIDE: Login Form --- */}
        <div className="w-full md:w-7/12 p-10 lg:p-14 bg-white">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-800">Welcome Back</h3>
            <p className="text-slate-500 mt-2 text-sm">Please enter your credentials to access your workspace.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="email" 
                  placeholder="admin@company.com" 
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-sm"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-slate-700">Password</label>
                <button type="button" className="text-xs font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-sm"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-indigo-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center mt-2">
              <input id="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600 cursor-pointer">
                Remember me for 30 days
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full flex justify-center items-center py-2.5 px-4 mt-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all active:scale-[0.98]"
            >
              Sign In
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-8 text-center text-sm text-slate-600 border-t border-slate-100 pt-6">
            Don't have an account?{' '}
            <button className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
              Create an account
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}