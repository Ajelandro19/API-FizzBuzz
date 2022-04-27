const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Tests para FizzBuzzService",()=>{
    test("Requerimiento: Obtener el trick de los explorers", ()=>{
        const explorer1 = {name: "Explorer1", score: 1}
        const Fizz1=FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 

        const explorer3 = {name: "Explorer3", score: 3}
        const Fizz2= FizzbuzzService.applyValidationInExplorer(explorer3) // {name: "Explorer3", score: 3, trick: "FIZZ"}

        const explorer5 = {name: "Explorer5", score: 5}
        const Fizz3=FizzbuzzService.applyValidationInExplorer(explorer5) // {name: "Explorer5", score: 5, trick: "BUZZ"}

        const explorer15 = {name: "Explorer15", score: 15}
        const Fizz4=FizzbuzzService.applyValidationInExplorer(explorer15)
    
        expect(Fizz1.trick).toBe(1);
        expect(Fizz2.trick).toBe("FIZZ");
        expect(Fizz3.trick).toBe("BUZZ");
        expect(Fizz4.trick).toBe("FIZZBUZZ");
    });
});