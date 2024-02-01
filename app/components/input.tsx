interface InputProps {
  label: string
  className: string
}

export const Input = ({ className, label }: InputProps) => {
  return (
    <div>
      <label></label>
      <input type="text" />
    </div>
  )
}

