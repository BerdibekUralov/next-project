import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Tashkent from './img/tashkent.jpg'
import NewYork from './img/new-york.jpg'
import London from './img/london.jpg'


export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <span className={styles.logo}>First Project</span>
        <ul className={styles.navList}>
          <Link className={styles.navLink} href="#">Home</Link>
          <Link className={styles.navLink} href="#">About</Link>
          <Link className={styles.navLink} href="#">Directions</Link>
          <Link className={styles.navLink} href="#">Contact</Link>
        </ul>
      </nav>

      <main>
        <div className={styles.cards}>
          <div className={styles.card}>
            <Image className={styles.cardImage} src={Tashkent} alt="Tashkent"></Image>
            <h3 className={styles.cardTitle}>Tashkent</h3>
            <p className={styles.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dicta corrupti consectetur, laborum consequatur sint accusantium, qui repellat magnam assumenda dolores culpa sequi! Illum, fugit vel quo ducimus pariatur magnam?</p>
            <Link className={styles.cardBtn} href="tashkent">View more...</Link>
          </div>
          <div className={styles.card}>
            <Image className={styles.cardImage} src={NewYork} alt="New York"></Image>
            <h3 className={styles.cardTitle}>New York</h3>
            <p className={styles.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dicta corrupti consectetur, laborum consequatur sint accusantium, qui repellat magnam assumenda dolores culpa sequi! Illum, fugit vel quo ducimus pariatur magnam?</p>
            <Link className={styles.cardBtn} href="#">View more...</Link>
          </div>
          <div className={styles.card}>
            <Image className={styles.cardImage} src={London} alt="London"></Image>
            <h3 className={styles.cardTitle}>London</h3>
            <p className={styles.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dicta corrupti consectetur, laborum consequatur sint accusantium, qui repellat magnam assumenda dolores culpa sequi! Illum, fugit vel quo ducimus pariatur magnam?</p>
            <Link className={styles.cardBtn} href="#">View more...</Link>
          </div>
        </div>
      </main>
    </div>
  )
}
