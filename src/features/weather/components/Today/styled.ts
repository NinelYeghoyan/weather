import styled from 'styled-components';

const StyledToday = styled.div`
    .WT-today__name,
    .WT-today__temp {
        font-size: ${(p) => p.theme.typography.fontSize.p24};
        font-weight: ${(p) => p.theme.typography.weight.black};
        line-height: 28px;
        color: ${(p) => p.theme.palette.gray200};
    }

    .WT-today__name {
        color: ${(p) => p.theme.palette.primaryTextColor};
    }

    .WT-today__icon {
        width: 100px;
        height: 100px;
    }

    .WT-today__description {
        font-size: ${(p) => p.theme.typography.fontSize.p14};
        font-weight: ${(p) => p.theme.typography.weight.black};
        line-height: 18px;
        color: ${(p) => p.theme.palette.gray200};
    }
`;

export default StyledToday;
