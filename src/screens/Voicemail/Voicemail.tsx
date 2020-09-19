import React from 'react'
import { SafeAreaView, View, Text, TouchableHighlight } from 'react-native'
import { styles } from './styles'

const Voicemail: React.FC = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.viewVoicemail}>
                <Text style={styles.textVoicemail}>Voicemail</Text>
            </View>

            <View style={styles.viewButton}>
                <TouchableHighlight>
                    <View style={styles.buttonBorder}>
                        <Text style={styles.textButton}>Call Voicemail</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}

export { Voicemail }