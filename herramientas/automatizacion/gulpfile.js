const gulp = require('gulp');

gulp.task('start', gulp.series("build", "serve"), function(done) {
    done();
});

