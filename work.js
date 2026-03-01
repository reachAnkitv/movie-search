let btn=document.querySelector("#sbtn");
let entry=document.querySelector("#enteredword");
let showresult=document.querySelector("#result");
let imgshowresult=document.querySelector("#imgresult");
async function bring() {
    let call=`http://www.omdbapi.com/?apikey=79c70a09&t=${entry.value}`;
    let x=await fetch(call);
    return await x.json();
}
let work=()=>{
    let val=entry.value;
    let promise=bring();
    promise.then((res)=>{
        let text="";
        for(let key in res){
            if(key==="Ratings"){
                let ar=res[key];
                for(let x=0;x<ar.length;x++){
                    text=text+" "+ar[x].Source+" Ratings--"+ar[x].Value;
                }
            }
            else if(key==="Poster"){
                imgshowresult.src=res[key];
            }
            else{
            text=text+key+"--"+res[key]+"<br>";
            }
        }
        showresult.innerHTML=text;
    })
    promise.catch((er)=>{
        showresult.innerHTML="some error";
    })
}
btn.addEventListener("click",()=>work());