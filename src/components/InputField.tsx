import { FieldError } from "react-hook-form";

type InputFieldProps = {
  label: string;
  type?: string;
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const InputField = ({ label, type = "text", register, name, defaultValue, error, inputProps }: InputFieldProps) => {
  const { className, ...restInputProps } = inputProps || {};

  return (
    <div className={`flex w-full flex-col gap-2 ${className || ""}`}>
      <label htmlFor={name} className="text-[13px] font-medium text-slate-600">{label}</label>
      <input id={name} type={type} {...register(name)} {...restInputProps} defaultValue={defaultValue} className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3.5 text-[13px] text-slate-700 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10" />
      {error?.message && <p className="px-0.5 text-[11px] font-medium text-red-500">{error.message.toString()}</p>}
    </div>
  );
};

export default InputField;