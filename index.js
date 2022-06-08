
var btn1=document.getElementById('btn1');
var app=document.getElementById('app');
var color=['green','red','pink','orange'];
btn1.addEventListener('click',function(){
    var num=Math.floor(Math.random()*3);
    app.style.backgroundColor=color[num];
});
var shape =["circle","traingle","circle1","circle2","circle3","circle4"];
var btn2=document.getElementById('btn2');
var app2=document.getElementById('app2');
btn2.addEventListener('click',function(){
    var chn=Math.floor(Math.random()*6);
    var ans=shape[chn];
    app2.setAttribute("id",ans);
    // app2.style.display=shapes[chn];
});
