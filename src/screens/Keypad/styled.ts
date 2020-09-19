import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const RoundedRow = styled.View`
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 20px;
`;

export const Display = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 10%;
`;

export const TextDisplay = styled.Text`
    font-size: 50px;
    font-weight: 500,
`;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff",
    }
})

export { styles };