gdjs.setupCode = {};
gdjs.setupCode.localVariables = [];
gdjs.setupCode.idToCallbackMap = new Map();
gdjs.setupCode.GDthing2Objects1= [];
gdjs.setupCode.GDthing2Objects2= [];
gdjs.setupCode.GDthingObjects1= [];
gdjs.setupCode.GDthingObjects2= [];
gdjs.setupCode.GDkeyboard_9595_9595idkObjects1= [];
gdjs.setupCode.GDkeyboard_9595_9595idkObjects2= [];
gdjs.setupCode.GDXboxController_9595_9595_9595Objects1= [];
gdjs.setupCode.GDXboxController_9595_9595_9595Objects2= [];
gdjs.setupCode.GDkmObjects1= [];
gdjs.setupCode.GDkmObjects2= [];
gdjs.setupCode.GDxbObjects1= [];
gdjs.setupCode.GDxbObjects2= [];
gdjs.setupCode.GDjasonstation_9595_9595_9595_9595_9595Objects1= [];
gdjs.setupCode.GDjasonstation_9595_9595_9595_9595_9595Objects2= [];
gdjs.setupCode.GDpsObjects1= [];
gdjs.setupCode.GDpsObjects2= [];
gdjs.setupCode.GDplayerObjects1= [];
gdjs.setupCode.GDplayerObjects2= [];
gdjs.setupCode.GDplayerposxObjects1= [];
gdjs.setupCode.GDplayerposxObjects2= [];
gdjs.setupCode.GDplayerposyObjects1= [];
gdjs.setupCode.GDplayerposyObjects2= [];
gdjs.setupCode.GDspedometerObjects1= [];
gdjs.setupCode.GDspedometerObjects2= [];
gdjs.setupCode.GDsecretthe2ndObjects1= [];
gdjs.setupCode.GDsecretthe2ndObjects2= [];
gdjs.setupCode.GDdebugbgObjects1= [];
gdjs.setupCode.GDdebugbgObjects2= [];
gdjs.setupCode.GDgameinfoObjects1= [];
gdjs.setupCode.GDgameinfoObjects2= [];
gdjs.setupCode.GDWaterObjects1= [];
gdjs.setupCode.GDWaterObjects2= [];
gdjs.setupCode.GDlogoObjects1= [];
gdjs.setupCode.GDlogoObjects2= [];
gdjs.setupCode.GDendObjects1= [];
gdjs.setupCode.GDendObjects2= [];
gdjs.setupCode.GDground_9595basicObjects1= [];
gdjs.setupCode.GDground_9595basicObjects2= [];
gdjs.setupCode.GDdeathplaneObjects1= [];
gdjs.setupCode.GDdeathplaneObjects2= [];
gdjs.setupCode.GDground_9595stone1Objects1= [];
gdjs.setupCode.GDground_9595stone1Objects2= [];
gdjs.setupCode.GDground_9595factorysurfaceObjects1= [];
gdjs.setupCode.GDground_9595factorysurfaceObjects2= [];
gdjs.setupCode.GDground_9595factorybaseObjects1= [];
gdjs.setupCode.GDground_9595factorybaseObjects2= [];
gdjs.setupCode.GDground_9595factoryledge_9595R_9595Objects1= [];
gdjs.setupCode.GDground_9595factoryledge_9595R_9595Objects2= [];
gdjs.setupCode.GDground_9595factoryledge_9595L_9595Objects1= [];
gdjs.setupCode.GDground_9595factoryledge_9595L_9595Objects2= [];
gdjs.setupCode.GDbg_9595factory1Objects1= [];
gdjs.setupCode.GDbg_9595factory1Objects2= [];
gdjs.setupCode.GDpipe1Objects1= [];
gdjs.setupCode.GDpipe1Objects2= [];
gdjs.setupCode.GDpipe2Objects1= [];
gdjs.setupCode.GDpipe2Objects2= [];
gdjs.setupCode.GDConveyorObjects1= [];
gdjs.setupCode.GDConveyorObjects2= [];
gdjs.setupCode.GDbg_9595factory2Objects1= [];
gdjs.setupCode.GDbg_9595factory2Objects2= [];
gdjs.setupCode.GDpipe3Objects1= [];
gdjs.setupCode.GDpipe3Objects2= [];
gdjs.setupCode.GDcablesObjects1= [];
gdjs.setupCode.GDcablesObjects2= [];
gdjs.setupCode.GDGround_9595Sand1Objects1= [];
gdjs.setupCode.GDGround_9595Sand1Objects2= [];
gdjs.setupCode.GDsand_9595darkObjects1= [];
gdjs.setupCode.GDsand_9595darkObjects2= [];
gdjs.setupCode.GDBg_9595beach1Objects1= [];
gdjs.setupCode.GDBg_9595beach1Objects2= [];
gdjs.setupCode.GDbg_9595void1Objects1= [];
gdjs.setupCode.GDbg_9595void1Objects2= [];
gdjs.setupCode.GDmg_9595void1Objects1= [];
gdjs.setupCode.GDmg_9595void1Objects2= [];
gdjs.setupCode.GDlavaObjects1= [];
gdjs.setupCode.GDlavaObjects2= [];
gdjs.setupCode.GDlava_9595surfaceObjects1= [];
gdjs.setupCode.GDlava_9595surfaceObjects2= [];
gdjs.setupCode.GDlava_9595surface_9595anim1Objects1= [];
gdjs.setupCode.GDlava_9595surface_9595anim1Objects2= [];
gdjs.setupCode.GDlava_9595surface_9595anim2Objects1= [];
gdjs.setupCode.GDlava_9595surface_9595anim2Objects2= [];
gdjs.setupCode.GDfreecamObjects1= [];
gdjs.setupCode.GDfreecamObjects2= [];
gdjs.setupCode.GDdisclaimerObjects1= [];
gdjs.setupCode.GDdisclaimerObjects2= [];


