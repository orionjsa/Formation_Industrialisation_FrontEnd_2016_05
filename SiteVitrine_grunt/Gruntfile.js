/**
 * Created by Administrateur on 25/05/2016.
 */

module.exports = function(grunt){
    grunt.initConfig({
        useminPrepare: {
          html: 'index.html'
        },

        usemin: {
            html: 'dist/index.html'
        },

        copy: {
            build: {
                files: [
                    {expand: true, src: 'index.html', dest: 'dist'},
                    {expand: true, cwd: 'bower_components/bootstrap', src: 'fonts/*', dest: 'dist'},
                ]
            }
        },

        clean: {
            clean_dist: ["dist"],
            clean_tmp: [".tmp"]
        },
// ajoute un numero au nom de fichier pour forcer le rechargement du static, il invalide le cache
        rev: {
            files: {
                src: ['dist/js/app.min.js', 'dist/css/app.min.css']
            }
        },
    });

    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-rev');

    grunt.registerTask('build', [
        'clean:clean_dist',
        'useminPrepare',
        'copy:build',
        'concat:generated',
        'uglify:generated',
        'cssmin:generated',
        'rev',
        'usemin',
        'clean:clean_tmp'
    ]);
    // en ligne de commande >grunt build pour generer le repertoire dist
};