import React, { Component } from 'react';

import "./layout.scss"

import Home from '../Home'
import { DenseAppBar } from '../../components'


class Layout extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return (
            <div className="Layout">
                <DenseAppBar></DenseAppBar>
                <header className="Layout-header">
                    <Home />
                </header>
          </div>
        )
    }
}

export default Layout;