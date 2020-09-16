import React from 'react'
import { Icon } from 'react-native-elements'

type MenuIcons = {
    name: string,
    type: string,
    color: string,
    size: number,
}

const MenuIcon: React.FC<MenuIcons> = (props) => {
    return <Icon
        name={props.name}
        type={props.type}
        color={props.color}
        size={props.size}
    />
};

export { MenuIcon }