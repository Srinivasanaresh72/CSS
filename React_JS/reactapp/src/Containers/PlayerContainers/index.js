import React from 'react'
export default function PlayerContainer(props){
    const renderPlayer = () => {

        console.log(props)

    }

    return(
        <div>
            <h1> Player Details </h1>
            {renderPlayer()}
        </div>

        

    )


}