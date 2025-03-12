"use client";
import Link from "next/link";
import styles from "./styles/Nav.module.css";
import { useState, useEffect } from "react";

const Nav = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const [isShowTopArrow, setisShowTopArrow] = useState(false);

  // Handle scroll position and update nav color
  const handleNav = () => {
    const value = window.scrollY;
    if (value > 60) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }

    //top arrow
    if (value > 400) {
      setisShowTopArrow(true);
    } else {
      setisShowTopArrow(false);
    }
  };

  // Use useEffect to add and clean up the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleNav);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleNav);
    };
  }, []); // Empty array ensures this effect runs only once on mount

  //Close nav when user click close btn
  const handleCloseNav = function () {
    setIsOpenNav(false);
  };

  return (
    <>
      <nav
        className={styles.nav}
        style={{ background: navColor ? "#046088" : "transparent" }}
      >
        <div className={styles.nav_container}>
          <div className={styles.left}>{/* Optional: Add logo here */}</div>
          <input type="checkbox" id={styles.handle_Nav} checked={isOpenNav} />
          <div className={styles.right}>
            <div
              className={styles.overlay}
              onClick={() => setIsOpenNav(false)}
            ></div>
            <div className={styles.menu_link}>
              <ul>
                <li onClick={handleCloseNav}>
                  <Link href="#home">Home</Link>
                </li>
                <li onClick={handleCloseNav}>
                  <Link href="#about">About Me</Link>
                </li>
                <li onClick={handleCloseNav}>
                  <Link href="#skills">Skills</Link>
                </li>
                <li onClick={handleCloseNav}>
                  <Link href="#projects">Projects</Link>
                </li>
                <li onClick={handleCloseNav}>
                  <Link href="#contactus">Contact</Link>
                </li>
              </ul>
            </div>
            <a
              href="/assets/resume/Nithiesh_Kumar_Resume_web_Developer.pdf"
              download
            >
              <div className={styles.resume}>
                <button>Resume in your hands</button>
              </div>
            </a>

            <div
              className={styles.menu_icon}
              onClick={() => setIsOpenNav(!isOpenNav)}
            >
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
          </div>
        </div>
      </nav>

      {/* move top icon */}
      <div
        className={styles.move_top}
        style={{
          transform: isShowTopArrow ? "translateX(0px)" : "translateX(500px)",
        }}
      >
        <a href="#home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-arrow-up-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
            />
          </svg>
        </a>
      </div>
    </>
  );
};

export default Nav;
