let products = [
    { id: '1', category: 'sofa', name: "product 1", price: 123, img:'../src/assets/imgs/sofa1.png'},
    { id: '2', category: 'sofa', name: "product 2", price: 123, img:'../src/assets/imgs/sofa2.png'},
    { id: '3', category: 'sofa', name: "product 3", price: 123, img:'../src/assets/imgs/sofa3.png'},
    { id: '4', category: 'sofa', name: "product 4", price: 123, img:'../src/assets/imgs/sofa4.png'},
]


export const gFetch = () => new Promise( (res, rej)=>{

    let condition = true
    if (condition) {
        setTimeout(()=>{
            res(products)    
        }, 2000)
    } else {
        rej('error trying to fetch data')
        
    }
})


export const gFetch1 = () => new Promise( (res, rej) =>{
    let condition = true
    if (condition) {
        setTimeout(()=>{
            res(products[1])    
        }, 2000)
    } else {
        rej('error trying to fetch item detail')
        
    }
})