module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		clean: ['dist/js', 'dist/css'],
		uglify: {
			options: {
				preserveComments: 'some',
				sourceMap: true
			},
			build: {
				expand: true,
				cwd: 'src/tinytoggle/js',
				src: ['**/*.js', ['!**/*.min.js']],
				dest: 'dist/js',
				ext: '.min.js',
			}
		},
		cssmin: {
			options: {
				keepBreaks: true
			},
			build: {
				expand: true,
				cwd: 'src/tinytoggle/css',
				src: ['**/*.css', ['!**/*.min.css']],
				dest: 'dist/css',
				ext: '.min.css',
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['clean', 'uglify', 'cssmin']);

};
