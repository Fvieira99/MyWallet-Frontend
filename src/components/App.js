//Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { createGlobalStyle } from "styled-components";
//Pages
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import NewExit from "../pages/NewExit";
import NewEntry from "../pages/NewEntry";
function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Login />}></Route>
				<Route path="/cadastro" element={<SignUp />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/entry" element={<NewEntry />}></Route>
				<Route path="/exit" element={<NewExit />}></Route>
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
