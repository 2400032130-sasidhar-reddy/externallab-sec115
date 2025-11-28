function sort(n){
  let t=document.getElementById("t"),r=[...t.rows].slice(1);
  r.sort((a,b)=>a.cells[n].innerText.localeCompare(b.cells[n].innerText,undefined,{numeric:true}));
  r.forEach(x=>t.appendChild(x));
}

function filter(){
  let s=document.getElementById("subject").value.toLowerCase(),
      min=+document.getElementById("min").value||0,
      max=+document.getElementById("max").value||100;
  [...document.getElementById("t").rows].slice(1).forEach(r=>{
    let subj=r.cells[2].innerText.toLowerCase(),m=+r.cells[3].innerText;
    r.style.display=( (!s||subj==s) && m>=min && m<=max )?"":"none";
  });
}