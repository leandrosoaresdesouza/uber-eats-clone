import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../../pages/Auth/SignIn";
import SignUp from "../../pages/Auth/SignUp";
import { Text } from "react-native";

const Stack = createStackNavigator();

const AuthStack: React.FC = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="SignIn"
				component={SignIn}
				options={{
					headerTitle: "x",
					headerTitleAlign: "center",
					headerLeft: () => <Text>A</Text>,
					headerRight: () => <Text>B</Text>,
					headerTintColor: "orangex",
				}}
			/>
			<Stack.Screen name="SignUp" component={SignUp} />
		</Stack.Navigator>
	);
};

export default AuthStack;
