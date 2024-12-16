// src/components/CardList.jsx
import React from 'react';

const statusStyles = {
    "Not Interested": "bg-gray-700 text-gray-300",
    "In Progress": "bg-blue-700 text-blue-100",
    "Sold": "bg-pink-700 text-pink-100",
    "Need Followup": "bg-teal-700 text-teal-100",
    "Open": "bg-gray-900 text-gray-100",
};

const leadsData = [
    { name: "Michael Lawson", email: "michael.lawson@reqres.in", createdAt: "04 Dec 24", status: "Not Interested", assigned: "Lawson" },
    { name: "Lindsay Ferguson", email: "lindsay.ferguson@reqres.in", createdAt: "29 Nov 24", status: "In Progress", assigned: "Ferguson" },
    { name: "Tobias Funke", email: "tobias.funke@reqres.in", createdAt: "24 Nov 24", status: "Sold", assigned: "Funke" },
    { name: "Byron Fields", email: "byron.fields@reqres.in", createdAt: "19 Nov 24", status: "Need Followup", assigned: "Fields" },
    { name: "George Edwards", email: "george.edwards@reqres.in", createdAt: "14 Nov 24", status: "Open", assigned: "Edwards" },
    { name: "Rachel Howell", email: "rachel.howell@reqres.in", createdAt: "09 Nov 24", status: "Not Interested", assigned: "Howell" },
];

const CardList = () => {
    return (
        <div className="bg-gray-800 p-4 rounded-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-gray-200 text-xl font-semibold">Current Leads</h2>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Add New</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-200">
                    <thead className="border-b border-gray-700">
                    <tr>
                        <th className="py-2">Name</th>
                        <th className="py-2">Email Id</th>
                        <th className="py-2">Created At</th>
                        <th className="py-2">Status</th>
                        <th className="py-2">Assigned To</th>
                        <th className="py-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {leadsData.map((lead, index) => (
                        <tr key={index} className="border-b border-gray-700 hover:bg-gray-700">
                            <td className="py-3">{lead.name}</td>
                            <td>{lead.email}</td>
                            <td>{lead.createdAt}</td>
                            <td>
                  <span className={`inline-block px-2 py-1 text-sm rounded-md ${statusStyles[lead.status]}`}>
                    {lead.status}
                  </span>
                            </td>
                            <td>{lead.assigned}</td>
                            <td>
                                <button className="text-gray-400 hover:text-white transition-colors">
                                    🗑
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export {CardList};
