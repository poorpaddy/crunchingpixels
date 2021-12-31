export interface IFieldProps {
  label: string;
  type: "text" | "email" | "password";
  id: string;
  name: string;
  required?: boolean;
}
