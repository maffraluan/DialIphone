import React from 'react'
import { Icon } from 'react-native-elements'
import { SafeAreaView } from 'react-native'
import { Rounded } from '../../components'
import { styles, RoundedRow } from './styled';

const Keypad: React.FC = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <RoundedRow>
                <Rounded textNumber="1" />
                <Rounded textNumber="2" textLetter="A B C" />
                <Rounded textNumber="3" textLetter="D E F" />
            </RoundedRow>

            <RoundedRow>
                <Rounded textNumber="4" textLetter="G H I" />
                <Rounded textNumber="5" textLetter="J K L" />
                <Rounded textNumber="6" textLetter="M N O" />
            </RoundedRow>

            <RoundedRow>
                <Rounded textNumber="7" textLetter="P Q R S" />
                <Rounded textNumber="8" textLetter="T U V" />
                <Rounded textNumber="9" textLetter="W X Y Z" />
            </RoundedRow>

            <RoundedRow>
                <Rounded textNumber="*" />
                <Rounded textNumber="0" textLetter="+" />
                <Rounded textNumber="#" />
            </RoundedRow>

            <RoundedRow>
                <Rounded 
                    textNumber={<Icon name="phone" type="font-awesome" size={40} color="#fff" /> }
                    style={{ backgroundColor: "#00BE5A" }} />
            </RoundedRow>
        </SafeAreaView>
    );
};

export { Keypad }