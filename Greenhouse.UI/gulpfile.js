var gulp = require('gulp')

var paths = {
    webroot: './wwwroot/',
    bulmaCss: './node_modules/bulma/css/bulma.css'
};

paths.bulmaDest = paths.webroot + 'css/';

gulp.task('build:bulma', function (done) {     // Define a task called build.bulma
    console.log('Copying Bulma Cascading Style Sheets...')
    gulp.src(paths.bulmaCss)           // Looks for bulma css file
        .pipe(gulp.dest(paths.bulmaDest)); // Put it in the wwwroot.
    done();
});