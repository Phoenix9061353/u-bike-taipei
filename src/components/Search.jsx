import { useState } from 'react';
import styled, { css } from 'styled-components';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';
import { HiMagnifyingGlass, HiOutlineXCircle } from 'react-icons/hi2';
import { CityData as cities } from '../data/fake_data';
import DropdownOption from '../ui/DropdownOption';
import { breakPoint } from '../styles/deviceBreakPoint';

const SearchForm = styled.form`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  letter-spacing: 0.1px;

  @media ${breakPoint.desktop_sm} {
    width: 50%;
  }
  @media ${breakPoint.tablet} {
    width: 60%;
  }
  @media ${breakPoint.tablet_sm} {
    width: 75%;
  }
  @media ${breakPoint.mobile_bg} {
    width: 90%;
  }

  @media ${breakPoint.mobile} {
    width: 100%;
    gap: 1.5rem;
    z-index: 50;

    & > div {
      width: 100%;
    }
  }
`;

const Container = styled.div`
  position: relative;
`;

const CityContainer = styled(Container)`
  width: 35%;
`;
const SiteContainer = styled(Container)`
  width: 60%;
`;

const SearchBar = styled.input.attrs((props) => ({
  type: 'text',
  $textColor: props.$textColor || 'var(--brand-color)',
}))`
  background-color: var(--color-grey-1);
  padding: 0.8rem 1.6rem;
  transition: box-shadow 0.2s;
  border: none;
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;

  font-family: inherit;
  font-size: var(--default-font-size-medium);
  font-weight: 500;
  line-height: 2rem;

  color: ${(props) => props.$textColor};
  margin-right: -6.4rem;
  width: 100%;

  &::-webkit-input-placeholder,
  &::-moz-placeholder {
    color: var(--color-grey-3);
  }

  box-shadow: ${(props) => props.$active && css`0 0 0 7px var(--brand-color)`};

  & ~ #toggle {
    & > svg {
      fill: ${(props) => props.$active && props.$textColor};
    }
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 7px var(--brand-color);
  }
`;

const SearchButton = styled.button`
  border: none;
  background-color: var(--color-grey-1);
  height: 1.8rem;
  width: 1.8rem;
  position: absolute;
  top: 50%;
  right: 1.6rem;
  transform: translateY(-50%);

  &:focus {
    outline: none;
  }

  & > svg {
    width: 1.8rem;
    height: 1.8rem;
    fill: var(--color-grey-3);
  }
`;

const DeleteButton = styled(SearchButton)`
  right: 5.2rem;
  & > svg {
    fill: var(--color-grey-4);
    stroke: var(--color-grey-1);
  }
`;

const Dropdown = styled.ul`
  position: absolute;
  z-index: 100;
  top: 150%;
  left: 0%;
  background-color: var(--color-grey-1);
  border-radius: var(--border-radius);

  font-family: inherit;
  font-size: var(--default-font-size-medium);
  font-weight: 400;
  line-height: 2rem;

  color: var(--color-grey-3);

  width: 100%;
  max-height: 23rem;
  overflow-y: scroll;

  transition: visibility 0.1s;
  opacity: ${(props) => (props.$active ? 1 : 0)};
  visibility: ${(props) => (props.$active ? 'visible' : 'hidden')};
`;

let filterCities;

function Search({ city, setCity }) {
  const [openCity, setOpenCity] = useState(false);

  //依輸入篩選縣市
  if (city.length === 0) filterCities = cities;
  if (city.length !== 0) filterCities = cities.filter((c) => c.includes(city));

  return (
    <SearchForm action='#'>
      <CityContainer>
        <SearchBar
          name='city'
          placeholder='選擇縣市'
          value={city}
          $active={openCity}
          $textColor='var(--color-grey-4)'
          onFocus={() => setOpenCity(true)}
          onBlur={() => setOpenCity(false)}
          onChange={(e) => setCity(() => e.target.value)}
          autoComplete='off'
        />
        {city.length !== 0 && (
          <DeleteButton onClick={() => setCity('')}>
            <HiOutlineXCircle />
          </DeleteButton>
        )}
        <SearchButton
          onClick={(e) => {
            e.preventDefault();
            setOpenCity((o) => !o);
          }}
          onBlur={(e) => {
            e.preventDefault();
            setOpenCity(false);
          }}
          id='toggle'
        >
          {openCity ? <BsCaretUpFill /> : <BsCaretDownFill />}
        </SearchButton>
        <Dropdown $active={openCity} id='city-dropdown'>
          {filterCities?.map((c) => (
            <DropdownOption
              optionName={c}
              key={c}
              onClick={() => setCity(() => c)}
              active={c === city}
            />
          ))}
        </Dropdown>
      </CityContainer>
      <SiteContainer>
        <SearchBar name='site' type='text' placeholder='搜尋站點' />
        <SearchButton
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <HiMagnifyingGlass />
        </SearchButton>
        <Dropdown id='site-dropdown'></Dropdown>
      </SiteContainer>
    </SearchForm>
  );
}

export default Search;
