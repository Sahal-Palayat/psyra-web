"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// type DynamicSelectProps = {
//   value: string;
//   onChange: (value: string) => void;
//   options: [];
//   placeholder?: string;
// };

export default function DynamicSelect({
  value,
  onChange,
  options,
  handle,
}: any) {
  return (
    <Select
      value={value}
      onValueChange={(e) => {
        console.log(value, e, "VALUEEE");
        handle(e);
        onChange(e);
      }}
    >
      <SelectTrigger className="w-full bg-white/70 backdrop-blur-sm border-emerald-200/60 focus:border-primary-500 focus:ring-primary-500/20 rounded-xl py-6 px-4 text-base transition-all duration-300 h-auto">
        <SelectValue
          placeholder={"Write your answer"}
          className="text-gray-500"
        />
      </SelectTrigger>
      <SelectContent className="bg-white/95 backdrop-blur-md border-emerald-200/60 rounded-xl shadow-xl">
        {options.map((option: any) => (
          <SelectItem
            key={option}
            value={option}
            className="py-3 px-4 hover:bg-emerald-50/80 focus:bg-emerald-50/80 rounded-lg transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span>{option}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
