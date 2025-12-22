import { Link } from "react-router";

const Forbidden = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-red-600">
          🚫 Access Denied
        </h1>

        <p className="text-gray-500">
          You don’t have permission to view this page.
        </p>

        <Link to="/">
          <button className="btn btn-primary mt-2">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Forbidden;
