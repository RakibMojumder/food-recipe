"use client";

import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import UpdateModal from "../modal/UpdateModal";
import { AnimatePresence } from "framer-motion";

const UpdateButton = ({ recipe }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="h-8 w-8 flex justify-center items-center rounded duration-500 hover:bg-gray-200"
      >
        <AiOutlineEdit size={24} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <UpdateModal isOpen={isOpen} setIsOpen={setIsOpen} recipe={recipe} />
        )}
      </AnimatePresence>
    </>
  );
};

export default UpdateButton;
