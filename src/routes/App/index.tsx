import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../../pages/App/Home";
import Search from "../../pages/App/Search";
import Orders from "../../pages/App/Orders";
import Account from "../../pages/App/Account";

const Tab = createBottomTabNavigator();

const AppTab: React.FC = () => (
	<Tab.Navigator>
		<Tab.Screen name="Home" component={Home} options={{ title: "Inicio" }} />
		<Tab.Screen
			name="Search"
			component={Search}
			options={{ tabBarVisible: false }}
		/>
		<Tab.Screen name="Orders" component={Orders} />
		<Tab.Screen name="Account" component={Account} />
	</Tab.Navigator>
);

export default AppTab;
