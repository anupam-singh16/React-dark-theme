import React, { useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toaster() {
  // const notify = () => toast.success("Login Succes");

  const hello = () =>{
    toast.success("SingUp Success", {
      position: "bottom-left",
    });
  }

  useEffect(()=>{
    toast.success("SingUp Success", {
      position: "top-center",
    });
  },[])

  return (
    <div>
      {/* <button onClick={()=>hello()}>Notify!</button> */}
      <ToastContainer
      // position="top-center"
      autoClose={1000}
      // hideProgressBar={false}
      // newestOnTop={false}
      // closeOnClick
      // rtl={false}
      // pauseOnFocusLoss
      // draggable
      // pauseOnHover
      // theme="light"
     
      />
    </div>
  );
}

export default Toaster;
