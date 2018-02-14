const images = {}

const loadImage = (key, src) => {
    images[key] = {};
    images[key].image = new Image();
    images[key].image.src = src;
}

const loadImages = (directory) =>{ //animal用;
    for (let i=0; i < data.length; i++) {
        let key = data[i].key;
        let src = directory + "/" + key + ".png";
        loadImage(key, src);
    }
};

const drawImage = (key,sx,sy,sw,sh,dx,dy,dw,dh) =>{
    if(sw===undefined)ctx.drawImage(images[key].image,sx,sy);
    else if(dx===undefined)context.drawImage(images[key].image,sx,sy,sw,sh);
    else context.drawImage(images[key].image,sx,sy,sw,sh,dx,dy,dw,dh);
}