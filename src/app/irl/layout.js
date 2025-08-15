"use client";
import IRLNavbar from "@/Components/IRL/IRLNavbar";
import "../globals.css";
import LoadingPage from "@/Components/LoadingPage";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function IRLLayout({ children }) {
  const [loadingPage, setLoadingPage] = useState(true);
  const router = useRouter();

  const { loading: userLoading, user, isAuthenticated } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (userLoading) {
      setLoadingPage(true);
      return;
    }

    if (isAuthenticated && user) {
      setLoadingPage(false);
    } else {
      setLoadingPage(true);
      router.push("/");
    }
  }, [userLoading, isAuthenticated, user, router]);

  return (
    <>
      <IRLNavbar />
        {children}

        {(loadingPage || userLoading) && (
            <LoadingPage />
        )}
    </>
  );
}
