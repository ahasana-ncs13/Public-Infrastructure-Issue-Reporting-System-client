import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Parallax, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router";

const Banner = () => {
  const sliderData = [
    {
      id: 1,
      title: "Report City Issues Instantly",
      description:
        "Citizens can quickly report real-world public infrastructure problems such as potholes, broken streetlights, water leakage, garbage overflow, and damaged footpaths through a user-friendly digital platform, eliminating the need for manual complaints or repeated visits to offices.",
      image:
        "https://images.unsplash.com/photo-1686602723532-bd873c693ba3?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Transparent Issue Tracking",
      description:
        "Every reported issue is tracked with clear status updates including submission, verification, assignment, and resolution, ensuring transparency and keeping citizens informed about the progress of their complaints at all times.",
      image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4",
    },
    {
      id: 3,
      title: "Faster Government Response",
      description:
        "The system helps municipal authorities prioritize and assign issues efficiently, reducing delays in response and enabling faster resolution through organized workflows and accountability.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144",
    },
    {
      id: 4,
      title: "Data-Driven Infrastructure Planning",
      description:
        "All reported issues are stored as structured data, allowing government agencies to analyze patterns, identify high-risk areas, and make informed decisions for long-term infrastructure improvement.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      id: 5,
      title: "Centralized Management Dashboard",
      description:
        "Admins and government staff can manage, verify, assign, and resolve issues from a single dashboard, improving coordination between departments and ensuring no reported problem is overlooked.",
      image:
        "https://plus.unsplash.com/premium_photo-1663036532511-0b828f4034fb?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Empowering Citizens and Communities",
      description:
        "By providing a centralized reporting system, citizens are empowered to actively participate in improving their city, fostering trust, accountability, and better collaboration between communities and local authorities.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    }
  ];

  return (
    <div className="mt-10 relative w-full h-[60vh] bg-linear-to-r from-secondary via-amber-100 to-primary overflow-hidden rounded-2xl">
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={800}
        parallax={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="h-full"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center w-11/12 mx-auto gap-8">
              {/* Text Content */}
              <div
                className="flex flex-col justify-center max-w-2xl p-6"
                data-swiper-parallax="-300"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fadeIn">
                  {slide.title}
                </h2>
                <p className="text-gray-700 mb-6 animate-fadeIn delay-150">
                  {slide.description}
                </p>
                <button className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-secondary transition-all duration-300 animate-fadeIn delay-300 w-50">
                  <Link to="/dashboardLayout/reportIssue"> Report an Issue</Link>
                </button>
              </div>
              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full max-w-lg h-50 md:h-80 lg:h-[50vh] object-cover rounded-2xl shadow-lg animate-fadeIn"
                  data-swiper-parallax="-100"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Optional subtle gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-white/20 pointer-events-none"></div>
    </div>
  );
};

export default Banner;
