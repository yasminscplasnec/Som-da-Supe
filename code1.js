gdjs.inicioCode = {};
gdjs.inicioCode.localVariables = [];
gdjs.inicioCode.idToCallbackMap = new Map();
gdjs.inicioCode.GDbkg_9595IObjects1= [];
gdjs.inicioCode.GDbkg_9595IObjects2= [];
gdjs.inicioCode.GDt_95237tuloObjects1= [];
gdjs.inicioCode.GDt_95237tuloObjects2= [];
gdjs.inicioCode.GDjogar_9595BObjects1= [];
gdjs.inicioCode.GDjogar_9595BObjects2= [];


gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDjogar_95959595BObjects1Objects = Hashtable.newFrom({"jogar_B": gdjs.inicioCode.GDjogar_9595BObjects1});
gdjs.inicioCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasTouchEnded(runtimeScene, 1);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "principal");
}
}

}


};gdjs.inicioCode.eventsList1 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("título"), gdjs.inicioCode.GDt_95237tuloObjects1);
{for(var i = 0, len = gdjs.inicioCode.GDt_95237tuloObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDt_95237tuloObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.1, 10, 10, 0, 0.08, true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("jogar_B"), gdjs.inicioCode.GDjogar_9595BObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDjogar_95959595BObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.inicioCode.GDjogar_9595BObjects1 */
{for(var i = 0, len = gdjs.inicioCode.GDjogar_9595BObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDjogar_9595BObjects1[i].getBehavior("Effect").enableEffect("AdvancedBloom", true);
}
}

{ //Subevents
gdjs.inicioCode.eventsList0(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("jogar_B"), gdjs.inicioCode.GDjogar_9595BObjects1);
{for(var i = 0, len = gdjs.inicioCode.GDjogar_9595BObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDjogar_9595BObjects1[i].getBehavior("Effect").enableEffect("AdvancedBloom", false);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};

gdjs.inicioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.inicioCode.GDbkg_9595IObjects1.length = 0;
gdjs.inicioCode.GDbkg_9595IObjects2.length = 0;
gdjs.inicioCode.GDt_95237tuloObjects1.length = 0;
gdjs.inicioCode.GDt_95237tuloObjects2.length = 0;
gdjs.inicioCode.GDjogar_9595BObjects1.length = 0;
gdjs.inicioCode.GDjogar_9595BObjects2.length = 0;

gdjs.inicioCode.eventsList1(runtimeScene);
gdjs.inicioCode.GDbkg_9595IObjects1.length = 0;
gdjs.inicioCode.GDbkg_9595IObjects2.length = 0;
gdjs.inicioCode.GDt_95237tuloObjects1.length = 0;
gdjs.inicioCode.GDt_95237tuloObjects2.length = 0;
gdjs.inicioCode.GDjogar_9595BObjects1.length = 0;
gdjs.inicioCode.GDjogar_9595BObjects2.length = 0;


return;

}

gdjs['inicioCode'] = gdjs.inicioCode;
