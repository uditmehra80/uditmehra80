const Obj = {
    India: {
        Mp: ["jbp", "nsp"],
        Up: ["agra", "banaras"],
    },
    Us: {
        Us_state1: ["Us_state11", "Us_state12"],
        Us_state2: ["Us_state21", "Us_state22"],
    },
    London: {
        London_state1: ["London_state11", "London_state12"],
        London_state2: ["London_state21", "London_state22", "jbp"],
    }
}

//object of object to array
const dataEntries = Object.entries(Obj);
console.log(dataEntries)

const GetCitydata = (city) => {
    const result = []

    for (const [country, countryData] of dataEntries) {
        console.log(country)
        console.log(countryData)
        const countryEntries = Object.entries(countryData);
        for (const [state, stateData] of countryEntries) {
            console.log(state)
            console.log(stateData)
            if (stateData.includes(city)) {
                result.push({ city, state, country })
            }
        }
    }
    console.log(result)
}

GetCitydata("jbp");