import React, { useState, useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import Loading from "./Loading";

const AdminPanel = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { user, auth, loading } = useAuthContext;

  useEffect(() => {
    console.log(user);
  }, []);

  return <>{loading ? <Loading /> : <button className="btn--primary w-1/12 fixed right-8 bottom-8 py-3">Admin</button>}</>;
};

export default AdminPanel;
