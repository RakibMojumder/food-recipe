import Image from "next/image";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Select from "react-select";
import ingredients from "@/../public/ingredients";
import Input from "../Input";
import { useUpdateRecipeMutation } from "@/redux/api/recipeApi";
import { toast } from "sonner";
import ErrorMessage from "../ErrorMessage";
import { motion as m } from "framer-motion";

const UpdateModal = ({ recipe, isOpen, setIsOpen }) => {
  const [title, setTitle] = useState(recipe.title);
  const [image, setImage] = useState("");
  const [instructions, setInstructions] = useState(recipe.instructions);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [updateRecipe, { isLoading, data }] = useUpdateRecipeMutation();

  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  if (data?.msg) {
    setIsOpen(false);
    toast.success("update successful");
  }

  const handleUpdateRecipe = async (e) => {
    e.preventDefault();
    const ingredients = selectedOptions.map((option) => option.value);
    let payload;
    if (image) {
      payload = { title, instructions, ingredients, image };
    } else {
      payload = { title, instructions, ingredients };
    }
    updateRecipe({ id: recipe._id, payload });
  };

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
        initial={{ y: 100 }}
        animate={{ y: 0, transition: { duration: 0.3 } }}
        exit={{ y: 100, opacity: 0, transition: { duration: 0.3 } }}
        className="w-[90%] sm:w-[75%] md:w-1/2 xl:w-1/3 h-[450px] sm:h-96 absolute bg-white rounded flex flex-col justify-between"
      >
        <div className="flex items-center px-4 py-2 border-b">
          <h3 className="w-[90%] text-md font-semibold text-center">
            Update Recipe
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="flex justify-center flex-1"
          >
            <RxCross2 size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-4 pt-4 pb-8 space-y-4">
          <Input
            placeholder={"Enter title"}
            defaultValue={title}
            handleChange={(e) => setTitle(e.target.value)}
          />
          <Select
            options={ingredients}
            defaultValue={selectedOptions}
            isMulti={true}
            onChange={handleChange}
          />
          <textarea
            defaultValue={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            cols="30"
            rows="6"
            placeholder="Write instruction here"
            className="w-full py-1 pl-3 border focus:outline-none focus:border-primary rounded"
          ></textarea>
          <div className="w-2/5 mx-auto border-2 border-dashed border-primary rounded flex justify-center items-center relative">
            {/* IMAGE PREVIEW */}
            <Image
              src={image ? image : recipe.image}
              alt="upload image"
              width={200}
              height={200}
            />
            <input
              type="file"
              name=""
              id=""
              onChange={(e) => handleFileInput(e)}
              className="absolute top-0 left-0 inset-0 opacity-0"
            />
          </div>
        </div>
        <div className=" px-4 py-3 border-t">
          <button
            onClick={handleUpdateRecipe}
            className="w-full py-2 bg-primary text-sm font-semibold uppercase rounded"
          >
            Submit
          </button>
        </div>
      </m.div>
      {data?.error && <ErrorMessage message={data.error} />}
    </m.div>
  );
};

export default UpdateModal;
