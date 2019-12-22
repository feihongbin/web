function sin(){
    var x=document.form1.admin.value;
    var y=document.form1.psword.value;
    if(y=="1234"&&x=="hhh"){
        window.location = "../html/index.html";
        console.log("1");
        setCookie("用户名",x,1);
        setCookie("密码",y,1);
        console.log("2");
 
    }
    else if(x==""){
        alert("请输入用户名")
    }
    else if(y==""){
        alert("密码不能为空")
    }
    else{
        alert("密码输入错误，请重新输入");
        document.form1.psword.value="";
    }
}

function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" +expires + "path=/html";
}

