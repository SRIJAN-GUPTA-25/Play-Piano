document.addEventListener("keydown",function(event){
    paino(event.key);
    button(event.key);
    
});
document.addEventListener("keydown",function(event){
    painomore(event.code);
    buttonmore(event.code);
});
function paino(key){
    switch(key){
        case "a":
            var a=new Audio("C.mp3");
            a.play();
            break;
        case "s":
            var s=new Audio("D.mp3");
            s.play();
            break;
        case "d":
            var d=new Audio("E.mp3");
            d.play();
            break;
        case "f":
            var f=new Audio("F.mp3");
            f.play();
            break;
        case "g":
            var g=new Audio("G.mp3");
            g.play();
            break;
        case "h":
            var h=new Audio("A.mp3");
            h.play();
            break;
        case "j":
            var j=new Audio("B.mp3");
            j.play();
            break;
        case "k":
            var k=new Audio("Cu.mp3");
            k.play();
            break;
        case "w":
            var w=new Audio("Cmaj.mp3");
            w.play();
            break;
        case "e":
            var e=new Audio("Em.mp3");
            e.play();
            break;
        case "t":
            var t=new Audio("Fmaj.mp3");
            t.play();
            break;
        case "y":
            var y=new Audio("Am.mp3");
            y.play();
            break;
        case "u":
            var u=new Audio("Bm.mp3");
            u.play();
            break;
        case "l":
            var l=new Audio("d_.mp3");
            l.play();
            break;
        case "Enter":
            var enter=new Audio("g_.mp3");
            enter.play();
            break;
        case "o":
            var o=new Audio("c_maj.mp3");
            o.play();
            break;
        case "p":
            var p=new Audio("e_min.mp3")
            p.play();
            break;
        case "z":
            var z=new Audio("p1.mp3");
            z.loop=true;
            z.play();
            break;
        case "x":
            var x=new Audio("p2.mp3");
            x.loop=true;
            x.play();
            break;
        case "c":
            var c=new Audio("p3.mp3");
            c.loop=true;
            c.play();
            break;
        case "v":
            var v=new Audio("p4.mp3");
            v.loop=true;
            v.play();
            break;
        case "b":
            var b=new Audio("p5.mp3");
            b.loop=true;
            b.play();
            break;
        case "n":
            var n=new Audio("p6.mp3");
            n.loop=true;
            n.play();
            break;
        case "m":
            var m=new Audio("p7.mp3");
            m.loop=true;
            m.play();
            break;
    }
}

function painomore(code){
    switch(code){
        case "Semicolon":
            var semi=new Audio("e_.mp3");
            semi.play();
            break;
        case "Quote":
            var quo=new Audio("f_.mp3");
            quo.play();
            break;
        case "Numpad4":
            var n4=new Audio("a_.mp3");
            n4.play();
            break;
        
        case "Numpad5":
            var n5=new Audio("b_.mp3");
            n5.play();
            break;
        
        case "Numpad6":
            var n6=new Audio("cu_.mp3");
            n6.play();
            break;

        case "BracketRight":
            var bright=new Audio("f_maj.mp3");
            bright.play();
            break;
        case "Backslash":
            var back=new Audio("b_min.mp3");
            back.play();
            break;
        case "Numpad7":
            var n7=new Audio("cu_min.mp3");
            n7.play();
            break;
        case "Comma":
            var com=new Audio("p8.mp3");
            com.loop=true;
            com.play();
            break;
        case "Period":
            var per=new Audio("p9.mp3");
            per.loop=true;
            per.play();
            break;
        case "Slash":
            var sla=new Audio("p10.mp3");
            sla.loop=true;
            sla.play();
            break;

    }
}


function button(key){
    var button=document.querySelector("."+key);
    button.classList.add("press");
    setTimeout(function(){
        button.classList.remove("press");
    },150);
}

function buttonmore(code){
    var buttonmore=document.querySelector("."+code);
    buttonmore.classList.add("press");
    setTimeout(function(){
        buttonmore.classList.remove("press");
    },150);
}


function playpause(key)
{
    var count=0;
    var key=new Audio("p1.mp3");
    if(count===0)
    {   count=1;
        key.play();
    }
    else{
        count=0;
        key.pause();
    }
}