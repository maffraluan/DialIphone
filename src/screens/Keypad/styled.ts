import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const RoundedRow = styled.View`
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 20px;
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