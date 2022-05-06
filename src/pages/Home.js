//Dependencies
import { useState, useEffect } from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
//Services
import { getTransactions } from "../Utilities/API";

//Components
import { Header } from "../components/GlobalStyledComponents";

export default function Home() {
	const [transactions, setTransactions] = useState([]);
	const [balance, setBalance] = useState(0);

	const userInfo = JSON.parse(localStorage.getItem("user"));

	const config = {
		headers: {
			authorization: `Bearer ${userInfo.token}`,
		},
	};

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

	function showTransactions() {
		return (
			<>
				<TransactionsContainer length={transactions.length}>
					{transactions.map((transaction, index) => {
						return (
							<Transaction key={index}>
								<div>
									<Date>{transaction.date}</Date>
									<TransactionName>{transaction.description}</TransactionName>
								</div>
								<Value type={transaction.type}>
									{transaction.value
										.toFixed(2)
										.replace(".", ",")
										.replace("-", "")}
								</Value>
							</Transaction>
						);
					})}
				</TransactionsContainer>
				<Balance balance={balance}>
					<b>SALDO</b>
					<span>{balance.toFixed(2).replace(".", ",").replace("-", "")}</span>
				</Balance>
			</>
		);
	}

	return (
		<Wrapper>
			<Header>
				<h1>Olá, {userInfo.name}</h1>
				<RiLogoutBoxRLine id="logout" />
			</Header>
			<Main length={transactions.length}>
				{transactions.length > 0 ? (
					showTransactions()
				) : (
					<noTransactionsText>
						Não há registros de entrada ou saída
					</noTransactionsText>
				)}
			</Main>
			<Actions>
				<Link to="/transaction/entry" style={{ textDecoration: "none" }}>
					<Action>
						<AiOutlinePlusCircle id="plus-circle" />
						<ActionText>Nova Entrada</ActionText>
					</Action>
				</Link>

				<Link to="/transaction/exit" style={{ textDecoration: "none" }}>
					<Action>
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

const noTransactionsText = styled.span`
	width: 180px;
	color: #868686;
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 23px;
	text-align: center;
`;

const TransactionsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Transaction = styled.div`
	width: 92%;
	display: flex;
	aling-items: center;
	justify-content: space-between;
	margin-top: 20px;

	div {
		display: flex;
		gap: 10px;
	}
`;

const TransactionName = styled.span`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
`;

const Date = styled.span`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: #c6c6c6;
`;

const Value = styled.span`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: ${(props) => (props.type === "exit" ? "#C70000" : "#03AC00")};
`;

const Balance = styled.div`
	width: 92%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;

	span {
		color: ${(props) => {
			if (props.balance > 0) {
				return "#03AC00";
			} else if (props.balance < 0) {
				return "#C70000";
			} else {
				return "#000000";
			}
		}};
	}
`;

const Actions = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-between;
	margin-top: 13px;
`;

const Action = styled.div`
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
