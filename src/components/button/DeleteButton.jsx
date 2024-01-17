"use client";

import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import DeleteRecipeModal from "../modal/DeleteRecipeModal";
import { AnimatePresence } from "framer-motion";

const DeleteButton = ({ recipe }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="h-8 w-8 flex justify-center items-center rounded duration-500 hover:bg-gray-200"
      >
        <MdDeleteOutline size={24} className="text-rose-600" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <DeleteRecipeModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            recipe={recipe}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default DeleteButton;
