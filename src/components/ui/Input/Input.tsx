interface InputProps extends React.ComponentProps<'input'> {
  children: React.ReactNode
}

export const Input = ({ ...props }: InputProps) => {
  return (
    <input {...props} />
  );
};
