module.exports = function (grunt) {
	grunt.registerTask('default', [
		'shell:buildFrontendDev',
		'clean:dev',
		'copy:dev'
	]);
};
