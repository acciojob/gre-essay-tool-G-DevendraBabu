let inp_box=document.getElementById("evaluatedText");
let count=0;
let heading=document.getElementById("wordCount");


inp_box.addEventListener("click",()=>{
    heading.innerText=count;
})


inp_box.addEventListener("keyup",(e)=>{

    let wrd=inp_box.value.trim();
    if(!wrd)
    {
        heading.innerText=0;    
        return
    }
    let words=wrd.split(" ");
    console.log("len " + words.length);
    
    heading.innerText=words.length;
 
})

