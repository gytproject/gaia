import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import './base64.css';

import Block from './Components/Block';
import BlockModel from './Models/Block/Block.model';
import BlockTreeModel from './Models/Tree/Tree.model';
import AppHeader from './Components/AppHeader';
import PlantBox from './Components/PlantBox';

function App() {

  const [blockList, setBlockList] = useState<BlockModel[]>([])
  const [showPlantBox, setShowPlantBox] = useState(false)
  const appDiv = useRef<HTMLDivElement>(null)

  const populateBlocks = () => {
    
    let templist:BlockModel[] = []

    let max = 157

    for(let i = 1; i<= max; i++){
      let treeType = Math.round(Math.random() * (20 - 1) + 1)
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
    scrollDown()
  }

  const scrollDown = () => {
    const divToScroll = appDiv.current
   
    if(divToScroll){
        divToScroll.scrollTop = divToScroll.scrollHeight
    }

  }

  useEffect(() => {
    if(!blockList.length){
      populateBlocks()
    }
    scrollDown()
  })

  return (
    <>
      <PlantBox showPlantBox={showPlantBox} setShowPlantBox={setShowPlantBox}  />

      <AppHeader setShowPlantBox={setShowPlantBox} />
      
      <div className="App" ref={appDiv}>
        { blockList.map(block =>  <Block Tree={block.Tree} />) }
      </div>
    </>
  );
}

export default App;
