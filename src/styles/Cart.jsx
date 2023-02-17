import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 49px 21px 0px;
`;

export const Image = styled.div`
  width: 217px;
  height: 215px;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-right: 17px;
`;
export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const ProductCard = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

export const Content = styled.div`
  flex: 1;
`;

export const CategoryButton = styled.button`
  font-size: 0.8rem;
  padding-top: 0%;
  margin-right: 0.1rem;
`;

export const RemoveButton = styled.button`
  margin: 1rem auto;
  margin: 10px 10px 0px 0px ;
  padding: 10px 20px;
  border: none;
  background-color: #f5c123;
  border-radius: 5px;
  cursor: pointer;
`;

export const GeneralInfo = styled.div`
  border-bottom: 1px solid #1a1a1a;
`;

export const GeneralInfoChild = styled.div`
  margin: 20px;
`;

export const ProductRow = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: 1.5rem;
  }
`;

export const ProductColumn = styled.div`
  @media only screen and (min-width: 768px) {
    width: calc(50% - 1rem);
    margin: 0.5rem;
  }
`;