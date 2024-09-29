import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormFieldComponentProps {
  fieldType: "input" | "textarea"; // Specify if it is input or textarea
  label: string;
  placeholder: string;
  description: string;
  field: UseFormRegisterReturn}

const FormFieldComponent = ({
  fieldType,
  label,
  placeholder,
  description,
  field,
}: FormFieldComponentProps) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        {fieldType === "input" ? (
          <Input placeholder={placeholder} {...field} />
        ) : (
          <Textarea placeholder={placeholder} {...field} />
        )}
      </FormControl>
      <FormDescription>{description}</FormDescription>
      <FormMessage />
    </FormItem>
  );
};

export default FormFieldComponent;