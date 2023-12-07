import styled from 'styled-components';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import { breakPoint } from '../styles/deviceBreakPoint';

const StyledAppLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10rem 1fr;
  position: relative;

  @media ${breakPoint.mobile} {
    grid-template-rows: 7.2rem 1fr;
  }
`;

const Main = styled.main`
  padding: 3.2rem 12.4rem;
  grid-row: 2;
  overflow: auto;

  @media ${breakPoint.tablet_bg} {
    padding: 2.4rem 6rem;
  }

  @media ${breakPoint.mobile} {
    padding: 2.4rem 3.2rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  height: 100%;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
