import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../App.css'

const Welcome2 = ({text}) => {
    
    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-out', 
    })

    useEffect(() => {
        const timeout = setInterval(() => {
            if(fadeProp.fade === 'fade-in'){
                setFadeProp({
                    fade: 'fade-out'
                })
            } else {
                setFadeProp({
                    fade: 'fade-in'
                })
            }
        }, 2500)

        return () => clearInterval(timeout)
    }, [fadeProp])

    return (
        <h1 className={fadeProp.fade}>{text}</h1>
    )
}

Fader.defaultProps = {
    text: 'Bonjour!'
}

Fader.propTypes = {
    text: PropTypes.arrayOf(PropTypes.string)
}



export default Welcome2;