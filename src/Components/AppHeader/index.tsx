import React from 'react'
import './AppHeader.css'

interface AppHeaderData{
    setShowPlantBox: Function
}

const AppHeader = ({ setShowPlantBox } : AppHeaderData) => {

    return(
        <div className="AppHeader">
            
            <div className="PlantButton" onClick={e => setShowPlantBox(true)}>
                Plantar <div className="Icon"></div>
            </div>

        </div>
    )

}

export default AppHeader