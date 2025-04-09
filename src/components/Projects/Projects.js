import { useState, useEffect } from 'react';
import { projects } from '../../portfolio'
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer'
import Slider from '../Slider/Slider'
import './Projects.css'

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [currentProjects, setCurrentProjects] = useState([]);

  useEffect(() => {
    // Update projects when the component mounts
    const updateProjects = async () => {
      try {
        setLoading(true);
        // Wait for projects to be populated
        const timer = setInterval(() => {
          if (projects.length > 0) {
            setCurrentProjects(projects);
            setLoading(false);
            clearInterval(timer);
          }
        }, 100);
      } catch (error) {
        console.error('Error loading projects:', error);
        setLoading(false);
      }
    };

    updateProjects();
  }, []);

  if (loading) {
    return (
      <section id='projects' className='section projects'>
        <h2 className='section__title'>Projects</h2>
        <div className="loading">Loading projects...</div>
      </section>
    );
  }

  if (!currentProjects.length) return null

  const renderProject = (project) => (
    <ProjectsContainer project={project} />
  )

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>
      <Slider items={currentProjects} renderItem={renderProject} />
    </section>
  )
}

export default Projects