module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './'
                }
            }
        },
        typescript: {
            base: {
                src: ['src/**/*.ts'],
                dest: 'build/js/',
                options: {
                    module: 'amd',
                    target: 'es5',
                    base_path:'src/'
                }
            }
        },
        watch: {
            files: 'src/**/*.ts',
            tasks: ['typescript']
        },
        open: {
            dev: {
                path: 'http://localhost:8080/build/index.html'
            }
        }
    });
 
    grunt.registerTask('default', ['connect', 'open', 'watch']);
 
}