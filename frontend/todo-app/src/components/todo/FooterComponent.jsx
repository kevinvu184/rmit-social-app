import React, { Component } from 'react'

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer" style={{position: 'absolute', bottom: '0', width: '100%', height: '2.5rem'}}>
                <span className="text-muted">All Rights Reserved 2019 @RMIT SEPT</span>
            </footer>
        )
    }
}

export default FooterComponent 