"use client";

import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import AddRecipeModal from "../modal/AddRecipeModal";
import { AnimatePresence } from "framer-motion";

const AddButton = ({ refetch }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 md:px-8 py-1.5 bg-primary rounded text-xs sm:text-sm uppercase font-semibold flex items-center gap-x-2"
      >
        <IoAddOutline size={20} />
        Add Recipe
      </button>

      <AnimatePresence>
        {isOpen && (
          <AddRecipeModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            refetch={refetch}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default AddButton;
