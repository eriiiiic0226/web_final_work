let ctx,currentImgMain;
let imgMountain,imgMain,imgEnemy;
let godirection;
const gridLength=100;
const backgroundImageURLs = [
    "images/ground0.png",
    "images/ground1.png",
    "images/ground2.png",
    "images/ground3.png",
    "images/ground4.png",
    "images/ground5.png",
    "images/ground6.png",
    "images/ground7.png",
    "images/ground8.png",
    "images/ground9.png",
  ];


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
currentImgMain={
    x:0,
    y:0
};
let cutImagePositionX = 0;

gotonextmap();
function gotonextmap(){    

    // getContext 為原生語法 而前面屬於 jquery 所以要用[0]
    ctx = $("#myCanvas")[0].getContext("2d");
    
    imgMain = new Image();
    imgMain.src = "images/character.png";
    imgMain.onload= function(){
        // (哪以張圖 , 開始的位置x,y(左上角) , 要裁寬度和高度 , 貼上的位置x,y(左上角)  , 貼上圖的寬和高)
        ctx.drawImage(imgMain,cutImagePositionX,0,150,200,currentImgMain.x,currentImgMain.y,gridLength,gridLength);

    };
    //use function to load images
    let sources = { 
        Sign1:"images/sign1.png",
        Sign2:"images/sign2.png",
        Sign3:"images/sign3.png",
        Sign4:"images/sign4.png",
        Bushes:"images/bushes.png",
        NPC1:"images/NPC1.png",
        NPC2:"images/NPC2.png",
        NPC3:"images/NPC3.png",
        NPC4:"images/NPC4.png",
        NPC5:"images/NPC5.png",
        NPC6:"images/NPC6.png",
        NPC7:"images/NPC7.png",
        NPC8:"images/NPC8.png",
        Tree:"images/tree.png",
        Cat:"images/cat.png",
        Goose:"images/goose.png",
        Welocome:"images/welcome.png",
        Ubereats:"images/ubereat.png",
        Wheel:"images/wheel.png",
        Calendar:"images/calendar.png",
        Dolphin:"images/dolphin.png",

    };
    
    loadImages(sources,function(images){
        for(var x in mapArray[currentmap]){
            for(var y in mapArray[currentmap][x]){
                if(mapArray[currentmap][x][y]==1){
                    ctx.drawImage(images.Sign1,0,0,1300,1300,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[currentmap][x][y]==2){
                    ctx.drawImage(images.Sign2,0,0,1300,1300,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[currentmap][x][y]==3){
                    ctx.drawImage(images.Sign3,0,0,1300,1300,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[currentmap][x][y]==4){
                    ctx.drawImage(images.Sign4,0,0,1300,1300,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[currentmap][x][y]==9){
                    ctx.drawImage(images.Bushes,0,0,280,280,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[currentmap][x][y]==10){
                    ctx.drawImage(images.NPC1,0,0,280,280,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[currentmap][x][y]==11){
                    ctx.drawImage(images.NPC2,0,0,280,280,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[currentmap][x][y]==12){
                    ctx.drawImage(images.NPC3,0,0,280,280,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[currentmap][x][y]==13){
                    ctx.drawImage(images.NPC4,0,0,280,280,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[currentmap][x][y]==14){
                    ctx.drawImage(images.NPC5,0,0,280,280,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[currentmap][x][y]==15){
                    ctx.drawImage(images.NPC6,0,0,280,280,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[currentmap][x][y]==16){
                    ctx.drawImage(images.NPC7,0,0,280,280,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[currentmap][x][y]==17){
                    ctx.drawImage(images.NPC8,0,0,280,280,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[currentmap][x][y]==18){
                    ctx.drawImage(images.Tree,0,0,280,280,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[currentmap][x][y]==19){
                    ctx.drawImage(images.Cat,0,0,280,280,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[currentmap][x][y]==20){
                    ctx.drawImage(images.Goose,0,0,280,280,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[currentmap][x][y]==21){
                    ctx.drawImage(images.Welocome,0,0,1300,1300,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[currentmap][x][y]==23){
                    ctx.drawImage(images.Ubereats,0,0,1300,1300,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[currentmap][x][y]==24){
                    ctx.drawImage(images.Wheel,0,0,360,360,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[currentmap][x][y]==25){
                    ctx.drawImage(images.Calendar,0,0,360,360,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[currentmap][x][y]==26){
                    ctx.drawImage(images.Dolphin,0,0,360,360,y*gridLength,x*gridLength,gridLength,gridLength);
                }

            }
        }
    });

};





$(document).on("keydown",function(event){
    // console.log(event.code);
    
    let targetImg,targetBlock;
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
            cutImagePositionX=320;//臉朝左
            break;
        case "ArrowUp":
            targetImg.x=currentImgMain.x;
            targetImg.y=currentImgMain.y-gridLength;
            cutImagePositionX=160;//臉朝上
            break;
        case "ArrowRight":
            targetImg.x=currentImgMain.x+gridLength;
            targetImg.y=currentImgMain.y;
            cutImagePositionX=450;//臉朝右
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
    if(targetImg.x <= 400 && targetImg.x >= 0 && targetImg.y <= 400 && targetImg.y >= 0){
        targetBlock.x=targetImg.y / gridLength;
        targetBlock.y=targetImg.x / gridLength;
    }
    else{
        targetBlock.x=-1;
        targetBlock.y=-1;
    }

    //清空主角原本所在的位置
    ctx.clearRect(currentImgMain.x,currentImgMain.y,gridLength,gridLength);
    var randaomnumber = Math.floor(Math.random()*10);

    if(targetBlock.x!=-1&&targetBlock.y!=-1){
        switch(mapArray[currentmap][targetBlock.x][targetBlock.y]){
            case 0://一般道路(可移動)
                $("#talkBox").text("");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                godirection = 0;
                reset();
                break;
            case 1://告示牌: 活動
                $("#talkBox").text("告示牌: 活動");
                break;
            case 2://告示牌: 學術
                $("#talkBox").text("告示牌: 學術");
                break;
            case 3://告示牌: 飲食
                $("#talkBox").text("告示牌: 飲食");
                break;
            case 4://告示牌: 校園
                $("#talkBox").text("告示牌: 校園");
                break;
            case 5://往上
                $("#talkBox").text("");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                godirection = 1;                
                break;
            case 6://往下
                $("#talkBox").text("");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                godirection = 2;
                break;
            case 7://往左
                $("#talkBox").text("");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                godirection = 3;
                break;
            case 8://往右
                $("#talkBox").text("");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                godirection = 4;
                break;
            case 9://草叢
                $("#talkBox").text("草叢");
                break;
            case 10://NPC1
                $("#talkBox").text("上學期的活動");
                setQuestion(0);
                break;
            case 11://NPC2
                $("#talkBox").text("下學習的活動");
                setQuestion(1);
                break;
            case 12://NPC3
                $("#talkBox").text("學術");
                setQuestion(2);
                break;
            case 13://NPC4
                $("#talkBox").text("校內餐廳");
                setQuestion(3);
                break;
            case 14://NPC5
                $("#talkBox").text("校外餐廳");
                setQuestion(4);
                break;
            case 15://NPC6
                $("#talkBox").text("校園");
                setQuestion(5);
                break;
            case 16://NPC7
                $("#talkBox").text("Hello ~ welcom to YZU ~");
                // setQuestion(6);
                break;
            case 17://NPC8
                $("#talkBox").text("初めまして，よろしく～");
                // setQuestion(7);
                break;
            case 19://cat
                if(randaomnumber % 2 == 0){
                    $("#talkBox").text("喵~~");
                }else{
                    $("#talkBox").text("我是七館的小貓咪 喵~~");
                }
                break;
            case 20://goose
            $("#talkBox").text("嘎嘎嘎~~");
                break;
            case 21://welcome
                $("#talkBox").text("遇到NPC後，在下方選擇選項，他會回答你的!");
                break;
            case 22://start
                $("#talkBox").text("開始探索地圖吧~");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                godirection = 5;
                break;
            case 23://ubereat
                $("#talkBox").text("如果想要訂 uber eat 或 foodpanda，地址寫334桃園市八德區東泰街506號， 備註記得寫元智大學男女宿舍圍牆! ");
                break;
            case 24://wheel
                $("#talkBox").text("晚餐選擇器");
                jumptoweb("wheelchoice/index.html");
                break;
            case 25://calendar
                $("#talkBox").text("活動行事曆");
                jumptoweb("calendar/index.html");
                break;
            case 26://dolphin
                $("#talkBox").text("我是學校的吉祥物~");
                break;
        }
    }else if(godirection > 0){
        switch(godirection){
            case 1:
                ctx.clearRect(0, 0, $("#myCanvas")[0].width, $("#myCanvas")[0].height);
                currentImgMain.x=200;
                currentImgMain.y=400;
                currentmap -= 3;
                cutImagePositionX = 160;
                gotonextmap();                
                godirection = 2;                
                break;
            case 2:
                ctx.clearRect(0, 0, $("#myCanvas")[0].width, $("#myCanvas")[0].height);
                currentImgMain.x=200;
                currentImgMain.y=0;
                currentmap += 3;
                cutImagePositionX = 0;
                gotonextmap();
                godirection = 1;
                break;
            case 3:
                ctx.clearRect(0, 0, $("#myCanvas")[0].width, $("#myCanvas")[0].height);
                currentImgMain.x=400;
                currentImgMain.y=200;                
                currentmap -= 1;
                cutImagePositionX = 320;
                gotonextmap();
                godirection = 4;
                break;
            case 4:
                ctx.clearRect(0, 0, $("#myCanvas")[0].width, $("#myCanvas")[0].height);
                currentImgMain.x=0;
                currentImgMain.y=200;
                currentmap += 1;
                cutImagePositionX = 450;
                gotonextmap();
                godirection = 3;
                break;
            case 5:
                ctx.clearRect(0, 0, $("#myCanvas")[0].width, $("#myCanvas")[0].height);
                currentImgMain.x=200;
                currentImgMain.y=200;
                currentmap = 5;
                cutImagePositionX = 0;
                gotonextmap();
                godirection = 0;
                break;
        }
        $("#myCanvas")[0].style.backgroundImage = `url(${backgroundImageURLs[currentmap]})`;
    }
    else{
        $("#talkBox").text("邊界");
    }
    //重新繪製主角
    ctx.drawImage(imgMain,cutImagePositionX,0,150,200,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
    event.preventDefault();//上下左右不影響畫面
});



