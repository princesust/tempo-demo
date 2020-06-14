import { createAppContainer, createSwitchNavigator,  } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../screens/Home';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';

const homeStackNavigator = createStackNavigator(
	{	
		Home: {
			screen: Home,
		},
		Screen1: {
			screen: Screen1,
		},
		Screen2: {
			screen: Screen2,
		},
		Screen3: {
			screen: Screen3,
        },
	},
	{
		headerMode: 'none'
	}
);

const appSwitchNavigator = createSwitchNavigator(
	{
		HomeStack: {
			screen: homeStackNavigator
		},
	},
	{
		headerMode: 'none'
	}
);


const appContainer = createAppContainer(appSwitchNavigator);

export default appContainer;
