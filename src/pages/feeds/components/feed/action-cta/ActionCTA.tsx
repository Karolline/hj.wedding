import { ArrowRight as ArrowRightIcon } from '@components/icon/ArrowRight';
import { CSSProps } from '@utils/styles';
import React, { AllHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { styled } from 'stitches.config';

type Props<ElementType extends keyof JSX.IntrinsicElements = 'div'> =
  HTMLAttributes<AllHTMLAttributes<ElementType>> &
    Omit<React.AllHTMLAttributes<ElementType>, 'as'> & {
      as?: ElementType;
      backgroundColor: string;
      children: ReactNode;
      isNormal: boolean;
    } & CSSProps;

export function ActionCTA<ElementType extends keyof JSX.IntrinsicElements>({
  as,
  backgroundColor,
  children,
  css,
  isNormal,
  ...props
}: Props<ElementType>) {
  const Component = styled(as ?? 'div', {}) as any;

  return (
    <Component
      css={{
        backgroundColor,
        display: 'flex',
        padding: '10px 18px',

        alignItems: 'center',
        justifyContent: 'space-between',
        color: '$white',
        fontSize: 14,
        fontWeight: 'medium',
        mt: '-3px',
        ...css,
      }}
      {...props}
    >
      {children}
      {!isNormal && <ArrowRightIcon /> }
    </Component>
  );
}
