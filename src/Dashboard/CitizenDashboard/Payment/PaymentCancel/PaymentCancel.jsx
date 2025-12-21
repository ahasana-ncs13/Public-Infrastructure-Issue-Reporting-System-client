import { FaTimesCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { useEffect } from "react";

const PaymentCancel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboardLayout/userProfile");
    }, 6000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-50 to-base-200 px-4">
      <div className="w-full max-w-lg">
        <div className="card bg-base-100 shadow-2xl rounded-2xl">
          <div className="card-body text-center p-6 sm:p-8">

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <FaTimesCircle className="text-red-500 text-6xl sm:text-7xl" />
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-red-600">
              Payment Cancelled
            </h2>

            {/* Message */}
            <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed">
              Your payment process was cancelled.  
              No charges have been made to your account.
            </p>

            {/* Info Box */}
            <div className="mt-6 bg-red-50 rounded-xl p-4 text-sm text-red-700">
              You can try again or return to your dashboard.
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/dashboardLayout/userProfile" className="w-full sm:w-auto">
                <button className="btn btn-error w-full">
                  Try Again
                </button>
              </Link>

              <Link to="/" className="w-full sm:w-auto">
                <button className="btn btn-outline w-full">
                  Go to Dashboard
                </button>
              </Link>
            </div>

            {/* Footer */}
            <p className="mt-6 text-xs text-gray-400">
              If this keeps happening, please contact support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;
