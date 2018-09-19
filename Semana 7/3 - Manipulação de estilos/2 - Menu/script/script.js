const menuGeneral = document.querySelector(`.sidebar-menu`)

const menuButton = document.querySelector(`.sidebar-menu__button`)

menuButton.addEventListener(`click`, function(event){
    event.preventDefault()


    // const verifyPosition = (menuGeneral.style.left = `-34%`)

    // console.log(menuGeneral)
    // console.log(verifyPosition)


    // if (verifyPosition < 0){
    //     console.log(verifyPosition)
    //     console.log(`AAAAAAAAAAa`)
    // } else {
    //     // verifyPosition
    //     console.log(`BBBBBBB`)
    //     console.log(verifyPosition, `dentro do if`)
    // }

    // menuGeneral.style.left = `-34%`
    // menuGeneral.style.boxShadow = `none`

    // if (menuGeneral.style.left === `-34%`){ 
    //     menuGeneral.style.left = `0%`
    // } else {
    //     menuGeneral.style.left = `-34%`
    // }


    const verifyPosition = (menuGeneral.style.left = `-34%`)

    console.log(verifyPosition)

    if (verifyPosition < `0%`) {
        // verifyPosition = `0%`
        menuGeneral.style.left = `0%`
        console.log(menuGeneral)
        console.log(`AAAAaaa`)
    } else {
        menuGeneral.style.left = `-34%` 
        console.log(`BBBBBBBB`)
    }

})


