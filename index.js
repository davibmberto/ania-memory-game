document.addEventListener('DOMContentLoaded', () => {
    const cardArray =[
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'fries',
            img: 'src/images/fries.png'
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png'
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png'
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'fries',
            img: 'src/images/fries.png'
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png'
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png'
        }
    ]

    cardArray.sort( () => 0.5-Math.random() )
    //poderia colocar argumentos, mas como ele não usaria para comparar nesse caso, não é necessário

    console.log(cardArray)

    const grid = document.querySelector('.grid')

    const resultDisplay = document.querySelector('#result')

    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []

    function createBoard(){
        for(let i = 0; i<cardArray.length; i++){
            const card = document.createElement('img')
            card.setAttribute('src', 'src/images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            
            grid.appendChild(card)
        }
    }

    function flipCard(){
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)

        console.log(cardArray[cardId])

        console.log(cardsChosen)

        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
        
        console.log(cardsChosenIds)
    }

    function checkForMatch(){
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]

        

        if(optionOneId === optionTwoId){
            alert('You have clicked the same image')
            cards[optionOneId].setAttribute('src', 'src/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
            console.log(cards)
        }
        else if(cardsChosen[0] === cardsChosen[1]){
            alert('MATCH!')
            
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)

            cards[optionOneId].setAttribute('src', 'src/images/white.png')
            cards[optionTwoId].setAttribute('src', 'src/images/white.png')
            
            cardsWon.push(cardsChosen)
        }
        else{
            alert('MISS!')
            cards[optionOneId].setAttribute('src', 'src/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
        }
        
        console.log(cardsWon)
        
        resultDisplay.innerHTML = cardsWon.length

        if(cardsWon.length === cardArray.length/2){
            resultDisplay.innerHTML = 'CONGRATULATIONS! YOU HAVE WON!'
        }

        cardsChosen = []
        cardsChosenIds = []

    }



    createBoard()
})