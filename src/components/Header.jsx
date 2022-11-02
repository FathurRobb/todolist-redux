import styled from "styled-components";

const ContainerHeader = styled.div`
    display: flex;
    border: 1px solid #dddddd;
    padding: 20px;
    margin: 10px auto;
    justify-content: space-between;
`;

const Header = () => {
    return (
        <ContainerHeader>
            <div>My Todo List</div>
            <div>React</div>
        </ContainerHeader>
    );
};

export default Header;