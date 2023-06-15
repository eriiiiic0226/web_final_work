let mapArray,ctx,currentImgMain;
let imgMountain,imgMain,imgEnemy;
const gridLength=150;

function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for(var src in sources) {
      numImages++;
    }
    for(var src in sources) {
      images[src] = new Image();
      images[src].onload = function() {
        if(++loadedImages >= numImages) {
          callback(images);
        }
      };
      images[src].src = sources[src];
    }
}
//網頁載入完成後初始化動作
let currentmap=0;
let getthekey=false;
let getthesword=false;
gotonextmap();
function gotonextmap(){
    
    //  0 -> 可走 , 1-> 障礙 , 2->終點 , 3->敵人 , 4->key , 5->門 , 6->劍 , 7->coin
    mapArray = [
    [
        [0,1,1,1,4],
        [0,0,0,0,0],
        [0,1,0,1,3],
        [0,1,0,5,1],
        [3,1,3,1,1]
    ],
    [
        [0,0,0,0,0],
        [1,1,3,1,0],
        [4,1,0,0,0],
        [0,3,1,0,1],
        [0,0,0,0,5],
    ],
    [
        [0,1,3,1,6],
        [0,1,0,0,0],
        [0,0,0,1,0],
        [0,1,1,1,0],
        [4,1,5,3,0],
    ],
    [
        [0,0,0,6,0],
        [1,1,3,1,3],
        [5,1,0,0,0],
        [3,1,1,3,1],
        [0,3,0,0,4],
    ],
    [
        [0,7,7,7,7],
        [7,7,7,7,7],
        [7,7,7,7,7],
        [7,7,7,7,7],
        [7,7,7,7,7],
        
    ]

    ];
    
    getthekey=false;
    getthesword=false;
    // getContext 為原生語法 而前面屬於 jquery 所以要用[0]
    ctx = $("#myCanvas")[0].getContext("2d");
    
    imgMain = new Image();
    imgMain.src = "images/spriteSheet.png";
    currentImgMain={
        x:0,
        y:0
    };
    imgMain.onload= function(){
        // (哪以張圖 , 開始的位置x,y(左上角) , 要裁寬度和高度 , 貼上的位置x,y(左上角)  , 貼上圖的寬和高)
        ctx.drawImage(imgMain,0,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);

    };
    //use function to load images
    let sources = { 
        Mountain:"images/material.png",
        Enemy:"images/Enemy.png",
        Key:"images/key.png",
        Door:"images/door.png",
        Sword:"images/sword.png",
        Coin:"images/coin.png"
    };
    //  0 -> 可走 , 1-> 障礙 , 2->終點 , 3->敵人 , 4->key , 5->門 , 6->劍 , 7->coin
    loadImages(sources,function(images){
        for(var x in mapArray[currentmap]){
            for(var y in mapArray[currentmap][x]){
                if(mapArray[currentmap][x][y]==1){
                    ctx.drawImage(images.Mountain,32,65,32,32,y*gridLength,x*gridLength,gridLength,gridLength);
                }else if(mapArray[currentmap][x][y]==3){
                    ctx.drawImage(images.Enemy,7,40,104,135,y*gridLength,x*gridLength,gridLength,gridLength);
                }else if(mapArray[currentmap][x][y]==4){
                    ctx.drawImage(images.Key,0,0,512,512,y*gridLength+40,x*gridLength+40,gridLength-80,gridLength-80);
                }else if(mapArray[currentmap][x][y]==5){
                    ctx.drawImage(images.Door,0,0,191,377,y*gridLength+50,x*gridLength+20,gridLength-80,gridLength-30);
                }else if(mapArray[currentmap][x][y]==6){
                    ctx.drawImage(images.Sword,0,0,640,640,y*gridLength+20,x*gridLength+10,gridLength-30,gridLength-30);
                }else if(mapArray[currentmap][x][y]==7){
                    ctx.drawImage(images.Coin,0,0,640,640,y*gridLength+20,x*gridLength+10,gridLength-30,gridLength-30);
                }
            }
        }
    });

    if(currentmap==mapArray.length-1){
        $("#title").text("恭喜過關!");
    }



};




$(document).on("keydown",function(event){
    // console.log(event.code);
    
    let targetImg,targetBlock,cutImagePositionX; 
    targetImg={
        x:-1,
        y:-1
    };
    targetBlock={
        //主角的目標(對應2維陣列)
        x:-1,
        y:-1
    }
    // event.preventDefault();//上下左右不影響畫面
    switch(event.code){
        case "ArrowLeft":
            targetImg.x=currentImgMain.x-gridLength;
            targetImg.y=currentImgMain.y;
            cutImagePositionX=175;//臉朝左
            break;
        case "ArrowUp":
            targetImg.x=currentImgMain.x;
            targetImg.y=currentImgMain.y-gridLength;
            cutImagePositionX=355;//臉朝上
            break;
        case "ArrowRight":
            targetImg.x=currentImgMain.x+gridLength;
            targetImg.y=currentImgMain.y;
            cutImagePositionX=540;//臉朝右
            break;
        case "ArrowDown":
            targetImg.x=currentImgMain.x;
            targetImg.y=currentImgMain.y+gridLength;
            cutImagePositionX=0;//臉朝下
            break;
        default://其他按鍵不處理
            return;
    }
    // 角色可以移動的範圍
    if(targetImg.x <= 600 && targetImg.x >= 0 && targetImg.y <= 600 && targetImg.y >= 0){
        targetBlock.x=targetImg.y / gridLength;
        targetBlock.y=targetImg.x / gridLength;
    }
    else{
        targetBlock.x=-1;
        targetBlock.y=-1;
    }

    //清空主角原本所在的位置
    ctx.clearRect(currentImgMain.x,currentImgMain.y,gridLength,gridLength);


    if(targetBlock.x!=-1&&targetBlock.y!=-1){
        switch(mapArray[currentmap][targetBlock.x][targetBlock.y]){
            case 0://一般道路(可移動)
                $("#talkBox").text("");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 1://有障礙物(不可移動)
                $("#talkBox").text("竹筍");
                break;
            case 2://終點(可移動)
                $("#talkBox").text("抵達終點");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 3://敵人(不可移動)
            if(getthesword){
                $("#talkBox").text("阿...");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            }else{
                $("#talkBox").text("安抓?");
                break;
            }
            case 4://key(可移動)
                $("#talkBox").text("獲得鑰匙");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                getthekey=true;
                break;
            case 5://門(可移動)
                if(getthekey===true){
                    $("#talkBox").text("抵達出口");
                    currentImgMain.x=targetImg.x;
                    currentImgMain.y=targetImg.y;
                    // go to the next map
                    ctx.clearRect(0, 0, $("#myCanvas")[0].width, $("#myCanvas")[0].height);
                    currentImgMain.x=0;
                    currentImgMain.y=0;
                    cutImagePositionX=0;
                    currentmap++;
                    gotonextmap();
                    break;
                }else{
                    console.log(getthekey);
                    $("#talkBox").text("鑰匙勒?");
                    break;
                }
            case 6:
                $("#talkBox").text("獲得劍");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                getthesword=true;
                break;
            case 7://一般道路(可移動)
                $("#talkBox").text("$$$");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;

        }
    }
    else{
        $("#talkBox").text("邊界");
    }
    //重新繪製主角
    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
    event.preventDefault();//上下左右不影響畫面
});



