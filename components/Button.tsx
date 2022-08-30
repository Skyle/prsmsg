import React from "react";

type Props = {};

function Button({}: Props) {
  return (
    <div className="">
      <button
        type="submit"
        className="border-b-green-600 border-b-[40px] border-r-transparent border-r-[25px] border-l-transparent border-l-[25px] hover:border-b-pink-600"
      ></button>
    </div>
  );
}

export default Button;
