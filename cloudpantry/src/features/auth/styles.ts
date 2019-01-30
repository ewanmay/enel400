import { StyleSheet, Platform, Dimensions, StatusBar } from 'react-native';

export const colors = {
  black: '#23292E',
  gray: '#d5d5d5',
  lightGreen: '#55ad7a',
  paleBlue: '#1e5d88',
  darkerBlue: '#334d5c'
};

function wp(percentage: number) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const slideHeight = viewportHeight * 0.4;
const slideWidth = wp(90);
const itemHorizontalMargin = wp(2);
const itemWidth = slideWidth + itemHorizontalMargin * 5;
const entryBorderRadius = 8;
const IS_IOS = Platform.OS === 'ios';

export const landingScreenStyles = StyleSheet.create({
  headerStyle: {
      fontSize: 32,
      color: 'white',
      fontFamily: 'titillium-web-bold'
  },
  headerViewStyle: {
      backgroundColor: colors.paleBlue,
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative',
      paddingTop: Platform.OS === 'ios' ? 15 : 30 + (StatusBar.currentHeight || 0),
  },
  buttonRowContainerStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
  },
  pageContainerStyle: {
      backgroundColor: colors.darkerBlue,
      height: '100%'
  }
});

export const carouselStyles = StyleSheet.create({
  slideInnerContainer: {
      width: itemWidth,
      height: slideHeight,
      paddingHorizontal: itemHorizontalMargin,
      paddingBottom: 18 // needed for shadow
  },
  shadow: {
      position: 'absolute',
      top: 0,
      left: itemHorizontalMargin,
      right: itemHorizontalMargin,
      bottom: 18,
      shadowColor: colors.black,
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 10 },
      shadowRadius: 10,
      borderRadius: entryBorderRadius
  },
  imageContainer: {
      marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
      backgroundColor: colors.black,
      borderTopLeftRadius: entryBorderRadius,
      borderTopRightRadius: entryBorderRadius,
      justifyContent: 'center'
  },
  image: {
      resizeMode: 'cover',
      borderRadius: IS_IOS ? entryBorderRadius : 0,
      borderTopLeftRadius: entryBorderRadius,
      borderTopRightRadius: entryBorderRadius
  },
  radiusMask: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: entryBorderRadius,
      backgroundColor: 'white'
  },
  radiusMaskEven: {
      backgroundColor: colors.black
  },
  textContainer: {
      justifyContent: 'center',
      paddingTop: 20 - entryBorderRadius,
      paddingBottom: 20,
      paddingHorizontal: 16,
      backgroundColor: 'white',
      borderBottomLeftRadius: entryBorderRadius,
      borderBottomRightRadius: entryBorderRadius
  },
  title: {
      color: colors.black,
      fontSize: 13,
      fontWeight: 'bold',
      letterSpacing: 0.5
  },
  titleEven: {
      color: 'white'
  },
  subtitle: {
      marginTop: 6,
      color: colors.darkerBlue,
      fontSize: 12,
      fontStyle: 'italic'
  },
  subtitleEven: {
      color: 'rgba(255, 255, 255, 0.7)'
  },
  carouselContainer: {
      marginTop: 20,
      height: '60%'
  }
});

export const homeScreenStyles = StyleSheet.create({
  touchableTextStyle: {
      color: 'white',
      fontSize: 18,
      padding: 10
  },
  touchableContainerStyle: {
      flexDirection: 'row',
      backgroundColor: colors.darkerBlue,
      height: '20%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 20,
      borderRadius: 5
  },
  buttonContainerStyle: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%'
  },
  imageIconStyle: {

  }
});

export const loginScreenStyles = StyleSheet.create({
    touchableStyle: {
        backgroundColor: colors.lightGreen,
        height: 60,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 20
    },
    touchableTextStyle: {
        fontSize: 18,
        color: 'white'
    },
    buttonRowContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '22%'
    },
    loginButtonStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%'
    },
    bodyStyle: {
        justifyContent: 'center'
    },
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
    facebookButtonStyle: {
        flexDirection: 'row',
        backgroundColor: '#3B5998',
        height: 60,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 20
    },
    googleButtonStyle: {
        flexDirection: 'row',
        backgroundColor: '#db3236',
        height: 60,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 20
    },
    confirmationTextStyle: {
        fontSize: 18,
        width: '90%',
        alignSelf: 'center',
        color: 'green'
    }
})

export const registerScreenStyles = StyleSheet.create({
    containerStyle: {
        backgroundColor: colors.darkerBlue,
        height: '100%',
        width: '100%'
    },
    formContainerStyle: {
        height: '80%',
        backgroundColor: colors.gray
    }
});