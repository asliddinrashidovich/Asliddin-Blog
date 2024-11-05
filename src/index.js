const btn = document.getElementById("btn");
const dropLeft = document.getElementById('drop-left');


btn.addEventListener('click', ()=> {
  if(dropLeft.classList.contains('drop-left')) {
    dropLeft.classList.remove('drop-left')
    dropLeft.classList.add('drop-right')
  } else {
    dropLeft.classList.add('drop-left')
    dropLeft.classList.remove('drop-right')
  }
})

const download = document.getElementById('download_CV');

download.addEventListener('click', () => {
  const fileUrl = "../public/images/CV/Asliddin_Resume.pdf";
  const fileName = "Asliddin_Resume";

  const a = document.createElement("a");
  a.href = fileUrl;
  a.download = fileName;

  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a)
})