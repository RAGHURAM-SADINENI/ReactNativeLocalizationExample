import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../tabs/home/HomeScreen';
import SettingScreen from '../tabs/settings/SettingScreen';

const Tab = createBottomTabNavigator();

const AppRouting = () => {
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
                        tabBarIcon: ({ color }) => (
                            <Icon name="home" size={28} color={color} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icon name='settings' size={28} color={color} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppRouting;