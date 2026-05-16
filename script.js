let imagBox= document.querySelector("#imgBox")
let qrImage = document.querySelector("#qrImage")
let input=document.querySelector("#qrtext")
let errmsg= document.querySelector("#errmsg")
function generateQR(){
    if(input.value===""){
        
        errmsg.classList.remove("hidden");
        input.classList.add("border-red-500")
        imagBox.classList="mt-3 max-h-0 opacity-0 scale-95 overflow-hidden transition-all duration-500 ease-out"
        return;

    }
    imagBox.classList.add("max-h-0","opacity-0","scale-95")
        imagBox.classList.remove("opacity-100","scale-100","max-h-[200px]")
    setTimeout(() =>{
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+encodeURIComponent(input.value)
       
        qrImage.onload=function(){
        imagBox.classList.remove("max-h-0","opacity-0","scale-95")
        imagBox.classList.add("opacity-100","scale-100","max-h-[200px]")
    

        }
    },400);   
}

input.addEventListener("input",() => {
    if(input.value.trim() !== ""){
        errmsg.classList.add("hidden")
        input.classList.remove("border-red-500")   
    }
});