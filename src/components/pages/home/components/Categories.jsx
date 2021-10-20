import styled from "styled-components";
import { categories } from "../../../../data";
import { mobile } from "../../../../responsive";
import CategoryCard from "./CategoryCard";


const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryCard item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
