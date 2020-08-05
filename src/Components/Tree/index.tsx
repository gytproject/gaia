import React, { useRef, useState } from 'react'
import './Tree.css'

import TreeList from './TreeList'
import BlockTreeModel from '../../Models/Tree/Tree.model'
import { Grow } from '@material-ui/core'

interface TreeData {
    Tree : BlockTreeModel
}

const Tree = ({ Tree } : TreeData) => {

    const NewTree = new TreeList().getTreeById(Tree.Type!)
    const [isHover, setIsHover] = useState<boolean>(false)
    const treeWrapperRef = useRef(null)

    return(
        <div 
            className="TreeWrapper"
            ref={treeWrapperRef}
            onMouseEnter={e => setIsHover(true)}
            onMouseLeave={e => setIsHover(false)}
        >

            { isHover && 

               <Grow in={isHover}>
                    <div className="Popper">
                        <div className="PopperInside">
                            <div className="TreeId">#{Tree.Id}</div>
                            <div className="TreeAuthor">{Tree.Author}</div>
                            <div className="Details">Clique para mais detalhes</div>
                        </div>
                    </div>
               </Grow>

            }

            <NewTree Tree={Tree} />
        </div>
    )

}

export default Tree