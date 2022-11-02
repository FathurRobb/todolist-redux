import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/modules/todos";

const ContianerForm = styled.form`
    background-color: #f1f1ef;
    padding: 30px;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
`;

const ContainerFormInput = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;

const LabelInput = styled.label`
    font-size  : 16px;
    font-weight: bold;
`;

const InputForm = styled.input`
    height: 40px;
    width: 240px;
    border: none;
    border-radius: 12px;
    padding: 0px 12px;
`;

const ButtonSubmit = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 10px;
    background-color: teal;
    color: white;
    font-weight: bold;  
    height: 40px;
    width: 140px;
`;

const Form = () => {
    const dispatch = useDispatch();
    // const todos = useSelector(state => state.toDos.items)
    const [form, setForm] = useState({ title: '', body: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(form));
        setForm({ title: '', body: '' });
    }

    return (
        <ContianerForm onSubmit={(e) => handleAddTodo(e)}>
            <ContainerFormInput>
                <LabelInput>Title</LabelInput>
                <InputForm type="text" name="title" value={form.title} onChange={handleChange}/>
                <LabelInput>Body</LabelInput>
                <InputForm type="text" name="body" value={form.body} onChange={handleChange}/>
            </ContainerFormInput>
            <ButtonSubmit>Add</ButtonSubmit>
        </ContianerForm>
    );
};

export default Form;