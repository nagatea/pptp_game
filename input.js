const keys = {};
const mouse = {};
for(let i=0;i<26;i++){
    keys[String.fromCharCode(97+i)]=false;
}
for(let i=0;i<10;i++){
    keys[String.fromCharCode(48+i)]=false;
}
keys.space = false;
keys.enter = false;
keys.shift = false;
keys.up = false;
keys.down = false;
keys.left = false;
keys.right = false;
mouse.left = false;
mouse.right = false;
mouse.center = false;
mouse.x = 0;
mouse.y = 0;
const KeyDown = e => {
    if(e.keyCode===90)keys.z=true;
    else if(e.keyCode===67)keys.c=true;
    else if(e.keyCode >=48 && e.keyCode<=57) keys[String(e.keyCode-48)] = true;
    else if(e.keyCode >= 65 && e.keyCode <= 90) keys[String(e.keyCode-65+97)]=true;
    else if(e.keyCode == 37) keys.left = true;
    else if(e.keyCode == 38) keys.up = true;
    else if(e.keyCode == 39) keys.right = true;
    else if(e.keyCode == 40) keys.down = true;
    else if(e.keyCode == 13) keys.enter = true;
    else if(e.keyCode == 16) keys.shift = true;
    else if(e.keyCode == 32) keys.space = true;
};
const KeyUp = e => {
  if(e.keyCode===90)keys.z=false;
  else if(e.keyCode===67)keys.c=false;
  else if(e.keyCode >=48 && e.keyCode<=57) keys[String(e.keyCode-48)] = false;
  else if(e.keyCode >= 65 && e.keyCode <= 90){console.log(String(e.keyCode-65+97)); keys[String(e.keyCode-65+97)]=false;}
  else if(e.keyCode == 37) keys.left = false;
  else if(e.keyCode == 38) keys.up = false;
  else if(e.keyCode == 39) keys.right = false;
  else if(e.keyCode == 40) keys.down = false;
  else if(e.keyCode == 13) keys.enter = false;
  else if(e.keyCode == 16) keys.shift = false;
  else if(e.keyCode == 32) keys.space = false;
};
const MouseMove = e =>{
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}
const MouseUpDown = e =>{
    const data = e.buttons;
    mouse.left=((data & 0x0001) ? true : false);
    mouse.right=((data & 0x0002) ? true : false);
    mouse.center=((data & 0x0002) ? true : false);
}
const getMouse = _ =>{
    return mouse;
}
const getKeys = _ =>{
    return keys;
}
document.addEventListener("keyup", KeyUp);
document.addEventListener("keydown", KeyDown);
if(document.addEventListener){
    document.addEventListener("mousemove" , MouseMove);
    document.addEventListener("mousedown" , MouseUpDown);
}
else if(document.attachEvent){
    document.attachEvent("onmousemove" , MouseMove);
    document.attachEvent("onmouseup" , MouseUpDown);
}