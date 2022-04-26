import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

type ContainerProps = {
  showLogoutButton: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.COLORS.BLUE};

  flex-direction: ${({ showLogoutButton }) => showLogoutButton ? 'row' : 'column'};
  align-items: center;
  justify-content: ${({ showLogoutButton }) => showLogoutButton ? 'space-around' : 'center'};
`;

export const Title = styled.Text`
  font-size: 60px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-Family: ${({ theme }) => theme.FONTS.MEDIUM};

  margin-bottom: 10px;
  
`;