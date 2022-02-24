    const cards =[
        {
            name: 'cheeseburguer',
            img: 'src/images/cheeseburguer.png'
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
            name: 'cheeseburguer',
            img: 'src/images/cheeseburguer.png'
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

    cards.sort( () => 0.5-Math.random() )
    //poderia colocar argumentos, mas como ele não usaria para comparar nesse caso, não é necessário

    console.log(cards)

    function createBoard(){
        for(let i = 0; i<cards.length; i++){
            console.log('src/images/' + cards[i].name + '.png')
        }
    }

    createBoard()