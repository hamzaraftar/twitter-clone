import React from "react";
import { HiOutlinePhotograph } from "react-icons/hi";

const Input = () => {
  return (
    <div className="w-full divide-y divide-gray-200">
      <textarea
        className="w-full px-10 py-2 border-none outline-none tracking-wide min-h-[50px]  text-gray-700"
        placeholder="Whats happening "
        rows="2"
      ></textarea>
      <div className="flex items-center justify-between pt-2.5">
        <HiOutlinePhotograph className="h-10 w-10 p-2 text-sky-500 hover:bg-sky-100 rounded-full cursor-pointer" />
        <button className="bg-blue-400 text-white px-4 p-y1.5 rounded-full font-bold shadow-md hover:brightness-95 ">
          Post
        </button>
      </div>
    </div>
  );
};

export default Input;
