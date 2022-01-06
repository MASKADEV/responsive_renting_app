const vehicle_type = document.querySelectorAll('.vehicle');
const input_duration = document.querySelector('.input_duration');
const fuel_type = document.querySelectorAll('.fuel');
const submit = document.querySelector('.send_info');
let total_price, gear_fees, feul_fees, duration, vehicle_price;

vehicle_type.forEach((element) =>
    element.addEventListener('click', (e) => {
        vehicle_selecter(element);
    })
);

function vehicle_selecter(element) {
    switch (element.textContent.trim()) {
        case 'Moto':
            reset();
            moto();
            break;
        case 'Citadine':
            reset();
            citadine();
            break;
        case 'Compact':
            reset();
            compact();
            break;
        case 'Berline':
            reset();
            berline();
            break;
        case 'Utilitaire':
            reset();
            utilitaire();
            break;
        case 'Heavy equipment':
            reset();
            heavyEquipment();
            break;
        case 'Truck':
            reset();
            truck();
            break;
        default:
            console.log('you select nothing');
            break;
    }
}



submit.addEventListener('click', (e) => {
    total_price = (vehicle_price + (vehicle_price * feul_fees) + (vehicle_price * gear_fees)) * input_duration.value;
    alert(`Total Price: ${total_price}`);
})

function reset() {
    document.querySelector('.automatic').style.display = 'block';
    document.querySelector('.manual').style.display = 'block';
    document.querySelector('.essence').style.display = 'block';
    document.querySelector('.diesel').style.display = 'block';
    document.querySelector('.electric').style.display = 'block';
    document.querySelector('.hybrid').style.display = 'block';

}

function moto() {
    console.log('sdfsadf');
    //controle Gear
    document.querySelector('.automatic').style.display = 'none';
    document.querySelector('.manual').style.backgroundColor = '#4784FF';
    document.querySelector('.manual').style.color = 'white';
    document.querySelector('.manual').style.border = 'none';

    //controle Fuel
    document.querySelector('.hybrid').style.display = 'none';
    document.querySelector('.diesel').style.display = 'none';
    vehicle_price = 10;
    fuel_type.forEach((element) => {
        element.addEventListener('click', (e) => {
            switch (element.textContent.trim()) {
                case 'Essence':
                    document.querySelector('.essence').style.backgroundColor = '#4784FF';
                    document.querySelector('.essence').style.color = 'white';
                    document.querySelector('.essence').style.border = 'none'
                    document.querySelector('.electric').style.backgroundColor = 'white';
                    document.querySelector('.electric').style.color = 'black';
                    document.querySelector('.electric').style.border = '2px solid black';
                    feul_fees = 0.14;
                    gear_fees = 0;
                    break;
                case 'Electric':
                    document.querySelector('.electric').style.backgroundColor = '#4784FF';
                    document.querySelector('.electric').style.color = 'white';
                    document.querySelector('.electric').style.border = 'none'
                    document.querySelector('.essence').style.backgroundColor = 'white';
                    document.querySelector('.essence').style.color = 'black';
                    document.querySelector('.essence').style.border = '2px solid black';
                    feul_fees = 0.05;
                    gear_fees = 0;
                    break;
            }
        })
    })
}

