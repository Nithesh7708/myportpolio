"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles/skills.module.css";


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


const Skills = () => {
  // Technologies - Programming Languages and Frameworks
  const technologies = [
    { Img: react, Alt: "React" },
    { Img: next, Alt: "Next.js" },
    { Img: js, Alt: "JavaScript" },
    { Img: html, Alt: "HTML5" },
    { Img: css, Alt: "CSS3" },
    { Img: python, Alt: "Python" },
    { Img: Mysql, Alt: "MySQL" },
    // Note: Add Node.js, Express.js, React Native icons when available
  ];

  // Tools - Developer Tools
  const tools = [
    { Img: git, Alt: "Git" },
    { Img: vscode, Alt: "VS Code" },
    { Img: postman, Alt: "Postman" },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <section id="skills" className={styles.skills_container}>
        <motion.div
          className={styles.head}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <h1>Technologies & Expertise</h1>
          <p>Modern stack I use to build production-grade applications</p>
        </motion.div>

        <motion.div
          className={styles.skills}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className={styles.heading} variants={itemVariants}>
            <h2>Technologies</h2>
          </motion.div>
          <motion.div className={styles.lists} variants={containerVariants}>
            {technologies.map((items, index) => (
              <motion.div
                className={styles.list}
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={styles.icon_wrapper}>
                  <Image src={items.Img} alt={items.Alt} />
                </div>
                <span>{items.Alt}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.skills}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className={styles.heading} variants={itemVariants}>
            <h2>Tools</h2>
          </motion.div>
          <motion.div className={styles.lists} variants={containerVariants}>
            {tools.map((items, index) => (
              <motion.div
                className={styles.list}
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={styles.icon_wrapper}>
                  <Image src={items.Img} alt={items.Alt} />
                </div>
                <span>{items.Alt}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Skills;
