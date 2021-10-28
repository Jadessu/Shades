import styled from "styled-components";
import { mobile } from "../../../../responsive";
import { Link } from "react-router-dom";
const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease 0s;
  ${mobile({ height: "20vh" })}
  -webkit-filter: blur(3px);
  filter: blur(3px);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
`;
const CategoryContainer = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  transition: transform 0.3s ease 0s;
  &:hover {
    ${CategoryImage} {
      -webkit-filter: blur(0);
      filter: blur(0);
    }
  }
`;



const CategoryInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CategoryTitle = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const CategoryButton = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: white;
  cursor: pointer;
  font-weight: 600;
  transition: all 1.5s cubic-bezier(0.23, 1, 0.32, 1);
  &:hover {
    background-color: transparent;
    border: 1px solid black;
  }
`;

const CategoryCard = ({ item }) => {
  return (
    <CategoryContainer>
      <CategoryImage src={item.img} />
      <CategoryInfo>
        <CategoryTitle>{item.title}</CategoryTitle>
        <CategoryButton >
          <Link  to={item.path}>SHOP NOW</Link>
          </CategoryButton>
      </CategoryInfo>
    </CategoryContainer>
  );
};

export default CategoryCard;
