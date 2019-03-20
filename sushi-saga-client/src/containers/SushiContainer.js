import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {


  return (
    <Fragment>
      <div className="belt">
        {props.sushis.slice(props.index, props.index+4).map(sushi=>{
            return <Sushi {...sushi} eatSushi={props.eatSushi} eatenSushi={props.eatenSushi} />
          })}
        <MoreButton nextFourSushi={props.nextFourSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
