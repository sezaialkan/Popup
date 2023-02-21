let popup = ({
    img,
    text
}) => {

    let closeButton = document.createElement('button')
        closeButton.classList.add('close')
        closeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="120" width="120" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><g><path d="M7 7L17 17M7 17L17 7"></path></g></svg>`

    let popupBlock = document.createElement('div')
        popupBlock.classList.add('popup')

    let popupMain = document.createElement('div')
        popupMain.classList.add('main')

        if(img !== undefined){

            popupMain.classList.add('img-view')

            let popupImg = document.createElement('img')
                popupImg.classList.add('popup-img')
                popupImg.setAttribute('src', img.src)
                popupImg.setAttribute('alt', img.alt !== undefined ? img.alt : '')

            if(img.url !== undefined){
                
                let popupRedirect = document.createElement('a')
                    popupRedirect.setAttribute('href', img.url)
                    popupRedirect.setAttribute('alt', img.alt !== undefined ? img.alt : '')
                    popupRedirect.setAttribute('target', img.target !== undefined ? img.target : '')

                    popupRedirect.append(popupImg)
                    popupMain.append(closeButton,popupRedirect)

            }else{
                popupMain.append(closeButton,popupImg)
            }  

            

        }else{

            let popupDetail = document.createElement('div')
                popupDetail.classList.add('detail')
                popupDetail.innerHTML = text.body

            let popupHead = document.createElement('h2')
                popupHead.innerHTML = text.head    

                popupMain.append(closeButton,popupHead,popupDetail)

        }

    closeButton.addEventListener('click', (event) => {
        event.preventDefault()
        popupBlock.classList.add('remove')

        setTimeout(() => {
            popupBlock.remove()
        }, 500);
    })    
       


    popupBlock.appendChild(popupMain)
    
   document.body.appendChild(popupBlock)

}