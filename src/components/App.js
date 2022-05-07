//Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
//Pages
import Login from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/transactions/Home";
import NewExit from "../pages/NewExit";
import NewEntry from "../pages/NewEntry";
function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Login />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
				<Route path="/transactions" element={<Home />}></Route>
				<Route path="/transaction/entry" element={<NewEntry />}></Route>
				<Route path="/transaction/exit" element={<NewExit />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

const GlobalStyle = createGlobalStyle`
    body{
        box-sizing: border-box;
        font-family: "Raleway"
    }

`;
