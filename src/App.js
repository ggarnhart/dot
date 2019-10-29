import React from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  var variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  return (
    <div className="full-height full-width dark-background center-everything">
      <motion.div
        animate={{ scale: [1, 15, 5, 40, 500] }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="dot"
      ></motion.div>
      <div className="above">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 3, duration: 1 }}
          variants={variants}
          className="center-everything"
        >
          <h2 className="lighter">
            We're <span className="heavier">Dot.</span>
          </h2>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="small-dot"
          ></motion.div>
          <motion.h3
            initial="hidden"
            animate="visible"
            transition={{ delay: 5, duration: 1 }}
            variants={variants}
            className="lighter no-bottom-margin"
          >
            We do shows. You should come see us.
          </motion.h3>
          <motion.h3
            initial="hidden"
            animate="visible"
            transition={{ delay: 5, duration: 1 }}
            variants={variants}
            className="lighter no-top-margin"
          >
            Until then, check us out on{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCMUN1Udv9x95PllzycuG6Kg"
            >
              Youtube.
            </a>
          </motion.h3>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
