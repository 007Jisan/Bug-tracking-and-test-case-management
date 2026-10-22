import { useState } from 'react';

export default function Bugs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6 relative">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Bug Tracking</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition font-medium"
        >
          + Report New Bug
        </button>
      </div>

      {/* Bug Tracking Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-600 uppercase text-xs font-semibold tracking-wider">
              <th className="py-3 px-6 border-b">Bug Title</th>
              <th className="py-3 px-6 border-b">Severity</th>
              <th className="py-3 px-6 border-b">Status</th>
              <th className="py-3 px-6 border-b">Assignee</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
              <td className="py-3 px-6 font-medium text-gray-800">Login page crashes on mobile</td>
              <td className="py-3 px-6"><span className="bg-red-100 text-red-700 py-1 px-3 rounded-full text-xs font-medium">High</span></td>
              <td className="py-3 px-6"><span className="bg-yellow-100 text-yellow-700 py-1 px-3 rounded-full text-xs font-medium">In Progress</span></td>
              <td className="py-3 px-6">Dev Jisan</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
              <td className="py-3 px-6 font-medium text-gray-800">Typo in dashboard header</td>
              <td className="py-3 px-6"><span className="bg-green-100 text-green-700 py-1 px-3 rounded-full text-xs font-medium">Low</span></td>
              <td className="py-3 px-6"><span className="bg-blue-100 text-blue-700 py-1 px-3 rounded-full text-xs font-medium">Open</span></td>
              <td className="py-3 px-6 text-gray-400 italic">Unassigned</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* --- REPORT BUG MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl flex flex-col max-h-[90vh]">
            
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-slate-50 rounded-t-xl">
              <h2 className="text-lg font-semibold text-gray-800">Report a New Bug</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition text-xl font-bold"
              >
                &times;
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bug Title</label>
                <input 
                  type="text" 
                  placeholder="e.g., App crashes when uploading large profile picture" 
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Severity</label>
                  <select className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Critical</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                  <select className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>P1 - Urgent</option>
                    <option>P2 - High</option>
                    <option>P3 - Normal</option>
                    <option>P4 - Low</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Environment</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Chrome 114, Windows 10" 
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Assign To Developer</label>
                  <select className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Unassigned</option>
                    <option>Dev Jisan</option>
                    <option>Sarah Jenkins</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Steps to Reproduce</label>
                <textarea 
                  rows="4" 
                  placeholder="1. Go to Profile page&#10;2. Click 'Upload Photo'&#10;3. Select a 10MB image&#10;4. Observe crash"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-3 rounded-b-xl">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition font-medium"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition font-medium">
                Submit Bug Report
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}