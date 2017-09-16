/**
 * Created by gferraro on 26/02/2017.
 */

module.exports = function(grunt){

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-connect");

    grunt.initConfig({
        site: 'site',
        watch : {
             files:['site/**/*.*']
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    '<%= site %>/css/app.css': '<%= site %>/sass/app.scss'     // 'destination': 'source'
                }
            }
        },
        connect: {
            server: {
                options: {
                    livereload: true,
                    port: 8000,
                    hostname: 'localhost'
                }
            }
        }
    });
    grunt.registerTask("sass",["sass"]);


    grunt.registerTask("serve",["connect:server","watch"]);
};