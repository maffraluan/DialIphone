import React from 'react'
import { TextInput } from 'react-native'
import { RoundedView, TouchaRounded, styles } from './styled'

type RoundedProps = {
    textNumber?: string | any,
    textLetter?: string,
    style?: object | undefined,
    onPress?: () => void,
};

const Rounded: React.FC<RoundedProps> = (props) => {
    return (
        <TouchaRounded onPress={props.onPress} >
            <RoundedView style={props.style}>
                <TextInput
                    editable={false} style={[props.style, styles.textNumber]}>
                    {props.textNumber}
                </TextInput>

                {props.textLetter ?
                    <TextInput
                        editable={false}
                        style={[props.style, styles.textLetter]}>
                        {props.textLetter}
                    </TextInput>
                    : null}
            </RoundedView>
        </TouchaRounded>
    );
};

export { Rounded }