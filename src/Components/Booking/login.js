import React, { useState } from "react";
import API from "../../api";
import { useNavigate, Link } from "react-router-dom";
import bg from "../../assets/login-signupbanner.png";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      const pending = localStorage.getItem("pendingBooking");
      if (pending) {
        localStorage.removeItem("pendingBooking");
        navigate("/booking");
      } else {
        navigate("/");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <form
        onSubmit={handleSubmit}
        className="relative bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-[380px]"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-orange-600">
          Welcome Back
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3 rounded focus:outline-orange-400"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4 rounded focus:outline-orange-400"
          required
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded-lg transition duration-300">
          Login
        </button>

        <p className="text-sm text-center mt-4">
          New user?{" "}
          <Link to="/signup" className="text-orange-600 font-semibold">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
