'use strict';

const children = document.querySelectorAll('.cardStyle');
const orderId = document.querySelector('#orderId');
const noOrderId = document.querySelector('.no-order-ID');
// let orderReceived;
// let sauceAdded;
// let cheeseAdded;
// let toppingsAdded;
// let secondLayerAdded;
// let pizzaBaked;
// let oreganoAdded;
// let packageReceived;
// let outForDelivery;
let orderedOnce = 0;


const removeStatus = () => {
    children.forEach(val => val.classList.remove('status-clear'));
}

const orderReceived = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 2000)
    })
}
const sauceAdded = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 8000)
    })
}
const cheeseAdded = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 5000)
    })
}
const toppingsAdded = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 5000)
    })
}
const secondLayerAdded = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 5000)
    })
}
const pizzaBaked = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 5000)
    });
}
const oreganoAdded = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 5000)
    })
}
const packageReceived = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 5000)
    })
}
const outForDelivery = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000)
    })
}

const orderPizza = () => {
    let givenID = orderId.value;
    if(givenID === ""){
        noOrderId.style.display = 'block';
        return;
    }
    if(orderedOnce){
        removeStatus();
    }
    noOrderId.style.display = 'none';
    orderedOnce = 1;
    // orderReceived = setTimeout(() => {
    //     children[0].classList.add('status-clear');
    //     sauceAdded = setTimeout(() => {
    //         children[1].classList.add('status-clear');
    //         cheeseAdded = setTimeout(() => {
    //             children[2].classList.add('status-clear');
    //             toppingsAdded = setTimeout(() => {
    //                 children[3].classList.add('status-clear');
    //                 secondLayerAdded = setTimeout(() => {
    //                     children[4].classList.add('status-clear');
    //                     pizzaBaked = setTimeout(() => {
    //                         children[5].classList.add('status-clear');
    //                         oreganoAdded = setTimeout(() => {
    //                             children[6].classList.add('status-clear');
    //                             packageReceived = setTimeout(() => {
    //                                 children[7].classList.add('status-clear');
    //                                 outForDelivery = setTimeout(() => {
    //                                     children[8].classList.add('status-clear');
    //                                 },1000)
    //                             },2000)
    //                         },8000)
    //                     },15000)
    //                 },5000)
    //             },12000)
    //         },5000)
    //     },10000)
    // },2000)

    orderReceived().then(() => {
        children[0].classList.add('status-clear');
        return sauceAdded();
    }).then(() => {
        children[1].classList.add('status-clear');
        return cheeseAdded();
    }).then(() => {
        children[2].classList.add('status-clear');
        return toppingsAdded();
    }).then(() => {
        children[3].classList.add('status-clear');
        return secondLayerAdded();
    }).then(() => {
        children[4].classList.add('status-clear');
        return pizzaBaked();
    }).then(() => {
        children[5].classList.add('status-clear');
        return oreganoAdded();
    }).then(() => {
        children[6].classList.add('status-clear');
        return packageReceived();
    }).then(() => {
        children[7].classList.add('status-clear');
        return outForDelivery();
    }).then(() => {
        children[8].classList.add('status-clear');
    }).catch(err => console.log(err));
}


/*
	Order placed 
	After 2s -> Chef received the order and started preparing
	After 10s -> Pizza Sauce added
	After 5s -> First layer of cheese added
	After 12s -> Toppings added
	After 5s -> Second layer of cheese added
	After 15s -> Pizza baked!
	After 8s -> Oregano added and packed
	After 2s -> Package received at counter
	The order is ready and handed over to the Zomato guy!
*/