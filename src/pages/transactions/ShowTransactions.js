import styled from "styled-components";

export function showTransactions(transactions, balance) {
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
