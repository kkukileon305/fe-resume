"use client";

import useLockScroll from "@/app/utils/hooks/useLockScroll";
import GoogleLoginImage from "@/public/images/google_login.svg";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { createClient } from "@/app/utils/supabase/client";

type LoginModalProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const LoginModal = ({ setIsOpen }: LoginModalProps) => {
  useLockScroll();

  const onClick = async () => {
    const sb = createClient();

    await sb.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo:
          process.env.NODE_ENV === "production"
            ? "https://fe-resume.vercel.app/auth/callback"
            : "http://localhost:3000/auth/callback",
      },
    });
  };

  return (
    <div className="animate-fade-in fixed left-0 top-0 w-full h-full z-30 bg-black/50 flex justify-center items-center p-2">
      <div className="max-w-xl w-full p-4 bg-white rounded-xl shadow-lg flex flex-col items-center">
        <Image
          src={GoogleLoginImage}
          alt="구글 로그인"
          width="189"
          height="40"
          onClick={onClick}
          className="cursor-pointer"
        />

        <button
          onClick={() => setIsOpen(false)}
          className="rounded-full bg-red-400 p-2 w-full mt-4 font-bold text-white max-w-[189px]"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
