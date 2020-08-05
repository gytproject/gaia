import React from 'react'
import './Plantbox.css'

import Grow from '@material-ui/core/Grow';
import Modal from '@material-ui/core/Modal';
import { Container } from '@material-ui/core';

interface PlantBoxData {
    showPlantBox: boolean,
    setShowPlantBox : Function,
}

const PlantBox = ({ showPlantBox, setShowPlantBox } : PlantBoxData) => {

    return (
        <Modal 
            open={showPlantBox}
            onClose={e => setShowPlantBox(false)}
        >
            <Container maxWidth="sm" id="PlantBoxContainer">
                
                <Grow in={showPlantBox}>
                    <div id="PlantBox">
                        <div id="ClosePlantBox" onClick={e => setShowPlantBox(false)}/>
                        
                        <div id="InsidePlantBox">
                            <div id="GreenRibbon" className="green-ribbon"><div id="Text">Plante sua Árvore</div></div>
                        </div>
                    </div>
                </Grow>
            </Container>
        </Modal>
    )

}

export default PlantBox