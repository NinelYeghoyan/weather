import styled from 'styled-components';

const StyledCard = styled.div`
    width: 20%;
    height: 80px;
    border: 1px solid ${(p) => p.theme.palette.borderColor};
    background-color: ${(p) => p.theme.palette.white};
    transition: all 0.3s ease-in-out;

    &:hover {
        box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
    }

    .WT-card__date {
        font-size: ${(p) => p.theme.typography.fontSize.p14};
        font-weight: ${(p) => p.theme.typography.weight.black};
        line-height: 18px;
        color: ${(p) => p.theme.palette.gray100};
    }

    .WT-card__temp {
        font-size: ${(p) => p.theme.typography.fontSize.p18};
        font-weight: ${(p) => p.theme.typography.weight.black};
        line-height: 22px;
        color: ${(p) => p.theme.palette.gray200};
    }

    .WT-card__icon {
        width: 32px;
        height: 32px;
    }
`;

export default StyledCard;
