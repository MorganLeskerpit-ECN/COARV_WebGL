document.addEventListener("DOMContentLoaded", function() {
    new Game('renderCanvas');
}, false);

Game = function(canvasId) {

    //Canvas et engine défini ici
    var canvas = document.getElementById(canvasId);
    var engine = new BABYLON.Engine(canvas, true);
    var _this = this;

    //On initialise la scène avec une fonction associée à l'objet Game
    this.scene = this._initScene(engine);

    //Appel des autres objets
    var _player = new Player(_this, canvas);
    var _arena = new Arena(_this);

    //Permet au jeu de tourner
    engine.runRenderLoop(function () {
        _this.scene.render();
    });

    //Ajuste la vue 3D si la fenetre est agrandie ou diminuée
    window.addEventListener("resize", function() {
        if (engine) {
            engine.resize();
        }
    }, false);
};

Game.prototype = {
    //Prototype d'initialisation de la scène
    _initScene : function(engine) {
        var scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color3(0, 0, 0);
        return scene;
    }
}