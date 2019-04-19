import React from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';

const ChatIcon = ({ image }) => (
    <View style={styles.viewStyle}>
        <Image source={image} style={styles.imageStyle} />
    </View>
);

const styles = StyleSheet.create({
    imageStyle: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderRadius: 25 / 2,
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    viewStyle: {
        width: 25,
        height: 25,
        borderRadius: 25 / 2,
        overflow: 'hidden',
    }
}); 

export default ChatIcon;
