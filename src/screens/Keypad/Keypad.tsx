import React, { useState } from 'react'
import { Icon } from 'react-native-elements'
import { SafeAreaView } from 'react-native'
import { Rounded } from '../../components'
import { styles, RoundedRow, Display, TextDisplay } from './styled'

const Keypad: React.FC = () => {
    const [textValue, setTextValue] = useState('');

    return (
        <SafeAreaView style={styles.safeArea}>
            <Display>
                <TextDisplay>{textValue}</TextDisplay>
            </Display>
            <RoundedRow>
                <Rounded textNumber="1" onPress={() => setTextValue("1")} />
                <Rounded textNumber="2" textLetter="A B C" onPress={() => setTextValue("2")} />
                <Rounded textNumber="3" textLetter="D E F" onPress={() => setTextValue("3")} />
            </RoundedRow>

            <RoundedRow>
                <Rounded textNumber="4" textLetter="G H I" onPress={() => setTextValue("4")}/>
                <Rounded textNumber="5" textLetter="J K L" onPress={() => setTextValue("5")}/>
                <Rounded textNumber="6" textLetter="M N O" onPress={() => setTextValue("6")}/>
            </RoundedRow>

            <RoundedRow>
                <Rounded textNumber="7" textLetter="P Q R S" onPress={() => setTextValue("7")}/>
                <Rounded textNumber="8" textLetter="T U V" onPress={() => setTextValue("8")}/>
                <Rounded textNumber="9" textLetter="W X Y Z" onPress={() => setTextValue("9")}/>
            </RoundedRow>

            <RoundedRow>
                <Rounded textNumber="*" onPress={() => setTextValue("*")}/>
                <Rounded textNumber="0" textLetter="+" onPress={() => setTextValue("0")}/>
                <Rounded textNumber="#" onPress={() => setTextValue("#")}/>
            </RoundedRow>

            <RoundedRow>
                <Rounded
                    textNumber={<Icon name="phone" type="material-community" size={40} color="#fff" />}
                    style={{ backgroundColor: "#00BE5A" }} />
            </RoundedRow>
        </SafeAreaView>
    );
};

export { Keypad }