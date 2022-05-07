// Dependencies
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { MdArrowBackIosNew } from "react-icons/md";
//Utilities
import { postNewExit } from "../Utilities/API";
//Components
import {
	Form,
	Input,
	Button,
	Header,
} from "../components/GlobalStyledComponents";

export default function NewExit() {
	const [newExit, setNewExit] = useState({
		value: "",
		description: "",
	});
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const userInfo = JSON.parse(localStorage.getItem("user"));

	const config = {
		headers: {
			authorization: `Bearer ${userInfo.token}`,
		},
	};

	function handleExit(e) {
		e.preventDefault();
		postNewExit(config, newExit)
			.then((response) => {
				setIsLoading(false);
				navigate("/transactions");
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<Wrapper>
			<Header>
				<h1>Nova saída</h1>
				<MdArrowBackIosNew
					id="back"
					onClick={() => navigate("/transactions")}
				/>
			</Header>
			<Form onSubmit={handleExit}>
				<Input
					onChange={(e) =>
						setNewExit({ ...newExit, value: e.target.value.replace(",", ".") })
					}
					value={newExit.value}
					disabled={isLoading}
					type="text"
					required
					placeholder="Valor"
				></Input>
				<Input
					onChange={(e) =>
						setNewExit({ ...newExit, description: e.target.value })
					}
					value={newExit.description}
					disabled={isLoading}
					type="text"
					required
					placeholder="Descrição"
				></Input>
				<Button isLoading={isLoading} onClick={() => setIsLoading(true)}>
					{isLoading ? (
						<ThreeDots color="#fff" height="40" width="40" />
					) : (
						"Salvar Saída"
					)}
				</Button>
			</Form>
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
	gap: 20px;
`;
