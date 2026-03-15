let catalog=[
    {id: 1, title: "obj 01", category: "toys"},
    {id: 2, title: "obj 02", category: "grocery"},
    {id: 3, title: "obj 03", category: "medical"},
    {id: 4, title: "obj 04", category: "grocery"},
    {id: 5, title: "obj 05", category: "grocery"},
    {id: 6, title: "obj 06", category: "toys"},
    {id: 7, title: "obj 07", category: "medical"},
    {id: 8, title: "obj 08", category: "toys"},
    {id: 9, title: "obj 09", category: "toys"},
    {id: 10, title: "obj 10", category: "toys"}
]

let catelog1={
    1: {category: "toys"},
}

let inventory=[
    {item_id: 1, units: 30},
    {item_id: 2, units: 200},
    {item_id: 3, units: 150},
    {item_id: 5, units: 10},
    {item_id: 9, units: 180}
]


function maxUnitsOfCatalogInventory(catalog, inventory) {
    const totals={}

    for (let i=0;i<inventory.length;i++) {
        let item=inventory[i]
        let product=catalog.find((ele) => {
            return ele.id===item.item_id
        })
        if (product) {
            let category=product.category
            totals[category]=(totals[category]||0)+item.units
        }
    }

    let maxCategory=''
    let maxUnits=0
    let maxCategoryList=[]

    for (let category in totals) {
        if (totals[category]>=maxUnits) {
            maxUnits=totals[category]
            // maxCategory=category
            const obj={
                maxUnits: totals[category],
                maxCategory: category
            }
            maxCategoryList.push(obj)
        }
    }

    return maxCategoryList
}

const result=maxUnitsOfCatalogInventory(catalog, inventory)
console.log("result>>>>>>", result);


//output {}

