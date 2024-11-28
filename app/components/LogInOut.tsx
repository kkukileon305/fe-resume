"use client";

import { useState } from "react";
import LoginModal from "@/app/components/LoginModal";
import { AnimatePresence } from "framer-motion";
import { User } from "@supabase/auth-js";
import { createClient } from "@/app/utils/supabase/client";
import { useRouter } from "next/navigation";

const LogInOut = ({ user }: { user: User | null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const onLogout = async () => {
    const sb = createClient();
    await sb.auth.signOut();
    router.refresh();
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && <LoginModal setIsOpen={setIsOpen} />}
      </AnimatePresence>
      {user ? (
        <button onClick={onLogout}>Logout</button>
      ) : (
        <button onClick={() => setIsOpen(true)}>Login</button>
      )}
    </>
  );
};

export default LogInOut;
