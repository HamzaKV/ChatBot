import React from 'react';
import {
    TextInput,
    View,
    Text
} from 'react-native';
import Button from './ChatButton';

const ChatInput = ({ label, value, onChangeText, placeholder, secureTextEntry, onPress, buttonDisabled }) => (
    <View style={styles.containerStyle}>
        <TextInput
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            style={styles.inputStyle}
            value={value}
            onChangeText={onChangeText}
            autoCorrect 
        />
        <Button style={styles.buttonStyle} onPress={onPress} disabled={buttonDisabled}><Text>{label}</Text></Button>
    </View>
);

const styles = {
    inputStyle: {
        color: '#000',
        padding: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
    },
    buttonStyle: {
        flex: 1
    },
    containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        padding: 15,
        elevation: 2,
        position: 'relative'
    }
};

export default ChatInput;
