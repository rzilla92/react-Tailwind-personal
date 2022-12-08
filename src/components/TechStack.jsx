import React from 'react'
import stacks from '../constants/stacks'

const TechStack = () => {
  return (
    <div className='flex flex-wrap justify-center gap-2 md:justify-start'>
        
        {stacks.map((techBadge)=> {
            const { name, badge} = techBadge
            return (
                <img src={badge} alt={name} />
            )
        })}
    </div>
  )
}

export default TechStack