import React from 'react'
import './Spinner.scss'

export default function Spinner(){
    return <div id="Spinner">
        <div className="spin1 spin"><span></span></div>
        <div className="spin2 spin"><span></span></div>
        <div className="spin3 spin"><span></span></div>
    </div>
}