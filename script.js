const totalShares=3;
let shareCount=0;
const shareButton=document.getElementById('shareButton');
const enterButton=document.getElementById('enterButton');
const shareCountText=document.getElementById('shareCount');
const overlayShareCount=document.getElementById('overlayShareCount');
const progressBar=document.getElementById('progressBar');
const message=document.getElementById('message');
const floatingComments=document.getElementById('floatingComments');
const viewerCount=document.getElementById('viewerCount');
const overlay=document.getElementById('overlay');
const overlayShare=document.getElementById('overlayShare');
const videoContainer=document.getElementById('videoContainer');
const closeOverlay=document.getElementById('closeOverlay');
const floatingCTA=document.getElementById('floatingCTA');
const videoThumbnail=document.getElementById('videoThumbnail');
const congratsOverlay=document.getElementById('congratsOverlay');

const comments=[
{username:"@anna",text:"Legit to guys! Salamat 🥰"},
{username:"@marky",text:"Working 100% thank you!"},
{username:"@jenlopez",text:"Naka join na ako!"},
{username:"@paul23",text:"Solid grabe 🔥🔥"},
{username:"@mica",text:"Salamat, safe to!"},
{username:"@dave",text:"Sana all nakapasok na"},
{username:"@sheena",text:"Pa shout out idol!"},
{username:"@ronnie",text:"Nood tayo guys"},
{username:"@kath",text:"Hahaha enjoy!"}
];

function showFloatingComment(c){
const div=document.createElement("div");
div.className="floating-comment";
div.innerHTML=`<img src="https://i.ibb.co/0Jmshvb/user1.jpg" alt=""><div><span class="username">${c.username}</span>${c.text}</div>`;
floatingComments.appendChild(div);
setTimeout(()=>div.remove(),4000);
}
setInterval(()=>{
const randomViewers=450+Math.floor(Math.random()*20);
viewerCount.textContent=`🔴 ${randomViewers} viewers`;
},2000);
let commentIndex=0;
setInterval(()=>{
if(commentIndex<comments.length){
showFloatingComment(comments[commentIndex]);
commentIndex++;
}
},3000);

function shareAction(){
window.open("https://t.me/share/url?url=𝗙𝗿𝗲𝗲%20𝗽𝗮𝘀𝗼𝗸%20𝗴𝘂𝘆𝘀!%20%F0%9F%91%89%20https%3A%2F%2Ft.me%2Ffreeat4bzchannelbot%3Fstartapp%3DWatchNow`);
message.textContent='Share to proceed.';
setTimeout(()=>{
shareCount++;
updateUI();
if(shareCount>=totalShares){
overlay.style.display='none';
videoThumbnail.classList.add('unblur');
showCongrats();
}
},2000);
}
shareButton.addEventListener('click',shareAction);
overlayShare.addEventListener('click',shareAction);
closeOverlay.addEventListener('click',()=>{overlay.style.display='none';});
enterButton.addEventListener('click',()=>{
if(shareCount>=totalShares){
window.location.href='https://t.me/addlist/Lztmt92Gokg4NTZl';
}
});
floatingCTA.addEventListener('click',()=>{
if(shareCount>=totalShares){
window.location.href='http://t.me/+z7yCiBtE09ZiNDA1';
}
});
videoContainer.addEventListener('click',()=>{overlay.style.display='flex';});

function updateUI(){
shareCountText.textContent=`(${shareCount}/3)`;
overlayShareCount.textContent=`(${shareCount}/3)`;
progressBar.style.width=(shareCount/totalShares)*100+'%';
if(shareCount>=totalShares){
shareButton.disabled=true;
enterButton.disabled=false;
enterButton.classList.add('unlocked');
floatingCTA.style.display='block';
message.textContent='';
}else{
enterButton.disabled=true;
enterButton.classList.remove('unlocked');
}
}

function confettiBurst(){
confetti.create(document.getElementById('confettiCanvas'),{resize:true})({particleCount:200,spread:90,origin:{y:0.6}});
}

function showCongrats(){
congratsOverlay.style.display='flex';
confettiBurst();
let bursts=0;
const interval=setInterval(()=>{
confettiBurst();
bursts++;
if(bursts>=3){clearInterval(interval);}
},500);
setTimeout(()=>{
congratsOverlay.style.display='none';
},4000);
}

updateUI();

