import React from "react";
import Image from "next/image";

export const Navbar: React.FC = () => {
  return (
    <>
      <Image
        src="../images/logo.svg"
        alt="Pawfect Days logo"
        className="flex gap-2 items-center"
        width={264}
        height={40}
      />
      <div className="flex items-center justify-center gap-10">
        <p className="text-primary">Log in</p>
        <button className="flex items-center justify-center py-1 px-3 bg-primary rounded-3xl text-white text-sm border-solid border-4 border-orange-400">
          Walk a dog
          <Image
            src="../images/dog-icon.svg"
            alt="Dog icon"
            className="pl-1"
            width={28}
            height={28}
          />
        </button>
      </div>
    </>
  );
};
