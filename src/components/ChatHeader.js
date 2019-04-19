import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

const ChatHeader = ({ chatHeader }) => (
    <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{chatHeader}</Text>
    </View>
);

const styles = StyleSheet.create({
    viewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textStyle: {
        textAlign: 'center',
    },
});

export default ChatHeader;
