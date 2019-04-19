import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import ChatIcon from './ChatIcon';

const deviceWidth = Dimensions.get('window').width;

const ChatBox = ({ text, user, userIcon, cpuIcon }) => {
    if (user) {
        return (
            <View style={styles.userViewStyle}>
                <Text style={styles.userTextStyle}>{text}</Text>
                <ChatIcon image={userIcon} />
            </View>
        );
    }
    return (
        <View style={styles.viewStyle}>
            <ChatIcon image={cpuIcon} />
            <Text style={styles.textStyle}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        marginTop: 20,
        marginLeft: 10,
        padding: 5,
        flex: 1,
        flexDirection: 'row',
    },
    textStyle: {
        width: deviceWidth - 150,
        marginLeft: 10,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#F0F0F0',
        fontSize: 15,
        color: '#444444',
    },
    userViewStyle: {
        alignSelf: 'flex-end',
        marginTop: 20,
        marginRight: 10,
        padding: 5,
        flex: 1,
        flexDirection: 'row',
    },
    userTextStyle: {
        width: deviceWidth - 150,
        marginRight: 10,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#DCE9FA',
        fontSize: 15,
        color: '#444444',
    }
});

export default ChatBox;
