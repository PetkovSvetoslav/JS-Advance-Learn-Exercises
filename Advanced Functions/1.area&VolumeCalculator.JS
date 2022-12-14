function solve(area, vol, input) {

    let cubes = JSON.parse(input);
    
    let result = [];

    for (const cube of cubes) {
        let cubeArea = area.apply(cube);
        let cubeVolume = vol.apply(cube);

        result.push({area: cubeArea, volume: cubeVolume})
    }
    //1. let result = cubes.map(cube => ({area: area.apply(cube), volume: vol.apply(cube)}));
// return result;
    //ili 2. return  JSON.parse(input).map(cube => ({area: area.apply(cube), volume: vol.apply(cube)}));
    return result;
}