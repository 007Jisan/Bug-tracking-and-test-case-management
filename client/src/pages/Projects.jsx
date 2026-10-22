export default function Projects() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Projects</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition">
          + Create Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample Project Card */}
        <div className="bg-white p-6 rounded-lg shadow border-t-4 border-blue-500">
          <h2 className="text-xl font-semibold text-gray-800">E-Commerce App</h2>
          <p className="text-sm text-gray-500 mt-2">Status: Active</p>
          <div className="mt-4 text-sm text-gray-600">
            <p><strong>Manager:</strong> John Doe</p>
            <p><strong>Team Size:</strong> 5 Members</p>
          </div>
          <div className="mt-4 flex space-x-2">
            <button className="text-blue-600 hover:underline text-sm font-medium">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}