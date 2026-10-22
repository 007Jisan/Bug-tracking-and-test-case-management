import { useState } from 'react';

export default function TestCases() {
  // This state controls whether the pop-up form is open or closed
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6 relative">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Test Case Management</h1>
        <div className="flex gap-3">
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded shadow-sm hover:bg-gray-50 transition font-medium">
            📁 Import CSV
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition font-medium"
          >
            + Add Test Case
          </button>
        </div>
      </div>

      {/* Test Cases Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-600 uppercase text-xs font-semibold tracking-wider">
              <th className="py-3 px-6 border-b">ID</th>
              <th className="py-3 px-6 border-b">Title</th>
              <th className="py-3 px-6 border-b">Module</th>
              <th className="py-3 px-6 border-b">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
              <td className="py-3 px-6 font-medium text-blue-600">TC-001</td>
              <td className="py-3 px-6 text-gray-800">Verify user login with valid credentials</td>
              <td className="py-3 px-6">Authentication</td>
              <td className="py-3 px-6">
                <span className="bg-green-100 text-green-700 py-1 px-3 rounded-full text-xs font-medium">Passed</span>
              </td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
              <td className="py-3 px-6 font-medium text-blue-600">TC-002</td>
              <td className="py-3 px-6 text-gray-800">Verify password reset email</td>
              <td className="py-3 px-6">Authentication</td>
              <td className="py-3 px-6">
                <span className="bg-red-100 text-red-700 py-1 px-3 rounded-full text-xs font-medium">Failed</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* --- ADD TEST CASE MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal Container */}
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-slate-50 rounded-t-xl">
              <h2 className="text-lg font-semibold text-gray-800">Create New Test Case</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition text-xl font-bold"
              >
                &times;
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 overflow-y-auto space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Test Case Title</label>
                <input 
                  type="text" 
                  placeholder="e.g., Verify admin can delete a user" 
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Module</label>
                <select className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Authentication</option>
                  <option>User Management</option>
                  <option>Bug Tracking</option>
                  <option>Project Management</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pre-conditions</label>
                <textarea 
                  rows="2" 
                  placeholder="What needs to be true before running this test? (e.g., User must be logged in)"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Test Steps</label>
                <textarea 
                  rows="3" 
                  placeholder="1. Navigate to login page&#10;2. Enter valid email&#10;3. Click Login"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Expected Result</label>
                <textarea 
                  rows="2" 
                  placeholder="User is redirected to the dashboard"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-3 rounded-b-xl">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition font-medium"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-medium">
                Save Test Case
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}