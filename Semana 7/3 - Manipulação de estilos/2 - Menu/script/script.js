const menuGeneral = document.querySelector(`.sidebar-menu`);

const menuButton = document.querySelector(`.sidebar-menu__button`);

menuButton.addEventListener(`click`, function(event){
    event.preventDefault()


    //aqui a sua variavel será do tipo objeto, porque tem os colchetes
    var verifyPosition = [menuGeneral.style.left = `-34%`]
    console.log(verifyPosition[0])
    console.log(typeof verifyPosition) //vai retornar o tipo objeto ou seja [colchete] ou array de string

    if (verifyPosition[0] === `-34%`) {
        menuGeneral.style.left = `0%`
        console.log("1"); //vai printar este console
    } else {
        menuGeneral.style.left = `-44%` 
        console.log("2");
    }

    //pego a mesma variavel, e faço de outro forma, sem os colchetes neste a variavel sera string
    verifyPosition = (menuGeneral.style.left = `-34%`)
    console.log(verifyPosition)
    console.log(typeof verifyPosition) //vai retornar o tipo string porque esta sem os [colchete]

    if (verifyPosition === `-34%`) {
        menuGeneral.style.left = `0%`
        console.log("1"); //vai printar este console
    } else {
        menuGeneral.style.left = `-44%` 
        console.log("2");
    }    



    // const verifyPosition = (menuGeneral.style.left = `-34%`)

    // console.log(verifyPosition)

    // if (verifyPosition < `0%`) {
    //     // verifyPosition = `0%`
    //     menuGeneral.style.left = `0%`
    //     console.log(menuGeneral)
    //     console.log(`AAAAaaa`)
    // } else {
    //     menuGeneral.style.left = `-34%` 
    //     console.log(`BBBBBBBB`)
    // }

})

