import { StyleSheet } from 'react-native';

export const colors = {
    black: '#23292E',
    gray: '#d5d5d5',
    lightGreen: '#55ad7a',
    paleBlue: '#1e5d88',
    darkerBlue: '#334d5c'
};

export const spinnerStyles = StyleSheet.create({    
    spinnerStyle: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export const popupDialogStyles = StyleSheet.create({
    dialogStyle: { backgroundColor: colors.paleBlue },
    titleStyle: {
        backgroundColor: colors.paleBlue
    },
    titleTextStyle: {
        color: 'white'
    },
    buttonTextStyle: {
        color: 'white'
    },
    buttonTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        backgroundColor: colors.paleBlue,
        width: '100%',
        height: '20%',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        position: 'absolute'
    },
    descriptionContainerStyle: {
        backgroundColor: colors.gray,
        justifyContent: 'center',
        alignItems: 'center',
        height: '66%'
    },
    textStyle: { color: 'black', fontSize: 16 }
})

export const errorNotificationStyles = StyleSheet.create({
    errorViewStyle: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorTextStyle: {
        fontSize: 18,
        alignSelf: 'center',
        width: '90%',
        color: 'red'
    },
    confirmationTextStyle: {
        fontSize: 18,
        width: '90%',
        alignSelf: 'center',
        color: 'green'
    }
})

export const fieldStyles = StyleSheet.create({    
    fieldContainerStyle: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    fieldLabelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
        fontFamily: 'questrial'
    },
    fieldInputStyle: {
        flex: 3, 
        padding: 10,
        fontSize: 16,
    },
})

export const mainNavBarStyles = StyleSheet.create({
    headerStyle: {
        backgroundColor: colors.paleBlue,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
    },
    titleStyle: {
        color: 'white',
        fontFamily: 'titillium-web',
        textAlign: 'center'
    }
})
