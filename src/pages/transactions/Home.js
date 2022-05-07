//Dependencies
import { useState, useEffect } from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
//Services
import { getTransactions, logout } from "../../Utilities/API";

//Components
import { Header } from "../../components/GlobalStyledComponents";
import { showTransactions } from "./ShowTransactions";

export default function Home() {
	const [transactions, setTransactions] = useState([]);
	const [balance, setBalance] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const userInfo = JSON.parse(localStorage.getItem("user"));

	const config = {
		headers: {
			authorization: `Bearer ${userInfo.token}`,
		},
	};

	const navigate = useNavigate();

	useEffect(() => {
		getTransactions(config)
			.then((response) => {
				console.log(response.data);
				setTransactions(response.data.transactions);
				setBalance(response.data.balance);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	function handleLogout() {
		logout(config)
			.then((response) => {
				console.log(response.statusText, "Logout feito com sucesso");
				setIsLoading(false);
				localStorage.clear();
				navigate("/");
			})
			.catch((error) => {
				console.log(error);
				setIsLoading(false);
			});
	}

	return (
		<Wrapper>
			<Header>
				<h1>Olá, {userInfo.name}</h1>
				<RiLogoutBoxRLine
					id="logout"
					onClick={() => {
						setIsLoading(true);
						handleLogout();
					}}
				/>
			</Header>
			<Main length={transactions.length}>
				{transactions.length > 0 ? (
					showTransactions(transactions, balance)
				) : (
					<NoTransactionsText>
						Não há registros de entrada ou saída
					</NoTransactionsText>
				)}
			</Main>
			<Actions>
				<Link to="/transaction/entry" style={{ textDecoration: "none" }}>
					<Action isLoading={isLoading}>
						<AiOutlinePlusCircle id="plus-circle" />
						<ActionText>Nova Entrada</ActionText>
					</Action>
				</Link>

				<Link to="/transaction/exit" style={{ textDecoration: "none" }}>
					<Action isLoading={isLoading}>
						<AiOutlineMinusCircle id="minus-circle" />
						<ActionText>Nova Saída</ActionText>
					</Action>
				</Link>
			</Actions>
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
`;

const Main = styled.main`
	width: 90%;
	height: 446px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: ${(props) =>
		props.length === 0 ? "center" : "space-between"};
	background-color: #ffffff;
	border-radius: 5px;
`;

const NoTransactionsText = styled.span`
	width: 180px;
	color: #868686;
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 23px;
	text-align: center;
`;

const Actions = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-between;
	margin-top: 13px;
`;

const Action = styled.div`
	cursor: pointer;
	pointer-events: ${(props) => (props.isLoading ? "none" : "auto")};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 155px;
	height: 114px;
	background-color: #a328d6;
	border-radius: 5px;

	#plus-circle,
	#minus-circle {
		color: #ffffff;
		font-size: 21px;
		margin-top: 9px;
		margin-left: 9px;
	}
`;

const ActionText = styled.span`
	width: 40px;
	font-style: normal;
	font-weight: 700;
	font-size: 17px;
	line-height: 20px;
	color: #ffffff;
	margin-bottom: 9px;
	margin-left: 9px;
	text-decoration: none;
`;
