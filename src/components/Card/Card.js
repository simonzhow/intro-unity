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
            <div className="card-container">
                <div className="card">
                    <div className="content">
                        <div className="front" style={frontStyle}>
                            {/* <img className="card-photo" src={this.props.image} /> */}
                            {this.props.name}
                        </div>
                        <a target="_blank" href={this.props.link}>
                            <div className="back">
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