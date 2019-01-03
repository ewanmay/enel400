import * as React from 'react'
import { View, Text } from 'react-native'
import { mainNavBarStyles } from './styles'
import { Header, HeaderProps } from "react-navigation";


const CustomHeader = (props: Readonly<HeaderProps>) => {
    const { headerStyle  } = mainNavBarStyles;
    return (
    <View style={headerStyle}>
        <Header {...props} />
    </View>
    );

}

export default CustomHeader;