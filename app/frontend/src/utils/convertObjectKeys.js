export default function convertObjectKeys(obj, fn) {
  if (!(obj instanceof Object)) return obj;
  if (obj instanceof Array) {
    return obj.map(item => {
      return convertObjectKeys(item, fn);
    });
  } else {
    var convertedObject = {};
    Object.keys(obj).forEach(key => {
      convertedObject[fn(key)] = convertObjectKeys(obj[key], fn);
    });
    return convertedObject;
  }
}
