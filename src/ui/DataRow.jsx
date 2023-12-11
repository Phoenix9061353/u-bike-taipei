import styled from 'styled-components';
import Table from './Table';

const Number = styled.span`
  font-size: var(--default-font-size-medium);
  font-weight: 700;
  color: var(--brand-color);
`;

function DataRow({ data: { sarea, sna, sbi, bemp }, variation }) {
  return (
    <Table.Row variation={variation}>
      <span>台北市</span>
      <span>{sarea}</span>
      <span>{sna.split('_')[1]}</span>
      <Number>{sbi}</Number>
      <Number>{bemp}</Number>
    </Table.Row>
  );
}

export default DataRow;
