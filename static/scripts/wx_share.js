var countDown = function (cur,end,elem){
    var serverCurrentTime = cur*1000;
    var activeEndTime = end*1000;
    function timer(cur,end){
        var ts = end - cur;
        var dd = parseInt(ts / 1000 / 60 / 60 / 24 % 365, 10);
        var hh = parseInt(ts / 1000 / 60 / 60 % 24, 10);
        var mm = parseInt(ts / 1000 / 60 % 60, 10);
        var ss = parseInt(ts / 1000 % 60, 10);
        elem.html("活动还剩：" + dd + "天" + hh + "小时" + mm + "分" + ss + "秒");
        cur = cur+1000;
    }
    if(serverCurrentTime < activeEndTime){
        window.setInterval(function(){
            serverCurrentTime = +new Date(serverCurrentTime)+1000;
            if(serverCurrentTime > activeEndTime){
                elem.html('活动已结束');
            }else{
                timer(serverCurrentTime,activeEndTime); 
            }
        },1000);
    }else{
        elem.html('活动已结束');
    }
}

for (var i = 0; i < activeEndTime.length; i++) {
    console.log(i + " : " + activeEndTime[i]);
    countDown(serverCurrentTime,activeEndTime[i],$('#countDown'+i));
};