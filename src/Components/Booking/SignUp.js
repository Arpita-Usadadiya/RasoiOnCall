import React, { useState } from "react";
import API from "../../api";
import { useNavigate, Link } from "react-router-dom";
import bg from "../../assets/login-signupbanner.png";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    profileImage: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/signup", form);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
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
          Create Account
        </h2>

        <input
          placeholder="Full Name"
          className="border p-2 w-full mb-3 rounded focus:outline-orange-400"
          required
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

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
          className="border p-2 w-full mb-3 rounded focus:outline-orange-400"
          required
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <input
          placeholder="Phone Number"
          className="border p-2 w-full mb-3 rounded focus:outline-orange-400"
          required
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <input
          placeholder="Profile Image URL"
          className="border p-2 w-full mb-4 rounded focus:outline-orange-400"
          required
          onChange={(e) =>
            setForm({ ...form, profileImage: e.target.value })
          }
        />

        <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded-lg transition duration-300">
          Sign Up
        </button>

        <p className="text-sm text-center mt-4">
          Already registered?{" "}
          <Link to="/login" className="text-orange-600 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
