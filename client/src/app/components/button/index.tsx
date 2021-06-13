import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../responsive';

interface IButtonProps {
	theme?: 'filled' | 'outlined';
	text: string;
	className?: string;
}

const BaseButton = styled.button`

	${tw`
    pl-3
    pr-3
    pt-3
    pb-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
  `};
`;

const OutlinedButton = styled(BaseButton)`
	${tw`
    bg-green-600
    hover:bg-transparent
    hover:text-green-600
    hover:border-green-600
  `};
`;

const FilledButton = styled(BaseButton)`
	${tw`
    border-green-600
    text-green-600
    bg-transparent
    hover:bg-green-600
    hover:text-white
    hover:border-transparent
  `};
`;

export function Button(props: IButtonProps) {
	const { theme, text, className } = props;

	if (theme === 'filled')
		return <FilledButton className={className}>{text}</FilledButton>;
	else return <OutlinedButton className={className}>{text}</OutlinedButton>;
}
