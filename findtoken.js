/* displays a short summary of actors in the game and displays a specific actor if the id matches */

Hooks.on("pauseGame", function () {
  let searchID = "FcBP53ETJwSFkePC"; // enter id here
  // let actors = game.actors;
  // console.log(game);
  // console.log(game.canvas.scene.tokens);
  // console.log(actors);
  // console.log(typeof actors);
  // console.log(actors.length);
  game.actors.forEach((actor) => {
    console.log(
      "Actor [" + actor.type + '] "' + actor.name + '" has id: ' + actor._id
    );
    if (actor.id == searchID) {
      console.log(actor);
    }
  });

  if (game.canvas.scene !== null && game.canvas.scene.tokens !== null) {
    game.canvas.scene.tokens.forEach((token) => {
      console.log('Token "' + token.name + '" has id: ' + token.id);
      if (token.id == searchID) {
        console.log(token);
      }
    });
  }
});
