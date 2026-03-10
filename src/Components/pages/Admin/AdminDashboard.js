import React, { useEffect, useState } from "react";
import API from "../../../api";

const AdminDashboard = () => {
  const [stats, setStats] = useState({});
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchStats();
    fetchBookings();
  }, []);

  const fetchStats = async () => {
    const res = await API.get("/admin/dashboard", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setStats(res.data.data);
  };

  const fetchBookings = async () => {
    const res = await API.get("/admin/bookings", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setBookings(res.data.data);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">
        👑 Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <Card title="Total Users" value={stats.totalUsers} />
        <Card title="Total Chefs" value={stats.totalChefs} />
        <Card title="Total Bookings" value={stats.totalBookings} />
        <Card title="Revenue" value={`₹${stats.totalRevenue}`} />
      </div>

      {/* Bookings Table */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">All Bookings</h2>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">User</th>
              <th className="p-3">Chef</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Amount</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr key={b._id} className="border-t text-center">
                <td className="p-3">{b.userId?.name}</td>
                <td className="p-3">{b.chefId?.name}</td>
                <td className="p-3">
                  {new Date(b.visitDate).toLocaleDateString()}
                </td>
                <td className="p-3">{b.status}</td>
                <td className="p-3">₹{b.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Card = ({ title, value }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 text-center">
    <h3 className="text-gray-500 text-lg">{title}</h3>
    <p className="text-2xl font-bold mt-2">{value || 0}</p>
  </div>
);

export default AdminDashboard;