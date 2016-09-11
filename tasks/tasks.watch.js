var gulp = require("gulp"),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    variables = require("./variables");

// Watching
gulp.task("watch", ["build"], function () {
    gulp.watch("src/**/*.scss", ["sass"]);
    gulp.watch("src/**/*.html", reload);
    gulp.watch("src/**/*.js", reload);
    gulp.watch("index.html", reload);
});

// Browsersync
gulp.task("browser:sync", ["nodemon"], function () {
    browserSync.init(null, {
        proxy: variables.misc.browserSync.proxy
    })
});