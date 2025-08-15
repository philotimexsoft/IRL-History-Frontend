"use client";
import Navbar from "@/Components/Home/Navbar";
import Footer from "@/Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GetProfile } from "@/store/Reducers/UserReducer/UserActions";
import LoadingPage from "@/Components/LoadingPage";

export default function MainLayout({ children }) {
  const dispatch = useDispatch();
  const [loadingPage, setLoadingPage] = useState(true);

  const {
    loading: userLoading,
    user,
    isAuthenticated,
  } = useSelector((state) => state.user);


  useEffect(() => {
    setLoadingPage(true);
    dispatch(GetProfile()).finally(() => setLoadingPage(false));
  }, [dispatch]);


  useEffect(() => {
    if (userLoading) {
      setLoadingPage(true);
      return;
    }

    setLoadingPage(false);
  }, [userLoading, isAuthenticated, user]);

  return (
    <>
      <Navbar />

      {children}

      {(loadingPage || userLoading) && <LoadingPage />}

      <Footer />
    </>
  );
}
