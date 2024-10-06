/* displays a short summary of actors in the game and displays a specific actor if the id matches */

Hooks.on("pauseGame", function () {
  let searchID = "F4kcm3xSTLZLrk5q"; // enter id here
  console.log(
    "---------------------------------------------------------- FIND ACTOR(DELTA)/TOKEN BY ID --------------------------------------------------------------------"
  );
  console.log("Searching for id: " + searchID);
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
    if (actor.uuid.includes(searchID)) {
      console.log(actor);
    }
  });

  if (game.canvas.scene !== null && game.canvas.scene.tokens !== null) {
    game.canvas.scene.tokens.forEach((token) => {
      console.log(
        'Token "' +
          token.name +
          '" has id: \n' +
          token.id +
          "\nActorDelta: \n" +
          token.delta.id
      );
      if (token.id == searchID) {
        console.log(token);
      }
      if (token.uuid.includes(searchID)) {
        console.log(token);
      }
      if (token.delta !== null && token.delta.id == searchID) {
        console.log(token);
      }
      if (token.delta.uuid.includes(searchID)) {
        console.log(token);
      }
    });
  }
  console.log(
    "---------------------------------------------------------- FIND ACTOR(DELTA)/TOKEN BY ID --------------------------------------------------------------------"
  );
});
