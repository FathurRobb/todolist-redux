import styled from "styled-components";

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
    const {todo,setTodos} = props;
    return (
        <ContainerListTodo key={todo.id}>
            <h4>{todo.title}</h4>
            <p>{todo.body}</p>
            <ContainerButton>
                <ButtonAction borderColor='red' onClick={() => 
                    setTodos((prev) =>
                        prev.filter((prev) => prev.id !== todo.id)
                    )
                }>Delete</ButtonAction>
                <ButtonAction borderColor='green' onClick={() => 
                    setTodos((prevs) => {
                        return prevs.map((prev) => {
                          if (prev.id === todo.id) {
                            return { ...prev, isDone: !prev.isDone };
                          }
                          return prev;
                        });
                      })
                    }>{todo.isDone ? 'Cancel':'Done'}</ButtonAction>
            </ContainerButton>
        </ContainerListTodo>
    );
};

export default Todos;