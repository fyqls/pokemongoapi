var q=require("q");
var spawn = require('child_process').spawn;

function fetchPokemonNearby(location){
    var defer=q.defer();
    var cmd="pokecli.py -a ptc -u bluefootvl -p quarty -l Antwerp";

    var python = spawn('python', ['./scripts/pokecli.py','-a', 'ptc','-u', 'bluefootvl', '-p', 'quarty', '-l', 'Antwerp']);
    var data="";
    var times=0;
    python.stdout.on('data', function(res){
        data+=res.toString();
        if(data.indexOf("END_OF_RESPONSE")>-1){
            data=data.replace("\nEND_OF_RESPONSE\n","")
            defer.resolve(cleanJson(data));
        }
    });

    python.stderr.on('data', function(data) {
        console.log(data.toString());
    });

    return defer.promise;
}

function cleanJson(s){
    s = s.replace(/\\n/g, "\\n")  
               .replace(/\\'/g, "\\'")
               .replace(/\\"/g, '\\"')
               .replace(/\\&/g, "\\&")
               .replace(/\\r/g, "\\r")
               .replace(/\\t/g, "\\t")
               .replace(/\\b/g, "\\b")
               .replace(new RegExp("'", 'g'),'"')
               .replace(new RegExp("L", 'g'),'')
               .replace(new RegExp("True", 'g'),'true')
               .replace(new RegExp("False", 'g'),'false')
               .replace(new RegExp('u"', 'g'),'"')
               .replace(new RegExp('nan', 'g'),'"nan"')
               .replace(/\\f/g, "\\f");
    // remove non-printable and other non-valid JSON chars
    s = s.replace(/[\u0000-\u0019]+/g,""); 
    console.log(s)
    return JSON.parse(s);
}
module.exports={
    fetchPokemonNearby:fetchPokemonNearby
}
