import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import YouTubeIcon from '@material-ui/icons/YouTube'
import StarIcon from '@material-ui/icons/Star'
import ForkIcon from '@material-ui/icons/CallSplit'
import CodeIcon from '@material-ui/icons/Code'
import './ProjectsContainer.css'

const ProjectsContainer = ({ project }) => {
  const hasMedia = project.images?.length > 0 || project.videoDemo || project.demo;

  return (
    <div className='project'>
      <h3>{project.name}</h3>

      {hasMedia && (
        <div className='project__media'>
          {project.images?.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt={`${project.name} screenshot ${index + 1}`}
              className='project__image'
            />
          ))}
          {project.videoDemo && (
            <a
              href={project.videoDemo}
              aria-label='video demo'
              className='link link--icon project__media-link'
            >
              <YouTubeIcon />
              <span>Video Demo</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              aria-label='live demo'
              className='link link--icon project__media-link'
            >
              <LaunchIcon />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      )}

      <p className='project__description'>{project.description}</p>

      <div className='project__stats'>
        {project.stars !== undefined && (
          <div className='project__stat'>
            <StarIcon />
            <span>{project.stars}</span>
          </div>
        )}
        {project.forks !== undefined && (
          <div className='project__stat'>
            <ForkIcon />
            <span>{project.forks}</span>
          </div>
        )}
        {project.language && (
          <div className='project__stat'>
            <CodeIcon />
            <span>{project.language}</span>
          </div>
        )}
      </div>

      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className='project__links'>
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label='source code'
            className='link link--icon'
          >
            <GitHubIcon />
            <span>Source Code</span>
          </a>
        )}
        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label='live preview'
            className='link link--icon'
          >
            <LaunchIcon />
            <span>Live Preview</span>
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectsContainer