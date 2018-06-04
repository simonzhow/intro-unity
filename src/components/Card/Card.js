import React, { Component } from 'react';
import './index.css';

class Card extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        var frontStyle = {
            backgroundImage: 'url(' + this.props.image + ')'
          };

        return (
            <div class="card-container">
                <div class="card">
                    <div class="content">
                        <div class="front" style={frontStyle}>
                            {/* <img className="card-photo" src={this.props.image} /> */}
                            {this.props.name}
                        </div>
                        <a target="_blank" href={this.props.link}>
                            <div class="back">
                                View
                            </div>
                        </a>                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;