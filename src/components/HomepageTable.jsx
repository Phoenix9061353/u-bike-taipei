import { useData } from '../services/useData';
import DataRow from '../ui/DataRow';
import Table from '../ui/Table';

function HomepageTable() {
  const { sites } = useData();
  return (
    <Table>
      <Table.Header>
        <span>縣市</span>
        <span>區域</span>
        <span>站點名稱</span>
        <span>可借車輛</span>
        <span>可還空位</span>
      </Table.Header>
      <Table.Body
        data={sites}
        render={(site, i) => (
          <DataRow key={site.sno} data={site} variation={i % 2 === 0} />
        )}
      />
    </Table>
  );
}

export default HomepageTable;
