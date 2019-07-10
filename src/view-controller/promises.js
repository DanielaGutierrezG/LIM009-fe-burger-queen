export const showOrders = () => {
    document.querySelectorAll(".allbtn").forEach(btn => btn.addEventListener('click', (e) => {
        const showOrders= document.getElementById("listOrders");
        const list = document.createElement("li");
        list.innerHTML= e.target.value;
        showOrders.appendChild(list);
        
    } ))
}