gdjs.setupCode.eventsList0 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("keyboard__idk"), gdjs.setupCode.GDkeyboard_9595_9595idkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.setupCode.GDkeyboard_9595_9595idkObjects1.length;i<l;++i) {
    if ( gdjs.setupCode.GDkeyboard_9595_9595idkObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.setupCode.GDkeyboard_9595_9595idkObjects1[k] = gdjs.setupCode.GDkeyboard_9595_9595idkObjects1[i];
        ++k;
    }
}
gdjs.setupCode.GDkeyboard_9595_9595idkObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", true);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("XboxController___"), gdjs.setupCode.GDXboxController_9595_9595_9595Objects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.setupCode.GDXboxController_9595_9595_9595Objects1.length;i<l;++i) {
    if ( gdjs.setupCode.GDXboxController_9595_9595_9595Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.setupCode.GDXboxController_9595_9595_9595Objects1[k] = gdjs.setupCode.GDXboxController_9595_9595_9595Objects1[i];
        ++k;
    }
}
gdjs.setupCode.GDXboxController_9595_9595_9595Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", true);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Back", null);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", true);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("jasonstation_____"), gdjs.setupCode.GDjasonstation_9595_9595_9595_9595_9595Objects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.setupCode.GDjasonstation_9595_9595_9595_9595_9595Objects1.length;i<l;++i) {
    if ( gdjs.setupCode.GDjasonstation_9595_9595_9595_9595_9595Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.setupCode.GDjasonstation_9595_9595_9595_9595_9595Objects1[k] = gdjs.setupCode.GDjasonstation_9595_9595_9595_9595_9595Objects1[i];
        ++k;
    }
}
gdjs.setupCode.GDjasonstation_9595_9595_9595_9595_9595Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", true);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Share", null);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", true);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("thing2"), gdjs.setupCode.GDthing2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.setupCode.GDthing2Objects1.length;i<l;++i) {
    if ( gdjs.setupCode.GDthing2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.setupCode.GDthing2Objects1[k] = gdjs.setupCode.GDthing2Objects1[i];
        ++k;
    }
}
gdjs.setupCode.GDthing2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("thing"), gdjs.setupCode.GDthingObjects1);
{for(var i = 0, len = gdjs.setupCode.GDthingObjects1.length ;i < len;++i) {
    gdjs.setupCode.GDthingObjects1[i].getBehavior("Text").setText("Bruh");
}
}
}

}

}

};

