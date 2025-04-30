const dbtns = document.querySelectorAll(".details");
let dpage = document.querySelector(".details-page");
for (let i = 0; i < dbtns.length; i++) {
  dbtns[i].addEventListener("click", () => {
    dpage.classList.add("opened");
  });
}
let closebtn = document.querySelector("#close-btn");
closebtn.onclick = function () {
  dpage.classList.remove("opened");
};

/*let dcontent = document.querySelector(".p-details");
let fso = ActiveXObject("Scripting.FileSystemObject");
/*let btn433 =document.querySelector("#4-3-3"),
    btn442 =document.querySelector("#4-4-2"),
    btn442d =document.querySelector("#4-4-2-d"),
    btn4231 =document.querySelector("#4-2-3-1"),
    btn352 =document.querySelector("#3-5-2"),
    btn343 =document.querySelector("#3-4-3");
    
    btn442.addEventListener("click",setDetails("4-4-2"))

function setDetails(tacs) {
  console.log("h");
  let filename = "E:\\remontada\\tactics\\4-3-3.txt";
  let file = fso.GetFile(filename);
  let fr = FileReader();
  fr.readAsText(file);
  console.log(fr.result);
  fr.onload = function () {
    //dcontent.innerHTML = fr.result;
  };
}*/
