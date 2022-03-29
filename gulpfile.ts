import gulp from 'gulp'
import sourcemaps from 'gulp-sourcemaps'
import rename from 'gulp-rename'
import sass from 'gulp-sass'
import typescript from 'gulp-typescript'
import minify from 'gulp-minify'

const tsProject = typescript.createProject('tsconfig.json')

gulp.task('scss', () => {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(require('sass'))({ outputStyle: 'compressed', precision: 2, sync: true,  }))
    .pipe(rename({ suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'))
})

gulp.task('ts', () => {
  return gulp.src('')
    .pipe(gulp.dest('assets/js'))
})

gulp.task('html', () => {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('.', {sourcemaps: true }))
})

gulp.task('default', () => {
  gulp.watch('./src/**/*.scss', gulp.parallel('scss'))
  gulp.watch('./src/**/*.ts', gulp.series('ts'))
  gulp.watch(['./src/**/*.html', './src/**/*.htm'], gulp.parallel('html'))
})