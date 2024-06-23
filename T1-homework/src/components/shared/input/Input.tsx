import {classNames} from 'components/shared/lib/classNames/classNames';
import {InputHTMLAttributes, forwardRef} from 'react';
import cls from './Input.module.scss';

export type InputType = 'text' | 'number' | 'email' | 'password' | 'tel';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly' | 'size'
>;

export interface InputProps extends HTMLInputProps {
  id?: string;
  value?: string | number;
  type: InputType;
  label?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  error?: boolean;
  helpertext?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      id,
      value,
      type,
      label,
      name,
      placeholder,
      disabled,
      onChange,
      error,
      helpertext,
      ...rest
    } = props;

    const mods: Record<string, boolean> = {
      [cls.incorrect]: !!error
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <>
        {
          label && <label className={cls.sub_title} htmlFor={label}>{label}</label>
        }
        <input
          type={type}
          id={id}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChangeHandler}
          disabled={disabled}
          className={classNames(cls.input, mods)}
          autoComplete='new-password'
          ref={ref}
          {...rest}
        />
        {helpertext && <p className={cls.warning}> {helpertext} </p>}
      </>
    );
  });

Input.displayName = 'Input';

export default Input;
