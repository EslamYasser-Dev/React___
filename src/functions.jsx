

import React from "react"

function FunctionalProps({image,name,price,cat}){ //destrictor propes
    const props = {image,name,price,cat}
    return (
        <div>
                <h1>{props.image}</h1>
                <h2>{props.name}</h2>
                <h3>{price.price}</h3>
                <h4>{props.cat}</h4>
        </div>
    )


}
export default FunctionalProps;