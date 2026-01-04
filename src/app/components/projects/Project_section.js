"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./style/project.module.css";
import { useState } from "react";

//Project Img
import Project_1 from '@/../../public/assets/projects/keeladi.jpg'
import Project_2 from '@/../../public/assets/projects/cuckooimages.jpg'
import Project_3 from '@/../../public/assets/projects/kaarunyabharathi.jpg'
import Project_4 from '@/../../public/assets/projects/5_element.jpg'
import Project_5 from '@/../../public/assets/projects/pixal.jpg'
import Project_6 from '@/../../public/assets/projects/sempozhil.jpg'


const Project_section = () => {
  const [isOpenMore, setIsOpenMore] = useState(false);

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const projects = [
    {
      Img: Project_1,
      Project_Name: "Keeladi Archaeological Museum",
      live_link: "https://keeladimuseum.tn.gov.in/",
      Program_Languages: ["React", "Redux", "SEO", "Performance Optimization"],
      description: "Government museum website with dynamic content management"
    },
    {
      Img: Project_2,
      Project_Name: "Cuckoo Images - Business Solutions Platform",
      live_link: "https://cuckooimages.in/",
      Program_Languages: ["React", "PHP", "MySQL", "SEO"],
      description: "Full-stack business platform with custom CMS"
    },
    {
      Img: Project_3,
      Project_Name: "Kaarunyabharathi Arts - Digital Gallery",
      live_link: "https://kaarunyabharathiarts.com/",
      Program_Languages: ["React", "PHP", "SEO", "Responsive Design"],
      description: "Interactive art gallery showcasing creative works"
    },
    {
      Img: Project_4,
      Project_Name: "5 Elements - Healing & Wellness Platform",
      live_link: "https://5elements.cuckoostock.com/",
      Program_Languages: ["HTML5", "CSS3", "JavaScript", "Responsive"],
      description: "Modern wellness platform with holistic healing approach"
    },
    {
      Img: Project_5,
      Project_Name: "Pixl VFX - Visual Effects Studio",
      live_link: "https://pixlvfx.com/",
      Program_Languages: ["React", "SEO", "Performance Optimization"],
      description: "Creative agency website with stunning visual effects"
    },
    {
      Img: Project_6,
      Project_Name: "Sempozhil - Cultural Heritage Website",
      live_link: "https://sempozhil.org/",
      Program_Languages: ["HTML5", "CSS3", "JavaScript", "Responsive"],
      description: "Traditional culture and heritage preservation platform"
    },

  ];

  return (
    <section className={styles.project_section_container} id="projects">
      <div className={styles.project_section}>
        <motion.div
          className={styles.heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <h1>Featured Projects</h1>
          <p>Real-world applications I've built for clients and organizations</p>
        </motion.div>
        <motion.div
          className={styles.project_list}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          style={
            isOpenMore === true
              ? { display: "grid" }
              : { display: "grid" }
          }
        >
          {projects.slice(0, isOpenMore ? projects.length : 6).map((items, index) => (
            <motion.div
              className={styles.list}
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.img}>
                <Image src={items.Img} alt={items.Project_Name} />
              </div>
              <div className={styles.content}>
                <div className={styles.project_name}>
                  <h2>{items.Project_Name}</h2>
                </div>
                <div className={styles.technologys}>
                  <ul>
                    {items.Program_Languages.map((language, index) => (
                      <li key={index}>{language}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.link_info}>
                  <a href={items.live_link} target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="bi bi-link-45deg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                      <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                    </svg>
                    Live Preview
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project_section;
