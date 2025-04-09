import './Project.css'

const Project = ({ name, description, stack, sourceCode, livePreview, videoDemo }) => {
  return (
    <div className='project'>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className='project__stack'>
        {stack.map((item) => (
          <span key={item} className='project__stack-item'>
            {item}
          </span>
        ))}
      </div>
      <div className='project__links'>
        {sourceCode && (
          <a
            href={sourceCode}
            target='_blank'
            rel='noopener noreferrer'
            className='link link--icon'
          >
            Source Code
          </a>
        )}
        {livePreview && (
          <a
            href={livePreview}
            target='_blank'
            rel='noopener noreferrer'
            className='link link--icon'
          >
            Live Preview
          </a>
        )}
        {videoDemo && (
          <a
            href={videoDemo}
            target='_blank'
            rel='noopener noreferrer'
            className='link link--icon video-demo-button'
          >
            Video Demo
          </a>
        )}
      </div>
    </div>
  )
}

export default Project 