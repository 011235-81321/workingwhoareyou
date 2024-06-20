// JavaScript goes here.
let help = document.querySelector("#help");
let walk = document.querySelector("#walk");
let watch = document.querySelector("#watch");
let push = document.querySelector("#push");
let study = document.querySelector("#study");
let cheat = document.querySelector("#cheat");
let studyA = document.querySelector("#STUDY");
let hate = document.querySelector("#hate");
let grass = document.querySelector("#grass");
let work = document.querySelector("#work");
let play = document.querySelector("#play");
let live = document.querySelector("#live");
let nope =document.querySelector("#nope");
let money = document.querySelector("#money");
let shoo = document.querySelector("#shoo");
let lie = document.querySelector("#lie");
let fate = document.querySelector("#fate");
let gravity = document.querySelector("#gravity");
let luck = document.querySelector("#luck");
let none = document.querySelector("#none");
let result = document.querySelector(".result");
let resultButton = document.querySelector(".resultButton");
let Villan = document.querySelector(".JoJoV");
let image = document.querySelector(".image");
let question = document.querySelector(".questions");
let restart = document.querySelector(".restart");
var Dio = 0;
var Pillar = 0;
var Kira = 0;
var KC = 0;
var pucchi = 0;
var valentine = 0;
var questionIndex = 0;
restart.addEventListener("click", function(){
location.reload();
});
help.addEventListener("click", function(){
    if(questionIndex === 0) {
        pucchi += 1;
        valentine +=1;
        help.style.backgroundColor = "grey";
        questionIndex++;
        console.log("Dio:" + Dio);
        console.log("pillarmen:" + Pillar);
        console.log("Kira:" + Kira);
        console.log("diavolo:" + KC);
        console.log("pucchi:" + pucchi);
        console.log("Valentine:" + valentine);
        console.log(questionIndex);
    }
});
walk.addEventListener("click", function(){
    if(questionIndex === 0) {
        Pillar += 1;
        Kira +=1;
        walk.style.backgroundColor = "grey";
        questionIndex++;
        console.log("Dio:" + Dio);
        console.log("pillarmen:" + Pillar);
        console.log("Kira:" + Kira);
        console.log("diavolo:" + KC);
        console.log("pucchi:" + pucchi);
        console.log("Valentine:" + valentine);
        console.log(questionIndex);
    }
});
watch.addEventListener("click", function(){
    if(questionIndex === 0) {
        Kira += 1;
        valentine +=1;
        watch.style.backgroundColor = "grey";
        questionIndex++;
        console.log("Dio:" + Dio);
        console.log("pillarmen:" + Pillar);
        console.log("Kira:" + Kira);
        console.log("diavolo:" + KC);
        console.log("pucchi:" + pucchi);
        console.log("Valentine:" + valentine);
        console.log(questionIndex);
    }
});
push.addEventListener("click", function(){
    if(questionIndex === 0) {
        Dio += 1;
        KC +=1;
        push.style.backgroundColor = "grey";
        questionIndex++;
        console.log("Dio:" + Dio);
        console.log("pillarmen:" + Pillar);
        console.log("Kira:" + Kira);
        console.log("diavolo:" + KC);
        console.log("pucchi:" + pucchi);
        console.log("Valentine:" + valentine);
        console.log(questionIndex);
    }
});
study.addEventListener("click", function(){
    console.log(questionIndex);
    if(questionIndex === 1) {
        pucchi += 1;
        Kira +=1;
        study.style.backgroundColor = "grey";
        questionIndex++;
        console.log("Dio:" + Dio);
        console.log("pillarmen:" + Pillar);
        console.log("Kira:" + Kira);
        console.log("diavolo:" + KC);
        console.log("pucchi:" + pucchi);
        console.log("Valentine:" + valentine);
        console.log(questionIndex);
    }
});
cheat.addEventListener("click", function(){
    if(questionIndex === 1) {
        KC += 1;
        cheat.style.backgroundColor = "grey";
        questionIndex++;
        console.log("Dio:" + Dio);
        console.log("pillarmen:" + Pillar);
        console.log("Kira:" + Kira);
        console.log("diavolo:" + KC);
        console.log("pucchi:" + pucchi);
        console.log("Valentine:" + valentine);
        console.log(questionIndex);
    }
});
studyA.addEventListener("click", function(){
    if(questionIndex === 1) {
        valentine += 1;
        Dio +=1;
        studyA.style.backgroundColor = "grey";
        questionIndex++;
        console.log("Dio:" + Dio);
        console.log("pillarmen:" + Pillar);
        console.log("Kira:" + Kira);
        console.log("diavolo:" + KC);
        console.log("pucchi:" + pucchi);
        console.log("Valentine:" + valentine);
        console.log(questionIndex);
    }
});
hate.addEventListener("click", function(){
    if(questionIndex === 1) {
        Dio += 1;
        hate.style.backgroundColor = "grey";
        questionIndex++;
        console.log("Dio:" + Dio);
        console.log("pillarmen:" + Pillar);
        console.log("Kira:" + Kira);
        console.log("diavolo:" + KC);
        console.log("pucchi:" + pucchi);
        console.log("Valentine:" + valentine);
        console.log(questionIndex);
    }
});
grass.addEventListener("click", function(){
    if(questionIndex === 2) {
        Pillar += 1;
        Kira +=1;
        grass.style.backgroundColor = "grey";
        questionIndex++;
        console.log("Dio:" + Dio);
        console.log("pillarmen:" + Pillar);
        console.log("Kira:" + Kira);
        console.log("diavolo:" + KC);
        console.log("pucchi:" + pucchi);
        console.log("Valentine:" + valentine);
        console.log(questionIndex);
    }
});
work.addEventListener("click", function(){
    if(questionIndex === 2) {
        valentine += 1;
        Dio +=1;
        pucchi +=1;
        work.style.backgroundColor = "grey";
        questionIndex++;
        console.log("Dio:" + Dio);
        console.log("pillarmen:" + Pillar);
        console.log("Kira:" + Kira);
        console.log("diavolo:" + KC);
        console.log("pucchi:" + pucchi);
        console.log("Valentine:" + valentine);
        console.log(questionIndex);
    }
});
play.addEventListener("click", function(){
    if(questionIndex === 2) {
        Kira +=1;
        play.style.backgroundColor = "grey";
        questionIndex++;
        console.log("Dio:" + Dio);
        console.log("pillarmen:" + Pillar);
        console.log("Kira:" + Kira);
        console.log("diavolo:" + KC);
        console.log("pucchi:" + pucchi);
        console.log("Valentine:" + valentine);
        console.log(questionIndex);
    }
});
live.addEventListener("click", function(){
    if(questionIndex === 2) {
        pucchi += 1;
        Kira +=1;
        live.style.backgroundColor = "grey";
        questionIndex++;
        console.log("Dio:" + Dio);
        console.log("pillarmen:" + Pillar);
        console.log("Kira:" + Kira);
        console.log("diavolo:" + KC);
        console.log("pucchi:" + pucchi);
        console.log("Valentine:" + valentine);
        console.log(questionIndex);
    }
});
nope.addEventListener("click", function(){
    if(questionIndex === 3) {
        Pillar += 1;
        KC +=1;
        Dio +=1;
        nope.style.backgroundColor = "grey";
        questionIndex++;
        console.log("Dio:" + Dio);
        console.log("pillarmen:" + Pillar);
        console.log("Kira:" + Kira);
        console.log("diavolo:" + KC);
        console.log("pucchi:" + pucchi);
        console.log("Valentine:" + valentine);
        console.log(questionIndex);
    }
});
money.addEventListener("click", function(){
    if(questionIndex === 3) {
        Kira += 1;
        pucchi +=1;
        valentine +=1;
        money.style.backgroundColor = "grey";
        questionIndex++;
        console.log("Dio:" + Dio);
        console.log("pillarmen:" + Pillar);
        console.log("Kira:" + Kira);
        console.log("diavolo:" + KC);
        console.log("pucchi:" + pucchi);
        console.log("Valentine:" + valentine);
        console.log(questionIndex);
    }
});
shoo.addEventListener("click", function(){
    if(questionIndex === 3) {
        Pillar += 1;
        KC +=1;
        Dio +=1;
        shoo.style.backgroundColor = "grey";
        questionIndex++;
        console.log("Dio:" + Dio);
        console.log("pillarmen:" + Pillar);
        console.log("Kira:" + Kira);
        console.log("diavolo:" + KC);
        console.log("pucchi:" + pucchi);
        console.log("Valentine:" + valentine);
        console.log(questionIndex);
    }
});
lie.addEventListener("click", function(){
    if(questionIndex === 3) {
        Kira += 1;
        KC +=1;
        lie.style.backgroundColor = "grey";
        questionIndex++;
        console.log("Dio:" + Dio);
        console.log("pillarmen:" + Pillar);
        console.log("Kira:" + Kira);
        console.log("diavolo:" + KC);
        console.log("pucchi:" + pucchi);
        console.log("Valentine:" + valentine);
        console.log(questionIndex);
    }
});
fate.addEventListener("click", function(){
    if(questionIndex === 4) {
        KC +=2;
        fate.style.backgroundColor = "grey";
        questionIndex++;
        console.log("Dio:" + Dio);
        console.log("pillarmen:" + Pillar);
        console.log("Kira:" + Kira);
        console.log("diavolo:" + KC);
        console.log("pucchi:" + pucchi);
        console.log("Valentine:" + valentine);
        console.log(questionIndex);
    }
});
gravity.addEventListener("click", function(){
    if(questionIndex === 4) {
        pucchi +=2;
        Dio +=2;
        gravity.style.backgroundColor = "grey";
        questionIndex++;
        console.log("Dio:" + Dio);
        console.log("pillarmen:" + Pillar);
        console.log("Kira:" + Kira);
        console.log("diavolo:" + KC);
        console.log("pucchi:" + pucchi);
        console.log("Valentine:" + valentine);
        console.log(questionIndex);
    }
});
luck.addEventListener("click", function(){
    if(questionIndex === 4) {
        valentine +2;
        Pillar +=2;
        luck.style.backgroundColor = "grey";
        questionIndex++;
        console.log("Dio:" + Dio);
        console.log("pillarmen:" + Pillar);
        console.log("Kira:" + Kira);
        console.log("diavolo:" + KC);
        console.log("pucchi:" + pucchi);
        console.log("Valentine:" + valentine);
        console.log(questionIndex);
    }
});
none.addEventListener("click", function(){
    if(questionIndex === 4) {
        Kira +=2;
        none.style.backgroundColor = "grey";
        questionIndex++;
        console.log("Dio:" + Dio);
        console.log("pillarmen:" + Pillar);
        console.log("Kira:" + Kira);
        console.log("diavolo:" + KC);
        console.log("pucchi:" + pucchi);
        console.log("Valentine:" + valentine);
        console.log(questionIndex);
    }
});

