# ChatBot

A Simple react-native Chat Bot.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software:

Download and Install: [Node](https://nodejs.org/en/)

Once Node is installed, run

```
npm install react-native
```

Have an up and running react-native project. See https://facebook.github.io/react-native/docs/getting-started for more information.

### Installing

To install component, navigate to project root directory and run

```
npm install react-native-simple-chatbot
```

## Documentation

### Props

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `ChatBotID` | `PropTypes.string` | Yes |  | Unique ID for the Chat Bot. |
| `questions` | `PropTypes.array` | Yes |  | Array for the Chat Bot questions. |
| `chatHeader` | `PropTypes.string` | Yes |  | Small text prior to asking questions. |
| `userIcon` | `PropTypes.object` | Yes |  | User Icon image source. |
| `cpuIcon` | `PropTypes.object` | Yes |  | CPU Icon image source. |
| `imagesArray` | `PropTypes.object` | Yes |  | Array of React.Component images |
| `ref` | `PropTypes.string` | No |  | Used for referencing in parent react-native js file. |
| `customComponentCallback` | `PropTypes.func` | No |  | Function to add and handle custom components. |
| `onChatEndCallback` | `PropTypes.func` | No |  | Function to handle chat completion. |
| `previousValue` | `PropTypes.object` | No |  | Variable to initialize chat. |

### Steps

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique ID for step |
| `message` | `string` | No | CPU message to the user. |
| `user` | `boolean` | Yes | Boolean to determine wheter user input is required. |
| `multipleOptionsSelect` | `boolean` | No | Boolean to determine if user can select multiple options. |
| `options` | `array` | No | Array to hold options for user to select. |
| `slider` | `array` | No | Array to hold options for the slider. |
| `custom` | `boolean` | No | Boolean to determine if a custom component is used. |
| `customid` | `string` | No | Unique ID for the custom component. |
| `trigger` | `string` | Yes | Unique ID for the Chat Bot to determine next step. |
| `end` | `boolean` | Yes | Boolean to determine end of chat. |

#### Options

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `value` | `string` | Yes | Value for choice. |
| `trigger` | `string` | Yes | Unique ID for the Chat Bot to determine next step. |
| `imageU` | `string` | No | Image id (from images.js) for unselected choice. |
| `imageS` | `string` | No | Image id (from images.js) once user selects choice. |

#### Slider

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `value` | `number` | Yes | Value for choice. |
| `trigger` | `string` | Yes | Unique ID for the Chat Bot to determine next step. |
| `marker` | `string` | Yes | Value saved by ChatBot. |

### Usage

#### Within react-native js file

```
import ChatBot from 'react-native-simple-chatbot';
import images from '.../images/images';

const ChatFile = require('../json/chatbot.json'); // Array from json file for chatbot

customComponents(customID) {
    if (customID === 'CustomID') {
        this.refs.handleCustomReturn('Some Text'); // Method to add Text to Chat Bot
        this.refs.addCustomToChatArray(<CustomComponent />); // Method to add a custom react-native component to Chat Bot
    }
}

<ChatBot
    ref="ChatBot"
    ChatBotID="ChatBot ID"
    questions={ChatFile.chatone} 
    chatHeader={(new Date()).toDateString()}
    customComponentCallback={this.customComponents.bind(this)}
    userIcon={images.UserIcon}
    cpuIcon={images.CPUIcon}
    imagesArray={images}
/>
```

#### Within json file

```
{
    "chatone": [
        {
            "id": "1",
            "message": "Hello. ",
            "user": "false",
            "options": [],
            "slider": [],
            "custom": "false",
            "customid": "",
            "trigger": "2",
            "end": "false"
        },
        {
            "id": "2",
            "message": "",
            "user": "true",
            "options": [],
            "slider": [],
            "custom": "false",
            "customid": "",
            "trigger": "3",
            "end": "false"
        },
        {
            "id": "3",
            "message": "",
            "user": "true",
            "multipleOptionsSelect": "false",
            "options": [
                {"value": "Yes", "trigger": "4","imageU": "", "imageS": ""},
                {"value": "No", "trigger": "4","imageU": "", "imageS": ""}
            ],
            "slider": [],
            "custom": "false",
            "customid": "",
            "trigger": "",
            "end": "false"
        },
        {
            "id": "4",
            "message": "",
            "user": "false",
            "options": [],
            "slider": [],
            "custom": "true",
            "customid": "CustomID",
            "trigger": "5",
            "end": "false"
        },
        {
            "id": "5",
            "message": "",
            "user": "true",
            "options": [],
            "slider": [
                {"value": "1", "trigger": "6", "marker": "None"},
                {"value": "2", "trigger": "6", "marker": "Little"},
                {"value": "3", "trigger": "6", "marker": "Somewhat"},
                {"value": "4", "trigger": "6", "marker": "A bit"},
                {"value": "5", "trigger": "6", "marker": "A lot"}
            ],
            "custom": "false",
            "customid": "",
            "trigger": "",
            "end": "false"
        },
        {
            "id": "6",
            "message": "Thank you.",
            "user": "false",
            "options": [],
            "slider": [],
            "custom": "false",
            "customid": "",
            "trigger": "",
            "end": "true"
        }
    ]
}
```

#### Within images.js

```
const images = {
    // Image for logo
    Logo: require('../images/Logo.png'),
    // Image for ChatBot Icons
    UserIcon: require("../images/user_icon.png"),
    CPUIcon: require("../images/cpu_Logo.png"),
};

export default images;
```

## Built With

* [Node](https://nodejs.org/en/)
* [React](https://reactjs.org/)
* [React Native](https://facebook.github.io/react-native/)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Hamza Varvani** - *Initial work* - [HamzaKV](https://github.com/HamzaKV)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Inspiration - https://github.com/FaridSafi/react-native-gifted-chat
* Inspiration - https://github.com/LucasBassetti/react-simple-chatbot
