import React from 'react'
import './Tree.css'

import TreeList from './TreeList'
import BlockTreeModel from '../../Models/Tree/Tree.model'

interface TreeData {
    Tree : BlockTreeModel
}

const Tree = ({ Tree } : TreeData) => {

    const NewTree = new TreeList().getTreeById(Tree.Type!)

    return(
        <div 
            className="TreeWrapper"
            title={`Id: ${Tree.Id} \nJardineiro: ${Tree.Author} \nPlantio: 22/02/2019 - 09:25 AM`}
            onClick={e => alert('Exemplo de Clique na árvore => ' + Tree.Id)}
        >
            <NewTree Tree={Tree} />
        </div>
    )

}

export default Tree