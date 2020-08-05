import React, { useEffect } from 'react'
import './Plantbox.css'

import Grow from '@material-ui/core/Grow';
import Modal from '@material-ui/core/Modal';
import { Container } from '@material-ui/core';

import { VibrateApp } from '../../Helpers'

interface PlantBoxData {
    showPlantBox: boolean,
    setShowPlantBox : Function,
}

const PlantBox = ({ showPlantBox, setShowPlantBox } : PlantBoxData) => {

    useEffect(() => {
        VibrateApp([100])
    }, [showPlantBox])

    return (
        <Modal 
            open={showPlantBox}
            onClose={() => setShowPlantBox(false)}
        >
            <Container maxWidth="sm" id="PlantBoxContainer">
                
                <Grow in={showPlantBox} >
                    <div id="PlantBox">
                        <div id="ClosePlantBox" onClick={() => setShowPlantBox(false)}/>
                        
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