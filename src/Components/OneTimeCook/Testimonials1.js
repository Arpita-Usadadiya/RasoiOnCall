import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]); // MUST be array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/testimonial/getAll"
        );

        // 🔥 FIX IS HERE
        const data = Array.isArray(res.data)
          ? res.data
          : res.data.data || [];

        setTestimonials(data);
      } catch (err) {
        setError("Failed to load testimonials");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="container mx-auto px-4 py-12">
      <Slider {...settings}>
        {testimonials.map((t) => (
          <div key={t._id} className="p-4">
            <div className="bg-green-800 p-6 rounded-lg text-center">
              <img
                src={`data:image/jpeg;base64,${t.profileimage}`}
                alt={t.name}
                className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
              />

              <p className="text-white">{t.content}</p>

              <div className="flex justify-center gap-1 mt-4 text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <h2 className="text-white mt-3 font-semibold">{t.name}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
