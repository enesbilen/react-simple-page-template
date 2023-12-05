import { useState } from "react"
import Links from "./links/Links"
import "./sidebar.scss"
import ToggleButton from "./toggleButton/ToggleButton"
import { motion } from "framer-motion"

const variants = {
  open: {
    clipPath: "circle(1200px at 88% 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 88% 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const closeSidebar = () => {
    setOpen(false);
  };

  return (
    <motion.div className="sidebar" animate={open ? 'open' : 'closed'}>
      <motion.div className="bg" variants={variants}>
        {/* Sidebarda olan herhangi bir iteme bastığında sidebarı kapatmak için closeSidebar kullanıyoruz. */}
        <Links closeSidebar={closeSidebar} />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;