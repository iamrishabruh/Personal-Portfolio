import React from 'react';
import uniqid from 'uniqid';
import { projects } from '../../portfolio';
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
                  aria-label='View source code on GitHub'
                >
                  <i className='fab fa-github' />
                </a>
              )}
              {project.livePreview && (
                <a
                  href={project.livePreview}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='link link--icon'
                  aria-label='View live preview'
                >
                  <i className='fas fa-external-link-alt' />
                </a>
              )}
              {project.videoDemo && (
                <a
                  href={project.videoDemo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='link link--icon'
                  aria-label='View video demo'
                >
                  <i className='fas fa-video' />
                </a>
              )}
            </div>
            <div className='project__stats'>
              {project.stars && (
                <span className='project__stat' aria-label={`${project.stars} stars`}>
                  <i className='fas fa-star' />
                  {project.stars}
                </span>
              )}
              {project.forks && (
                <span className='project__stat' aria-label={`${project.forks} forks`}>
                  <i className='fas fa-code-branch' />
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
                    >
                      <track kind="captions" src="" label="English" />
                    </video>
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