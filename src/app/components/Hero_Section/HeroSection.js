"use client";

import Image from "next/image";
import styles from "./styles/HeroSection.module.css";

//icons
import myself_img from "@/../../public/assets/heroSection/my_img.png";
import Github from "@/../../public/assets/heroSection/github.png";
import LinkedIn from "@/../../public/assets/heroSection/Linkedin-logo.png";
import LeetCode from "@/../../public/assets/heroSection/LeetCode.png";

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

  return (
    <>
      <div className={styles.HeroSection_container} id="home">
        <div className={styles.HeroSection}>
          {/* left side design */}
          <div className={styles.left}>
            <div className={styles.sub_heading}>
              <strong>Freelance Web Developer</strong>
            </div>
            <div className={styles.name}>
              <strong>Nithiesh Kumar</strong>
            </div>
            <div className={styles.about_me}>
              <p>
              I have a strong interest in the IT field and specialize in building dynamic, responsive websites and applications. With experience in various web technologies, I focus on delivering high-quality, user-friendly solutions. Recently, I developed my portfolio using Next.js, showcasing my expertise in creating fast, scalable, and SEO-friendly web applications.
              </p>
            </div>
            <div className={styles.btns}>
              <a href="https://www.linkedin.com/in/nithesh-kumar7708/" target="_black">
                <div className={styles.btn}>
                  <Image src={LinkedIn} alt="LinkedIn" />
                </div>
              </a>
              <a href="https://github.com/Nithesh7708" target="_black">
                <div className={styles.btn}>
                  <Image src={Github} alt="GitHub" />
                </div>
              </a>
              {/* <div className={styles.btn}>
                <Image src={LeetCode} alt="LeetCode" />
              </div> */}
            </div>
          </div>
          {/* right side design */}
          <div className={styles.right}>
            <div className={styles.profile}>
              <Image src={myself_img} alt="nithiesh kumar freelancer" />
              <div className={styles.programming}>
                <div className={styles.list}>
                  <Image src={react} alt="1" />
                </div>
                <div className={styles.list}>
                  <Image src={git} alt="2" />
                </div>
                <div className={styles.list}>
                  <Image src={vscode} alt="3" />
                </div>
                <div className={styles.list}>
                  <Image src={css} alt="4" />
                </div>
                <div className={styles.list}>
                  <Image src={html} alt="5" />
                </div>
                <div className={styles.list}>
                  <Image src={js} alt="6" />
                </div>
                <div className={styles.list}>
                  <Image src={next} alt="7" />
                </div>
                <div className={styles.list}>
                  <Image src={python} alt="8" />
                </div>
                <div className={styles.list}>
                  <Image src={Mysql} alt="9" />
                </div>
                <div className={styles.list}>
                  <Image src={postman} alt="10" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* next section */}
        <div className={styles.next_section_arrow}>
          <a href="#about">
            <div className={styles.btn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
