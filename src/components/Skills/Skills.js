import React from 'react'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills || Object.keys(skills).length === 0) return null

  // Flatten all skills into a single array
  const allSkills = Object.values(skills).flat()

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {allSkills.map((skill) => (
          <li key={skill} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills