import styled from 'styled-components';
import { HiBars3, HiMiniXMark } from 'react-icons/hi2';
import Button from '../ui/Button';
import MainNav from '../ui/MainNav';
import { breakPoint } from '../styles/deviceBreakPoint';
import { useState } from 'react';

const HeaderContainer = styled.header`
  width: 100%;
  height: 10rem;
  z-index: 10000;
  padding-left: 12.4rem;
  padding-right: 12.4rem;
  border-bottom: 1px solid var(--color-grey-2);

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  gap: 6rem;

  img {
    width: 9.5rem;
    height: 9.5rem;
  }

  label,
  input {
    display: none;
  }

  @media ${breakPoint.tablet_bg} {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  @media ${breakPoint.tablet} {
    gap: 4rem;
    img {
      width: 6.5rem;
      height: 6.5rem;
    }
  }

  @media ${breakPoint.tablet_sm} {
    button {
      margin-top: auto;
      background-color: var(--color-grey-0);
      color: var(--brand-color);

      &:hover {
        background-color: var(--brand-color);
        color: var(--color-grey-0);
        box-shadow: inset 0 0 0 3px var(--color-grey-0);
      }
    }

    label {
      display: block;
      width: 2.4rem;
      height: 2.4rem;
      margin-left: auto;
      cursor: pointer;

      svg {
        fill: var(--brand-color);
        width: 2.4rem;
        height: 2.4rem;
      }
    }
    input {
      &:checked + div {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  @media ${breakPoint.mobile} {
    padding-left: 3.2rem;
    padding-right: 3.2rem;
    height: 7.2rem;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media ${breakPoint.tablet_sm} {
    position: absolute;
    top: 100%;
    right: 0;
    width: 35%;
    height: calc(100vh - 10rem);
    z-index: 1000;
    background-color: var(--brand-color);
    align-items: baseline;

    padding: 3.2rem;
    flex-direction: column;

    transition: all 0.2s ease-in;
    opacity: 0;
    visibility: hidden;
  }

  @media ${breakPoint.mobile} {
    left: 0;
    width: 100%;
    height: calc(100vh - 7.2rem);
  }
`;

function Header() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <HeaderContainer>
      <img src='logo_180x180.png' alt='web_logo' />
      <label htmlFor='toggleNav' onClick={() => setOpenNav((o) => !o)}>
        {openNav ? <HiMiniXMark /> : <HiBars3 />}
      </label>
      <input type='checkbox' name='toggleNav' id='toggleNav' />

      <NavContainer>
        <MainNav />
        <Button $primary>登入</Button>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;
