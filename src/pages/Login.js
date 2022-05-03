// Dependencies
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
//Components
import {
	Form,
	Input,
	Button,
	Logo,
	Span,
} from "../components/GlobalStyledComponents";
//Services
import { postLogin } from "../services/API";

export default function Login() {
	const [isLoading, setIsLoading] = useState(false);
	const [loginInfo, setLoginInfo] = useState({
		email: "",
		password: "",
	});

	const navigate = useNavigate();

	function handleLogin(e) {
		e.preventDefault();

		postLogin(loginInfo)
			.then((response) => {
				setIsLoading(false);
				navigate("/home");
			})
			.catch((error) => {
				setIsLoading(false);
				console.log(error);
			});
	}

	return (
		<Wrapper>
			<Logo>MyWallet</Logo>
			<Form onSubmit={handleLogin}>
				<Input
					onChange={(e) =>
						setLoginInfo({ ...loginInfo, email: e.target.value })
					}
					value={loginInfo.email}
					disabled={isLoading}
					type="email"
					required
					placeholder="E-mail"
				></Input>
				<Input
					onChange={(e) =>
						setLoginInfo({ ...loginInfo, password: e.target.value })
					}
					value={loginInfo.password}
					disabled={isLoading}
					type="password"
					required
					placeholder="Senha"
				></Input>
				<Button isLoading={isLoading} onClick={() => setIsLoading(true)}>
					{isLoading ? (
						<ThreeDots color="#fff" height="40" width="40" />
					) : (
						"Entrar"
					)}
				</Button>
			</Form>
			<Link to="/cadastro">
				<Span isLoading={isLoading}>Primeira vez? Cadastre-se!</Span>
			</Link>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: #8c11be;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 30px;
`;
