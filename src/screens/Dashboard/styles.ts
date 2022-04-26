import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

    justify-content: center;
    align-items: center;

`;

export const Title = styled.Text`
    font-size: 50px;
    color: ${({ theme }) => theme.COLORS.PRIORITY};

    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
`;

