const ExplorerService=require("./../services/ExplorerServices");
const FizzBuzzService=require("./../services/FizzbuzzService");
const Reader=require("./../utils/Reader");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers=Reader.readJsonFile("explorers.json");
        const explorerbymission=ExplorerService.filterByMission(explorers,mission);
        return explorerbymission;
    }
    static getExplorersUsernamesByMission(mission){
        const explorers=Reader.readJsonFile("explorers.json");
        const explorerusernamebymission=ExplorerService.getExplorersUsernamesByMission(explorers,mission);
        return explorerusernamebymission;
    }
    static getExplorersAmonutByMission(mission){
        const explorers=Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers,mission);
        
    }
}
module.exports=ExplorerController;