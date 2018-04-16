/**
*   The main application class.
*   @class MyApp
*/
export class MyApp {
    /**
    *   @static
    *   @method start
    *   @param {any} canvas
    */
    static start(canvas){
        console.log("CANVAS: ");
        console.log(canvas);
    }
}

MyApp.start(document.getElementById('app-canvas'));
