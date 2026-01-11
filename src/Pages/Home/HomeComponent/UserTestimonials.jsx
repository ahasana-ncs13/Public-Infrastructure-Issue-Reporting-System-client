import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Amina Rahman",
    role: "Citizen",
    feedback: "My streetlight was fixed within 48 hours.",
    gradient: "from-purple-500 via-pink-500 to-red-500",
    dot: "bg-pink-500",
  },
  {
    id: 2,
    name: "Rafiq Hossain",
    role: "Resident",
    feedback: "Finally a platform where voices are heard.",
    gradient: "from-green-500 via-teal-500 to-blue-500",
    dot: "bg-teal-500",
  },
  {
    id: 3,
    name: "Shirin Akter",
    role: "Community Member",
    feedback: "Reporting potholes has never been easier.",
    gradient: "from-yellow-400 via-orange-400 to-red-400",
    dot: "bg-orange-400",
  },
  {
    id: 4,
    name: "Tariq Mahmud",
    role: "Citizen",
    feedback: "The authorities responded quickly to my complaint.",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    dot: "bg-purple-500",
  },
];

const UserTestimonialsModern = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
        setFade(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const changeSlide = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 300);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Citizen Voices
        </h2>
        <p className="text-base-content/70 mb-12">
          Real experiences from citizens improving their cities together
        </p>

        {/* Testimonial */}
        <div
          className={`relative p-10 rounded-3xl text-white shadow-2xl 
          transition-all duration-500 bg-gradient-to-r ${current.gradient}
          ${fade ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <p className="text-xl italic mb-6 leading-relaxed">
            “{current.feedback}”
          </p>

          <h3 className="font-bold text-lg">{current.name}</h3>
          <p className="text-sm opacity-90">{current.role}</p>

          {/* Arrows */}
          <button
            onClick={() =>
              changeSlide(
                currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 
            btn btn-circle btn-sm bg-white/80 text-black hover:bg-white"
          >
            ‹
          </button>

          <button
            onClick={() =>
              changeSlide(
                currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 
            btn btn-circle btn-sm bg-white/80 text-black hover:bg-white"
          >
            ›
          </button>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-8">
          {testimonials.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => changeSlide(idx)}
              className={`w-4 h-4 rounded-full transition-all duration-300
                ${item.dot}
                ${
                  idx === currentIndex
                    ? "scale-125 ring-4 ring-offset-2 ring-primary"
                    : "opacity-40 hover:opacity-80"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTestimonialsModern;
