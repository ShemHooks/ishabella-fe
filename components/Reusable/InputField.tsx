import { Input } from "../ui/input";
import { ReactNode } from "react";

type Props = {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rightIcon?: ReactNode;
};

export default function InputField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  rightIcon,
}: Props) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-gray-600">{label}</label>

      <div className="relative">
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full p-3 pr-10 rounded-md bg-gray-200 focus:ring-2 focus:ring-green-600 outline-none"
        />

        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500">
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
}
