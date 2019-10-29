import React, { Component } from 'react'
import '../../CSSfiles/Spinner.css'

export default class Spinner extends Component {
    constructor(props){
        super(props);

        this.state = {
            isSpinner: false
        }
    }
    
    componentDidMount() {
        this.activateSpinner();
    }

    activateSpinner = () => {
        this.setState({ isSpinning: true });
    };
    
    render() {
        return (
            <div className="Spinner">
                <div 
                    class="spinner icon-spinner-5" aria-hidden="true">
                </div>
            </div>
        )
    }
}