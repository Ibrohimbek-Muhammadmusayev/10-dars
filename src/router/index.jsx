import { Route, Routes } from "react-router-dom"
import App from "../App"
import Logup from "../pages/logup"
import Login from "../pages/login"

export const Routers = ()=> {
    return (
        <>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/logup" element={<Logup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1>404 page not found</h1>} />
        </Routes>
        </>
    )
}

export default Routers