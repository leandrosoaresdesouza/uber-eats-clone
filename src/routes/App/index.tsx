import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../../pages/App/Home";

const Tab = createBottomTabNavigator();

const AppTab: React.FC = () => (
	<Tab.Navigator>
		<Tab.Screen name="Home" component={Home} />
	</Tab.Navigator>
);

export default AppTab;
