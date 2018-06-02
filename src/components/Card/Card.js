import React, { Component } from 'react';
import './index.css';

class Card extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return (
            <div class="card-container">
                <div class="card">
                    <div class="content">
                        <div class="front">
                            Example
                        </div>
                        <div class="back">
                            Details
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;