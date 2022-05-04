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
	Header,
} from "../components/GlobalStyledComponents";

export default function NewEntry() {
	const [newEntry, setNewEntry] = useState({
		value: "",
		description: "",
	});
	const [isLoading, setIsLoading] = useState(false);

	return (
		<Wrapper>
			<Header>
				<h1>Olá, Fulano!</h1>
			</Header>
			<Form>
				<Input
					onChange={(e) => setNewEntry({ ...newEntry, value: e.target.value })}
					value={newEntry.value}
					disabled={isLoading}
					type="text"
					required
					placeholder="Valor"
				></Input>
				<Input
					onChange={(e) =>
						setNewEntry({ ...newEntry, description: e.target.value })
					}
					value={newEntry.description}
					disabled={isLoading}
					type="text"
					required
					placeholder="Descrição"
				></Input>
				<Button isLoading={isLoading} onClick={() => setIsLoading(true)}>
					{isLoading ? (
						<ThreeDots color="#fff" height="40" width="40" />
					) : (
						"Salvar Entrada"
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
