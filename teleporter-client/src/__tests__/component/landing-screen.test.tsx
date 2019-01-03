import * as React from 'react';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { shallow } from 'enzyme';
import { initialAuthState } from '../../reducers/initial-states';
import LandingScreen from '../../components/screens/landing-screen'
import { TouchableOpacity } from 'react-native';
import LoginButtonRow from '../../components/elements/LoginButtonRow';

describe("Landing Screen", function () {
    const initialState = initialAuthState
    const mockStore = configureStore();
    let store: MockStoreEnhanced<{}, {}>;
    beforeEach(() => {
        store = mockStore(initialState);
    })

    it('renders', () => {
        const wrapper = shallow(<LandingScreen />, { context: { store } });
        expect(wrapper.dive()).toMatchSnapshot();
    });

    it('renders login buttons', () => {
        const wrapper = shallow(<LandingScreen />, { context: { store } });
        const render = wrapper.dive();
        expect(render.find('LoginButtonRow')).toHaveLength(1)
    });

    it('renders login carousel', () => {
        const wrapper = shallow(<LandingScreen />, { context: { store } });
        const render = wrapper.dive();
        expect(render.find('LoginCarousel')).toHaveLength(1)
    })

    it('navigates on click', () => {
        const spy = spyOn(LandingScreen.prototype, 'navigateTo');
        const wrapper = shallow(<LandingScreen />).dive();
        wrapper.find(LoginButtonRow).dive().find(TouchableOpacity).first().props().onPress()
        expect(spy).toBeCalled()
    })

})