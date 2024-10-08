import { FC, InputHTMLAttributes } from 'react';

import { StyledInput } from './styled';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    type?: 'text' | 'email' | 'password';
    variant?: 'primary' | 'secondary' | 'disable';
    sizeType?: 'small' | 'medium' | 'large';
    className?: string;
};

const Input: FC<InputProps> = ({
    type = 'text',
    variant = 'secondary',
    sizeType = 'small',
    className = '',
    ...rest
}) => (
    <StyledInput className={`${className} WT-input`}>
        <input className={`${variant} ${sizeType} ph-18`} type={type} {...rest} />
    </StyledInput>
);

export default Input;
