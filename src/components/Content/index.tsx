import React from "react";

import { Container, Title, Subtitle } from "./styles";

interface ContentProps {
	title: string;
	subtitle?: string;
}

const Content: React.FC<ContentProps> = ({ title, subtitle, children }) => {
	return (
		<Container>
			<Title>{title}</Title>
			{subtitle && <Subtitle>{subtitle}</Subtitle>}
			{children}
		</Container>
	);
};

export default Content;
