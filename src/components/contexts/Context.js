import { createContext, useState } from "react";

const Contexts = createContext()
const determineHousesIds = () => {
    const cols = ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']
    const rows = [8, 7, 6, 5, 4, 3, 2, 1]
    const allHousesIds = []
    function oddOrEven(number) {
        let oddOrEven = null
        number % 2 === 0 ? oddOrEven = 'even' : oddOrEven = 'odd'
        return oddOrEven
    }
    for (let i = 0; i < rows.length;) {
        const checkEvenOrOdd = oddOrEven(i)
        cols.forEach((item) => {
            let newHouseObj = {}
            newHouseObj.id = `${item}${rows[i]}`
            allHousesIds.push(newHouseObj)
        });
    }
    return allHousesIds
}

const ContextsProvider = ({ children }) => {
    return (
        <Contexts.Provider value={{ determineHousesIds }}>
            {children}
        </Contexts.Provider>
    )
}

export { Contexts, ContextsProvider }