function citadine() {

    //controle Gear
    document.querySelector('.automatic').style.display = 'none';
    document.querySelector('.manual').style.backgroundColor = '#4784FF';
    document.querySelector('.manual').style.color = 'white';
    document.querySelector('.manual').style.border = 'none';
    vehicle_price = 12;

    fuel_type.forEach((element) => {
        element.addEventListener('click', (e) => {
            switch (element.textContent.trim()) {
                case 'Essence':
                    document.querySelector('.essence').style.backgroundColor = '#4784FF';
                    document.querySelector('.essence').style.color = 'white';
                    document.querySelector('.essence').style.border = 'none'
                    document.querySelector('.electric').style.backgroundColor = 'white';
                    document.querySelector('.electric').style.color = 'black';
                    document.querySelector('.electric').style.border = '2px solid black';
                    document.querySelector('.hybrid').style.backgroundColor = 'white';
                    document.querySelector('.hybrid').style.color = 'black';
                    document.querySelector('.hybrid').style.border = '2px solid black';
                    document.querySelector('.diesel').style.backgroundColor = 'white';
                    document.querySelector('.diesel').style.color = 'black';
                    document.querySelector('.diesel').style.border = '2px solid black';
                    feul_fees = 0.14;
                    gear_fees = 0;
                    break;
                case 'Electric':
                    document.querySelector('.electric').style.backgroundColor = '#4784FF';
                    document.querySelector('.electric').style.color = 'white';
                    document.querySelector('.electric').style.border = 'none'
                    document.querySelector('.essence').style.backgroundColor = 'white';
                    document.querySelector('.essence').style.color = 'black';
                    document.querySelector('.essence').style.border = '2px solid black';
                    document.querySelector('.hybrid').style.backgroundColor = 'white';
                    document.querySelector('.hybrid').style.color = 'black';
                    document.querySelector('.hybrid').style.border = '2px solid black';
                    document.querySelector('.diesel').style.backgroundColor = 'white';
                    document.querySelector('.diesel').style.color = 'black';
                    document.querySelector('.diesel').style.border = '2px solid black';
                    feul_fees = 0.05;
                    gear_fees = 0;
                    break;
                case 'Hybrid':
                    document.querySelector('.hybrid').style.backgroundColor = '#4784FF';
                    document.querySelector('.hybrid').style.color = 'white';
                    document.querySelector('.hybrid').style.border = 'none'
                    document.querySelector('.essence').style.backgroundColor = 'white';
                    document.querySelector('.essence').style.color = 'black';
                    document.querySelector('.essence').style.border = '2px solid black';
                    document.querySelector('.electric').style.backgroundColor = 'white';
                    document.querySelector('.electric').style.color = 'black';
                    document.querySelector('.electric').style.border = '2px solid black';
                    document.querySelector('.diesel').style.backgroundColor = 'white';
                    document.querySelector('.diesel').style.color = 'black';
                    document.querySelector('.diesel').style.border = '2px solid black';
                    feul_fees = 0.09;
                    gear_fees = 0;
                    break;
                case 'Diesel':
                    document.querySelector('.diesel').style.backgroundColor = '#4784FF';
                    document.querySelector('.diesel').style.color = 'white';
                    document.querySelector('.diesel').style.border = 'none'
                    document.querySelector('.essence').style.backgroundColor = 'white';
                    document.querySelector('.essence').style.color = 'black';
                    document.querySelector('.essence').style.border = '2px solid black';
                    document.querySelector('.hybrid').style.backgroundColor = 'white';
                    document.querySelector('.hybrid').style.color = 'black';
                    document.querySelector('.hybrid').style.border = '2px solid black';
                    document.querySelector('.electric').style.backgroundColor = 'white';
                    document.querySelector('.electric').style.color = 'black';
                    document.querySelector('.electric').style.border = '2px solid black';
                    feul_fees = 0.21;
                    gear_fees = 0;
                    break;
            }
        })
    })
}

