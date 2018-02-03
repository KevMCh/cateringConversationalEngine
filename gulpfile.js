var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("pre-install", shell.task([
      "npm install -g nodemon"
]));

gulp.task("conversational-engine", shell.task("nodemon ./bin/www"));
