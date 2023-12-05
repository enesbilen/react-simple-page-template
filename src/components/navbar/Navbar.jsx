import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"
import { motion } from "framer-motion"

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.7,
                    }}
                >
                    Enes Bilen Dev</motion.span >
                <div className="social">
                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.7,
                        }} href='https://www.instagram.com/enesbln/'> <img src='/instagram.png' alt='' /> </motion.a>
                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.7,
                        }} href='https://www.linkedin.com/in/enesbln/'> <img src='/linkedin.png' alt='' /> </motion.a>
                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.7,
                        }} href='https://github.com/enesbilen/'> <img src='/github.png' alt='' /> </motion.a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;