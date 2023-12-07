import styled, { css } from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-button);
  line-height: 2rem;
  padding: 1rem 2.4rem;
  transition: all 0.2s;
  font-size: var(--default-font-size);
  color: var(--brand-color);
  background-color: var(--color-grey-0);

  ${(props) =>
    props.$primary &&
    css`
      font-size: var(--default-font-size-medium);
      color: var(--color-grey-0);
      background-color: var(--brand-color);

      &:hover {
        background-color: var(--brand-color-dark);
      }
    `}
`;

export default Button;
