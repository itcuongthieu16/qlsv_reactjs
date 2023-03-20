import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ type, message }) => {
  switch (type) {
    case "success":
      toast.success(message, { position: toast.POSITION.TOP_RIGHT });
      break;
    case "error":
      toast.error(message, { position: toast.POSITION.TOP_RIGHT });
      break;
    default:
      break;
  }

  return <ToastContainer autoClose={3000} />;
};

export default Toast;