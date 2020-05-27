import React, { useEffect } from "react";
import { Text, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Container } from "./styles";

const SignUp: React.FC = () => {
	const navigation = useNavigation();
	const route = useRoute();

	const handleNavigate = () => {
		navigation.goBack();
	};

	const doSomething = () => {};

	return (
		<Container>
			<Text>SignUp</Text>
			<Button title="Do Something" onPress={doSomething} />

			<Button title="Go back" onPress={handleNavigate} />
		</Container>
	);
};

export default SignUp;
