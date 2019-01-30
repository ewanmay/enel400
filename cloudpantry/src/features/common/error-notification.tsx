import * as React from 'react';
import { View, Text } from 'react-native';
import { errorNotificationStyles } from './styles'

interface props {
    error: string,
    confirmation: string
}

const ErrorNotification = ({ error, confirmation }: props) => {
    const { errorViewStyle, errorTextStyle, confirmationTextStyle } = errorNotificationStyles
    return (
        <View style={errorViewStyle}>
            <Text style={errorTextStyle}
            >
                {error}
            </Text>
            <Text style={confirmationTextStyle }
            >
                {confirmation}
            </Text>
        </View>
    )
}

export default ErrorNotification;