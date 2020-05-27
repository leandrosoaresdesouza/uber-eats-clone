import "react-native-gesture-handler";

import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import "./config/ReactotronConfig";

import Routes from "./routes";

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<StatusBar barStyle="dark-content" backgroundColor="#fff" />
			<Routes />
		</NavigationContainer>
	);
};

export default App;
