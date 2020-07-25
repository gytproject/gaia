import React, { useState, useEffect } from 'react';
import './App.css';

import Block from './Components/Block';

function App() {

  const [treeList, setTreeList] = useState<number[]>([])

  const populateTrees = () => {
    
    let templist:number[] = []

    for(let i = 1; i<= 400; i++){
      templist.push(i)
    }

    setTreeList(templist)

  }

  useEffect(() => {
    if(!treeList.length){
      populateTrees()
    }
  })

  return (
    <div className="App">
       { treeList.map(tree =>  <Block/>) }
    </div>
  );
}

export default App;
