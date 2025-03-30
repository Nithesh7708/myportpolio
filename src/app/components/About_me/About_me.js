import Image from "next/image";
import styles from './styles/About_me.module.css'

//img
import about_me_Img from '@/../../public/assets/about/about_me.png'

const About_me = () => {
  return (
    <section id="about" className={styles.about_section}>
    <div className={styles.About_me_container} >
      <div className={styles.About_me}>
        <div className={styles.left}>
          <Image src={about_me_Img} alt="nithieshkumar about" />
        </div>
        <div className={styles.right}>
          <div className={styles.heading}>
            <h1>About me</h1>
          </div>
          <div className={styles.content}>
            <p>
            I am a skilled React Developer with 1 year of experience, specializing in dynamic, responsive web applications. Proficient in React.js, JavaScript (ES6+), HTML5, CSS3, and MySQL, I am also familiar with Python. I have experience building full-stack solutions and optimizing both front-end and back-end performance. Recently, I developed my portfolio using Next.js, showcasing my ability to build fast, SEO-friendly, and scalable applications.
            </p>
          </div>
          <div className={styles.education}>
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
          </div>
          <div className={styles.exprience}>
            <h1>Experience</h1>
            <div className={styles.items}>
            <h2>Web Developer</h2>
            <h3>Cuckoo images - chennai | 1 Year of Experience</h3>
          </div>
            <div className={styles.items}>
            <h2>Web Developer</h2>
            <h3>Cloudstier Solutions Private Limited - Tirupattur | Present </h3>
          </div>
        </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About_me;
