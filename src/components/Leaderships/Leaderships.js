import uniqid from 'uniqid'
import { leaderships } from '../../portfolio'
import LeadershipsContainer from '../LeadershipsContainer/LeadershipsContainer'
import './Leaderships.css'

const Leaderships = () => {
  if (!leaderships.length) return null

  return (
    <section id='leaderships' className='section leaderships'>
      <h2 className='section__title'>Leadership & Community</h2>

      <div className='leaderships__grid'>
        {leaderships.map((leadership) => (
          <LeadershipsContainer key={uniqid()} leadership={leadership} />
        ))}
      </div>
    </section>
  )
}

export default Leaderships