const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let box1El = document.getElementById("box1")
let box2El = document.getElementById("box2")

function generatePassword(){
    let password1= "";
    let password2="";
    for(let i=0; i<8; i++){
       
        let randomOne= Math.floor(Math.random() * characters.length)
        let randomTwo= Math.floor(Math.random() * characters.length)
        password1 += characters[randomOne]
        password2 += characters[randomTwo]
        }

        box1El.textContent= password1
        box2El.textContent = password2
       
}
    function copyOne(){
        // Create a fake "textarea" and set the contents to the text you want to copy//
       const storage1 = document.createElement("textarea");
       storage1.value= box1El.textContent;
       box1El = document.getElementById("box1");
       box1El.appendChild(storage1);
      //Copy the text in the fake "textarea" and remove the "textarea"//
       storage1.select();
       storage1.setSelectionRange(0,99999);
       document.execCommand("copy");
       box1El.removeChild(storage1);
        alert("Copied to clipboard")
       }
       function copyTwo(){
        // Create a fake "textarea" and set the contents to the text you want to copy//
       const storage2 = document.createElement("textarea");
       storage2.value= box2El.textContent;
       box2El = document.getElementById("box2");
       box2El.appendChild(storage2);
      //Copy the text in the fake "textarea" and remove the "textarea"//
       storage2.select();
       storage2.setSelectionRange(0,99999);
       document.execCommand("copy");
       box2El.removeChild(storage2);
        alert("Copied to clipboard")
       }
      