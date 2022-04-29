const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController",()=>{
    test("Requerimiento 1: Calcular todos los explorers en una misión", ()=>{
        const explorersInNode=ExplorerController.getExplorersByMission("node");
        expect(explorersInNode.length).toBe(10);
    });
    test("Requerimiento 2: Obtener el username del explorer en una misión",()=>{
        const explorersInNode=ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorersInNode[0]).toBe("ajolonauta1");
    });
});