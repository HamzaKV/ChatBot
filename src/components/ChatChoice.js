import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';
import Button from './ChatButton';

const ChatChoice = ({ text, image, onPress, style, imageStyle, disabled }) => {
    if (image !== '') {
        return (
            <View style={[style, styles.viewStyle]}>
                <TouchableOpacity 
                    style={{ alignItems: 'center', alignContent: 'center' }} 
                    disabled={disabled} 
                    onPress={onPress}
                >
                    <Image source={image} style={imageStyle} />
                    <Text>{text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <View 
            style={{ 
                padding: 3,
                position: 'relative',
                margin: 2,
                flex: 1, 
            }}
        >
            <Button onPress={onPress}><Text>{text}</Text></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        padding: 3,
        position: 'relative',
        margin: 2,
    }
});

export default ChatChoice;
