import * as React from 'react';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { shallow } from 'enzyme';
import { TouchableOpacity } from 'react-native';
import thunk from 'redux-thunk';

import { initialAuthState } from '../../reducers/initial-states';
import LoginButtonRow from '../../components/elements/LoginButtonRow';
import LoginScreen from '../../components/screens/login-screen';
import Field from '../../components/elements/Field';
import Header from '../../components/elements/Header'
import ErrorNotification from '../../components/elements/ErrorNotification';
import { LOADING_CALL, LOGIN_USER_FAILURE } from '../../actions/types';
import * as actions from '../../auth/actions';

describe("Register Screen", function () {
    const initialState ={auth: initialAuthState}
    const mockStore = configureStore([thunk]);
    let store: MockStoreEnhanced<{}, {}>
    beforeEach(() => {
        store = mockStore(initialState);
    })

    it('has Log In header', () => {
        const wrapper = shallow(<LoginScreen />, { context: { store } });
        expect(wrapper.dive().find(Header).props().headerText).toBe('Log In');
    });

    it('renders inputs', () => {
        const wrapper = shallow(<LoginScreen />, { context: { store } });
        const render = wrapper.dive();
        expect(render.find(Field)).toHaveLength(2)
    });

    it('errors on incorrect login credentials', () => {
        const props = {
            loginUser: jest.fn(),
            navigation: { navigate: jest.fn() },
            error: 'Hello'
          }
          store = mockStore({auth: { error: '', email: '', password: '', loading: false, confirmation: '', showPopup: false}})
        const wrapper = shallow(<LoginScreen {...props} />, { context: { store } });
        console.log(wrapper.debug())
        console.log(wrapper.props())
        const render = wrapper.dive();
        console.log(render.debug())
        console.log(render.find(ErrorNotification).props())
        expect(render.find(ErrorNotification).props().error).toBe("")
        render.find(TouchableOpacity).props().onPress();
        expect(props.loginUser.mock.calls.length).toEqual(1)
        store.dispatch({ type: LOGIN_USER_FAILURE, payload: 'Email password combination did not match, sorry!'})
        expect(store.getActions()).toEqual({ type: LOGIN_USER_FAILURE, payload: 'Email password combination did not match, sorry!'})
        expect(render.find(ErrorNotification).props().error).toBe("")
    })

})