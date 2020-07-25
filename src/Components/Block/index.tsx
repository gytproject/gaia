import React from 'react'
import './Block.css'

const Block = () =>  {

    return(
        <div className="Block">
            <div className={`Tree Tree`+ Math.round(Math.random() * (7 - 1) + 1)}></div>
        </div>
    )

}

export default Block