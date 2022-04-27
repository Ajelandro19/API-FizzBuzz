const ExplorerService = require("./../../lib/services/ExplorerServices");

describe("Tests para ExplorerService",()=>{
    test("Requerimiento 1: Calcular todos los explorers en una misión", ()=>{
        const explorers =[{mission: "node"}];
        const explorersInNode=ExplorerService.filterByMission(explorers,"node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Requerimiento 2: Obtener el username del explorer en una misión",()=>{
        const explorers =[{mission: "node", githubUsername: "Ajelandro"}];
        const explorersInNode=ExplorerService.getExplorersUsernamesByMission(explorers,"node");
        expect(explorersInNode[0]).toBe("Ajelandro");
    });
});