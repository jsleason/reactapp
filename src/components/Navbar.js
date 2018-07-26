import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div class="navHeader">
                    <button type="button">Philosophy</button>
                </div>
                <div class="navHeader">
                    <button type="button">Community</button>
                </div>
                <div class="navHeader">
                    <button type="button">Partners</button>
                </div>
            </div>
        )
    }
}

export default Navbar;