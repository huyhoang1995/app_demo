import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ListConversationScreen from '../screen/ListConversationScreen'
import ChatScreen from '../screen/ChatScreen'
const screens = {
    ListConversationScreen: {
        screen: ListConversationScreen
    },
    ChatScreen: {
        screen: ChatScreen
    },
}
const HomeStack = createStackNavigator(screens)
export default createAppContainer(HomeStack)