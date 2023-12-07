import { useState } from 'react';
import { useData } from '../services/useData';
import styled from 'styled-components';
import Table from '../ui/Table';
import DataRow from '../ui/DataRow';
import Spinner from '../ui/Spinner';
import Search from '../components/Search';
import DistrictSelect from '../components/DistrictSelect';
import { breakPoint } from '../styles/deviceBreakPoint';

const HomePageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  h1 {
    font-size: var(--default-font-size-large);
    font-weight: 700;
    color: var(--brand-color);
    letter-spacing: 4.32px;
  }

  img {
    display: inline-block;
    position: absolute;
    top: 35vh;
    right: 15vw;
  }

  @media ${breakPoint.desktop_sm} {
    img {
      width: 30%;
      top: 40vh;
    }
  }
  @media ${breakPoint.tablet} {
    img {
      display: none;
    }
  }

  @media ${breakPoint.mobile} {
    gap: 2rem;
    h1 {
      font-size: var(--default-font-size-medium);
      letter-spacing: 3.24px;
    }
  }
`;

function HomePage() {
  const { isLoading, sites } = useData();
  const [city, setCity] = useState('');

  return (
    <HomePageContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h1>站點資訊</h1>
          <img src='Frame.png' alt='people with bike' />
          <Search city={city} setCity={setCity} />
          <DistrictSelect city={city} />
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
        </>
      )}
    </HomePageContainer>
  );
}

export default HomePage;
