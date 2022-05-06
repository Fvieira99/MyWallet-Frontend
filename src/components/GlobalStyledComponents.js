import styled from "styled-components";

export { Form, Input, Button, Logo, Span, Header };

const Form = styled.form`
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 13px;
`;

const Input = styled.input`
    width: 100%;
    height 58px;
    background-color: #FFFFFF;
    border-radius: 5px;
    text-indent: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    border:none;

    ::placeholder{
        color:black;
    }
`;

const Button = styled.button`
	pointer-events: ${(props) => (props.isLoading ? "none" : "auto")};
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 46px;
	background-color: #a328d6;
	border-radius: 5px;
	text-align: center;
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 23px;
	color: #ffffff;
	border: none;
	cursor: pointer;
`;

const Logo = styled.h1`
	font-family: "Saira Stencil One";
	font-style: normal;
	font-weight: 400;
	font-size: 32px;
	color: #ffffff;
`;

const Span = styled.span`
	pointer-events: ${(props) => (props.isLoading ? "none" : "auto")};
	font-style: normal;
	font-weight: 700;
	font-size: 15px;
	line-height: 18px;
	text-decoration-line: underline;
	color: #ffffff;
	cursor: pointer;
`;

const Header = styled.header`
	width: 90%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 10px;

	h1 {
		font-style: normal;
		font-weight: 700;
		font-size: 26px;
		line-height: 31px;
		color: #ffffff;
	}

	#logout {
		font-size: 24px;
		color: #ffffff;
	}
`;
