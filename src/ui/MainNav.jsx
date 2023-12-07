import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakPoint } from '../styles/deviceBreakPoint';

const NavContainer = styled.nav`
  display: block;
`;

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;

  @media ${breakPoint.tablet} {
    gap: 3.2rem;
  }
  @media ${breakPoint.tablet_sm} {
    flex-direction: column;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    font-size: var(--default-font-size-medium);
    font-weight: 500;
    color: var(--brand-color-dark);
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--brand-color);
  }

  @media ${breakPoint.tablet_sm} {
    &:link,
    &:visited {
      display: block;
      width: 100%;
      z-index: 10000;
      color: var(--color-grey-0);
      transition: all 0.3s;
    }

    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
      color: var(--brand-color-dark);
    }
  }
`;

function MainNav() {
  return (
    <NavContainer>
      <NavList>
        <li>
          <StyledNavLink to='/help'>使用說明</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/cash'>收費方式</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/main'>站點資訊</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/news'>最新消息</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/events'>活動專區</StyledNavLink>
        </li>
      </NavList>
    </NavContainer>
  );
}

export default MainNav;
