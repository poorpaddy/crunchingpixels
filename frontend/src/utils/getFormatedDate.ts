import { format } from "date-fns";

export default function getFormatedDate(date: string) {
  return format(new Date(date), "MMMMMM d, yyyy");
}
