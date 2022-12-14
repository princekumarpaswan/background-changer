const btn = document.getElementById('btn')
let userInput = ''
let x = ''
const storeVal = []
let counter = 0;
let reSet = '';
let blueBtn = '';
let btns = '';
let mValue = '';
let h3 = '';
let del;
let para;
let delPara;
let vf;
let rbtns



function store() {
    storeVal.push(userInput)
    console.log(storeVal)

}



function sbtn() {
    blueBtn = document.createElement('p')
    let div = document.querySelector('.container')
    blueBtn.innerText = 'Edit'
    div.append(blueBtn)
    blueBtn.setAttribute('class', `editButton p${counter}`)


    let redBtn = document.createElement('p')
    redBtn.innerText = 'Done'
    // redBtn.setAttribute('onclick', 'mint()')
    div.append(redBtn)
    redBtn.setAttribute('class', `deleteButton p${counter}`)

    btns = document.querySelectorAll(".editButton")
    btns.forEach(function (items) {
        items.addEventListener('click', function (val) {
            let sub = val.currentTarget.classList;
            if (sub.contains("editButton")) {
                mValue = (sub[1])
            }
            h3 = document.getElementsByClassName(`item_input ${mValue}`)
            vf = h3[0].innerText
            console.log(vf)
            document.querySelector('.input').value = vf
            del = h3[0]
            para = document.getElementsByClassName(`editButton ${mValue}`)
            console.log(para)
            del.remove()
            para[0].remove()
            delPara = document.getElementsByClassName('deleteButton')
            console.log(delPara)
            delPara[0].remove()

        })
    })


    rbtns = document.querySelectorAll(".deleteButton")
    rbtns.forEach(function (items) {
        items.addEventListener('click', function (val) {
            let sub = val.currentTarget.classList;
            console.log(sub)
            if (sub.contains("deleteButton")) {
                mValue = (sub[1])
            }
            h3 = document.getElementsByClassName(`item_input ${mValue}`)
            del = h3[0]
            para = document.getElementsByClassName(`editButton ${mValue}`)
            del.remove()
            para[0].remove()
            delPara = document.getElementsByClassName(`deleteButton ${mValue}`)
            console.log(delPara)
            delPara[0].remove()
        })
    })



}



function creatSection() {
    let div = document.querySelector('.container')
    let h3 = document.createElement('h3')
    h3.innerText = userInput
    console.log(div)
    div.append(h3)
    // h3.setAttribute('class', 'item_input')
    h3.setAttribute('class', `item_input p${counter + 1}`)
    h3.style.marginTop = '30px'
    counter = counter + 1;
    console.log(counter)

}





function getInput() {
    let value = document.querySelector('.input').value
    userInput = value
}

function clear() {
    document.querySelector('.input').value = ''
}





btn.addEventListener('click', () => {
    getInput()
    creatSection()
    sbtn()
    clear()
    store()

})

