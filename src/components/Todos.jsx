import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteItem, updateStatusItem } from "../redux/modules/todos";

const ContainerListTodo = styled.div`
    width: 270px;
    border: 4px solid teal;
    min-height: 150px;
    border-radius: 12px;
    padding: 12px 24px 24px;
`;

const ButtonAction = styled.button`
    border: 1px solid ${props => props.borderColor};
    height: 40px;
    width: 120px;
    background-color: white;
    border-radius: 12px;
    cursor: pointer;
`;

const ContainerButton = styled.div`
    display  : flex;
    gap: 20px;
`;

const Todos = (props) => {
    const {todo} = props;
    const dispatch = useDispatch();
    return (
        <ContainerListTodo key={todo.id}>
            <h4>{todo.title}</h4>
            <p>{todo.body}</p>
            <ContainerButton>
                <ButtonAction borderColor='red' onClick={() => 
                    dispatch(deleteItem(todo.id))
                }>Delete</ButtonAction>
                <ButtonAction borderColor='green' onClick={() => 
                    dispatch(updateStatusItem(todo.id))
                    }>{todo.isDone ? 'Cancel':'Done'}</ButtonAction>
            </ContainerButton>
        </ContainerListTodo>
    );
};

export default Todos;