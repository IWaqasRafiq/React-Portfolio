import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          staggerChildren: 0.1,
        },
      },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>WAQAS RAFIQ</motion.h2>
          <motion.h1 variants={textVariants}>MERN Stack Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons" >
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img variants={textVariants} src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <div className="slidingContainer">Writer Content Creater Influencer</div>
      <div className="imageContainer">
        <img src="/hero.png" width={700} alt="" />
      </div>
    </div>
  );
};

export default Hero;
