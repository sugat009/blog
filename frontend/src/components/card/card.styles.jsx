import styled from "styled-components";

export const CardContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const InnerContainer = styled.div`
    overflow: hidden;
    
    img {
      transition: all 1.5s ease;
    }

    &:hover {
      img {
        transform: scale(1.5);
      }
    }
`;
