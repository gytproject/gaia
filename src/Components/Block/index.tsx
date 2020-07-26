import React from 'react'
import './Block.css'

import BlockTreeModel from '../../Models/Tree/Tree.model'
import Tree from '../Tree'

interface BlockData {
    Tree?: BlockTreeModel
}

const Block = (blockData : BlockData) =>  {
    
    return(
        <div className="Block">
           {blockData.Tree &&  <Tree Tree={blockData.Tree} />}
        </div>
    )

}

export default Block