resultButton.addEventListener("click", function(){
question.style.display = "none";
resultButton.style.display = "none";
result.style.display = "block";

if(Dio >= Pillar && Dio >= Kira && Dio >= KC && Dio >= pucchi && Dio >= valentine){
image.src = "https://media1.giphy.com/media/HitAab11PjQZO/giphy.gif?cid=6c09b952mc8v1daf76wr2s5zls4288aujemb1pmdca32nebf&ep=v1_gifs_search&rid=giphy.gif&ct=g";
Villan.innerHTML = "DIO";
}
else if(Pillar >= Dio && Pillar >= Kira && Pillar >= KC && Pillar >= pucchi && Pillar >= valentine){
    image.src = "https://steamuserimages-a.akamaihd.net/ugc/966494810406918849/02649A5A751971A58C91F0EEDFF14683DF8DCB19/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";
Villan.innerHTML = "Pillar Men";
}
else if(Kira >= Dio && Kira >= Pillar && Kira >= KC && Kira >= pucchi && Kira >= valentine){
    image.src = "https://media.tenor.com/CZw1NnCEC4oAAAAM/yoshikage-kira-evil-smile.gif";
    Villan.innerHTML = "Yoshikage Kira";
}
else if(KC >= Dio && KC >= Pillar && KC >= Kira && KC >= pucchi && KC >= valentine){
    image.src = "https://i.pinimg.com/originals/ed/eb/71/edeb7174c7764ce548ee1eb0fcab8e14.gif";
    Villan.innerHTML = "Diavolo";
}
else if(pucchi >= Dio && pucchi >= Pillar && pucchi >= Kira && pucchi >= KC && pucchi >= valentine){
    image.src = "https://media.tenor.com/ycKPeuHE2akAAAAM/pucci-jojo.gif";
    Villan.innerHTML = "Pucchi";
}
else if(valentine >= Dio && valentine >= Pillar && valentine >= Kira && valentine >= KC && valentine >= pucchi){
    image.src = "https://static.jojowiki.com/images/thumb/6/6b/latest/20201115235722/Valentine_Normal_Infobox_Manga.png/400px-Valentine_Normal_Infobox_Manga.png";
    Villan.innerHTML = "Funny Valentine";
}
});