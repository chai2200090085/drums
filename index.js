// document.querySelectorAll("button")[0].addEventListener("click",handleclick);
// document.querySelectorAll("button")[1].addEventListener("click",handleclick);
// document.querySelectorAll("button")[2].addEventListener("click",handleclick);
// document.querySelectorAll("button")[3].addEventListener("click",handleclick);
// document.querySelectorAll("button")[4].addEventListener("click",handleclick);
// document.querySelectorAll("button")[5].addEventListener("click",handleclick);
// document.querySelectorAll("button")[6].addEventListener("click",handleclick);
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
    {
        document.querySelectorAll("button")[i].addEventListener("click",function()
     {
        var name=this.innerHTML;
        makesound(name);
        ButtonAnimation(name);
        
       }); }

document.addEventListener("keypress",function()
 {
       makesound(event.key);
       ButtonAnimation(event.key);

});
 function  makesound(assam)
 {

    switch(assam)
    {
        case "w":
            var audio1=new Audio('sounds/tom-1.mp3');
            audio1.play();
            break;
            case "a":
            var audio2=new Audio('sounds/tom-2.mp3');
            audio2.play();  
            break;
            case "s":
            var audio3=new Audio('sounds/tom-3.mp3');
            audio3.play();
            break;
            case "d":
            var audio4=new Audio('sounds/tom-4.mp3');
            audio4.play();
            break;
            case "j":
            var audio5=new Audio('sounds/snare.mp3');
            audio5.play();
            break;
            case "k":
            var audio6=new Audio('sounds/crash.mp3');
            audio6.play();
            break;
            case "l":
            var audio7=new Audio('sounds/kick-bass.mp3');
            audio7.play();   
            break; 
    }
};
function ButtonAnimation(currentkey)
{
    var assam=document.querySelector("."+currentkey);
    assam.classList.add("pressed");
    setTimeout(function(){
        assam.classList.remove("pressed",1000);
    });
}
// for(var i=0;i<document.querySelectorAll(".drum").length;i++)
//     {
//         document.querySelectorAll("button")[i].addEventListener("click",function()
//      {
//         var name=this.innerHTML;
//         console.log(name);
//         switch(name)
//         {
//             case "w":
//                 var audio1=new Audio('sounds/tom-1.mp3');
//                 audio1.play();
//                 break;
//                 case "a":
//                 var audio2=new Audio('sounds/tom-2.mp3');
//                 audio2.play();  
//                 break;
//                 case "s":
//                 var audio3=new Audio('sounds/tom-3.mp3');
//                 audio3.play();
//                 break;
//                 case "d":
//                 var audio4=new Audio('sounds/tom-4.mp3');
//                 audio4.play();
//                 break;
//                 case "j":
//                 var audio5=new Audio('sounds/snare.mp3');
//                 audio5.play();
//                 break;
//                 case "k":
//                 var audio6=new Audio('sounds/crash.mp3');
//                 audio6.play();
//                 break;
//                 case "l":
//                 var audio7=new Audio('sounds/kick-bass.mp3');
//                 audio7.play();   
//                 break; 
//         }
//     });
//     }

// document.addEventListener("keypress",function(event)
//  {
//     var name=event.key;
//     console.log(name);
//     switch(name)
//     {
//         case "w":
//             var audio1=new Audio('sounds/tom-1.mp3');
//             audio1.play();
//             break;
//             case "a":
//             var audio2=new Audio('sounds/tom-2.mp3');
//             audio2.play();  
//             break;
//             case "s":
//             var audio3=new Audio('sounds/tom-3.mp3');
//             audio3.play();
//             break;
//             case "d":
//             var audio4=new Audio('sounds/tom-4.mp3');
//             audio4.play();
//             break;
//             case "j":
//             var audio5=new Audio('sounds/snare.mp3');
//             audio5.play();
//             break;
//             case "k":
//             var audio6=new Audio('sounds/crash.mp3');
//             audio6.play();
//             break;
//             case "l":
//             var audio7=new Audio('sounds/kick-bass.mp3');
//             audio7.play();   
//             break; 
//     }
// });


// document.addEventListener("keypress",function(){
//     console.log(event);
// });
