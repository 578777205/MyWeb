function newrec(id){

    var objId = document.getElementById(id);
    if (objId == undefined) {
        return;
    }
    for (var i = 0; i < objId.elements.length; i++) {
        if (objId.elements[i].type == "text") {
            objId.elements[i].value = "";
        }

        else if (objId.elements[i].type == "textarea") {
            objId.elements[i].value = "";
        }
    }
    getrec();
}

function getrec()
{


}
function delrec()
{

}
function exitlog()
{
	window.location.href="login.html";
}
function pos()
{


	alert("确定要提交吗？");
}