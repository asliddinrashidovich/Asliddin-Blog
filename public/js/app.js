window.addEventListener(scroll, ()=> {
  const header = document.getElementById('header');
  console.log('asliddin')
  if(window.scrollY > 50) {
    header.style.boxShadow = '#0000003d 0 3px 8px';
  }
})