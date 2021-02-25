'use strict';

const gulp             = require('gulp');
const server           = require('browser-sync').create();
const postcss          = require('gulp-postcss');
const precss           = require("precss");
const csso             = require("gulp-csso");
const minify           = require('gulp-minify');
const rename           = require('gulp-rename');

gulp.task('css', function () {

	return gulp.src('src/blog.css')
			.pipe(postcss([
				precss()
			]))
			.pipe(csso())
			.pipe(rename({suffix: ".min"}))
			.pipe(gulp.dest('build'))

});

gulp.task('js', function() {

	return gulp.src('src/blog.js')
		.pipe(minify({
			preserveComments: "some",
			ext : {
				min:'.min.js'
			}
		}))
		.pipe(gulp.dest('build'))

});

gulp.task('default', () => {

	server.init({
		proxy: "https://blog.velvetplatform.com/",
		https: true,
		serveStatic: ['.'],
		rewriteRules: [
			{
				match: new RegExp('</body>'),
				fn: () => {
					return `
					<div class="hbspt-form-wrap">
						<div class="hbspt-form-wrap__inner">
							<svg class="hbspt-form-wrap__close" width="24" height="24" viewBox="0 0 24 24"><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z" stroke="#000"/></svg>
							<link href="build/blog.min.css" rel="stylesheet">
							<script src="build/blog.min.js"></script>
						</div>
					</div>
					</body>`;
				}
			}
		],
		files: [
			{
				match: ['build/*'],
				fn: server.reload()
			},
			{
				match: ['src/*.js'],
				fn: gulp.series('js')
			},
			{
				match: ['src/*.css'],
				fn: gulp.series('css')
			}
		]
	});

});