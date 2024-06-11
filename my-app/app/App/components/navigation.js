"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Navigation = ({ showLoginButton, showUserIcon }) => {
    return (
      <motion.nav>
        {showLoginButton && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Login
          </motion.button>
        )}
        {showUserIcon && (
          <motion.img
            src="https://i.pravatar.cc/150?img=32"
            alt="User Icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        )}
      </motion.nav>
    );
};

export default Navigation;