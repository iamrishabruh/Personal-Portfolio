import React from 'react'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className='skills__list-item btn btn--plain'>
            <div className='skills__category'>{category}</div>
            <div className='skills__items'>
              {items.map((skill) => (
                <span key={`${category}-${skill}`} className='skills__item'>{skill}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills