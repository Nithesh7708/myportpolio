import Image from "next/image";
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
  const frontendSkill = [
    { Img: react, Alt: "React js" },
    { Img: html, Alt: "Html" },
    { Img: css, Alt: "Css" },
    { Img: js, Alt: "Javascript" },
    { Img: next, Alt: "Next js" },

  ];

  const backendSkill = [
    { Img: python, Alt: "Python" },
    { Img: Mysql, Alt: "MySQL" },
  ];

  const OtherSkill = [
    { Img: git, Alt: "Github" },
    { Img: vscode, Alt: "Vscode" },
    { Img: postman, Alt: "API Requst" },
  ];
  return (
    <>
      <div id="skills" className={styles.skills_container}>
        <div className={styles.head}>
          <h1>Skills</h1>
        </div>
        <div className={styles.skills}>
          <div className={styles.heading}>
            <h1>Frontend:</h1>
          </div>
          <div className={styles.lists}>
            {/*frontEnd Program Languages*/}
            {frontendSkill.map((items, index) => (
              <div className={styles.list} key={index}>
                <Image src={items.Img} alt={items.Alt} />
              </div>
            ))}

            {/* ---------- */}
          </div>
        </div>
        <div className={styles.skills}>
          <div className={styles.heading}>
            <h1>Backend& Database:</h1>
          </div>
          <div className={styles.lists}>
            {/*frontEnd Program Languages*/}
            {backendSkill.map((items, index) => (
              <div className={styles.list} key={index}>
                <Image src={items.Img} alt={items.Alt} />
              </div>
            ))}

            {/* ---------- */}
          </div>
        </div>
        <div className={styles.skills}>
          <div className={styles.heading}>
            <h1>Code Others:</h1>
          </div>
          <div className={styles.lists}>
            {/*frontEnd Program Languages*/}
            {OtherSkill.map((items, index) => (
              <div className={styles.list} key={index} k>
                <Image src={items.Img} alt={items.Alt} />
              </div>
            ))}

            {/* ---------- */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
