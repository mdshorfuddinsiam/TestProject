var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
postcss = require("gulp-postcss");
autoprefixer = require("autoprefixer");
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
cssbeautify = require('gulp-cssbeautify');
var beautify = require('gulp-beautify');


//_______ task for scss folder to css main style 
gulp.task('watch', function() {
	console.log('Command executed successfully compiling scss in assets.');
	 return gulp.src('Rejoin/assets/scss/**/*.scss') 
		.pipe(sourcemaps.init())                       
		.pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
		.pipe(sourcemaps.write(''))   
		.pipe(gulp.dest('Rejoin/assets/css'))
		.pipe(browserSync.reload({
		  stream: true
	}))
})

//_______task for dark
gulp.task('dark', function(){
   return gulp.src('Rejoin/assets/css/dark-style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Rejoin/assets/css'));

})

//_______task for transparent
gulp.task('transparent', function(){
        return gulp.src('Rejoin/assets/css/transparent-style.scss')
             .pipe(sourcemaps.init())
             .pipe(sass())
		     .pipe(beautify.css({ indent_size: 4 }))	
             .pipe(sourcemaps.write('.'))
             .pipe(gulp.dest('Rejoin/assets/css'));
     
     })


//_______task for admin-custom
gulp.task('admin', function(){
   return gulp.src('Rejoin/assets/css/admin-custom.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Rejoin/assets/css'));
		
})

//_______task for color10
gulp.task('color10', function(){
   return gulp.src('Rejoin/assets/color-skins/color-skins/color10.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Rejoin/assets/color-skins/color-skins'));
		
})


//_______ task for Plugins scss folder to Plugins css main style 
gulp.task('plugins', function(){
	console.log('Command executed successfully compiling SCSS in plugins.');
	return gulp.src('Rejoin/assets/plugins/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(beautify.css({ indent_size: 4 }))	
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('Rejoin/assets/plugins'));
});


//_______ task for Plugins scss folder to Plugins css main style 
gulp.task('plugins-sub', function(){
	console.log('Command executed successfully compiling SCSS in plugins.');
	return gulp.src('Rejoin/assets/plugins/**/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(beautify.css({ indent_size: 4 }))	
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('Rejoin/assets/plugins'));
});


gulp.task('default', gulp.series('plugins', 'plugins-sub'))