export default function getObjectKeys(obj, keys) {
  return keys.reduce((acc, key) => { acc[key] = obj[key]; return acc; }, {});
}
