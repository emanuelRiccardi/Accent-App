let products = [
    { id: '1', category: 'sofa', name: "product 1", price: 200, img:'../src/assets/imgs/sofa1.png'},
    { id: '2', category: 'sofa', name: "product 2", price: 100, img:'../src/assets/imgs/sofa2.png'},
    { id: '3', category: 'sofa', name: "product 3", price: 300, img:'../src/assets/imgs/sofa3.png'},
    { id: '4', category: 'sofa', name: "product 4", price: 400, img:'../src/assets/imgs/sofa4.png'},
    { id: '5', category: 'table', name: "product 5", price: 500, img:'../src/assets/imgs/table1.png'},
]


export const gFetch = () => new Promise( (res, rej)=>{

    let condition = true
    if (condition) {
        setTimeout(()=>{
            res(products)    
        }, 1000)
    } else {
        rej('error trying to fetch data')
        
    }
})