import { useDeleteRecipeMutation } from "@/redux/api/recipeApi";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "sonner";
import Loader from "../Loader";
import { motion as m } from "framer-motion";
import useClickOutside from "@/hooks/useClickOutside";

const DeleteRecipeModal = ({ isOpen, setIsOpen, recipe }) => {
  const ref = useRef();
  const router = useRouter();
  useClickOutside(ref, () => setIsOpen(false));

  const [deleteRecipe, { isLoading, isSuccess }] = useDeleteRecipeMutation();
  const handleDeleteRecipe = async () => {
    deleteRecipe(recipe._id);
  };

  if (isSuccess) {
    setIsOpen(false);
    toast.success("successfully deleted");
    router.push("/");
  }

  if (isLoading) return <Loader />;

  return (
    <m.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      className={`h-screen w-full inset-0 fixed bg-black/40 z-50 flex justify-center items-center ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <m.div
        ref={ref}
        initial={{ y: 100 }}
        animate={{ y: 0, transition: { duration: 0.3 } }}
        exit={{ y: 100, opacity: 0, transition: { duration: 0.3 } }}
        className="w-[90%] sm:w-[75%] md:w-1/2 xl:w-1/3 absolute bg-white rounded flex flex-col justify-between"
      >
        <div className="flex items-center px-4 py-2 border-b">
          <h3 className="w-[90%] text-md font-semibold text-center">
            Delete Recipe
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            disabled={isLoading}
            className="flex justify-center flex-1"
          >
            <RxCross2 size={24} />
          </button>
        </div>
        <div className="flex-1 px-8 pt-4 pb-8 space-y-4">
          <h3 className="font-semibold text-center">
            Are you sure to delete this recipe?
          </h3>
          <div className="space-y-5">
            <button
              onClick={handleDeleteRecipe}
              className="w-full py-1.5 border border-primary rounded font-medium"
            >
              Yes
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-1.5 bg-primary rounded font-medium"
            >
              No
            </button>
          </div>
        </div>
      </m.div>
    </m.div>
  );
};

export default DeleteRecipeModal;
