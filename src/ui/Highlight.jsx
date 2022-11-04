import React from 'react'

// name the args whatever but must match
export default function Highlight({ icon, title, para }) {
    return (
        <div className="highlight">
            <div className="highlight__img">
                {/* <FontAwesomeIcon icon="bolt" /> */}
                {/* PASS IN PROPS */}
                {icon}
            </div>
            <h3 className='highlight__subtitle'>{title}</h3>
            <p className="highlight__para">
                {para}
            </p>
        </div>
    )
}
