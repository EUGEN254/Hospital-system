import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const HealthCareContext = createContext();

export const HealthCareContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  //fetch current user details
  const fetchCurrentUser = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/users/get-user`, {
        withCredentials: true,
      });

      if (response.data.success) {
        setUser(response.data.user);
      } else {
        setUser(null);
        return null;
      }
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };

  // logout user
  const logout = async () => {
    try {
      const res = await axios.post(
        `${backendUrl}/api/users/logout`,
        {},
        {withCredentials:true}
      )

      if(res.data.success){
        toast.success(res.data.message)
        setUser(null);
        navigate("/");
      }else{
        toast.error(res.data.message)
      }
    } catch (error) {
      toast.error(
        error?.res?.data?.message || error.message || "failed to logout"
      )
    }
    
  }

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const value = {
    backendUrl,
    logout,
    user,
    setUser,
    fetchCurrentUser,
  };

  return (
    <HealthCareContext.Provider value={value}>
      {children}
    </HealthCareContext.Provider>
  );
};

export const useHealthcare = () => {
  const context = useContext(HealthCareContext);
  if (!context) {
    throw new Error(
      "useHealthcare must be used within a HealthCareContextProvider"
    );
  }
  return context;
};
