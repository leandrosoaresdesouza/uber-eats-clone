import React from "react";
import { ActivityIndicator } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import PastOrders from "../../../pages/App/PastOrders";
import UpcomingOrders from "../../../pages/App/UpcomingOrders";

const TopTabOrders: React.FC = () => {
	const TopTab = createMaterialTopTabNavigator();

	return (
		<TopTab.Navigator
			initialRouteName="PastOrders"
			lazy={true}
			tabBarOptions={{
				activeTintColor: "#000",
				inactiveTintColor: "#b8b8b8",
				indicatorStyle: { backgroundColor: "#000" },
				labelStyle: { textTransform: "none" },
			}}
		>
			<TopTab.Screen
				name="PastOrders"
				component={PastOrders}
				options={{ title: "Past Orders" }}
			/>
			<TopTab.Screen
				name="UpcomingOrders"
				component={UpcomingOrders}
				options={{ title: "Upcoming" }}
			/>
		</TopTab.Navigator>
	);
};

export default TopTabOrders;
