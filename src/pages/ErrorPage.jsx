import styled from 'styled-components';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const ErrorContainer = styled.div`
  margin: 20rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.4rem;

  span {
    display: inline-block;
    font-size: 3.2rem;
    font-weight: 700;
    letter-spacing: 4.32px;
  }
`;

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <ErrorContainer>
      <span>此路徑不存在！（404）</span>
      <Button $primary onClick={() => navigate('/main')}>
        回到首頁
      </Button>
    </ErrorContainer>
  );
}

export default ErrorPage;
