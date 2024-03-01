let list = [];

function AddStuff(_name, _price) {
    let newStuff = {
        Name: _name,
        Price: _price
    };
    list.push(newStuff);
    console.log(list);
}

function ViewTotal(list) {
    total = 0;
    list.forEach(element => {
        total += element.Price;
    });
    console.log(list);
    console.log(total);
}