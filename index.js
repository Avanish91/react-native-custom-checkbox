import React, { useState } from 'react';
import { TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Checkbox =(props)=> {
    const [state,setState]= useState({
            backgroundColor  :  props.hasOwnProperty('backgroundColor')?props.backgroundColor:'#FFF',
            borderRadius     :  props.hasOwnProperty('borderRadius')?props.borderRadius:2,
            borderWidth      :  props.hasOwnProperty('borderWidth')?props.borderWidth:1,
            checked          :  props.hasOwnProperty('checked')?props.checked:true,
            color            :  props.hasOwnProperty('color')?props.color:'#000',
            margin           :  props.hasOwnProperty('margin')?props.margin:5,
            name             :  props.hasOwnProperty('name')?props.name:'',
            onChange         :  props.hasOwnProperty('onChange')?props.onChange:null,
            size             :  props.hasOwnProperty('size')?props.size:20,
			borderColor      :  props.hasOwnProperty('borderColor')?props.borderColor:'#000',
            iconType         :  props.hasOwnProperty('iconType')?props.iconType:'check',
            iconSize         :  props.hasOwnProperty('iconSize')?props.iconSize:props.hasOwnProperty('size')?props.size - 5:15,
            iconColor        :  props.hasOwnProperty('iconColor')?props.iconColor:'#000'
        });
        const toggleCheck =()=> {
            var checked = !state.checked;
            setState({ ...state,checked: checked });
        }
        const [BACKGROUND_COLOR,BORDER_RADIUS,BORDER_WIDTH,COLOR,MARGIN,SIZE,BORDER_COLOR,ICON_TYPE,ICON_SIZE,ICON_COLOR]=[state.backgroundColor,state.borderRadius,state.borderWidth,state.color,state.margin,state.size,state.borderColor,state.iconType,state.iconSize,state.iconColor] 
        return (
            <TouchableHighlight underlayColor='transparent'
                onPress={() => { toggleCheck() }}
                style={{backgroundColor: BACKGROUND_COLOR, borderColor: BORDER_COLOR,
                       borderRadius: BORDER_RADIUS, borderWidth: BORDER_WIDTH,
                       height: SIZE, margin: MARGIN, width: SIZE }}
                >
                <View style={{flex: 1, alignItems: 'center'}}>
                    { state.checked &&
                    <Icon name={ICON_TYPE} size={ICON_SIZE} color={ICON_COLOR}/> }
                </View>
            </TouchableHighlight>
        );
    }
export default Checkbox;