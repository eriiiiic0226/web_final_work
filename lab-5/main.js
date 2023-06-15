let player;//YouTubePlayer
let currentPlay=0;//記錄目前撥到第幾首歌
let currentPlayList=0;

//YouTube API Ready
function onYouTubeIframeAPIReady(){
    console.log("YT Ready!");
    player = new YT.Player("player",{
        height:"390",
        width:"640",
        videoId:playLists[currentPlayList].playList[currentPlay],
        playerVars:{
            autoplay:0,
            controls:0,
            start:playLists[currentPlayList].playTime[currentPlay][0],
            end:playLists[currentPlayList].playTime[currentPlay][1],
            iv_load_policy:3
        },
        events:{
            onReady:onPlayerReady,
            onStateChange:onPlayerStateChange
        }
    });

    // add event listeners to playlist buttons
    const playlistButtons = document.querySelectorAll('#playlistButtons button');
    playlistButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            // set the current playlist index
            currentPlay = 0;
            currentPlayList = index;
            player.stopVideo();
            player.cueVideoById({
                videoId: playLists[index].playList[currentPlay],
                startSeconds: playLists[index].playTime[currentPlay][0],
                endSeconds: playLists[index].playTime[currentPlay][1],
                suggestedQuality: "large"
            });
            // unset active class from all buttons and set it only to the clicked one
            playlistButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        });
    });
    

}

//YouTube Player Ready
function onPlayerReady(event){
    $("#playButton").on("click",function(){
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}

//Player State Change 
function onPlayerStateChange(event){
    if(Math.floor(player.getCurrentTime())==playLists[currentPlayList].playTime[currentPlay][1]){
        console.log("end");
        if(currentPlay<playLists[currentPlayList].playList.length-1){
            currentPlay++;
            // console.log("playLists["+currentPlay+"]-[")
            player.loadVideoById({
                videoId:playLists[currentPlayList].playList[currentPlay],
                startSeconds:playLists[currentPlayList].playTime[currentPlay][0],
                endSeconds:playLists[currentPlayList].playTime[currentPlay][1],
                suggestedQuality:"large"
            });
        }else{
            currentPlay = 0;
            player.cueVideoById({
                videoId: playLists[currentPlayList].playList[currentPlay],
                startSeconds: playLists[currentPlayList].playTime[currentPlay][0],
                endSeconds: playLists[currentPlayList].playTime[currentPlay][1],
                suggestedQuality: "large"
            });
            $("h2").text("");
        }
    }
    if(event.data==1){
        $("h2").text(player.getVideoData().title);
    }
}
