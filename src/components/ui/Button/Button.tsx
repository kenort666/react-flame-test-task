import clsx from 'clsx';
import styles from './Button.module.scss';

type ButtonVariant = 'add' | 'delete';
interface ButtonProps extends React.ComponentProps<'button'> {
  variant: ButtonVariant;
  children: React.ReactNode;
}

export const Button = ({ children, variant, className, ...props }: ButtonProps) => {
  return (
    <button type='button' className={clsx(styles.button, styles[variant], className)} {...props}>
      {children}
    </button>
  );
};
