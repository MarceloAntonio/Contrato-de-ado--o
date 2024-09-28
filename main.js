function checarCheckBox(){
const btn = document.getElementById('btnEnviar')
const CheckBox = document.getElementById("checkbox")

btn.disabled = !CheckBox.checked
}

function Redirect(){

if (document.getElementById("checkbox").checked){
window.location.href = "pagina2.html"


}

}