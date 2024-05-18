import React from "react";
import Image from "next/image";
import { sourceSerif4 } from "@/app/layout";
import clsx from "clsx";

export const Hero: React.FC = () => {
  return (
    <>
      <div className="flex items-center bg-secondary p-28 m-10 rounded-3xl">
        <div className="grid gap-y-6">
          <h1 className="text-6xl font-semibold">
            Book a trustworthy companion for{" "}
            <span className="italic">your</span> companion
          </h1>
          <h3 className="text-xl">
            Finding a dog walker should only take a few minutes.
          </h3>
          <div className="flex items-center gap-10">
            <button className="flex items-center justify-center py-1 px-3 bg-primary rounded-3xl text-white text-sm">
              Book a walk
              <Image
                src="../images/heart-handshake-icon.svg"
                alt="heart handshake icon"
                className="pl-1"
                width={28}
                height={28}
              />
            </button>
            <div className="flex items-center gap-1">
              <p className="text-primary">Learn more</p>
              <Image
                src="../images/arrow-right-circle-icon.svg"
                alt="right arrow icon"
                className="pl-1"
                width={28}
                height={28}
              />
            </div>
          </div>
        </div>
        <div className="block">
          <Image
            src="../images/dog (1).svg"
            alt="Cute sitting dog"
            width={521}
            height={691}
          />
        </div>
      </div>
      <div className="flex items-center bg-secondary p-28 m-10 rounded-3xl">
        <div className="block">
          <Image
            src="../images/dog (2).svg"
            alt="Cute standing dog"
            width={579}
            height={579}
          />
        </div>
        <div className="grid gap-y-6">
          <div>
            <h1 className="text-4xl font-bold">Getting started?</h1>
            <h1 className="text-4xl font-bold">It's a walk in the park!</h1>
          </div>
          <h3 className="text-xl">
            Finding a dog walker should only take a few minutes.
          </h3>
        </div>
      </div>
    </>
  );
};
