var restify=require("restify");
var pokemonFacade=require("../business/pokemonFacade");
module.exports=function(server){
    
    server.get('/pokemonNearby', fetchPokemonNearby);
    function fetchPokemonNearby(req, res, next) {
        pokemonFacade.fetchPokemonNearby("Antwerp").then(function(r){
            console.log(r);
            res.send(r);
        }).catch(function(err){
            console.log(err)
        })
    }

}