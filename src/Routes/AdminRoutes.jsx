import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
// import useCurrentUser from "../Hooks/useCurrentUser";
import Loading from "../SharedComponent/Loader/Loading";
import useAxios from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
const axiosInstance=useAxios()

    const { data: currentUser = [],isLoading} = useQuery({
    queryKey: ["userprofile", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/currentuser/${user?.email}`);
      return res.data;
    },
  });

  // fetch user info from DB
//   const { currentUser, isLoading } = useCurrentUser(user?.email);

  if (loading || isLoading) {
    return <Loading />;
  }

  // not logged in
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // logged in but not admin
  if (currentUser?.role !== "Admin") {
    return <Navigate to="/forbidden" replace />;
  }

  return children;
};

export default AdminRoute;
