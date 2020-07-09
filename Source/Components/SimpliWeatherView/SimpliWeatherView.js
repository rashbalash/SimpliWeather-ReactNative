import React from 'react';
import { View } from 'react-native';

export default function SimpliWeatherView(props) {

    const { colors } = props.theme;

    return (
        <View style={{...props.style, backgroundColor: colors.background}}>{ props.children }</View>
    );
}