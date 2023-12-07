import styled from 'styled-components';
import Table from './Table';

const Number = styled.div`
  font-size: var(--default-font-size-medium);
  font-weight: 700;
  color: var(--brand-color);
`;

function DataRow({ data: { sarea, sna, sbi, bemp }, variation }) {
  return (
    <Table.Row variation={variation}>
      <div>台北市</div>
      <div>{sarea}</div>
      <div>{sna.split('_')[1]}</div>
      <Number>{sbi}</Number>
      <Number>{bemp}</Number>
    </Table.Row>
  );
}

export default DataRow;
