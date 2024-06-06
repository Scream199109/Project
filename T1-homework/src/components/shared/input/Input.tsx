import {classNames} from 'components/shared/lib/classNames/classNames';
import {ChangeEvent, InputHTMLAttributes, forwardRef} from 'react';
import cls from './Input.module.scss';

export type InputType = 'text' | 'number' | 'email' | 'password' | 'tel';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  type: InputType;
  label?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helpertext?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      id,
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

    return (
      <>
        {
          label && <label className={cls.sub_title} htmlFor={label}>{label}</label>
        }
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          className={classNames(cls.input, mods)}
          autoComplete='new-password'
          ref={ref}
          {...rest}
        />
        <p className={cls.warning}> {helpertext && helpertext} </p>
      </>
    );
  });

Input.displayName = 'Input';

export default Input;
