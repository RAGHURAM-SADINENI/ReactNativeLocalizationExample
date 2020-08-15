import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../tabs/HomeScreen';
import SettingScreen from '../tabs/SettingScreen';

import { connect } from 'react-redux';
import I18n from '../../i18n';

const Tab = createBottomTabNavigator();

const AppRouting = (props) => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: "blue"
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: I18n.t('tabs.home'),
                        tabBarIcon: ({ color }) => (
                            <Icon name="home" size={28} color={color} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingScreen}
                    options={{
                        tabBarLabel: I18n.t('tabs.settings'),
                        tabBarIcon: ({ color }) => (
                            <Icon name='settings' size={28} color={color} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const mapStateToProps = (state) => ({
    languageDetails: state.language
})

export default connect(mapStateToProps)(AppRouting);