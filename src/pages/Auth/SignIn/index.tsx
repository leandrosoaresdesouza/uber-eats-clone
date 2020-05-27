import React, { useEffect, useState } from "react";
import { Text, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Container } from "./styles";

interface User {
	name: string;
	age: number;
}

const SignIn: React.FC = () => {
	const navigation = useNavigation();
	const route = useRoute();

	const initialUser: User = {
		name: "Leandro",
		age: 23,
	};

	const [user, setUser] = useState(initialUser);

	const handleNavigate = () => {
		navigation.navigate("SignUp", user);
	};

	useEffect(() => {
		// console.tron.log("navigation", navigation);
		// console.tron.log("route", route);
		console.tron.log("entrou aqui");
	}, []);

	return (
		<Container>
			<Text>SignIn</Text>
			<Text>{user.name}</Text>
			<Button title="Go to SignUp" onPress={handleNavigate} />
		</Container>
	);
};

export default SignIn;
