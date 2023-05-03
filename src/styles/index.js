import styled from "styled-components";

export const Button = styled.button`
	border: 2px solid #778beb;
	border-radius: 5px;
	cursor: pointer;
	background: none;
	&.large {
		width: 200px;
		height: 45px;
	}
	&.medium {
		width: 150px;
		height: 35px;
	}
	&.small {
		width: 100px;
		height: 25px;
	}
`;

export const NewButton = styled(Button)`
	border: 2px solid #e15f41;
	background-color: ${(props) => props.bgColor};
`;

export const ClickButton = styled(Button)`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	border: 2px solid ${(props) => props.color};
	background-color: ${(props) => props.color};
	//background-image: url("https://papago.naver.com/97ec80a681e94540414daf2fb855ba3b.svg");
	&:after {
		content: ${(props) => props.iconType || "black"};
	}
`;
