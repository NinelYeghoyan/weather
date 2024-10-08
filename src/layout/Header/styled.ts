import styled from 'styled-components';

const StyledHeader = styled.header`
    height: 60px;
    background-color: ${(p) => p.theme.palette.primary};
    color: ${(p) => p.theme.palette.white};
    position: sticky;
    top: 0;
`;

export default StyledHeader;
