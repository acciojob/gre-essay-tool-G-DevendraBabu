//your code here
let inp_box=document.getElementById("evaluatedText");
let count=0;
let heading=document.getElementById("wordCount");


inp_box.addEventListener("click",()=>{
    heading.innerText=count;
})


inp_box.addEventListener("keydown",(e)=>{

    if(e.key==" ")
    {
        count ++;
        // console.log("hello");
    }
    heading.innerText=count;
 
})
