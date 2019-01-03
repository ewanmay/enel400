import * as React from 'react';
import { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';

import { loginScreenStyles, registerScreenStyles } from '../styles';
import ErrorNotification from '../../common/error-notification';
import Spinner from '../../common/spinner';
import Field from '../../common/field';
import Header from '../../common/header';
import { authActions } from "../../../ducks/auth";
interface RegisterScreenProps {
    email: string,
    password: string,
    loading: boolean,
    error: string,
    confirmation: string,
    user: {},
    emailChanged: any,
    passwordChanged: any,
    registerUserWithEmail: any
    navigation: NavigationScreenProp<any, any>
    stateNavigate: () => void
}

class RegisterWithEmail extends Component<RegisterScreenProps> {
    static navigationOptions = {
        title: 'Sign up with Email',
        header: (props:any) => <Header {...props}/>,
        headerStyle: {
            backgroundColor: "transparent"
        },
        headerTitleStyle: {
            fontFamily: "titillium-web",
            color: "white"
        },
        headerTintColor: "white"
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
                    {<Field
                        onChangeText={(tag: string) => this.setState({ tag })}
                        value={''}
                        label='Tag'
                        placeholder='@friendlychef'
                        secure={false}
                    />}
                    <ErrorNotification error={this.props.error} confirmation={this.props.confirmation} />
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                        <View style={loginButtonStyle}>
                            {this.props.loading ?
                                <Spinner size="small" /> : <TouchableOpacity style={touchableStyle} onPress={
                                    () => this.props.registerUserWithEmail(this.props.email, this.props.password, this.props.navigation.navigate)}>
                                    <Text style={touchableTextStyle}>{'Sign Up'}</Text>
                                </TouchableOpacity>}
                        </View>
                        <Text onPress={() => this.navigateTo('Register')} style={{fontSize: 16, padding: 10}}>Choose different method</Text>
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

export default connect(mapStateToProps, authActions)(RegisterWithEmail as any);