gdjs.setupCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.setupCode.GDthing2Objects1.length = 0;
gdjs.setupCode.GDthing2Objects2.length = 0;
gdjs.setupCode.GDthingObjects1.length = 0;
gdjs.setupCode.GDthingObjects2.length = 0;
gdjs.setupCode.GDkeyboard_9595_9595idkObjects1.length = 0;
gdjs.setupCode.GDkeyboard_9595_9595idkObjects2.length = 0;
gdjs.setupCode.GDXboxController_9595_9595_9595Objects1.length = 0;
gdjs.setupCode.GDXboxController_9595_9595_9595Objects2.length = 0;
gdjs.setupCode.GDkmObjects1.length = 0;
gdjs.setupCode.GDkmObjects2.length = 0;
gdjs.setupCode.GDxbObjects1.length = 0;
gdjs.setupCode.GDxbObjects2.length = 0;
gdjs.setupCode.GDjasonstation_9595_9595_9595_9595_9595Objects1.length = 0;
gdjs.setupCode.GDjasonstation_9595_9595_9595_9595_9595Objects2.length = 0;
gdjs.setupCode.GDpsObjects1.length = 0;
gdjs.setupCode.GDpsObjects2.length = 0;
gdjs.setupCode.GDplayerObjects1.length = 0;
gdjs.setupCode.GDplayerObjects2.length = 0;
gdjs.setupCode.GDplayerposxObjects1.length = 0;
gdjs.setupCode.GDplayerposxObjects2.length = 0;
gdjs.setupCode.GDplayerposyObjects1.length = 0;
gdjs.setupCode.GDplayerposyObjects2.length = 0;
gdjs.setupCode.GDspedometerObjects1.length = 0;
gdjs.setupCode.GDspedometerObjects2.length = 0;
gdjs.setupCode.GDsecretthe2ndObjects1.length = 0;
gdjs.setupCode.GDsecretthe2ndObjects2.length = 0;
gdjs.setupCode.GDdebugbgObjects1.length = 0;
gdjs.setupCode.GDdebugbgObjects2.length = 0;
gdjs.setupCode.GDgameinfoObjects1.length = 0;
gdjs.setupCode.GDgameinfoObjects2.length = 0;
gdjs.setupCode.GDWaterObjects1.length = 0;
gdjs.setupCode.GDWaterObjects2.length = 0;
gdjs.setupCode.GDlogoObjects1.length = 0;
gdjs.setupCode.GDlogoObjects2.length = 0;
gdjs.setupCode.GDendObjects1.length = 0;
gdjs.setupCode.GDendObjects2.length = 0;
gdjs.setupCode.GDground_9595basicObjects1.length = 0;
gdjs.setupCode.GDground_9595basicObjects2.length = 0;
gdjs.setupCode.GDdeathplaneObjects1.length = 0;
gdjs.setupCode.GDdeathplaneObjects2.length = 0;
gdjs.setupCode.GDground_9595stone1Objects1.length = 0;
gdjs.setupCode.GDground_9595stone1Objects2.length = 0;
gdjs.setupCode.GDground_9595factorysurfaceObjects1.length = 0;
gdjs.setupCode.GDground_9595factorysurfaceObjects2.length = 0;
gdjs.setupCode.GDground_9595factorybaseObjects1.length = 0;
gdjs.setupCode.GDground_9595factorybaseObjects2.length = 0;
gdjs.setupCode.GDground_9595factoryledge_9595R_9595Objects1.length = 0;
gdjs.setupCode.GDground_9595factoryledge_9595R_9595Objects2.length = 0;
gdjs.setupCode.GDground_9595factoryledge_9595L_9595Objects1.length = 0;
gdjs.setupCode.GDground_9595factoryledge_9595L_9595Objects2.length = 0;
gdjs.setupCode.GDbg_9595factory1Objects1.length = 0;
gdjs.setupCode.GDbg_9595factory1Objects2.length = 0;
gdjs.setupCode.GDpipe1Objects1.length = 0;
gdjs.setupCode.GDpipe1Objects2.length = 0;
gdjs.setupCode.GDpipe2Objects1.length = 0;
gdjs.setupCode.GDpipe2Objects2.length = 0;
gdjs.setupCode.GDConveyorObjects1.length = 0;
gdjs.setupCode.GDConveyorObjects2.length = 0;
gdjs.setupCode.GDbg_9595factory2Objects1.length = 0;
gdjs.setupCode.GDbg_9595factory2Objects2.length = 0;
gdjs.setupCode.GDpipe3Objects1.length = 0;
gdjs.setupCode.GDpipe3Objects2.length = 0;
gdjs.setupCode.GDcablesObjects1.length = 0;
gdjs.setupCode.GDcablesObjects2.length = 0;
gdjs.setupCode.GDGround_9595Sand1Objects1.length = 0;
gdjs.setupCode.GDGround_9595Sand1Objects2.length = 0;
gdjs.setupCode.GDsand_9595darkObjects1.length = 0;
gdjs.setupCode.GDsand_9595darkObjects2.length = 0;
gdjs.setupCode.GDBg_9595beach1Objects1.length = 0;
gdjs.setupCode.GDBg_9595beach1Objects2.length = 0;
gdjs.setupCode.GDbg_9595void1Objects1.length = 0;
gdjs.setupCode.GDbg_9595void1Objects2.length = 0;
gdjs.setupCode.GDmg_9595void1Objects1.length = 0;
gdjs.setupCode.GDmg_9595void1Objects2.length = 0;
gdjs.setupCode.GDlavaObjects1.length = 0;
gdjs.setupCode.GDlavaObjects2.length = 0;
gdjs.setupCode.GDlava_9595surfaceObjects1.length = 0;
gdjs.setupCode.GDlava_9595surfaceObjects2.length = 0;
gdjs.setupCode.GDlava_9595surface_9595anim1Objects1.length = 0;
gdjs.setupCode.GDlava_9595surface_9595anim1Objects2.length = 0;
gdjs.setupCode.GDlava_9595surface_9595anim2Objects1.length = 0;
gdjs.setupCode.GDlava_9595surface_9595anim2Objects2.length = 0;
gdjs.setupCode.GDfreecamObjects1.length = 0;
gdjs.setupCode.GDfreecamObjects2.length = 0;
gdjs.setupCode.GDdisclaimerObjects1.length = 0;
gdjs.setupCode.GDdisclaimerObjects2.length = 0;

