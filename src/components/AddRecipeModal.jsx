import React from "react";
import { RxCross2 } from "react-icons/rx";
import Input from "./Input";

const AddRecipeModal = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`h-screen w-full inset-0 fixed bg-black/40 z-50 flex justify-center items-center ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="w-1/3 h-96 absolute bg-white rounded flex flex-col justify-between">
        <div className="flex items-center px-4 py-2 border-b">
          <h3 className="w-[90%] text-md font-semibold text-center">
            Add Recipe
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="flex justify-center flex-1"
          >
            <RxCross2 size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <form action="" className="space-y-4">
            <Input placeholder={"Enter title"} />
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="Write instruction here"
              className="w-full py-1 pl-3 border focus:outline-none focus:border-primary rounded"
            ></textarea>
            {/* <Select/> */}
          </form>
        </div>
        <div className=" px-4 py-3 border-t">
          <button className="w-full py-2 bg-primary text-sm font-semibold uppercase rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeModal;
