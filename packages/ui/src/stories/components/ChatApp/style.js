import styled, { css } from "styled-components";
const StyledChatApp = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`;
const Nav = styled.nav`
  flex-shrink: 0; //不允许侧边栏压缩
  position: relative;
  z-index: 100;
`;
const SideBar = styled.aside`
  box-sizing: border-box;
  max-width: 448px;
  min-width: 344px;
  height: 100vh;
  flex: 1;
  background: ${({ theme }) => theme.grediantGray};

  position: relative;
  z-index: 50;

  & > div {
    will-change: transform, opacity;
    position: absolute;
    width: 100%;
  }
`;
const Content = styled.main`
  box-sizing: border-box;
  flex: 2;
  position: relative;
`;
//滑动抽屉
const Drawer = styled.div`
  max-width: 310px;
  width: 0;
  transform: translateX(200px);
  transition: transform 0.4s;
  will-change: width, transform;
  ${({ show }) =>
    show &&
    css`
      width: initial;
      transform: translateX(0px);
    `}
`;
export default StyledChatApp;
export { Nav, SideBar, Content, Drawer };
