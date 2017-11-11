// Write your solution in this file!
let driver = {}


function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(obj, key) {
  const copy = Object.assign({}, obj);
  delete copy.name
  return copy
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj['name']
  return obj
}
