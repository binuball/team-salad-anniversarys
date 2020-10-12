function loadIframe(name) {
  let iframe = document.getElementById('iframe');
  let link = `countdown/${name}/index.html`;
  if (iframe.getAttribute('src') == "") {
    iframe.setAttribute('src', link);
    return
  } else if (iframe.getAttribute('src') !== link) {
    iframe.setAttribute('src', link);
  } else {
    iframe.removeAttribute('src');
    iframe.setAttribute('src', "");
  }
}