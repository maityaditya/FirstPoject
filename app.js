//This is a elephant
//This is a tiger
let url="https://passwordinator.onrender.com/?num=true";
let password=document.querySelector("#inputPassword");
let btn=document.querySelector("#button1");
async function getPass(){
  try{
    let res=await axios.get(url);
    return res.data;
  }catch(err){
    console.log("Error found is",err);
  }
}

btn.addEventListener("click",async()=>{
let data = await getPass();
password.value=data.data;
});
