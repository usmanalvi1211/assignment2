//#Source https://bit.ly/2neWfJ2 
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
redirect('https://google.com');

