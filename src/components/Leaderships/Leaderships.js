import { leaderships } from '../../portfolio'
import LeadershipsContainer from '../LeadershipsContainer/LeadershipsContainer'
import Slider from '../Slider/Slider'
import './Leaderships.css'

const Leaderships = () => {
  if (!leaderships.length) return null

  const renderLeadership = (leadership) => (
    <LeadershipsContainer leadership={leadership} />
  )

  return (
    <section id='leaderships' className='section leaderships'>
      <h2 className='section__title'>Leadership & Community</h2>
      <Slider items={leaderships} renderItem={renderLeadership} />
    </section>
  )
}

export default Leaderships