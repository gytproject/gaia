import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import Block from './Components/Block';
import BlockModel from './Models/Block/Block.model';
import BlockTreeModel from './Models/Tree/Tree.model';
import AppHeader from './Components/AppHeader';

function App() {

  const [blockList, setBlockList] = useState<BlockModel[]>([])
  const appDiv = useRef(null)

  const populateBlocks = () => {
    
    let templist:BlockModel[] = []

    let max = 157

    for(let i = 1; i<= max; i++){
      let treeType = Math.round(Math.random() * (7 - 1) + 1)
      let tempTree = new BlockTreeModel(i.toString(), 'Matheus de Barros Fagionato', treeType)
      let temBlock = new BlockModel(tempTree)
      templist.push(temBlock)
    }

    let tempBlock = new BlockModel()
    do{
      templist.push(tempBlock)
      max++
    } while( (max % 10 === 0) === false )

    setBlockList(templist)

  }

  useEffect(() => {
    if(!blockList.length){
      populateBlocks()
    }
  })

  return (
    <>
      <AppHeader/>
      <div className="App" ref={appDiv}>
        { blockList.map(block =>  <Block Tree={block.Tree} />) }
      </div>
    </>
  );
}

export default App;
