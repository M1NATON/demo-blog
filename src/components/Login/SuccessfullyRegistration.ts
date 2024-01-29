export const successfullyRegistration = () => {
    const form = document.querySelector('.form')
    const registrationBlock = document.querySelector('.registrationBlock')
    const btnBlock = document.querySelector('.btnBlock')

    // @ts-ignore
    form.style.display = 'none'
    // @ts-ignore
    btnBlock.style.display = 'none'
    // @ts-ignore
    registrationBlock.style.display = 'block'

    setTimeout(()=> {
        // @ts-ignore
        form.style.display = 'block'
        // @ts-ignore
        btnBlock.style.display = 'block'
        // @ts-ignore
        registrationBlock.style.display = 'none'
    },2000)

}