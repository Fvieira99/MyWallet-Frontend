//Dependencies
import { useState, useEffect } from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
//Services
//Components
import { Header } from "../components/GlobalStyledComponents";

const transactions = [
	{ date: "21/10", name: "Empréstimo", type: "exit", value: "2900,00" },
	{ date: "21/10", name: "Empréstimo", type: "exit", value: "2900,00" },
];

export default function Home() {
	function showTransactions() {
		return (
			<Transactions length={transactions.length}>
				{transactions.map((transaction, index) => {
					return (
						<Transaction>
							<div>
								<Date>{transaction.date}</Date>
								<TransactionName>{transaction.name}</TransactionName>
							</div>
							<Value>{transaction.value}</Value>
						</Transaction>
					);
				})}
			</Transactions>
		);
	}

	return (
		<Wrapper>
			<Header>
				<h1>Olá, Fulano</h1>
				<RiLogoutBoxRLine id="logout" />
			</Header>
			<Main>
				{transactions.length > 0
					? showTransactions()
					: "Não há transações até o momento"}
			</Main>
			<Actions>
				<Link to="/entry" style={{ textDecoration: "none" }}>
					<Action>
						<AiOutlinePlusCircle id="plus-circle" />
						<ActionText>Nova Entrada</ActionText>
					</Action>
				</Link>

				<Link to="/exit" style={{ textDecoration: "none" }}>
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
	align-items: space-between;
	background-color: #ffffff;
	border-radius: 5px;
`;

const Transactions = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	div {
		display: flex;
		gap: 10px;
	}
`;

const Transaction = styled.div`
	width: 95%;
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
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
`;

const Balance = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-between;
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
