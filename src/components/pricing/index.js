import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed nisl tortor. Ut ac ipsum vestibulum ipsum tempor. ',
            'Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sagittis finibus ligula, non rhoncus mauris ultricies non. ',
            'Duis consequat augue eget dolor condimentum, ut imperdiet purus ultrices. Nulla ac turpis aliquet diam convallis porttitor vitae nec.'
        ],
        linkto: ['http://sales/balcony', 'http://sales/medium', 'http://sales/star'],
        delay: [500, 0, 500]
    }

    showBoxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            <span>{this.state.desc[i]}</span>
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffff"
                                link={this.state.linkto[i]} />
                        </div>
                    </div>
                </div>
            </Zoom>

        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
            </div>

        );
    }
}

export default Pricing;