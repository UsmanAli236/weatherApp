
import React from 'react'

const Moment = () => {
  return (
    <div>
      <p>Day: {moment().format('dddd')}</p>
        <p>Date: {moment().format('LL')}</p>
    </div>
  )
}

export default Moment

