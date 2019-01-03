import * as React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { spinnerStyles } from './styles'

interface spinnerProps {
    size: number | string
}

const Spinner = ({ size }: spinnerProps) => {
    const { spinnerStyle } = spinnerStyles;
    return (
        <View style={spinnerStyle} >
            <ActivityIndicator size={size as number} />
        </View>
    );
}



export default Spinner 