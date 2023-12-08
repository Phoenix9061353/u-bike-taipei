import { useData } from '../services/useData';
import DataRow from '../ui/DataRow';
import Table from '../ui/Table';

function HomepageTable() {
  const { sites } = useData();
  return (
    <Table>
      <Table.Header>
        <div>縣市</div>
        <div>區域</div>
        <div>站點名稱</div>
        <div>可借車輛</div>
        <div>可還空位</div>
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
