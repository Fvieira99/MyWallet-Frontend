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
import { postSignUp } from "../services/API";

export default function SignUp() {
	const [isLoading, setIsLoading] = useState(false);
	const [signUpInfo, setSignUpInfo] = useState({
		name: "",
		email: "",
		password: "",
		confirmation: "",
	});

	const navigate = useNavigate();

	function handleSignUp(e) {
		e.preventDefault();

		postSignUp(signUpInfo)
			.then((response) => {
				setIsLoading(false);
				navigate("/home");
			})
			.catch((error) => {
				setIsLoading(true);
				console.log(error);
			});
	}

	return (
		<Wrapper>
			<Logo>MyWallet</Logo>
			<Form onSubmit={handleSignUp}>
				<Input
					onChange={(e) =>
						setSignUpInfo({ ...signUpInfo, name: e.target.value })
					}
					value={signUpInfo.name}
					disabled={isLoading}
					type="text"
					required
					placeholder="Nome"
				></Input>
				<Input
					onChange={(e) =>
						setSignUpInfo({ ...signUpInfo, email: e.target.value })
					}
					value={signUpInfo.email}
					disabled={isLoading}
					type="email"
					required
					placeholder="E-mail"
				></Input>
				<Input
					onChange={(e) =>
						setSignUpInfo({ ...signUpInfo, password: e.target.value })
					}
					value={signUpInfo.password}
					disabled={isLoading}
					type="password"
					required
					placeholder="Senha"
				></Input>
				<Input
					onChange={(e) =>
						setSignUpInfo({ ...signUpInfo, confirmation: e.target.value })
					}
					value={signUpInfo.confirmation}
					disabled={isLoading}
					type="password"
					required
					placeholder="Confirme sua senha"
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
