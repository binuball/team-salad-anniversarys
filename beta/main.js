function loadObject(name) {
  let object = document.getElementById('object');
  let link = `countdown/${name}/index.html`;
  if (object.getAttribute('data') == "") {
    object.setAttribute('data', link);
    return
  } else if (object.getAttribute('data') !== link) {
    object.setAttribute('data', link);
  } else {
    object.removeAttribute('data');
    object.setAttribute('data', "");
  }
}