import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Component for a custom button
const ChatButton = ({ onPress, children, style, disabled }) => {
  const { buttonStyle, textStyle, disabledButton } = styles;
  if (disabled) {   
    return (
      <TouchableOpacity onPress={onPress} style={[disabledButton, style]} disabled={disabled}>
        <Text style={textStyle}>
          {children}
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#1991EB', //nice blue color, changed to grey with #8a8c91
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1991EB',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1
  },
  disabledButton: {
    alignSelf: 'stretch',
    backgroundColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1
  }
};

export default ChatButton;
