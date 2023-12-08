import { useState } from 'react';
import { useData } from '../services/useData';
import styled from 'styled-components';
import { breakPoint } from '../styles/deviceBreakPoint';
import Spinner from '../ui/Spinner';
import Search from '../components/Search';
import DistrictSelect from '../components/DistrictSelect';
import HomepageTable from '../components/HomepageTable';

const HomePageContainer = styled.div`
  width: 100%;
  height: 100%;
  gap: 4rem;

  display: grid;
  grid-template-rows: repeat(3, max-content) 1fr;
  grid-template-columns: repeat(2, 1fr);

  h1 {
    font-size: var(--default-font-size-large);
    font-weight: 700;
    color: var(--brand-color);
    letter-spacing: 4.32px;

    grid-row: 1 / 2;
    grid-column: 1 / span 2;
  }

  img {
    display: inline-block;
    grid-row: 3/ 4;
    grid-column: 2 /-1;
    align-self: end;
  }

  @media ${breakPoint.desktop_sm} {
    img {
      width: 80%;
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

function HomeLayout({ children }) {
  const { isLoading } = useData();
  const [city, setCity] = useState('');

  return (
    <HomePageContainer>
      {isLoading ? (
        <Spinner
          style={{
            gridColumn: '1 / -1',
            gridRow: '1 / -1',
            alignSelf: 'center',
          }}
        />
      ) : (
        <>
          <h1>站點資訊</h1>
          <img src='Frame.png' alt='people with bike' />
          <Search city={city} setCity={setCity} />
          <DistrictSelect city={city} />
          {children}
        </>
      )}
    </HomePageContainer>
  );
}

function HomePage() {
  return (
    <HomeLayout>
      <HomepageTable />
    </HomeLayout>
  );
}

export default HomePage;
