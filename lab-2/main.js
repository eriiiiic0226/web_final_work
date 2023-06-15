

$(document).ready(function(){
    let now = new Date().toISOString().substr(0,10);
    document.getElementById("since").value=now;
    createTable();
});

$("#submit").on("click",function(){
    const setdate = new Date($('#since').val());
    const day = setdate.getDate();
    const month = setdate.getMonth()+1;
    setMonthAndDay(month,day);
    // console.log(month+'/'+day);
    createTable();
});

let millisecsPerDay = 24*60*60*1000;

function createTable(){
    $("#coursTable").empty();
    $("#coursTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    let topicCount=topic.length;
    for(let x=0;x<topicCount;x++){
        let thedate = new Date(startDate.getTime() + 7*x*millisecsPerDay);
        $("#coursTable").append(
            "<tr>"+
            `<td>${x+1}</td>`+
            // `<td>${(new Date(startDate.getTime() + 7*x*millisecsPerDay)).toLocaleDateString()}</td>`+
            `<td>${thedate.getMonth()+1 + "/" + thedate.getDate()}</td>`+
            `<td>${topic[x]}</td>`+
            "</tr>"
        );
    }
}

$("#add").on("click",function(){
    if($("#activity").val()!=""){
        let tablerows = document.querySelectorAll("#coursTable tr");
        let rowcount = tablerows.length
        let thedate = new Date(startDate.getTime() + 7*(rowcount-1)*millisecsPerDay);
        $("#coursTable").append(
            "<tr>"+
            `<td>${rowcount}</td>`+
            `<td>${thedate.getMonth()+1 + "/" + thedate.getDate()}</td>`+
            `<td>${$("#activity").val()}</td>`+
            "</tr>"
            );
        document.getElementById("activity").value='';
    }
});


