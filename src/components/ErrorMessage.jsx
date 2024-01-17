"use client";

import { motion as m } from "framer-motion";

const ErrorMessage = ({ message }) => {
  return (
    <m.div
      initial={{ y: -100 }}
      animate={{ y: 0, transition: { duration: 0.3 } }}
      className="fixed top-0 left-0 h-16 w-full bg-red-400 flex justify-center items-center"
    >
      <h3>{message}</h3>
    </m.div>
  );
};

export default ErrorMessage;
