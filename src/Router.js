import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "./pages/TodoList";
import TodoDetail from "./pages/TodoDetail";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodoList/>}/>
                <Route path="/detaIl/:id" element={<TodoDetail/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;