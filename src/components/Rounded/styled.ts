import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const RoundedView = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 80px;
    background-color: #cecece;
    border-radius: 50px;
`;

export const TouchaRounded = styled.TouchableOpacity`
`;

const styles = StyleSheet.create({
    textNumber: {
        fontSize: 35,
        fontWeight: '400',
    },
    textLetter: {
        fontSize: 12,
        fontWeight: '600',
    }
})

export { styles }