import { FC } from 'react';
import StyledHeader from '@layout/Header/styled.ts';
import Input from '@components/Input';
import Button from '@components/Button';

const Header: FC = () => {
    return (
        <StyledHeader className="WT-header flex-center">
            <div className="flex align-center">
                <Input />
                <Button className="ml-4">Search City</Button>
            </div>
        </StyledHeader>
    );
};

export default Header;
