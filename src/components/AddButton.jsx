"use client";

import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import AddRecipeModal from "./AddRecipeModal";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-8 py-1.5 bg-primary rounded text-sm uppercase font-semibold flex items-center gap-x-2"
      >
        <IoAddOutline size={20} />
        Add Recipe
      </button>
      {isOpen && <AddRecipeModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default AddButton;
