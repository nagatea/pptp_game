const images = {}

const loadImage = (key, src) => {
    images[key] = {};
    images[key].image = new Image();
    images[key].image.src = src;
}

const drawImage = (key,sx,sy,sw,sh,dx,dy,dw,dh) =>{
    if(sw===undefined)ctx.drawImage(images[key].image,sx,sy);
    else if(dx===undefined)ctx.drawImage(images[key].image,sx,sy,sw,sh);
    else ctx.drawImage(images[key].image,sx,sy,sw,sh,dx,dy,dw,dh);
}