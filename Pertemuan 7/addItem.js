function addItem(){
    var ul = document.getElementById("dynamic-list");
    var input = document.getElementById("input");
    var li = document.createElement("li");
    li.setAttribute('id', input.value);
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
}
function removeItem(){
    var ul = document.getElementById("dynamic-list");
    var input = document.getElementById("input");
    var item = document.getElementById(input.value);
    ul.removeChild(item);
}
function confirmAction(){
    let confirmAction = confirm("Apakah anda yakin untuk menghapusnya?");
        if (confirmAction) {
			removeItem();
          alert("Berhasil menghapus data");
        } else {
          alert("Batal menghapus data");
        }
}