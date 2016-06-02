# vectortodo

    -client/  //Client side (html, css, javascript)
        -main.js //Client side JS not relating to a specific template or page section
        -main.html //Entry point. It imports the rest of the app. Contains the HEAD of our html app.
        -main.styl //page styling

    -imports/ //Code imported by other parts of the app
        -api/  //Data related code
            -tasks.js // Define the database for the rest of the app to use
        -ui/   //Page templates, "views"
            -body.html // The encapsulating page body
            -body.js // client side JS related to the body "template"
            -task.html // View Template for individual "Tasks"
            -task.js // client side JS related to the Task template

    -server/  //Server side (node javascript)
    -public/ //MultiMedia (images, fonts, etc)