import { useSelector } from "react-redux";
import styled from "styled-components";
import Todos from "./Todos";

const ContainerList = styled.div`
    display: flex;
    gap: 20px;
`;

const List = () => {
    const toDos = useSelector(state => state.toDos.items)
    return (
        <div>
            <h3><b>Working.. 🔥</b></h3>
            <ContainerList>
                { toDos.filter((todo) => !todo.isDone).map((todo) => (
                    <Todos todo={todo} key={todo.id} />
                ))}
            </ContainerList>
            <h3><b>Done..! 🎉</b></h3>
            <ContainerList>
                { toDos.filter((todo) => todo.isDone).map((todo) => (
                    <Todos todo={todo} key={todo.id} />
                ))}
            </ContainerList>
        </div>
    );
};

export default List;