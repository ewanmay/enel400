import * as React from 'react';
import { Component } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProp, HeaderProps } from 'react-navigation';

import { loginScreenStyles, registerScreenStyles } from '../styles';
import ErrorNotification from '../../common/error-notification';
import Header from '../../common/header';
import { authActions } from "../../../ducks/auth";
interface RegisterScreenProps {
    email: string,
    loading: boolean,
    error: string,
    confirmation: string,
    user: {},
    loginWithFacebook: any
    navigation: NavigationScreenProp<any, any>
    stateNavigate: () => void
}

class RegisterScreen extends Component<RegisterScreenProps> {
    static navigationOptions = {
        title: 'Sign up',
        header: (props: Readonly<HeaderProps>) => <Header {...props} />,
        headerStyle: {
            backgroundColor: "transparent"
        },
        headerTitleStyle: {
            fontFamily: "titillium-web",
            color: "white"
        },
        headerTintColor: "white"
    };

    loginUserFacebook() {
        this.props.loginWithFacebook()
    }

    loginUserGoogle() {

    }

    navigateTo(route: string) {
        this.props.stateNavigate()
        this.props.navigation.navigate(route)
    }

    render() {
        const { loginButtonStyle, touchableStyle, touchableTextStyle,
            facebookButtonStyle, googleButtonStyle,
        } = loginScreenStyles;
        const { containerStyle, formContainerStyle } = registerScreenStyles
        return (
            <View style={containerStyle}>
                <View style={formContainerStyle}>
                    <ErrorNotification error={this.props.error} confirmation={this.props.confirmation} />
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                        <View style={loginButtonStyle}>
                            <TouchableOpacity style={touchableStyle} onPress={() => this.props.navigation.navigate('RegisterWithEmail')}>
                                <Text style={touchableTextStyle}>Sign up with Email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={facebookButtonStyle} onPress={() => this.loginUserFacebook()}>
                                <Text style={touchableTextStyle}>Sign up with Facebook </Text>
                                <Image style={{ width: 20, height: 20 }} source={require('../../../../assets/images/facebookIcon.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={googleButtonStyle} onPress={() => this.loginUserGoogle()}>
                                <Text style={touchableTextStyle}> Sign up with Google </Text>
                                <Image style={{ width: 20, height: 20 }} source={require('../../../../assets/images/googleIcon.png')} />
                            </TouchableOpacity>
                        </View>
                        <Text onPress={() => this.navigateTo('Login')} style={{ fontSize: 16, padding: 10 }}>Have an account? Log In</Text>

                    </View>

                </View>
            </View >

        )
    }
}

interface stateProps {
    auth: {
        email: string,
        password: string,
        loading: boolean,
        error: string,
        confirmation: string,
        user: {}
    }
}

const mapStateToProps = ({ auth }: stateProps) => {
    return {
        email: auth.email,
        password: auth.password,
        loading: auth.loading,
        error: auth.error,
        confirmation: auth.confirmation,
        user: auth.user
    }
}

export default connect(mapStateToProps, authActions)(RegisterScreen as any);