import React from 'react';
import projects from "../../data/projects.json";
import styles from "./Projects.module.css";
import { ProjectCard } from './ProjectCard';


export const Projects = () => {
  return (
    <section className={styles.container} id='projects'>
        <h2 className={styles.title}>PROJECTS</h2>
        <div className={styles.projects}>
            {
                projects.map((project,id)=>{
                    return <ProjectCard key={id} project={project}></ProjectCard>
                })
            }
        </div>
    </section>
    
  )
}
