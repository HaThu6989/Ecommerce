import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Image = styled.div`
  width: 192px;
  height: 251px;
  margin-right: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;

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
  margin-right: 1rem;
`;

export const RemoveButton = styled.button`
  margin: 1rem auto;
`;

export const BoldText = styled.span`
  font-weight: bold;
  padding-bottom: 10px;
`;

export const Input = styled.input`
  margin-top: 10px;
  width: 45px;
  height: 25px;
  font-size: 9px;
  margin-left: 10px;
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
    margin: -0.5rem;
  }
`;

export const ProductColumn = styled.div`
  @media only screen and (min-width: 768px) {
    width: calc(50% - 1rem);
    margin: 0.5rem;
  }
`;