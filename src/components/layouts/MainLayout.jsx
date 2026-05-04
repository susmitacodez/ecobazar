import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import TopBar from "../TopBar";
import Searchbar from "../Searchbar";
import Navbar from "../Navbar";
import Modal from "../Modal";

const MainLayout = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hide = localStorage.getItem("hideNewsletter");
    if (!hide) {
      setOpen(true);
    }
  }, []);

  return (
    <>
      <TopBar />
      <Searchbar />
      <Navbar />
      <Outlet />

      <Modal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default MainLayout;