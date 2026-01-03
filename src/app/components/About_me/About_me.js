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
            <h1>About me</h1>
          </motion.div>
          <motion.div className={styles.content} variants={fadeInUp}>
            <p>
            I am a skilled React Developer with 1 year of experience, specializing in dynamic, responsive web applications. Proficient in React.js, JavaScript (ES6+), HTML5, CSS3, and MySQL, I am also familiar with Python. I have experience building full-stack solutions and optimizing both front-end and back-end performance. Recently, I developed my portfolio using Next.js, showcasing my ability to build fast, SEO-friendly, and scalable applications.
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
            <h1>Experience</h1>
            <motion.div
              className={styles.items}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <h2>Web Developer</h2>
              <h3>Cuckoo images - chennai | 1 Year of Experience</h3>
            </motion.div>
            <motion.div
              className={styles.items}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <h2>Web Developer</h2>
              <h3>Cloudstier Solutions Private Limited - Tirupattur | Present </h3>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
    </section>
  );
};

export default About_me;
