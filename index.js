import React, { useState } from 'react';
import { TouchableHighlight, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

var BACKGROUND_COLOR, BORDER_RADIUS, BORDER_WIDTH, COLOR, MARGIN, SIZE, BORDER_COLOR;

const Checkbox =(props)=> {
    const [state,setState]= useState({
            backgroundColor: '#FFF',
            borderRadius: 2,
            borderWidth: 1,
            checked: true,
            color: '#000',
            margin: 5,
            name: '',
            onChange: null,
            size: 20,
			borderColor: '#000'
        });
        const toggleCheck =()=> {
            var checked = !state.checked;
            setState({ ...state,checked: checked });
        }
        BACKGROUND_COLOR = state.backgroundColor;
        BORDER_RADIUS = state.borderRadius;
        BORDER_WIDTH = state.borderWidth;
        COLOR = state.color;
        MARGIN = state.margin;
        SIZE = state.size;
		BORDER_COLOR = state.borderColor;
        return (
            <TouchableHighlight underlayColor='transparent'
                onPress={() => { toggleCheck() }}
                style={{backgroundColor: BACKGROUND_COLOR, borderColor: BORDER_COLOR,
                       borderRadius: BORDER_RADIUS, borderWidth: BORDER_WIDTH,
                       height: SIZE, margin: MARGIN, width: SIZE }}
                >
                <View style={{flex: 1, alignItems: 'center'}}>
                    { state.checked &&
                    <Icon name='check' size={SIZE - 5 } color={COLOR}/> }
                </View>
            </TouchableHighlight>
        );
    }
export default Checkbox;