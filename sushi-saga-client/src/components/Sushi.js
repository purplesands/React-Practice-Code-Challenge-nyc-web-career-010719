import React, { Fragment } from 'react'

const Sushi = (props) => {

  const localEat = () => {
    props.eatSushi(props.id)
  }

  return (
    <div className="sushi">
      <div className="plate"
           onClick={localEat}>
        {(props.eatenSushi.find(sushi=>sushi.id===props.id)) ? null : <img src={props.img_url} width="100%" />}

      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi
