import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import ChatChoice from './ChatChoice';
import Button from './ChatButton';

//const windowWidth = Dimensions.get('window').width;

class ChatChoiceContainer extends React.Component {

    state = {
        choices: [],
        renderedChoices: [],
        disabled: true
    };

    componentWillMount() {
        this.setState({
            renderedChoices: this.props.array.map((choice, key) => (
                <ChatChoice 
                    text={choice.value} 
                    image={choice.imageU} 
                    key={key}
                    onPress={() => this.onChoicePress(choice)}
                    // imageStyle={{ width: ((windowWidth) / ((this.props.array.length / 2) + 1)) }}
                    imageStyle={{ alignSelf: 'stretch' }} 
                />
            ))
        });
    }

    onChoicePress(choice) {
        if (this.props.multipleOptionsSelect == null || this.props.multipleOptionsSelect === 'false') {
            this.props.callback('string', choice);
        } else {
            this.state.choices.push(choice);
        }
        this.updateRenderedChoices();
    }

    onRemoveChoicePress(choice) {
        const index = this.state.choices.indexOf(choice);
        this.state.choices.splice(index, 1);
        this.updateRenderedChoices();
    }

    onButtonPress() {
        this.props.callback('array', this.state.choices);
    }

    updateRenderedChoices() {
        if (this.state.choices.length !== 0) {
            this.setState({
                disabled: false
            });
        } else {
            this.setState({
                disabled: true
            });
        }
        this.setState({
            renderedChoices: this.props.array.map((choice, key) => {
                if (this.state.choices.length !== 0 && this.state.choices.includes(choice)) { 
                    if (choice.imageS === '') {
                        return (
                            <ChatChoice 
                                text={choice.value} 
                                image={choice.imageU} 
                                key={key}
                                style={{ elevation: 5 }}
                                onPress={() => this.onRemoveChoicePress(choice)} 
                                imageStyle={{ 
                                    alignSelf: 'stretch'
                                }} 
                            />
                        );
                    } 
                    return (
                        <ChatChoice 
                            text={choice.value} 
                            image={choice.imageS} 
                            key={key}
                            onPress={() => this.onRemoveChoicePress(choice)} 
                            imageStyle={{ 
                                alignSelf: 'stretch'
                            }} 
                        />
                    );
                }
                return (
                    <ChatChoice 
                        text={choice.value} 
                        image={choice.imageU} 
                        key={key}
                        style={{ backgroundColor: '#F8F8F8' }}
                        onPress={() => this.onChoicePress(choice)} 
                        imageStyle={{ 
                            alignSelf: 'stretch' 
                        }} 
                    />
                );
            })
        });
    }

    render() {
        if (this.props.multipleOptionsSelect === 'true') {
            return (
                <View style={{ backgroundColor: '#F8F8F8' }}>
                    <View style={styles.viewStyle}>
                        {this.state.renderedChoices}
                    </View>
                    <Button 
                        style={{ margin: 5 }} 
                        disabled={this.state.disabled} 
                        onPress={this.onButtonPress.bind(this)}
                    >
                        <Text>Continue</Text>
                    </Button>
                </View>
            );
        }
    
        return (
            <View style={styles.viewStyle}>
                {this.state.renderedChoices}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
});

export default ChatChoiceContainer;
