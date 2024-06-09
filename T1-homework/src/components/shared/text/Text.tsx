import {memo} from 'react';
import {classNames} from '../lib/classNames/classNames';
import cls from './Text.module.scss';

export type TextVariant = 'dark' | 'grey';

export type TextAlign = 'right' | 'left' | 'center';

type BaseSize = 's' | 'm' | 'l';

export type Size = 'xs' | 'xl' | 'xxl' | 'big';

export type TextSize = BaseSize | Size;

export type TextWeight = 'normal' | 'semi_bold' | 'bold';

interface TextProps {
  className?: string;
  title?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
  weight?: TextWeight;
  children?: React.ReactNode;
}

const mapSizeToClass: Record<TextSize, string> = {
  xs: cls.size_xs,
  s: cls.size_s,
  m: cls.size_m,
  l: cls.size_l,
  xl: cls.size_xl,
  xxl: cls.size_xxl,
  big: cls.size_big,
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    variant = '',
    align = 'left',
    size = 's',
    weight = 'normal',
    children,
  } = props;

  const sizeClass = mapSizeToClass[size];

  const additionalClasses = [className, cls[variant], cls[align], cls[weight], sizeClass];

  return (
    <p className={classNames(
      cls.Text,
      {},
      additionalClasses,
    )}>  
      {children}
    </p>
  );
});
