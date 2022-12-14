function autoEngineeringCompany(input) {
    let cars = new Map();
    
    input.forEach(element => {
        [carBrand, carModel, producedCars] = element.split(' | ');
        if (cars.has(carBrand)) {
            let carModels = cars.get(carBrand);
            if (carModels.has(carModel)) {
                let qtt = carModels.get(carModel) + Number(producedCars);
                carModels.set(carModel, qtt);
            }
            else {
                carModels.set(carModel, Number(producedCars))
            }
        }
        else {
            let newBrand = new Map();
            newBrand.set(carModel, Number(producedCars));
            cars.set(carBrand, newBrand);
        }
    });

    for (let [carBrand, carModels] of cars) {
        console.log(carBrand);
        for (let [carModel, producedCars] of carModels) {
            console.log(`###${carModel} -> ${producedCars}`)
        }
    }
}
