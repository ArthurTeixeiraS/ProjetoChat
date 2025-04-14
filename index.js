const sendButton = document.querySelector(".sendButton");
const chatBody = document.querySelector(".chat-body");
const inputMensagem = document.querySelector(".inputMensagem");

function sendMessage(){
    const mensagem = inputMensagem.value
    console.log(mensagem)
    
    if (mensagem){
        const novaMensagem = document.createElement("div")
        novaMensagem.classList.add("message", "usuario")
        novaMensagem.innerHTML = `
            <strong>Você diz:</strong><br>
            ${mensagem}
        `
        chatBody.appendChild(novaMensagem)
        chatBody.scrollTop = chatBody.scrollHeight;
        inputMensagem.value = "";
    }
}

sendButton.addEventListener("click", function(event) {
    event.preventDefault();
    sendMessage();
});

inputMensagem.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        sendMessage();
    }
})