const app = {};
app.showAlert = () => {
    const alert = document.querySelector('#alert').content.firstElementChild.cloneNode(true);
    document.querySelector("#demo-toaster").push(alert);
};