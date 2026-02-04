import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Card = () => {
  const [cardOpen, setCardOpen] = useState(true);
  const [gridOpen, setGridOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 gap-6">
      {/* CARD */}
      <AnimatePresence>
        {cardOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
            className="w-80 h-[28rem] rounded-2xl bg-white
              shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05)]
              p-6 flex flex-col justify-between"
          >
            {/* Header */}
            <div>
              <h2 className="font-semibold text-lg text-gray-900">
                UI Components
              </h2>
              <p className="text-neutral-600 mt-2 text-sm">
                Popular components included
              </p>
            </div>

            {/* IMAGE GRID */}
            <AnimatePresence>
              {gridOpen && (
                <motion.div
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0)" }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 gap-3 mt-4 border border-gray-200 p-3 rounded-xl"
                >
                  {["Button", "Card", "Modal", "Navbar"].map((item) => (
                    <div
                      key={item}
                      className="bg-white rounded-xl p-3 shadow-2xl shadow-blue-500/20
                        flex flex-col items-center text-center"
                    >
                      <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center">
                        <img
                          src="/Image.jpg"
                          alt={item}
                          className="w-12 h-12 object-cover"
                        />
                      </div>
                      <span className="text-xs text-gray-600 mt-2">{item}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* INSIDE BUTTON → GRID TOGGLE */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setGridOpen((prev) => !prev)}
              className="mt-5 w-full py-2 rounded-xl bg-black text-white text-sm font-medium
                shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            >
              {gridOpen ? "Close Grid" : "Open Grid"}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* OUTSIDE BUTTON → CARD TOGGLE */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setCardOpen((prev) => !prev)}
        className="w-72 py-2 rounded-xl bg-black text-white text-sm font-medium
          shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
      >
        {cardOpen ? "Close Card" : "Open Card"}
      </motion.button>
    </div>
  );
};

export default Card;
