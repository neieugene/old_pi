export default function toCamelCase(str) {
  return str.replace(/(_[a-z])/g, $1 => `${$1[1].toUpperCase()}`);
}
