var da;var n;
async function lg(e) {
    if(typeof e=="object"){
        e=e.toString();
    }else {}
    n.innerText=`\n${e}`;
}
function go() {
    t=da.value;
    eval(t);
}
function g(){
    x=document.createElement("div"); x.style="z-index:999999;width:100%;height:50%;position:fixed;top:0px;background:white;"; 
    d=document.createElement("div"); d.style="z-index:1999999;width:50px;height:50px;position:fixed;bottom:10px;right:0px;background:red;";
    n=document.createElement("div");
    n.style="z-index:999999;width: 100%;height: 30%;position: fixed;bottom: 0px;overflow-y:scroll;";
    
    document.body.appendChild(x);
    x.innerHTML="<textarea class="ta"></textarea>";
    da=document.querySelector(".ta");
    document.body.appendChild(d);
    document.body.appendChild(n);
}
