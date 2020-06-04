import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Octicons from "react-native-vector-icons/Octicons";

import Home from "../../pages/App/Home";
import Search from "../../pages/App/Search";
import Account from "../../pages/App/Account";
import TopTabOrders from "./TopTabOrders";

interface IconsGroup {
	[key: string]: Icon;
}

interface Icon {
	lib: any;
	name: string;
}

const icons: IconsGroup = {
	Home: {
		lib: Entypo,
		name: "home",
	},
	Search: {
		lib: FontAwesome,
		name: "search",
	},
	Orders: {
		lib: Octicons,
		name: "list-unordered",
	},
	Account: {
		lib: FontAwesome,
		name: "user",
	},
};

const AppTab: React.FC = () => {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size }) => {
					const { lib: Icon, name } = icons[route.name];
					return <Icon name={name} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: "#000",
				inactiveTintColor: "#b8b8b8",
			}}
		>
			<Tab.Screen name="Home" component={Home} options={{ title: "Home" }} />
			<Tab.Screen
				name="Search"
				component={Search}
				options={{ title: "Search" }}
			/>
			<Tab.Screen
				name="Orders"
				component={TopTabOrders}
				options={{ title: "Orders" }}
			/>
			<Tab.Screen
				name="Account"
				component={Account}
				options={{ title: "Account" }}
			/>
		</Tab.Navigator>
	);
};

export default AppTab;
