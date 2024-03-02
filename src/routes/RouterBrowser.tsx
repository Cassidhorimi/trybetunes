import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages";

export function RouterBrowser(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    )
}