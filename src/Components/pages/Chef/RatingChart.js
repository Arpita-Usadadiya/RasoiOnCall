import React, { useEffect, useState } from "react";
import API from "../../../api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const RatingChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchRatings();
  }, []);

 const fetchRatings = async () => {
  try {

    const chefId = localStorage.getItem("chefId");
     console.log("Chef ID:", chefId);
    if (!chefId) return;

    const res = await API.get(`/review/dashboard-ratings`);

   const responseData = res.data;

console.log("Full Response:", responseData);

setData(res.data.data);


  } catch (err) {
    console.error("Failed to load rating analytics", err);
  }
};

  return (
    <div className="bg-white shadow rounded-xl p-6 mb-10">

      <h2 className="text-xl font-bold mb-4">
        ⭐ Rating Analytics
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} key={JSON.stringify(data)}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="rating" />

          <YAxis allowDecimals={false} />

          <Tooltip cursor={{ fill: "#fff7ed" }}/>

          <Bar dataKey="count" fill="#f97316" radius={[6,6,0,0]} />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default RatingChart;