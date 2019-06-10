import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }

    percentage = () => {
        if (this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.percentage();
        }, 30)
    }
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade onReveal={() => this.percentage()}>
                        <div className="discount_percentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>

                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th JUNE</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed nisl tortor. Ut ac ipsum vestibulum ipsum tempor tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>

                            <div>
                                <MyButton
                                    text="Purchase Tickets"
                                    bck="#ffa800"
                                    color="#ffff"
                                    link="http://google.com"
                                />
                            </div>
                        </div>

                    </Slide>

                </div>
            </div>
        );
    }
}

export default Discount;