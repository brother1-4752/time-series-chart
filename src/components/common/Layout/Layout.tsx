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
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
