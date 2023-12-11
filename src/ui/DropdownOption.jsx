import styled from 'styled-components';

const Option = styled.li`
  list-style: none;
  display: inline-block;
  width: 100%;
  padding: 1.2rem 1.6rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--color-grey-4);
  }

  ${(props) =>
    props.$active &&
    `
    color: var(--color-grey-4);
  `}
`;

function DropdownOption({ optionName, onClick, active }) {
  return (
    <Option onClick={onClick} $active={active}>
      {optionName}
    </Option>
  );
}

export default DropdownOption;
