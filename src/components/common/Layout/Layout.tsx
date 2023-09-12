import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Layout = ({ children }: Props) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;

const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: rgba(0, 0, 0, 0.85);
  color: whitesmoke; */
`;
