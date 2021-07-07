
(function(window){

    var speakWord= "Hello";

var SpeakHello = {};
SpeakHello.speak=function(name){
    console.log(speakWord+" "+name)
}
    window.SpeakHello = SpeakHello;
})(window)
