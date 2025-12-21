import { FaCheckCircle } from "react-icons/fa";
import { Link, useNavigate, useSearchParams } from "react-router";
import { useEffect } from "react";
import useAxios from "../../../../Hooks/useAxios";
import {useQuery } from "@tanstack/react-query";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboardLayout/citizenDashboard");
    }, 6000);
    return () => clearTimeout(timer);
  }, [navigate]);

  const [params] = useSearchParams();
  const sessionId = params.get("session_id");
  const axiosInstance = useAxios();

 const { data: PaymentSuccess = [],  } = useQuery({
    queryKey: ["payment-success"],
    queryFn: async () => {
      const res = await axiosInstance.patch("/payment-success", { sessionId });
      return res.data;
    },
  });

//   console.log(PaymentSuccess)

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 to-base-200 px-4">
      <div className="w-full max-w-lg">
        <div className="card bg-base-100 shadow-2xl rounded-2xl">
          <div className="card-body text-center p-6 sm:p-8">

            {/* Icon */}
            <div className="flex justify-center mb-4 animate-bounce">
              <FaCheckCircle className="text-green-500 text-6xl sm:text-7xl" />
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-green-600">
              Payment Successful
            </h2>

            {/* Message */}
            <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed">
              Your payment has been processed successfully.  
              Thank you for trusting our service.
            </p>

            {/* Info Box */}
            <div className="mt-6 bg-green-50 rounded-xl p-4 text-sm text-green-700">
              You will be redirected to your dashboard shortly.
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/dashboardLayout/userProfile" className="w-full sm:w-auto">
                <button className="btn btn-success w-full">
                  Go to Dashboard
                </button>
              </Link>

              <Link to="/" className="w-full sm:w-auto">
                <button className="btn btn-outline w-full">
                  Back to Home
                </button>
              </Link>
            </div>

            {/* Footer */}
            <p className="mt-6 text-xs text-gray-400">
              Need help? Contact support anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
