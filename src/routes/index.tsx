import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStack from "./Auth";
import AppTab from "./App";

const Routes: React.FC = () => {
	const Stack = createStackNavigator();
	const isSigned = false;

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{isSigned ? (
				<Stack.Screen name="AppTab" component={AppTab} />
			) : (
				<Stack.Screen name="AuthStack" component={AuthStack} />
			)}
		</Stack.Navigator>
	);
};

export default Routes;
