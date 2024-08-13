"use client";
import { signIn } from "next-auth/react";
import { SecondaryButton } from "./Button";

const Hero = () => {
  return (
    <div>
      <div className="text-4xl font-medium">
        The Great Indian Crypto
        <span className="text-blue-500 pl-4">Exchange</span>
        <div className="flex justify-between px-20 pt-4 text-2xl text-slate-500">
          Create your wallet in just a finger click
        </div>
        <div className="pt-4 flex justify-center">
          <SecondaryButton
            onClick={() => {
              signIn("google");
            }}
          >
            Login With Google
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
