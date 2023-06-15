// window.onload= function() {
//     // alert("hi");
// }

let image_Array = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
];


$(function(){
    let lastrandomnumber;
    $("input").on("click",function(){
            // alert("Hi");
            var numberOflistin=$("li").length;
            var randomnumber = Math.floor(Math.random()*numberOflistin);
            while(randomnumber === lastrandomnumber){
                randomnumber = Math.floor(Math.random()*numberOflistin);
            }
            lastrandomnumber = randomnumber;
            $("h1").text($("li").eq(randomnumber).text());
            $("img").attr("src",image_Array[randomnumber])
            

    });

});

