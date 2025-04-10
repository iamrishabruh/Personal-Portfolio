import React from 'react';
import { projects } from '../../portfolio';
import uniqid from 'uniqid';
import './ProjectsContainer.css';

const ProjectsContainer = () => {
  if (!projects.length) return null;

  return (
    <div className='projects__grid'>
      {projects.map((project) => (
        <div key={uniqid()} className='project'>
          <div className='project__meta'>
            <div className='project__title'>{project.name}</div>
            <div className='project__description'>{project.description}</div>
            <div className='project__stack'>
              {project.stack.map((item) => (
                <span key={uniqid()} className='project__stack-item'>
                  {item}
                </span>
              ))}
            </div>
            <div className='project__links'>
              {project.sourceCode && (
                <a
                  href={project.sourceCode}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='link link--icon'
                >
                  <i className='fab fa-github'></i>
                </a>
              )}
              {project.livePreview && (
                <a
                  href={project.livePreview}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='link link--icon'
                >
                  <i className='fas fa-external-link-alt'></i>
                </a>
              )}
              {project.videoDemo && (
                <a
                  href={project.videoDemo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='link link--icon'
                >
                  <i className='fas fa-video'></i>
                </a>
              )}
            </div>
            <div className='project__stats'>
              {project.stars && (
                <span className='project__stat'>
                  <i className='fas fa-star'></i>
                  {project.stars}
                </span>
              )}
              {project.forks && (
                <span className='project__stat'>
                  <i className='fas fa-code-branch'></i>
                  {project.forks}
                </span>
              )}
            </div>
          </div>
          {project.media && (
            <div className='project__media'>
              {project.media.map((media) => (
                <div key={uniqid()} className='project__media-item'>
                  {media.type === 'image' && (
                    <img
                      src={media.url}
                      alt={project.name}
                      className='project__image'
                    />
                  )}
                  {media.type === 'video' && (
                    <video
                      src={media.url}
                      controls
                      className='project__video'
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectsContainer;