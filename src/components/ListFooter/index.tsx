import React from "react";

import AntDesign from "react-native-vector-icons/AntDesign";

import { Container, Content, Circle, SeeMoreText } from "./styles";

const ListFooter: React.FC = () => {
	return (
		<Container>
			<Content>
				<Circle>
					<AntDesign name="arrowright" size={22} color="#529a21" />
				</Circle>
				<SeeMoreText>See More</SeeMoreText>
			</Content>
		</Container>
	);
};

export default ListFooter;
