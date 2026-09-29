
gdjs.evtsExt__Platformer_test_extension__thing = gdjs.evtsExt__Platformer_test_extension__thing || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__Platformer_test_extension__thing.thing = class thing extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._objectData = {};
    
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  

  

  
}

// Methods:

gdjs.evtsExt__Platformer_test_extension__thing.thing.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("Platformer_test_extension::thing", gdjs.evtsExt__Platformer_test_extension__thing.thing);
