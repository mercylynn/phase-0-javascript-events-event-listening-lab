function addingEventListener() {
    const input=document.getElementById("button");

    input.addEventListener('click',clickEvent);
}

function clickEvent(){
    alert('clicked a button');
}
addingEventListener();