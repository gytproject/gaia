import React from 'react'
import './Block.css'

import BlockTreeModel from '../../Models/Tree/Tree.model'
import Tree from '../Tree'

interface BlockData {
    Tree?: BlockTreeModel
}

const Block = (blockData : BlockData) =>  {
    
    const typeOfBlockClass = `Type${Math.floor(Math.random() * (6 - 1) + 1)}`

    return(
        <div className={`Block ${typeOfBlockClass}`}>
           {blockData.Tree &&  <Tree Tree={blockData.Tree} />}
        </div>
    )

}

export default Block