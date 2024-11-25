const gameData = [
    {
        id: 1,
        gameName: "Duck Hunt",
        gameThumbnail: "thumbnail/duck_hunt.png",
        gamelocation: "game/duck-hunt-game/dist/index.html"
    },
    {
        id: 2,
        gameName: "Build Lighthouse",
        gameThumbnail: "thumbnail/lighthouse.png",
        gamelocation: "game/gameyou-must-build-a-lighthouse/dist/index.html"
    },
    {
        id: 3,
        gameName: "Candy Crush",
        gameThumbnail: "thumbnail/candy_crush.png",
        gamelocation: "game/candy-crush-master/index.html"
    },
    {
        id: 4,
        gameName: "Puzzel",
        gameThumbnail: "thumbnail/puzzel.png",
        gamelocation: "game/retro-dungeon-maze-puzzle/dist/index.html"
    },
    {
        id: 5,
        gameName: "Plank Man",
        gameThumbnail: "thumbnail/plank_man.png",
        gamelocation: "game/plankman-a-css-game/dist/index.html"
    },
    
    {
        id: 6,
        gameName: "Table Tennis",
        gameThumbnail: "thumbnail/table_tennis.png",
        gamelocation: "game/table-tennis-game/dist/index.html"
    },
]

gameCard = "";
randomCard = Math.floor(Math.random() * 6);

gameData.map((elem)=>{
   if(elem.id == randomCard){
    gameCard += `
              <div class="w-[400px] flex justify-center items-center flex-row rounded-xl h-[120px] bg-[#A8D5E3] p-5">
              <h1 class="font-semibold text-[2vw]">AD</h1>
          </div>
            `;
   }else{
    gameCard += `
    <div class="w-[400px] flex justify-start items-center flex-row rounded-xl h-[120px] bg-[#A8D5E3] p-5">
            <img class="w-[100px] h-[100px] rounded-xl mr-7" src="${elem.gameThumbnail}" alt="Game Thumbnail"/>
            <div>
              <h1 class="font-semibold text-[2 vw]">${elem.gameName}</h1>
              <a href="${elem.gamelocation}" target="_black" class=" mt-2">Play Now</a>
            </div>
          </div>`;
   }
})

const gameCarddom = document.getElementById('gamecardContainer')
gameCarddom.innerHTML = gameCard;
