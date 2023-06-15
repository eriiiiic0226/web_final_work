// window.onload = function(){
//     // alert("hi");
// };

let imageURL_Array = [
    "2020-09-24.jpg",
    "OIP.jpg",
    "153132a0-e051-11ea-b3b2-5bde270e16f6.jpg",
    "eating-19.jpg",
    "R.jpg",
    "A.jpg",
    "R(1).jpg",
    "R(2).jpg"
];


$(function(){
    var lastRandomNumber;
    $("input").on("click",function(){
      var numberOfListItem = $("li").length;
      var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
      // Avoid successive duplicates
      while (lastRandomNumber == randomChildNumber) {
        randomChildNumber = Math.floor(Math.random()*numberOfListItem);
      }
      console.log(randomChildNumber);
      lastRandomNumber = randomChildNumber;
      $("h1").text($("li").eq(randomChildNumber).text());
      $("img").attr("src",imageURL_Array[randomChildNumber]);
    });
  });