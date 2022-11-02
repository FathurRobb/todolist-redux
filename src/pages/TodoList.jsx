import { useState } from "react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Form from "../components/Form";
import List from "../components/List";

const TodoList = () => {
    const [todos, setTodos] = useState([
        {
            id: 1, // all id must be unique.
            title: "watch react lectures",
            body: "chapter 1 - chapter 12",
            isDone: false
        },
        {
            id: 2, // all id must be unique.
            title: "eat lunch",
            body: "what should I eat..?",
            isDone: false
        }
    ])
    return (
        <Layout>
            <Header/>
            <Form todos={todos} setTodos={setTodos} />
            <List /> 
        </Layout>
    );
};

export default TodoList;