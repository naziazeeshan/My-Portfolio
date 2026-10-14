function showMessage(){

    document.getElementById("message").innerHTML="Welcome!Thanks for visiting my website";
}
let themeBtn=
document.getElementById("themeBtn");
 themeBtn.addEventListener("click",function(){
    document.body.classList.toggle("dark-mode");
    if( document.body.classList.contains("dark-mode")){
        themeBtn.innerText="☀️Light Mode";
    }else{
             themeBtn.innerText="🌙dark Mode";
    }
 });





 let contactForm=
 document.getElementById("contactForm");

  contactForm.addEventListener("submit",function(event){
    event.preventDefault();

    let name= document.getElementById("name").value;

     document.getElementById("response").innerText=
     "Thank You,"  + name +  "!Your message has been received.";
     
     contactForm.reset();
  });

  