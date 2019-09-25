import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';
import { ColorWheel } from './component/ColorWheel';
export default class Demo20 extends Component {
    constructor(param) {
        super(param);

    }

    onChange(color){
        console.warn(color)
    }
    render() {
        return (
              <ColorWheel
                    initialColor="#99ffcc"
                    onColorChangeComplete={color => this.onChange(color)}
                    style={{ width: 166 }}
                    thumbSize={20}
                     />);
    }
}

