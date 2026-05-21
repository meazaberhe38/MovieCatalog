//import React from "react";
import { useEffect, useState } from "react";
import logo from "../../image/logo.png";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from "../Header/Header.module.css";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSccrolled, setIsScrolled] = useState(false); // for blur effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <header
      className={`${styles.header} ${isSccrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="" />
        <nav className={styles.nav}>
          <Link className={styles.navLink} href="">
            Home
          </Link>
          <Link className={styles.navLink} href="">
            TV Shows
          </Link>
          <Link className={styles.navLink} href="">
            Movies
          </Link>
          <Link className={styles.navLink} href="">
            New &Popular
          </Link>
          <Link className={styles.navLink} href="">
            My List
          </Link>
          <Link className={styles.navLink} href="">
            Browse by Language
          </Link>
        </nav>
      </div>
      <div className={styles.rightsideSection}>
        <div className={styles.searchContainer}>
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className={styles.searchButton}>
            <Search size={20} />
          </button>
          {isSearchOpen && (
            <input
              type="text"
              placeholder="movie title"
              className={styles.searchInput}
            />
          )}
        </div>

        <div className={styles.Bell}>
          <button className={styles.bellButton}>
            <Bell size={20} />
            <span className={styles.notificationBadge}>4</span>
          </button>
        </div>
        <div className={styles.profileContainer}>
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className={styles.profileButton}>
            <div className={styles.profileAvatar}>
              <User size={20} />
            </div>

            <ChevronDown size={20} />
          </button>
          {isProfileOpen && (
            <div className={styles.profileMenu}>
              <Link className={styles.profileMenuItem}>Account</Link>
              <Link className={styles.profileMenuItem}>Help Center</Link>
              <hr className={styles.profileMenuDivider} />
              <button>Sign out</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
