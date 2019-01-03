import * as React from 'react';
import { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';

import { loginScreenStyles, registerScreenStyles } from '../styles'
import Spinner from '../../common/spinner';
import Field from '../../common/field';
import { HeaderProps } from 'react-navigation';
import { authActions } from "../../../ducks/auth";
import Header from '../../common/header';
import ErrorNotification from '../../common/error-notification';
import PopupDialogComponent from '../../common/popup-dialog';

class LoginScreen extends Component<any> {
    static navigationOptions = {
        title: 'Log In', 
        header: (props: Readonly<HeaderProps>) => <Header {...props} />,
        headerStyle: {
            backgroundColor: "transparent"
        },
        headerTitleStyle: {
            fontFamily: "titillium-web",
            color: "#fff"
        },
        headerTintColor: "#fff"
    };

    navigateTo(route: string) {
        this.props.stateNavigate()
        this.props.navigation.navigate(route)
    }

    render() {
        const { loginButtonStyle, touchableStyle, touchableTextStyle
        } = loginScreenStyles;
        const { containerStyle, formContainerStyle } = registerScreenStyles
        return (
            <View style={containerStyle}>
                <View style={formContainerStyle}>
                    <PopupDialogComponent
                        onPress={() => this.props.userConfirm()}
                        description='Thank you for signing up, please log in one more time just to confirm your password. Click the show password icon if you need any help!'
                        title='Account Created!'
                        show={this.props.showPopup}
                        buttonText='close'
                    />
                    <Field
                        label='Email'
                        onChangeText={(email: string) => this.props.emailChanged(email)}
                        value={this.props.email}
                        placeholder='user@gmail.com'
                        secure={false}
                    />
                    <Field
                        onChangeText={(password: string) => this.props.passwordChanged(password)}
                        value={this.props.password}
                        label='Password'
                        placeholder='password'
                        secure={true}
                    />
                    <ErrorNotification error={this.props.error} confirmation={this.props.confirmation} />
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                        <View style={loginButtonStyle}>
                            {
                                this.props.loading ?
                                    <Spinner size="small" /> :
                                    <TouchableOpacity
                                        style={touchableStyle}
                                        onPress={() => this.props.loginWithEmail(
                                            this.props.email,
                                            this.props.password,
                                            this.props.navigation.navigate)
                                        }>
                                        <Text style={touchableTextStyle}>Log in</Text>
                                    </TouchableOpacity>
                            }
                            <Text onPress={() => this.navigateTo('Register')} style={{ fontSize: 16, padding: 10 }}>No account? Sign up</Text>
                        </View>

                    </View>
                </View>
            </View>
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
        showPopup: boolean
    }
}

const mapStateToProps = ({ auth }: stateProps) => {
    return {
        email: auth.email,
        password: auth.password,
        loading: auth.loading,
        error: auth.error,
        confirmation: auth.confirmation,
        showPopup: auth.showPopup,
    }
}

export default connect(mapStateToProps, authActions)(LoginScreen);