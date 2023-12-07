import styled, { css } from 'styled-components';
import { breakPoint } from '../styles/deviceBreakPoint';

//Row variations
const variations = {
  odd: css`
    background-color: var(--color-grey-0);
  `,
  even: css`
    background-color: var(--color-grey-1);
  `,
};

const StyledTable = styled.div`
  width: 100%;
  height: 50vh;
  border: 1px solid var(--color-grey-3);
  border-radius: var(--border-radius-large);
  overflow-x: scroll;
  white-space: nowrap;

  @media ${breakPoint.mobile_bg} {
    border-radius: var(--border-radius);
  }
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: 10rem 15rem minmax(20rem, 1fr) repeat(2, 15rem);
  align-items: center;
  column-gap: 2.4rem;
  text-align: center;
  padding: 2.4rem;
  min-width: fit-content;

  @media ${breakPoint.desktop_sm} {
    grid-template-columns: repeat(2, 10rem) minmax(15rem, 1fr) repeat(2, 10rem);
  }
  @media ${breakPoint.tablet_sm} {
    padding: 1.8rem;
    grid-template-columns: repeat(2, 7.5rem) minmax(15rem, 1fr) repeat(
        2,
        7.5rem
      );
  }
  @media ${breakPoint.mobile_bg} {
    padding: 1.6rem;
    grid-template-columns: repeat(2, 5rem) minmax(15rem, 1fr) repeat(2, 7.5rem);
  }
`;

const StyledHeader = styled(CommonRow)`
  background-color: var(--brand-color);
  color: var(--color-grey-0);
  font-size: var(--default-font-size-medium);
  font-weight: 500;
`;

const StyledRow = styled(CommonRow)`
  ${(props) => variations[props.$variation] + ';'}
`;
StyledRow.defaultProps = {
  $variation: 'odd',
};

const StyledBody = styled.section`
  max-height: 50rem;
  overflow-y: scroll;
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

function Table({ children }) {
  return <StyledTable role='table'>{children}</StyledTable>;
}

function Header({ children }) {
  return (
    <StyledHeader role='row' as='header'>
      {children}
    </StyledHeader>
  );
}

function Row({ children, variation }) {
  return (
    <StyledRow $variation={variation ? 'odd' : 'even'} role='row'>
      {children}
    </StyledRow>
  );
}

function Body({ data, render }) {
  if (!data.length) return <Empty>查無資料！</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;

export default Table;
