const NobleWinrt = require("..");

const bindings = new NobleWinrt();

bindings.once("stateChange", (state) => {
    console.debug("state:", state);
    bindings.cleanUp();
});
bindings.init();
