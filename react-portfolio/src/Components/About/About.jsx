import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <a className={styles.myResume} href="https://drive.google.com/file/d/1jJ2Yhs1oQUdG26s45r2zeGnFualg2goK/view?usp=drive_link" target="blank"> Get My Resume</a>
      
      <div className={styles.content}>
        <img
          src={getImageUrl("/assets/about/laptop.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("/assets/about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Front-End Developement</h3> 
              
              <img src={getImageUrl("/assets/about/HTML.png")} alt="html" />
              <img src={getImageUrl("/assets/about/css.png")} alt="css" />
              <img src={getImageUrl("/assets/about/js.png")} alt="js" />   
              <img src={getImageUrl("/assets/about/react.png")}></img>           
              
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("/assets/about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Back-End Developement</h3>
              <img src={getImageUrl("/assets/about/python.png")} alt="python"  />
              
              
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("/assets/about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>DataBases</h3>
              
              <img src={getImageUrl("/assets/about/mySql.png")} alt="mySql" />
              <img src={getImageUrl("/assets/about/SqlPlus.png")} alt="sqlPlus" />
             
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("/assets/about/serverIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Tools</h3> 
              <img src={getImageUrl("/assets/about/gitHub.png")} alt="gitHub" />
              <img src={getImageUrl("/assets/about/vsCode.png")} alt="vsCode" />
              <img src={getImageUrl("/assets/about/anaconda.png")} alt="anaconda" />
              <img src={getImageUrl("/assets/about/pycharm.png")} alt="pycharm" /> 
            </div>
          </li>


          <li className={styles.aboutItem}>
            <img src={getImageUrl("/assets/about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Programming Languages</h3> 
              <img src={getImageUrl("/assets/about/c.png")} alt="c" />
              <img src={getImageUrl("/assets/about/python.png")} alt="python" />
              <img src={getImageUrl("/assets/about/js.png")} alt="js" />

               
            </div>
          </li>

          


        </ul>
      </div>
    </section>
  );
};
