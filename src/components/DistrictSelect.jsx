import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DistrictData } from '../data/fake_data';
import Checkbox from '../ui/Checkbox';
import { breakPoint } from '../styles/deviceBreakPoint';

const Container = styled.div`
  max-width: 85%;
  min-height: 20rem;

  grid-row: 3 / 4;

  display: grid;
  grid-template-rows: repeat(4, minmax(min-content, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  gap: 1.5px;

  & > * {
    align-self: center;
  }

  @media ${breakPoint.desktop_sm} {
    max-width: 100%;
  }
  @media ${breakPoint.tablet} {
    grid-column: 1 / -1;
    max-width: 60%;
  }
  @media ${breakPoint.tablet_sm} {
    max-width: 75%;
  }
  @media ${breakPoint.mobile_bg} {
    max-width: 90%;
  }

  @media ${breakPoint.mobile} {
    max-width: 100%;
    max-height: 20rem;
    row-gap: 0.75rem;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    overflow: scroll;
  }
`;

const Empty = styled.span`
  grid-column: 1/ -1;
  display: inline-block;
  padding: 0.8rem 1.6rem;
  font-size: var(--default-font-size-medium);
  font-weight: 500;
  background-color: var(--color-grey-2);
  border-radius: 2px;
`;

function DistrictSelect({ city }) {
  const [check, setCheck] = useState(true);
  const [use, setUse] = useState(DistrictData);

  const updateData = (index) => {
    setUse(() => [
      ...use.slice(0, index),
      { ...use[index], checked: !use[index].checked },
      ...use.slice(index + 1),
    ]);
  };

  function handleCheckAll() {
    setUse(use.map((u) => ({ ...u, checked: true })));
  }

  //checkbox全選 → 「全部選擇」自動勾起；有選項沒選 → 消除「全部選擇」的勾選
  useEffect(
    function () {
      if (use.find((u) => u.checked === false)) setCheck(false);
      else setCheck(true);
    },
    [use]
  );

  //縣市input變換時 → reset checkbox
  useEffect(
    function () {
      setUse(DistrictData);
      setCheck(true);
    },
    [city]
  );

  return (
    <Container>
      {city !== '台北市' && city.length !== 0 && (
        <Empty>目前尚無該縣市的行政區資料！</Empty>
      )}
      {city === '台北市' && (
        <>
          <Checkbox
            variation='first'
            id='all'
            checked={check}
            onChange={handleCheckAll}
          >
            全部選擇
          </Checkbox>
          {use.map((district, index) => (
            <Checkbox
              id={district.name}
              checked={district.checked}
              key={district.name}
              onChange={() => updateData(index)}
            >
              {district.name}
            </Checkbox>
          ))}
        </>
      )}
    </Container>
  );
}

export default DistrictSelect;
