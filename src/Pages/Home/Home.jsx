/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './StylesHome.module.css';
function Home() {
  return (
    <Home>
      <nav className={styles.decorHome}>
        <div>
          <a href="#" className={styles.brandLogo}>
            Movies search
          </a>
          <ul>
            <li>
              <a href="#">Link one</a>
            </li>
            <li>
              <a href="#">Link two</a>
            </li>
          </ul>
        </div>
      </nav>
    </Home>
  );
}

export default Home;