function compact() {

    //controle Gear
    document.querySelector('.automatic').style.display = 'none';
    document.querySelector('.manual').style.backgroundColor = '#4784FF';
    document.querySelector('.manual').style.color = 'white';
    document.querySelector('.manual').style.border = 'none';

    document.querySelector('.electric').style.display = 'none';
    vehicle_price = 14;
    fuel_type.forEach((element) => {
        element.addEventListener('click', (e) => {
            switch (element.textContent.trim()) {
                case 'Essence':
                    document.querySelector('.essence').style.backgroundColor = '#4784FF';
                    document.querySelector('.essence').style.color = 'white';
                    document.querySelector('.essence').style.border = 'none'
                    document.querySelector('.electric').style.backgroundColor = 'white';
                    document.querySelector('.electric').style.color = 'black';
                    document.querySelector('.electric').style.border = '2px solid black';
                    document.querySelector('.hybrid').style.backgroundColor = 'white';
                    document.querySelector('.hybrid').style.color = 'black';
                    document.querySelector('.hybrid').style.border = '2px solid black';
                    document.querySelector('.diesel').style.backgroundColor = 'white';
                    document.querySelector('.diesel').style.color = 'black';
                    document.querySelector('.diesel').style.border = '2px solid black';
                    feul_fees = 0.14;
                    gear_fees = 0;
                    break;
                case 'Hybrid':
                    document.querySelector('.hybrid').style.backgroundColor = '#4784FF';
                    document.querySelector('.hybrid').style.color = 'white';
                    document.querySelector('.hybrid').style.border = 'none'
                    document.querySelector('.essence').style.backgroundColor = 'white';
                    document.querySelector('.essence').style.color = 'black';
                    document.querySelector('.essence').style.border = '2px solid black';
                    document.querySelector('.electric').style.backgroundColor = 'white';
                    document.querySelector('.electric').style.color = 'black';
                    document.querySelector('.electric').style.border = '2px solid black';
                    document.querySelector('.diesel').style.backgroundColor = 'white';
                    document.querySelector('.diesel').style.color = 'black';
                    document.querySelector('.diesel').style.border = '2px solid black';
                    feul_fees = 0.09;
                    gear_fees = 0;
                    break;
                case 'Diesel':
                    document.querySelector('.diesel').style.backgroundColor = '#4784FF';
                    document.querySelector('.diesel').style.color = 'white';
                    document.querySelector('.diesel').style.border = 'none'
                    document.querySelector('.essence').style.backgroundColor = 'white';
                    document.querySelector('.essence').style.color = 'black';
                    document.querySelector('.essence').style.border = '2px solid black';
                    document.querySelector('.hybrid').style.backgroundColor = 'white';
                    document.querySelector('.hybrid').style.color = 'black';
                    document.querySelector('.hybrid').style.border = '2px solid black';
                    document.querySelector('.electric').style.backgroundColor = 'white';
                    document.querySelector('.electric').style.color = 'black';
                    document.querySelector('.electric').style.border = '2px solid black';
                    feul_fees = 0.21;
                    gear_fees = 0;
                    break;
            }
        })
    })
}

function berline() {

    //controle Gear
    document.querySelector('.manual').style.display = 'none';
    document.querySelector('.automatic').style.backgroundColor = '#4784FF';
    document.querySelector('.automatic').style.color = 'white';
    document.querySelector('.automatic').style.border = 'none';

    document.querySelector('.electric').style.display = 'none';
    vehicle_price = 20;
    fuel_type.forEach((element) => {
        element.addEventListener('click', (e) => {
            switch (element.textContent.trim()) {
                case 'Essence':
                    document.querySelector('.essence').style.backgroundColor = '#4784FF';
                    document.querySelector('.essence').style.color = 'white';
                    document.querySelector('.essence').style.border = 'none'
                    document.querySelector('.electric').style.backgroundColor = 'white';
                    document.querySelector('.electric').style.color = 'black';
                    document.querySelector('.electric').style.border = '2px solid black';
                    document.querySelector('.hybrid').style.backgroundColor = 'white';
                    document.querySelector('.hybrid').style.color = 'black';
                    document.querySelector('.hybrid').style.border = '2px solid black';
                    document.querySelector('.diesel').style.backgroundColor = 'white';
                    document.querySelector('.diesel').style.color = 'black';
                    document.querySelector('.diesel').style.border = '2px solid black';
                    feul_fees = 0.14;
                    gear_fees = 0.19;
                    break;
                case 'Hybrid':
                    document.querySelector('.hybrid').style.backgroundColor = '#4784FF';
                    document.querySelector('.hybrid').style.color = 'white';
                    document.querySelector('.hybrid').style.border = 'none'
                    document.querySelector('.essence').style.backgroundColor = 'white';
                    document.querySelector('.essence').style.color = 'black';
                    document.querySelector('.essence').style.border = '2px solid black';
                    document.querySelector('.electric').style.backgroundColor = 'white';
                    document.querySelector('.electric').style.color = 'black';
                    document.querySelector('.electric').style.border = '2px solid black';
                    document.querySelector('.diesel').style.backgroundColor = 'white';
                    document.querySelector('.diesel').style.color = 'black';
                    document.querySelector('.diesel').style.border = '2px solid black';
                    feul_fees = 0.09;
                    gear_fees = 0.19;
                    break;
                case 'Diesel':
                    document.querySelector('.diesel').style.backgroundColor = '#4784FF';
                    document.querySelector('.diesel').style.color = 'white';
                    document.querySelector('.diesel').style.border = 'none'
                    document.querySelector('.essence').style.backgroundColor = 'white';
                    document.querySelector('.essence').style.color = 'black';
                    document.querySelector('.essence').style.border = '2px solid black';
                    document.querySelector('.hybrid').style.backgroundColor = 'white';
                    document.querySelector('.hybrid').style.color = 'black';
                    document.querySelector('.hybrid').style.border = '2px solid black';
                    document.querySelector('.electric').style.backgroundColor = 'white';
                    document.querySelector('.electric').style.color = 'black';
                    document.querySelector('.electric').style.border = '2px solid black';
                    feul_fees = 0.21;
                    gear_fees = 0.19;
                    break;
            }
        })
    })
}

