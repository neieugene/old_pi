export default function toSnakeCase(str) {
  return str.replace(/([A-Z])/g, $1 => `_${$1.toLowerCase()}`);
}
