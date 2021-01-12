function sayhello68() {
 alert('Hello, ' + document.getElementById('who68').innerHTML+ '!');
}
function taro68() {
    document.getElementById('who68').innerHTML= '太郎';
}
function hanako68() {
    document.getElementById('who68').innerHTML= '花子';
}

function txtchange1() {
    document.getElementById('txt1').innerHTML= 'ナンバーワン！';
}

function imgchange1() {
    document.getElementById('logo').src= './image/josailogo.jpg';
}

function imgchange2(){
    document.getElementById('logo').src= './image/top-about_1.jpg';
}

function imgchange3(){
    document.getElementById('logo1').src= './image/tomneko12151309.jpg';
}

function hyoji() { 
    //表示する文字
    var str= "一文字ずつ表示します。";
     //テキストボックスの文字数
     var cnt= document.timer.moji.value.length; 
     //文字が全部表示されているか確認

if ( cnt< 11 ) { 
    //現在より1文字多く切り出して表示
    document.timer.moji.value= str.substr(0,cnt+1); }
     else { 
         //全て表示されたら、空文字に戻す
         document.timer.moji.value= ""; } } 
         function startfnc() { 
             //関数hyoji()を1000ミリ秒間隔で呼び出す
             setInterval("hyoji()",1000); } 


function mes() {
     alert("3秒経ちました！"); 
    }

function hyoji() {
     //表示する文字
     var str= "一文字ずつ表示します。"; 
     //テキストボックスの文字数
     var cnt= document.timer.moji.value.length; 
     //文字が全部表示されているか確認
     if ( cnt< 11 ) { 
     //現在より1文字多く切り出して表示
     document.timer.moji.value= str.substr(0,cnt+1); }  else { 
     //全て表示されたら、空文字に戻す
     document.timer.moji.value= ""; } 
     //setTimeout()を含む関数を呼び出す
     setTimeout("hyoji()",1000); }