function utilitaire() {

    //controle Gear
    document.querySelector('.automatic').style.display = 'none';
    document.querySelector('.manual').style.backgroundColor = '#4784FF';
    document.querySelector('.manual').style.color = 'white';
    document.querySelector('.manual').style.border = 'none';

    document.querySelector('.electric').style.display = 'none';
    document.querySelector('.essence').style.display = 'none';
    document.querySelector('.hybrid').style.display = 'none';
    document.querySelector('.diesel').style.backgroundColor = '#4784FF';
    document.querySelector('.diesel').style.color = 'white';
    document.querySelector('.diesel').style.border = 'none'
    feul_fees = 0.21;
    gear_fees = 0;
    vehicle_price = 16;
}

function heavyEquipment() {

    //controle Gear
    document.querySelector('.automatic').style.display = 'none';
    document.querySelector('.manual').style.backgroundColor = '#4784FF';
    document.querySelector('.manual').style.color = 'white';
    document.querySelector('.manual').style.border = 'none';

    document.querySelector('.electric').style.display = 'none';
    document.querySelector('.hybrid').style.display = 'none';
    vehicle_price = 900;
    fuel_type.forEach((element) => {
        element.addEventListener('click', (e) => {
            switch (element.textContent.trim()) {
                case 'Essence':
                    document.querySelector('.essence').style.backgroundColor = '#4784FF';
                    document.querySelector('.essence').style.color = 'white';
                    document.querySelector('.essence').style.border = 'none'
                    document.querySelector('.electric').style.backgroundColor = 'white';
                    document.querySelector('.electric').style.color = 'black';
                    document.querySelector('.electric').style.border = '2px solid black';
                    document.querySelector('.hybrid').style.backgroundColor = 'white';
                    document.querySelector('.hybrid').style.color = 'black';
                    document.querySelector('.hybrid').style.border = '2px solid black';
                    document.querySelector('.diesel').style.backgroundColor = 'white';
                    document.querySelector('.diesel').style.color = 'black';
                    document.querySelector('.diesel').style.border = '2px solid black';
                    feul_fees = 0.14;
                    gear_fees = 0;
                    break;
                case 'Diesel':
                    document.querySelector('.diesel').style.backgroundColor = '#4784FF';
                    document.querySelector('.diesel').style.color = 'white';
                    document.querySelector('.diesel').style.border = 'none'
                    document.querySelector('.essence').style.backgroundColor = 'white';
                    document.querySelector('.essence').style.color = 'black';
                    document.querySelector('.essence').style.border = '2px solid black';
                    document.querySelector('.hybrid').style.backgroundColor = 'white';
                    document.querySelector('.hybrid').style.color = 'black';
                    document.querySelector('.hybrid').style.border = '2px solid black';
                    document.querySelector('.electric').style.backgroundColor = 'white';
                    document.querySelector('.electric').style.color = 'black';
                    document.querySelector('.electric').style.border = '2px solid black';
                    feul_fees = 0.21;
                    gear_fees = 0;
                    break;
            }
        })
    })
}

function truck() {

    //controle Gear
    document.querySelector('.automatic').style.display = 'none';
    document.querySelector('.manual').style.backgroundColor = '#4784FF';
    document.querySelector('.manual').style.color = 'white';
    document.querySelector('.manual').style.border = 'none';

    document.querySelector('.electric').style.display = 'none';
    document.querySelector('.hybrid').style.display = 'none';
    document.querySelector('.essence').style.display = 'none';

    document.querySelector('.diesel').style.backgroundColor = '#4784FF';
    document.querySelector('.diesel').style.color = 'white';
    document.querySelector('.diesel').style.border = 'none'
    feul_fees = 0.21;
    gear_fees = 0.19;
    vehicle_price = 250;
}