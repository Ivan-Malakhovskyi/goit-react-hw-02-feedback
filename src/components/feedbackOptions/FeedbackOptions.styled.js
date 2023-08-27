import styled from 'styled-components'

export const ItemButton = styled.button`
  padding: 8px 16px;
  border-radius: 36px;
  margin-left: 10px;
  border: 2px solid ${({theme: {colors}}) => colors.buttonDeleteColor};
  background-color: ${({theme: {colors}}) => colors.white};
  cursor: pointer;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    
  &:hover, &:focus {
    background-color: ${({theme: {colors}}) => colors.buttonDeleteColor};
  }
  `

