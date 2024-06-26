"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navigation = ({ showLoginButton, showUserIcon }) => {
    return (
      <motion.nav 
      initial={{ y: "-100vh" }}
      animate={{ y: "0vh" ,

       }}
       transition={{ duration: 2, 
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1] ,
        delay: 0.2,
       }}
       className='bg-emerald-300 w-full h-24  '
      >
        <motion.nav className='flex justify-between items-center p-6  text-white'>
          {1 && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='text-2xl'
            >
              SM |  Student Management System
            </motion.button>
          )}
          <motion.div
          className='flex items-center space-x-4'
          >
            {showLoginButton && (
              <Link href="/Login">
                <motion.button
                  alt="User Icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='bg-white/30 px-6 py-2 rounded-3xl'
                >
                  Login
                </motion.button>
              </Link>
            )}
             {showUserIcon && (
              <motion.div
                alt="User Icon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='bg-white/30 px-6 py-2 rounded-3xl'
              >
                avatar
              </motion.div>
            )}
          </motion.div>
        </motion.nav>
      </motion.nav>
    );
};

export default Navigation;