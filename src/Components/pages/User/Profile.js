import { useEffect, useState } from "react";
import API from "../../../api";
import LocationPicker from "../../Map/LocationPicker";

const Profile = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    latitude: "",
    longitude: ""
  });

  const token = localStorage.getItem("token");

  // ✅ Fetch Profile
  useEffect(() => {

    const fetchProfile = async () => {

      try {

        const res = await API.get("/auth/profile", {
          headers: { Authorization: `Bearer ${token}` }
        });

        const user = res.data?.data || {};

        setForm({
          name: user.name || "",
          email: user.email || "",
          phone: user.phone || "",
          street: user.addresses?.[0]?.street || "",
          city: user.addresses?.[0]?.city || "",
          state: user.addresses?.[0]?.state || "",
          pincode: user.addresses?.[0]?.pincode || "",
          latitude: user.addresses?.[0]?.latitude || "",
          longitude: user.addresses?.[0]?.longitude || ""
        });

      } catch (error) {
        console.log(error);
      }

    };

    fetchProfile();

  }, [token]);



  // ✅ Map Location Select
  const setMapLocation = async (location) => {

  try {

    const latitude = location.latitude;
    const longitude = location.longitude;

    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    );

    const data = await res.json();
    const address = data.address || {};

    setForm((prev) => ({
      ...prev,
      latitude,
      longitude,
      street: data.display_name || "",
      city: address.city || address.town || address.village || "",
      state: address.state || "",
      pincode: address.postcode || ""
    }));

  } catch (error) {
    console.log(error);
  }

};



  // ✅ Handle Input Change
  const handleChange = (e) => {

    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));

  };



  // 📍 Get GPS Location
  const getLocation = () => {

    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        try {

          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );

          const data = await res.json();
          const address = data.address || {};

          setForm((prev) => ({
            ...prev,
            latitude,
            longitude,
            street: data.display_name || "",
            city: address.city || address.town || address.village || "",
            state: address.state || "",
            pincode: address.postcode || ""
          }));

        } catch (error) {
          console.log(error);
        }

      },
      (error) => {
        console.log(error);
        alert("Unable to fetch location");
      }
    );

  };



  // ✅ Update Profile
  const updateProfile = async () => {

    try {

      await API.put(
        "/auth/update-profile",
        {
          name: form.name,
          phone: form.phone,
          addresses: [
            {
              street: form.street,
              city: form.city,
              state: form.state,
              pincode: form.pincode,
              latitude: form.latitude,
              longitude: form.longitude
            }
          ]
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      alert("Profile Updated Successfully");

    } catch (error) {
      console.log(error);
    }

  };



  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          My Profile
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="border p-2 rounded"
          />

          <input
            name="email"
            value={form.email}
            disabled
            className="border p-2 rounded bg-gray-100"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border p-2 rounded"
          />

          <input
            name="street"
            value={form.street}
            onChange={handleChange}
            placeholder="Street"
            className="border p-2 rounded"
          />

          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
            className="border p-2 rounded"
          />

          <input
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="State"
            className="border p-2 rounded"
          />

          <input
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            className="border p-2 rounded"
          />

        </div>


        {/* 📍 GPS BUTTON */}
        <button
          onClick={getLocation}
          className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          Use My Current Location 📍
        </button>


        {/* 🗺️ MAP PICKER */}
        <h3 className="text-lg font-semibold mt-6 mb-2">
          Select Location on Map 📍
        </h3>

        <LocationPicker setLocation={setMapLocation} />


        {/* SAVE BUTTON */}
        <button
          onClick={updateProfile}
          className="mt-6 ml-4 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
        >
          Save Profile
        </button>

      </div>

    </div>

  );

};

export default Profile;