gdjs.setupCode.eventsList0(runtimeScene);
gdjs.setupCode.GDthing2Objects1.length = 0;
gdjs.setupCode.GDthing2Objects2.length = 0;
gdjs.setupCode.GDthingObjects1.length = 0;
gdjs.setupCode.GDthingObjects2.length = 0;
gdjs.setupCode.GDkeyboard_9595_9595idkObjects1.length = 0;
gdjs.setupCode.GDkeyboard_9595_9595idkObjects2.length = 0;
gdjs.setupCode.GDXboxController_9595_9595_9595Objects1.length = 0;
gdjs.setupCode.GDXboxController_9595_9595_9595Objects2.length = 0;
gdjs.setupCode.GDkmObjects1.length = 0;
gdjs.setupCode.GDkmObjects2.length = 0;
gdjs.setupCode.GDxbObjects1.length = 0;
gdjs.setupCode.GDxbObjects2.length = 0;
gdjs.setupCode.GDjasonstation_9595_9595_9595_9595_9595Objects1.length = 0;
gdjs.setupCode.GDjasonstation_9595_9595_9595_9595_9595Objects2.length = 0;
gdjs.setupCode.GDpsObjects1.length = 0;
gdjs.setupCode.GDpsObjects2.length = 0;
gdjs.setupCode.GDplayerObjects1.length = 0;
gdjs.setupCode.GDplayerObjects2.length = 0;
gdjs.setupCode.GDplayerposxObjects1.length = 0;
gdjs.setupCode.GDplayerposxObjects2.length = 0;
gdjs.setupCode.GDplayerposyObjects1.length = 0;
gdjs.setupCode.GDplayerposyObjects2.length = 0;
gdjs.setupCode.GDspedometerObjects1.length = 0;
gdjs.setupCode.GDspedometerObjects2.length = 0;
gdjs.setupCode.GDsecretthe2ndObjects1.length = 0;
gdjs.setupCode.GDsecretthe2ndObjects2.length = 0;
gdjs.setupCode.GDdebugbgObjects1.length = 0;
gdjs.setupCode.GDdebugbgObjects2.length = 0;
gdjs.setupCode.GDgameinfoObjects1.length = 0;
gdjs.setupCode.GDgameinfoObjects2.length = 0;
gdjs.setupCode.GDWaterObjects1.length = 0;
gdjs.setupCode.GDWaterObjects2.length = 0;
gdjs.setupCode.GDlogoObjects1.length = 0;
gdjs.setupCode.GDlogoObjects2.length = 0;
gdjs.setupCode.GDendObjects1.length = 0;
gdjs.setupCode.GDendObjects2.length = 0;
gdjs.setupCode.GDground_9595basicObjects1.length = 0;
gdjs.setupCode.GDground_9595basicObjects2.length = 0;
gdjs.setupCode.GDdeathplaneObjects1.length = 0;
gdjs.setupCode.GDdeathplaneObjects2.length = 0;
gdjs.setupCode.GDground_9595stone1Objects1.length = 0;
gdjs.setupCode.GDground_9595stone1Objects2.length = 0;
gdjs.setupCode.GDground_9595factorysurfaceObjects1.length = 0;
gdjs.setupCode.GDground_9595factorysurfaceObjects2.length = 0;
gdjs.setupCode.GDground_9595factorybaseObjects1.length = 0;
gdjs.setupCode.GDground_9595factorybaseObjects2.length = 0;
gdjs.setupCode.GDground_9595factoryledge_9595R_9595Objects1.length = 0;
gdjs.setupCode.GDground_9595factoryledge_9595R_9595Objects2.length = 0;
gdjs.setupCode.GDground_9595factoryledge_9595L_9595Objects1.length = 0;
gdjs.setupCode.GDground_9595factoryledge_9595L_9595Objects2.length = 0;
gdjs.setupCode.GDbg_9595factory1Objects1.length = 0;
gdjs.setupCode.GDbg_9595factory1Objects2.length = 0;
gdjs.setupCode.GDpipe1Objects1.length = 0;
gdjs.setupCode.GDpipe1Objects2.length = 0;
gdjs.setupCode.GDpipe2Objects1.length = 0;
gdjs.setupCode.GDpipe2Objects2.length = 0;
gdjs.setupCode.GDConveyorObjects1.length = 0;
gdjs.setupCode.GDConveyorObjects2.length = 0;
gdjs.setupCode.GDbg_9595factory2Objects1.length = 0;
gdjs.setupCode.GDbg_9595factory2Objects2.length = 0;
gdjs.setupCode.GDpipe3Objects1.length = 0;
gdjs.setupCode.GDpipe3Objects2.length = 0;
gdjs.setupCode.GDcablesObjects1.length = 0;
gdjs.setupCode.GDcablesObjects2.length = 0;
gdjs.setupCode.GDGround_9595Sand1Objects1.length = 0;
gdjs.setupCode.GDGround_9595Sand1Objects2.length = 0;
gdjs.setupCode.GDsand_9595darkObjects1.length = 0;
gdjs.setupCode.GDsand_9595darkObjects2.length = 0;
gdjs.setupCode.GDBg_9595beach1Objects1.length = 0;
gdjs.setupCode.GDBg_9595beach1Objects2.length = 0;
gdjs.setupCode.GDbg_9595void1Objects1.length = 0;
gdjs.setupCode.GDbg_9595void1Objects2.length = 0;
gdjs.setupCode.GDmg_9595void1Objects1.length = 0;
gdjs.setupCode.GDmg_9595void1Objects2.length = 0;
gdjs.setupCode.GDlavaObjects1.length = 0;
gdjs.setupCode.GDlavaObjects2.length = 0;
gdjs.setupCode.GDlava_9595surfaceObjects1.length = 0;
gdjs.setupCode.GDlava_9595surfaceObjects2.length = 0;
gdjs.setupCode.GDlava_9595surface_9595anim1Objects1.length = 0;
gdjs.setupCode.GDlava_9595surface_9595anim1Objects2.length = 0;
gdjs.setupCode.GDlava_9595surface_9595anim2Objects1.length = 0;
gdjs.setupCode.GDlava_9595surface_9595anim2Objects2.length = 0;
gdjs.setupCode.GDfreecamObjects1.length = 0;
gdjs.setupCode.GDfreecamObjects2.length = 0;
gdjs.setupCode.GDdisclaimerObjects1.length = 0;
gdjs.setupCode.GDdisclaimerObjects2.length = 0;


return;

}

gdjs['setupCode'] = gdjs.setupCode;
