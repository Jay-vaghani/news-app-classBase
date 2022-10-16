import React, { Component } from "react"
import "./loading.css"


export class Loading extends Component {

    render() {
        return (
            <div className="text-center d-flex justify-content-center">

                <div className="lds-hourglass"></div>
            </div>
        )
    }
}