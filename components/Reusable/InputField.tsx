type Props = {
  label: string;
  type?: string;
  placeholder?: string;
};

import { Input } from "../ui/input";

export default function InputField({
  label,
  type = "text",
  placeholder,
}: Props) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-gray-600">{label}</label>
      <Input
        type={type}
        placeholder={placeholder}
        className="w-full p-3 rounded-md bg-gray-200 focus:outline-none"
      />
    </div>
  );
}
