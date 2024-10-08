import styled from 'styled-components';

const StyledList = styled.ul`
    height: 320px;
    overflow: auto;

    > li {
        height: 40px;
        font-size: ${(p) => p.theme.typography.fontSize.p14};
        font-weight: ${(p) => p.theme.typography.weight.black};
        line-height: 18px;

        border-bottom: 1px solid ${(p) => p.theme.palette.borderColor};
        color: ${(p) => p.theme.palette.gray200};
    }

    .WT-list__icon {
        width: 28px;
        height: 28px;
    }
`;

export default StyledList;
