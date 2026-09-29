
if (typeof gdjs.evtsExt__Platformer_test_extension__PlayerEvents !== "undefined") {
  gdjs.evtsExt__Platformer_test_extension__PlayerEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Platformer_test_extension__PlayerEvents = {};
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.idToCallbackMap = new Map();
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1= [];
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2= [];
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects3= [];
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects4= [];
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDWaterObjects1= [];
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDWaterObjects2= [];
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDWaterObjects3= [];
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDWaterObjects4= [];


gdjs.evtsExt__Platformer_test_extension__PlayerEvents.mapOfGDgdjs_9546evtsExt_9595_9595Platformer_9595test_9595extension_9595_9595PlayerEvents_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2});
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.mapOfGDgdjs_9546evtsExt_9595_9595Platformer_9595test_9595extension_9595_9595PlayerEvents_9546GDWaterObjects2Objects = Hashtable.newFrom({"Water": gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDWaterObjects2});
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.mapOfGDgdjs_9546evtsExt_9595_9595Platformer_9595test_9595extension_9595_9595PlayerEvents_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1});
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.mapOfGDgdjs_9546evtsExt_9595_9595Platformer_9595test_9595extension_9595_9595PlayerEvents_9546GDWaterObjects1Objects = Hashtable.newFrom({"Water": gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDWaterObjects1});
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Water"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDWaterObjects2);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__Platformer_test_extension__PlayerEvents.mapOfGDgdjs_9546evtsExt_9595_9595Platformer_9595test_9595extension_9595_9595PlayerEvents_9546GDPlayerObjects2Objects, gdjs.evtsExt__Platformer_test_extension__PlayerEvents.mapOfGDgdjs_9546evtsExt_9595_9595Platformer_9595test_9595extension_9595_9595PlayerEvents_9546GDWaterObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).ConfigureAcceleration(400, "water", eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).ConfigureGravity(500, "water", eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).ConfigureMaxFallSpeed(800, "water", eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).ConfigureMaxSpeed(900, "water", eventsFunctionContext);
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Water"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDWaterObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__Platformer_test_extension__PlayerEvents.mapOfGDgdjs_9546evtsExt_9595_9595Platformer_9595test_9595extension_9595_9595PlayerEvents_9546GDPlayerObjects1Objects, gdjs.evtsExt__Platformer_test_extension__PlayerEvents.mapOfGDgdjs_9546evtsExt_9595_9595Platformer_9595test_9595extension_9595_9595PlayerEvents_9546GDWaterObjects1Objects, true, runtimeScene, false);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).RevertConfiguration("water", eventsFunctionContext);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList1 = function(runtimeScene, eventsFunctionContext) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerObject")).getCurrentSpeed() > 1600 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[k] = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "OverMaxSpeed.wav", 5, false, 75, 1);
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerObject")).getCurrentSpeed() < -1600 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1[k] = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1.length = k;
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "OverMaxSpeed.wav", 5, false, 75, 1);
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList2 = function(runtimeScene, eventsFunctionContext) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerObject")).isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[k] = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("jump");
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerObject")).isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[k] = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length = k;
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("run");
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerObject")).isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[k] = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length = k;
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("run");
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerObject")).isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[k] = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length = k;
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("fall");
}
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1);
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("idle");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList3 = function(runtimeScene, eventsFunctionContext) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects3);
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("DiveDash")).SimulateDiveKey(eventsFunctionContext);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "DiveSFX.wav", 4, false, 100, 1);
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "LB", eventsFunctionContext);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects3);
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("DiveDash")).SimulateDiveKey(eventsFunctionContext);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "DiveSFX.wav", 4, false, 100, 1);
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "L1", eventsFunctionContext);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2);
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("DiveDash")).SimulateDiveKey(eventsFunctionContext);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "DiveSFX.wav", 4, false, 100, 1);
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList4 = function(runtimeScene, eventsFunctionContext) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "divejump") <= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerObject")).isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[k] = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).ConfigureGravity(200, "divejump", eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerObject")).setJumpSpeed(900);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "divejump") > 0.5;
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1);
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).RevertConfiguration("divejump", eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerObject")).setJumpSpeed(700);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList5 = function(runtimeScene, eventsFunctionContext) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("DiveDash")).IsDiving(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[k] = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).ConfigureMaxSpeed(3000, "dive", eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).ConfigureAcceleration(2048, "dive", eventsFunctionContext);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "divejump");
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2);
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerObject")).setMaxSpeed(1500);
}
}
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerObject")).setAcceleration(800);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList4(runtimeScene, eventsFunctionContext);
}

}

};gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList5(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList7 = function(runtimeScene, eventsFunctionContext) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects3);
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("HorizontalDash")).SimulateDashKey(eventsFunctionContext);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "RB", eventsFunctionContext);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects3);
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("HorizontalDash")).SimulateDashKey(eventsFunctionContext);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "R1", eventsFunctionContext);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2);
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("HorizontalDash")).SimulateDashKey(eventsFunctionContext);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.evtsExt__Platformer_test_extension__PlayerEvents.asyncCallback18924124 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects3);

{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("HorizontalDash")).AbortDash(eventsFunctionContext);
}
}
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.idToCallbackMap.set(18924124, gdjs.evtsExt__Platformer_test_extension__PlayerEvents.asyncCallback18924124);
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.evtsExt__Platformer_test_extension__PlayerEvents.asyncCallback18924124(runtimeScene, eventsFunctionContext, asyncObjectsList)), 18924124, asyncObjectsList);
}
}

}


};gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList9 = function(runtimeScene, eventsFunctionContext) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("HorizontalDash")).IsDashing(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[k] = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).ConfigureMaxSpeed(2500, "dash", eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).ConfigureAcceleration(3000, "dash", eventsFunctionContext);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "DashSFX.wav", 4, false, 100, 1);
}

{ //Subevents
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1);
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerObject")).setMaxSpeed(1500);
}
}
{for(var i = 0, len = gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerObject")).setAcceleration(800);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList7(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList9(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList1(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList6(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList10(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__Platformer_test_extension__PlayerEvents.func = function(runtimeScene, Player, DiveDash, HorizontalDash, PlatformerConfigurationStack, PlatformerObject, Water, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Player": Player
, "Water": Water
},
  _objectArraysMap: {
"Player": gdjs.objectsListsToArray(Player)
, "Water": gdjs.objectsListsToArray(Water)
},
  _behaviorNamesMap: {
"DiveDash": DiveDash
, "HorizontalDash": HorizontalDash
, "PlatformerConfigurationStack": PlatformerConfigurationStack
, "PlatformerObject": PlatformerObject
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Platformer_test_extension"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Platformer_test_extension"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1.length = 0;
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length = 0;
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects3.length = 0;
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects4.length = 0;
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDWaterObjects1.length = 0;
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDWaterObjects2.length = 0;
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDWaterObjects3.length = 0;
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDWaterObjects4.length = 0;

gdjs.evtsExt__Platformer_test_extension__PlayerEvents.eventsList11(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects1.length = 0;
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects2.length = 0;
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects3.length = 0;
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDPlayerObjects4.length = 0;
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDWaterObjects1.length = 0;
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDWaterObjects2.length = 0;
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDWaterObjects3.length = 0;
gdjs.evtsExt__Platformer_test_extension__PlayerEvents.GDWaterObjects4.length = 0;


return;
}

gdjs.evtsExt__Platformer_test_extension__PlayerEvents.registeredGdjsCallbacks = [];