import { useId } from 'react';

import styles from './Input.module.scss';

interface InputProps extends React.ComponentProps<'input'> {
  label?: string;
  // children: React.ReactNode;
}

export const Input = ({ label, ...props }: InputProps) => {
  const id = useId();

  return (
    <div className={styles.container}>
      {label && <label htmlFor={id}>{label}</label>}
      <input {...props} id={id} />
    </div>
  );
};
