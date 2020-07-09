import React from 'react';
import { Text } from 'react-native';

export default function SimpliWeatherText(props) {

    const { colors } = props.theme;

    return (
        <Text style={{...props.style, color: colors.text}}>{ props.children }</Text>
    );
}