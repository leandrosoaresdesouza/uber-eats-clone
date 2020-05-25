import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../../pages/Auth/SignIn";

const Stack = createStackNavigator();

const AuthStack: React.FC = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="SignIn" component={SignIn} />
		</Stack.Navigator>
	);
};

export default AuthStack;
