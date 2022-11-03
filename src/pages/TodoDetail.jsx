import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const ContainerDetail = styled.div`
    border: 2px solid rgb(238, 238, 238);
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
`;

const BoxDetail = styled.div`
    width: 600px;
    height: 400px;
    border: 1px solid rgb(238, 238, 238);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ContentWrap = styled.div`
    padding: 0px 24px;
`;

const DisplayNavigation = styled.div`
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`;

const ButtonHome = styled.button`
    border: 1px solid rgb(221, 221, 221);
    height: 40px;
    width: 120px;
    background-color: white;
    border-radius: 12px;
    cursor: pointer;
    align-items: center;
`;

const TodoDetail = () => {
    const params = useParams();
    const id = params.id
    const navigate = useNavigate();
    const toDos = useSelector(state => state.toDos.items);
    return (
        <ContainerDetail>
            { toDos.filter((todo) => todo.id === +id).map((todo) => (
                <BoxDetail key={todo.id}>
                    <ContentWrap>
                        <DisplayNavigation>
                            <div> ID : {todo.id}</div>
                            <ButtonHome onClick={() => {
                                navigate('/')
                            }}>Go Back</ButtonHome>
                        </DisplayNavigation>
                        <h1>{todo.title}</h1>
                        <div>{todo.body}</div>
                    </ContentWrap>
                </BoxDetail>
            ))}
        </ContainerDetail>    
    );
};

export default TodoDetail;