import React from 'react'

const Grid = () => {
  return (
    <div className='overflow-hidden'>
      <div className="flex absolute w-full -left-8 opacity-7">
          <img src="/svg/grid.svg" alt="gridBackground" className="w-full h-full" />
          <img src="/svg/grid.svg" alt="gridBackground" className="max-w-full h-full"/>
          <img src="/svg/grid.svg" alt="gridBackground" className="max-w-full h-full"/>
      </div>
    </div>
  )
}

export default Grid;