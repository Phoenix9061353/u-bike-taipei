import styled from 'styled-components';

const OptionContainer = styled.li`
  list-style: none;
  display: inline-block;
  width: 100%;
  padding: 1.2rem 1.6rem;
  cursor: pointer;
`;

const OptionInput = styled.input.attrs((props) => ({
  type: 'radio',
  name: props.$variation,
}))`
  display: none;
`;

const OptionLabel = styled.label`
  display: block;
  width: 100%;

  transition: color 0.2s;
  &:hover {
    cursor: pointer;
    color: var(--color-grey-4);
  }

  ${(props) =>
    props.$active &&
    `
    color: var(--color-grey-4);
  `}
`;

function DropdownOption({
  optionType = 'city-option',
  optionName,
  onClick,
  active,
}) {
  return (
    <OptionContainer>
      <OptionInput $variation={optionType} id={optionName} />
      <OptionLabel htmlFor={optionName} onClick={onClick} $active={active}>
        {optionName}
      </OptionLabel>
    </OptionContainer>
  );
}

export default DropdownOption;
