"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles/HeroSection.module.css";

//icons
import myself_img from "@/../../public/assets/heroSection/my_img.png";

//Skills
//fontend
import react from "@/../../public/assets/skills/react_language.webp";
import html from "@/../../public/assets/skills/html.png";
import css from "@/../../public/assets/skills/css.png";
import js from "@/../../public/assets/skills/javascript.png";
import next from "@/../../public/assets/skills/nextjs.png";


//backend
import python from "@/../../public/assets/skills/python.png";
import Mysql from "@/../../public/assets/skills/mySQL.png";


//other
import git from "@/../../public/assets/skills/github.png";
import vscode from "@/../../public/assets/skills/vscode.png";
import postman from "@/../../public/assets/skills/postman.png";


const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <>
      <div className={styles.HeroSection_container} id="home">
        <motion.div
          className={styles.HeroSection}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* left side design */}
          <motion.div className={styles.left} variants={fadeInLeft}>
            <motion.div className={styles.sub_heading} variants={fadeInUp}>
              <strong>Freelance Web Developer</strong>
            </motion.div>
            <motion.div className={styles.name} variants={fadeInUp}>
              <strong>Nithiesh Kumar</strong>
            </motion.div>
            <motion.div className={styles.about_me} variants={fadeInUp}>
              <p>
              I have a strong interest in the IT field and specialize in building dynamic, responsive websites and applications. With experience in various web technologies, I focus on delivering high-quality, user-friendly solutions. Recently, I developed my portfolio using Next.js, showcasing my expertise in creating fast, scalable, and SEO-friendly web applications.
              </p>
            </motion.div>
          </motion.div>
          {/* right side design */}
          <motion.div className={styles.right} variants={fadeInRight}>
            <motion.div
              className={styles.profile}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={myself_img} alt="nithiesh kumar freelancer" priority />
              <div className={styles.programming}>
                <motion.div
                  className={styles.list}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image src={react} alt="React" />
                </motion.div>
                <motion.div
                  className={styles.list}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image src={git} alt="Git" />
                </motion.div>
                <motion.div
                  className={styles.list}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image src={vscode} alt="VS Code" />
                </motion.div>
                <motion.div
                  className={styles.list}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image src={css} alt="CSS" />
                </motion.div>
                <motion.div
                  className={styles.list}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image src={html} alt="HTML" />
                </motion.div>
                <motion.div
                  className={styles.list}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image src={js} alt="JavaScript" />
                </motion.div>
                <motion.div
                  className={styles.list}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image src={next} alt="Next.js" />
                </motion.div>
                <motion.div
                  className={styles.list}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image src={python} alt="Python" />
                </motion.div>
                <motion.div
                  className={styles.list}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image src={Mysql} alt="MySQL" />
                </motion.div>
                <motion.div
                  className={styles.list}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image src={postman} alt="Postman" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* next section */}
        <motion.div
          className={styles.next_section_arrow}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <a href="#about">
            <motion.div
              className={styles.btn}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </motion.div>
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;
