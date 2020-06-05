import "react-native-gesture-handler";

import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./routes";
import "./config/ReactotronConfig";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<NavigationContainer>
					<StatusBar barStyle="dark-content" backgroundColor="#fff" />
					<Routes />
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
};

export default App;
