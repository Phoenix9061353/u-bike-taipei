import styled from 'styled-components';
import { HiCheck } from 'react-icons/hi2';
import { breakPoint } from '../styles/deviceBreakPoint';

const StyledCheckbox = styled.div`
  display: inline-block;
  grid-column: ${(props) => props.$variation === 'first' && `1 / -1`};

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: var(--default-font-size-medium);
  }

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox']:checked + span > svg {
    border: none;
    background-color: var(--brand-color);
    fill: var(--color-grey-0);
  }

  span {
    display: inline-block;
    padding: 1.1rem;
  }
  span > svg {
    display: flex;
    align-items: center;
    height: 2.4rem;
    width: 2.4rem;
    border: 2.5px solid var(--color-grey-3);
    border-radius: 2px;
    background-color: var(--color-grey-0);
    fill: var(--color-grey-0);
    transition: all 0.2s;
  }

  @media ${breakPoint.mobile} {
    label {
      font-size: var(--default-font-size);
    }
  }
`;

function Checkbox({ children, checked = true, onChange, id, variation }) {
  return (
    <StyledCheckbox $variation={variation}>
      <label htmlFor={id}>
        <input type='checkbox' id={id} checked={checked} onChange={onChange} />
        <span>
          <HiCheck />
        </span>
        {children}
      </label>
    </StyledCheckbox>
  );
}

export default Checkbox;
