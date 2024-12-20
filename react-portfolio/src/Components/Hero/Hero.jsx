import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return( <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Balaji Prakash</h1>
        <p className={styles.description}>
            A highly motivated engineering graduate with practical experience in programming and software development.
            My major coursework focuses on essential subjects such as Database Management Systems, Python, Object-Oriented Programming, Front End Development, React Js, Data Analysis. 
            Enthusiastic about learning and growing within a dynamic development team, I aim to leverage my education to make a meaningful impact in the tech industry and embrace exciting new opportunities.
        </p>
        <a href="mailto:balajiprakash42@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("/assets/hero/herrrr.jpg")} alt="Hero Image of Me" className={styles.heroImg} />
        
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    
  </section>
  )
}