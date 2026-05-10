function showMessage() {
    const name = document.getElementById("nameInput").value;

    if (name === "") {
        document.getElementById("msg").innerText = "名前を入れてね";
    }   else {
        document.getElementById("msg").innerText = name + " だーいすき♡";
    }
}