"use client";

import { useState } from "react";
import LoginModal from "@/app/components/LoginModal";
import { AnimatePresence } from "framer-motion";

const LogInOut = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && <LoginModal setIsOpen={setIsOpen} />}
      </AnimatePresence>
      <button onClick={() => setIsOpen(true)}>Login</button>
    </>
  );
};

export default LogInOut;
