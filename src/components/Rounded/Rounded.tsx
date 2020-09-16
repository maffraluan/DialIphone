import React from 'react'
import { Text } from 'react-native'
import { RoundedView, TouchaRounded, styles } from './styled'

type RoundedProps = {
    readonly textNumber?: any,
    readonly textLetter?: any,
    style?: object | undefined,
    bgColor?: object | undefined
}

const Rounded: React.FC<RoundedProps> = (props) => {
    return (
        <TouchaRounded>
            <RoundedView style={props.style}>
                <Text style={[props.style, styles.textNumber]}>{props.textNumber}</Text>
                {props.textLetter ?
                    <Text style={[props.style, styles.textLetter]}>
                        {props.textLetter}
                    </Text>
                    : null}
            </RoundedView>
        </TouchaRounded>
    );
};

export { Rounded }