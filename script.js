/* Declare variables below to save the different sections (divs) of your story*/
let title=document.querySelector(" .story-opening");
let storyOpening= document.querySelector(".buttons");
let storypart2sure=document.querySelector(".option-one-screen");
let storypart2Notsure=document.querySelector(".option-two-screen");
let storypart3sure=document.querySelector(".option-one-end");
let storypart3notsure=document.querySelector(".option-two-end");
let storypart4Continue=document.querySelector(".option-three-end");
let firstButton=document.querySelector(".option-one");
let secondButton=document.querySelector(".option-two");
let thirdButton=document.querySelector(".button-three");
let firstAnswer=document.querySelector(".answer-one");
let secondAnswer=document.querySelector(".answer-two");
let thirdAnswer=document.querySelector(".answer-three");

let SureButton=
    document.querySelector(".option-one");


SureButton.onclick=function(){
    
storypart2sure.style.display="block";
    title.style.display="none";
    
};

let NotsureButton=
    document.querySelector(".option-two");

NotsureButton.onclick=function(){
storypart2Notsure.style.display="block";
        title.style.display="none";};
   
    

