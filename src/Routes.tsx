import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Contact, Favorite, Keypad, Recent, Voicemail } from './screens'
import { MenuIcon } from './components';

const RootTab = createBottomTabNavigator();

const Routes: React.FC = () => {
    const icons: { [key: string]: object | any } = {
        'Favorites': {
            name: "star",
            lib: 'ionicons'
        },
        'Recents': {
            name: "clock-time-nine",
            lib: 'material-community'
        },
        'Contacts': {
            name: "user-circle",
            lib: 'font-awesome'
        },
        'Keypad': {
            name: "voicemail",
            lib: 'material-community'
        },
        'Voicemail': {
            name: "voicemail",
            lib: 'material-community'
        },
    };

    return (
        <RootTab.Navigator
            initialRouteName="Keypad"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const { name, lib } = icons[route.name];
                    return <MenuIcon name={name} size={size} type={lib} color={color} />
                },
            })}
            tabBarOptions={{
                style: {
                    paddingBottom: 25,
                },
            }}>
            <RootTab.Screen
                name="Favorites"
                component={Favorite}
                options={{
                    title: "Favorites",
                }} />

            <RootTab.Screen
                name="Recents"
                component={Recent}
                options={{
                    title: "Recents",
                }} />

            <RootTab.Screen
                name="Contacts"
                component={Contact}
                options={{
                    title: "Contacts",
                }} />

            <RootTab.Screen
                name="Keypad"
                component={Keypad}
                options={{
                    title: "Keypad",
                }} />

            <RootTab.Screen
                name="Voicemail"
                component={Voicemail}
                options={{
                    title: "Voicemail",
                }} />

        </RootTab.Navigator>
    );
};

export default Routes;