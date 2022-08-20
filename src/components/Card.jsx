import React from 'react'

const Card = (props) => {
  return (
    <div className="back">
      <div className='Card'>
        <div id='downloadCard'>
          <h1 className="Card--title">{props.title}</h1>
          <span className='Startdate'>{props.startDate}<span className='EndDate'>{props.endDate}</span></span>
          <p className='Card--Desc'>{props.desc}</p>
        </div>
        <button onClick={() => props.handleDelete(props.id)}>delete card</button>
        <button onClick={() => props.handleDownload(props.id)}>download card</button>
      </div>
    </div>
  )
}

export default Card
