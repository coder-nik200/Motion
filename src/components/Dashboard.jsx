import {
  ChartNoAxesCombined,
  ChevronRight,
  Home,
  Settings,
  User,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    {
      name: "Analytics",
      href: "/analytics",
      icon: <ChartNoAxesCombined size={18} />,
    },
    { name: "Users", href: "/users", icon: <User size={18} /> },
    { name: "Settings", href: "/settings", icon: <Settings size={18} /> },
  ];

  const sidebarVariants = {
    open: {
      width: 224, // w-56
      padding: 24,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    closed: {
      width: 64, // w-16
      padding: 12,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const parentVariant = {
    open: {
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.5,
        staggerDirection: -1,
      },
    },
  };

  const childVariant = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -10,
    },
  };

  return (
    <motion.div
      variants={sidebarVariants}
      initial="closed"
      animate={open ? "open" : "closed"}
      className="fixed top-0 left-0 h-screen flex flex-col bg-white border-r border-gray-300 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        {open && <h1 className="font-bold text-2xl">Dashboard</h1>}

        <motion.button
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-full p-2 shadow-md hover:bg-gray-100"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight size={26} />
        </motion.button>
      </div>

      {/* Navigation */}
      <motion.ul variants={parentVariant} className="space-y-2">
        {links.map((link) => (
          <motion.li
            variants={childVariant}
            key={link.name}
            className="rounded hover:bg-gray-200"
          >
            <a
              href={link.href}
              className="flex items-center gap-3 p-2 text-gray-700"
            >
              {link.icon}
              {/* {open && <span>{link.name}</span>} */}
              <AnimatePresence>
                {open && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="whitespace-nowrap"
                  >
                    {link.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Dashboard;
