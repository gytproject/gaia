import React, { useEffect, useState } from 'react'
import './Plantbox.css'

import Grow from '@material-ui/core/Grow';
import Modal from '@material-ui/core/Modal';
import { Container, Slider } from '@material-ui/core';

import { VibrateApp } from '../../Helpers'

import treeValues from '../../Models/Tree/TreeValueList'

interface PlantBoxData {
    showPlantBox: boolean,
    setShowPlantBox : Function,
}

const PlantBox = ({ showPlantBox, setShowPlantBox } : PlantBoxData) => {

    const [currentValue, setCurrentValue] = useState<number>(1)
    const [currentText, setCurrentText] = useState<string>('R$ 1.00')

    useEffect(() => {
        VibrateApp([100])
    }, [showPlantBox])

    const updatePlantBox = (event: any, newValue: any) => {
        const currentTreeValue = treeValues.find(tv => tv.value === newValue)
        setCurrentText(currentTreeValue!.text)
        setCurrentValue(currentTreeValue!.value)
    }

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
                            
                            <div id="ContainerPrice">
                                <div id="SliderContainer">
                                    <div id="SliderContainerText">Árvores de {currentText}</div>
                                    <Slider
                                        id={'PriceSlider'}
                                        defaultValue={currentValue}
                                        valueLabelDisplay="auto"
                                        marks={treeValues}
                                        step={null}
                                        min={treeValues[0].value}
                                        max={treeValues[(treeValues.length - 1)].value}
                                        onChangeCommitted={(event: React.ChangeEvent<{}>, value: number | number[]) => updatePlantBox(event, value)}
                                    />
                                </div>

                                {/* <div className="LineContainerPrice"/> */}

                            </div>

                        </div>


                    </div>
                </Grow>
            </Container>
        </Modal>
    )

}

export default PlantBox