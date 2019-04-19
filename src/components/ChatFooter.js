import React, { Component } from 'react';
import ChatInput from './ChatInput';
import ChatChoiceContiner from './ChatChoiceContainer';
import SliderContainer from './SliderContainer';

export default class ChatFooter extends Component {
    componentDidMount() {
        this.contentChange();
    }

    chatChoiceCallback(type, choice) {
        this.props.onChoiceCallback(type, choice);
    }

    sliderCallback(value) {
        this.props.onSliderCallback(value);
    }

    contentChange() {
        this.props.contentChangeCallback();
    }

    render() {
        switch (this.props.userInput) {
            case 'input':
                return (
                    <ChatInput 
                        label="Enter" 
                        value={this.props.value} 
                        onChangeText={this.props.onChangeText} 
                        placeholder={this.props.placeholder} 
                        secureTextEntry={this.props.secureTextEntry} 
                        onPress={this.props.onPress}
                        buttonDisabled={this.props.chatInputButtonDisabled}
                    />
                );
            case 'slider':
                return (
                    <SliderContainer 
                        step={1} 
                        minimumValue={1}
                        maximumValue={this.props.maximumValue}
                        callback={this.sliderCallback.bind(this)}
                        // values={this.props.sliderArray[0].values}
                        // markers={this.props.sliderArray[0].markers}
                        slider={this.props.sliderArray} 
                    />
                );
            case 'choices':
                return (
                    <ChatChoiceContiner
                        multipleOptionsSelect={this.props.multipleOptionsSelect}
                        array={this.props.options} 
                        callback={this.chatChoiceCallback.bind(this)} 
                    />
                );
            default:
                return null;
        }
    }
}
