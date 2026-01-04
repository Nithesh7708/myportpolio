"use client";

import { motion } from "framer-motion";
import styles from './styles/About_me.module.css'

const About_me = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section id="about" className={styles.about_section}>
    <div className={styles.About_me_container}>
      <motion.div
        className={styles.About_me}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div className={styles.content_section} variants={fadeInUp}>
          <motion.div className={styles.heading} variants={fadeInUp}>
            <h1>Who I Am</h1>
          </motion.div>
          <motion.div className={styles.content} variants={fadeInUp}>
            <p>
            Experienced Full-Stack Developer with a proven track record of building dynamic web applications and mobile solutions. I specialize in creating high-performance, user-centric applications using modern JavaScript frameworks and cloud technologies.
            </p>
            <p>
            My expertise spans the full development lifecycle—from architecting scalable backend systems to crafting intuitive frontend experiences. I thrive in collaborative environments and have successfully delivered projects for diverse industries.
            </p>
          </motion.div>
        </motion.div>
        
        <div className={styles.bottom_section}>
          <motion.div
            className={styles.education}
            variants={fadeInLeft}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h1>Education</h1>
            <div className={styles.items}>
              <ul>
                <li>
                  <strong>Degree: </strong> B.Sc. in Computer Science
                </li>
                <li>
                  <strong>College: </strong> Sri Vidyamandir Arts & Science
                  College (Affiliated with Periyar University)
                </li>
                <li>
                  <strong>Year of Graduation: </strong>2024.
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div className={styles.exprience} variants={fadeInRight}>
            <h1>Professional Experience</h1>
            <motion.div
              className={styles.items}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <h2>Full-Stack Developer</h2>
              <h3>Cuckoo Images, Chennai | 1+ Year</h3>
              <p>Developed responsive web applications using React, integrated backend APIs, and optimized performance for production environments.</p>
            </motion.div>
            <motion.div
              className={styles.items}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <h2>Full-Stack Developer</h2>
              <h3>Cloudstier Solutions Pvt Ltd, Tirupattur | Present</h3>
              <p>Building enterprise-level web and mobile applications. Leading frontend development and collaborating on full-stack solutions.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
    </section>
  );
};

export default About_me;
