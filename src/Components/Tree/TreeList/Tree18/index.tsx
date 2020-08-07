import React from 'react'
import './Tree18.css'

import BlockTreeModel from '../../../../Models/Tree/Tree.model'

interface TreeData {
    Tree : BlockTreeModel
}

const Tree18 = (treeData : TreeData) => {
    
    const TreeClass = `Tree${treeData.Tree.Type}`

    return(
        <div className={`Tree ${TreeClass}`}></div>
    )

}

export default Tree18