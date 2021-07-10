
var btn= document.getElementById("btn");
btn.addEventListener("click",sayHello)
function sayHello(){
  var hto =new XMLHttpRequest();
  console.log("declare")
  
  hto.open("GET","text.txt",true)

  hto.onprogress = function(){
      console.log("processing")
  }
  hto.onload = function(){
      console.log(this.responseText)
  }
hto.send()
}

// $.ajax({

//     type:"GET",
//     URl:"text.json",
//     datatype:"text",
//     success:function(data){
//         alert(data)
//     }
// })