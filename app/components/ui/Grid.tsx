import React from 'react'

const Grid = () => {
  return (
    <div>
      <div className="flex absolute w-full -left-8 opacity-8">
          <img src="/svg/grid.svg" alt="gridBackground" className="w-full h-full" />
          <img src="/svg/grid.svg" alt="gridBackground" className="max-w-full h-full"/>
          <img src="/svg/grid.svg" alt="gridBackground" className="max-w-full h-full"/>
          <img src="/svg/grid.svg" alt="gridBackground" className="w-[50%] h-full"/>
      </div>
      <div className='flex absolute w-full -left-8 opacity-5'>
        <img src="/svg/grid.svg" alt="gridBackground" className="w-full h-full" />
          <img src="/svg/grid.svg" alt="gridBackground" className="max-w-full h-full"/>
          <img src="/svg/grid.svg" alt="gridBackground" className="max-w-full h-full"/>
          <img src="/svg/grid.svg" alt="gridBackground" className="w-[50%] h-full"/>
      </div>
    </div>
  )
}

export default Grid;