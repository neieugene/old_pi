import { toast } from "react-toastify";

export default function showMultipleToastMessages(messages, type) {
  if (!Array.isArray(messages)) {
    return toast[type].call(this, messages || "Произошла ошибка");
  }
  messages.forEach(message => {
    toast[type].call(this, message);
  });
}
