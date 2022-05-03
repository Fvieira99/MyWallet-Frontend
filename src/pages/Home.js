//Dependencies
import { useState } from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
//Services

export default function Home() {
	return (
		<Wrapper>
			<Header>
				<h1>Olá, Fulano</h1>
				<RiLogoutBoxRLine id="logout" />
			</Header>
			<Main>
				<Transactions>Não há nenhum transação no momento</Transactions>
			</Main>
			<Actions>
				<Action>
					<AiOutlinePlusCircle id="plus-circle" />
					<ActionText>Nova Entrada</ActionText>
				</Action>
				<Action>
					<AiOutlineMinusCircle id="minus-circle" />
					<ActionText>Nova Saída</ActionText>
				</Action>
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

const Header = styled.header`
	width: 90%;
	display: flex;
	justify-content: space-between;
	align-items: center;

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
	width: 90%;
	display: flex;
	flex-direction: column;
	gap: 10px;

	div {
		display: flex;
		gap: 5px;
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
`;
