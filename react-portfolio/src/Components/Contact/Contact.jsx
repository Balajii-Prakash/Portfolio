import React from 'react';
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return <footer id='contact' className={styles.container}> 
    <div className={styles.text}>
        <h2>CONTACT</h2>
        <p>Feel free to reach out</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}> 
            <img src={getImageUrl("/assets/contact/emailIcon.png")} alt="Email Icon" />
            <a href="mailto:balajiprakash42@gmail.com">balajiprakash42@gmail.com</a>
        </li>

        <li className={styles.link}>
            <img src={getImageUrl("/assets/contact/linkedinIcon.png")} alt="linkedIn Icon" />
            <a href="https://www.linkedin.com/in/balajiprakash/" target='blank'>linkedin.com/Balaji</a>
        </li>

        <li className={styles.link}>
            <img src={getImageUrl("/assets/contact/githubIcon.png")} alt="github Icon" />
            <a href="https://github.com/Balajii-Prakash" target='blank'>gitHub.com/Balaji</a>
        </li>

        
    </ul>
  </footer>
}
