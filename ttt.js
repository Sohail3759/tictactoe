let box = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let result = document.querySelector(".result")

let turn = true;

let winning = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

box.forEach((box) => {
    box.addEventListener("click", (() => {
        if (turn) {
            box.innerHTML = 'X'
            turn = false
        } else {
            box.innerHTML = 'O'
            turn = true
        }
        box.disabled = true
        checkwinner();
    }))

})

const checkwinner = () => {
    for (let pattern of winning) {
        let pos1 = box[[pattern[0]]].innerText
        let pos2 = box[[pattern[1]]].innerText
        let pos3 = box[[pattern[2]]].innerText

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1===pos2 && pos2===pos3){
                disabledbtn();
                showwinner(pos1);
            }
        }

    }

}

const disabledbtn = ()=>{
    for (let boxes of box) {
        boxes.disabled = true
    }
}

const enabledbtn = ()=>{
    for (let boxes of box) {
        boxes.disabled = false
        result.classList.add("hide")
    }
}

let showwinner = (pos1)=>{
    result.innerHTML =`congratulations mr ${pos1} wins`
    result.classList.remove("hide")
}


reset.addEventListener("click",()=>{
    for (let boxes of box) {
        boxes.innerHTML =''
        enabledbtn()
    }
})
