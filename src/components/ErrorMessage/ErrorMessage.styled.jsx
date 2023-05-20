import styled from 'styled-components';

export const ErrorText = styled.p`
  display: inline-block;
  margin-top: 8px;
  padding: 8px;
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondaryText};
  background-color: #fabdb5;
  border: 1px solid #e34542;
  border-radius: 8px;
`;
