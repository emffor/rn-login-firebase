import styled from 'styled-components/native';

type ContainerProps = {
  showLogoutButton: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  flex-direction: ${({ showLogoutButton }) => showLogoutButton ? 'row' : 'column'};
  align-items: center;
  justify-content: ${({ showLogoutButton }) => showLogoutButton ? 'center' : 'center'};
`;

export const Title = styled.Text`
  font-size: 30px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-Family: ${({ theme }) => theme.FONTS.MEDIUM};

  margin-bottom: 10px;
  
`;
