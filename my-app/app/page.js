"use client";
import react, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Navigation from "./App/components/navigation";
import landing from "@/public/landing.png"
export default function Home() {
  let text_style = "text-center";
  const [style, setStyle] = useState(false);
  const [style1, setStyle1] = useState(false);
  const [show, setShow] = useState(true);
  const [text, setText] = useState(false);

  const [text_styel, setTextStyle] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setStyle(true);
    }, 2000);
    setTimeout(() => {
      setStyle1(true);
    }, 2500);
    setTimeout(() => {
      setText(true);
    }, 3600);
  }, []);
  return (
    <>
      <Navigation showLoginButton={true} />
      {
        //
        <div className="relative  w-screen overflow-hidden">
          <motion.div
            initial={{ opacity: 0, translateY: "-128px", scale: 1.3 }}
            animate={{ opacity: 1, translateY: "-128px" }}
            exit={{}}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center justify-center h-screen  relative  font-mono font-medium"
            onAnimationComplete={() => setShow(false)}
          >
            <AnimatePresence>
              {style === false && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ translateY: "128px" }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-8xl font-bold "
                >
                  <h1 className={`text-8xl font-bold ${text_style} z-0`}>
                    {" "}
                    Student
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div
              className="bg-white flex  h-32  absolute w-[90vh] translate-y-32 "
              onAnimationComplete={() => setShow(false)}
            >
              <AnimatePresence>
                {style1 === false && (
                  <motion.div
                    initial={{}}
                    animate={{ opacity: 1 }}
                    exit={{ translateY: "128px" }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={`text-6xl font-bold ${text_style} z-20 w-[710vh]`}
                  >
                    Management System{" "}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div className="bg-white flex  h-32  absolute w-[90vh] translate-y-52 "></motion.div>
          </motion.div>
        </div>
      }
      <AnimatePresence>
       {  text===false && 
       ( <motion.div
          initial={{ scale: 1, width:'00.001px' , height:'100px',}}
          animate={{ opacity: 1, width:'1000px' , height:'100px',}}
          exit={{ width:'10px', height:'100px'}}
          transition={{ duration: 0.2 , delay:3.5 }}
          className="text-black absolute top-[35vh] bg-slate-200 left-20 z-50"
        >
        
        </motion.div>
      )
      }
      </AnimatePresence>
      
      <motion.div
          initial={{ scale: 1, opacity:0,}}
          animate={{ opacity: 1, }}
         
          transition={{ duration: 0.3, delay: 3.6 }}
          className="text-black text-5xl w-[70vh] absolute top-[35vh]  left-20 z-0"
        >
          Student Management System
        </motion.div>


        <AnimatePresence>
       {  text===false && 
       ( <motion.div
          initial={{ scale: 1, width:'00.001px' , height:'100px',}}
          animate={{ opacity: 1, width:'1000px' , height:'100px',}}
          exit={{ width:'10px', height:'100px'}}
          transition={{ duration: 0.2 , delay:3.5 }}
          className="text-black absolute top-[50vh] bg-slate-200 left-20 z-50"
        >
        
        </motion.div>
      )
      }
      </AnimatePresence>
        <motion.div
          initial={{ scale: 1, opacity:0,}}
          animate={{ opacity: 1, }}
         
          transition={{ duration: 0.4, delay: 4.3 }}
          className="text-slate-400 text-2xl w-[70vh] absolute top-[50vh]  left-20 z-0"
        >
          A Systematic way to organize and manage students data in your college or school.
          <br />
          Explore More just register yourself

        </motion.div>

       <motion.div className="absolute top-[36vh] right-32  " initial={
         { scale: 1, opacity:0,}
       }
       animate={{

        opacity: 1,
       }}
       transition={{
        duration: 0.4 , delay:4.3
       }}
       >
        <img src={"/landing.png"} />
       </motion.div>
        
    </>
  );
}
