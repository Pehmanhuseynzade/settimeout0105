let duration = document.querySelector("#duration")
let message = document.querySelector("#message-content")
let addbtn = document.querySelector("#add-button")
let success = document.querySelector("#success")
let error =  document.querySelector("#error")
let cancelable = document.querySelector("#cancelable")
let clearbtn = document.querySelector("#clear-button")
let toasts = document.querySelector("#toasts")
let x = document.querySelector(".x")

addbtn.addEventListener("click",()=>{
  if(message = ""){
     if (cancelable.checked){
          if(success.checked ==true){
               toasts.innerHTML += `
          <div class = "success-toast toastdiv">" "<div class="cancel-button">x</div></div>  
           `
          }
          else if(error.checked ==true){
               toasts.innerHTML += `
               <div class = "error-toast toastdiv">" "<div class="cancel-button">x</div></div>  
           ` 
          }
       }else{
          if(success.checked ==true){
               toasts.innerHTML += `
          <div class = " success-toast toastdiv">" "</div>  
           `
           console.log("salam")
          }
          else if(error.checked ==true){
               toasts.innerHTML += `
               <div class = " error-toast toastdiv">" "</div>  
           ` 
          }
       }
  }

  else{
     if (cancelable.checked){
          if(success.checked ==true){
               toasts.innerHTML += `
          <div class = "success-toast toastdiv">${message.value}<div class="cancel-button">x</div></div>  
           `
           console.log("salam")
          }
          else if(error.checked ==true){
               toasts.innerHTML += `
               <div class = "error-toast toastdiv">${message.value}<div class="cancel-button">x</div></div>  
           ` 
          }
       }else{
          if(success.checked ==true){
               toasts.innerHTML += `
          <div class = " success-toast toastdiv">${message.value}</div>  
           `
           console.log("salam")
          }
          else if(error.checked ==true){
               toasts.innerHTML += `
               <div class = " error-toast toastdiv">${message.value}</div>  
           ` 
          }
       } 
  }
  setTimeout(()=>{
     let toast=document.querySelector(".toastdiv")
     toast.remove()
  },2000)
})

clearbtn.addEventListener("click",()=>{
          toasts.innerHTML = "";
     })