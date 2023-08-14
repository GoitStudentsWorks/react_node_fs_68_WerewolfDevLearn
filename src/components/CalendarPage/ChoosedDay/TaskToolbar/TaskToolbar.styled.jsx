import styled from 'styled-components';
import { Menu, MenuItem } from '@szhsin/react-menu';

export const TaskToolbarStyles = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
`;

export const TaskToolbarBtn = styled.button`
  width: 14px;
  height: 14px;

  color: ${({ theme }) => theme.colors.textAndIconTodo};
`;

export const MenuStyles = styled(Menu)`
  .relocate-menu {
    position: fixed;
    right: -10px;

    width: 147px;

    padding: 20px 24px;
    border-radius: 8px;
    z-index: 2;

    display: flex;
    flex-direction: column;
    gap: 18px;

    background: ${({ theme }) => theme.colors.backgroundModalTodo};
    box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  }
`;

export const MenuItemStyles = styled(MenuItem)``;

export const RelocateButton = styled.button`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;
