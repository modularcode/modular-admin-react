const path = require('path');

module.exports = {
  ROOT_DIR: path.resolve(__dirname, "../"),               // Root dir
  NPM_DIR:   path.resolve(__dirname, "../node_modules"),  // Npm dir
  PUBLIC_DIR: path.resolve(__dirname, "../public"),       // Build destination
  SRC_DIR: path.resolve(__dirname, "../src"),             // Source files dir

  CLIENT_DIR: path.resolve(__dirname, "../src/client"),   // Client source files dir
  SERVER_DIR: path.resolve(__dirname, "../src/server"),   // Server source files dir

  DIST_DIR_CLIENT: path.resolve(__dirname, "../public/client"),  // Client Build destination
};
