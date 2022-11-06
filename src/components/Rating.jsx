import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Rating({rating}) {
    return (
        <div className="book__ratings">
            {
                // map((_,index)) the underscore is to say that we are not using "element"
                // Array can't create arr with decimals. so Math.floor it
                new Array(Math.floor(rating)).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index} />)
            }
            {
                // Number.isInteger(rating) ? "": <FontAwesomeIcon icon="star-half-alt" />
                // This way checks each side, if left is not true then execute right
                !Number.isInteger(rating) && <FontAwesomeIcon icon="star-half-alt" />
            }

            {/* <FontAwesomeIcon icon="star" />
    <FontAwesomeIcon icon="star" />
    <FontAwesomeIcon icon="star" />
    <FontAwesomeIcon icon="star" />
    <FontAwesomeIcon icon="star-half-alt" /> */}
        </div>
    )
}
