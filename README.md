# pokemongoapi
NodeJS REST server that wraps the Mila432's python api (Mila432/Pokemon_Go_API)

currently a dummy account is used

# Getting started
1. Use docker to build the server container:
```
docker build -t pokemongoapi
```
2. Run the container
```
docker run -d -p 8080:8080 pokemongoapi
```
3. Test the container
```
curl http://localhost:8080/pokemonNearby
```
# Endpoints
GET http://localhost:8080/pokemonNearby (currently only fetches pokemons on a fixed location)
