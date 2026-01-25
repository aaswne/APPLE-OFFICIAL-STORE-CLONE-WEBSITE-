
const btn = document.getElementById("addBtn")

const  display  = document.getElementById("taskList")






btn.addEventListener("click",function(){
    const input = document.getElementById("taskInput").value

    const li = document.createElement("li")

    li.innerHTML= ` ${input} <button class="removebtn">X</button> `

    display.append(li)


const removebutton = li.querySelector(".removebtn")

     removebutton.addEventListener("click",function(){

    li.remove()

})

})


