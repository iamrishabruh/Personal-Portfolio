import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import InstagramIcon from '@material-ui/icons/Instagram'
import './LeadershipsContainer.css'

const LeadershipsContainer = ({ leadership }) => (
  <div className='leadership'>
    <h3>{leadership.name}</h3>

    <p className='leadership__description'>{leadership.description}</p>
    {leadership.stack && (
      <ul className='leadership__stack'>
        {leadership.stack.map((item) => (
          <li key={uniqid()} className='leadership__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
    
    {leadership.instaDemo && (
      <a
        href={leadership.instaDemo}
        aria-label='insta demo'
        className='link link--icon'
      >
        <InstagramIcon />
      </a>
    )}
    
    {leadership.sourceCode && (
      <a
        href={leadership.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {leadership.livePreview && (
      <a
        href={leadership.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}

  </div>
)

export default LeadershipsContainer