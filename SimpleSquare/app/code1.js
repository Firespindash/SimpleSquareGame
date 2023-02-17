gdjs.FirstSceneCode = {};
gdjs.FirstSceneCode.GDBoxPlayerObjects1_1final = [];

gdjs.FirstSceneCode.GDBoxPlayerObjects1= [];
gdjs.FirstSceneCode.GDBoxPlayerObjects2= [];
gdjs.FirstSceneCode.GDGreenXPlatformObjects1= [];
gdjs.FirstSceneCode.GDGreenXPlatformObjects2= [];
gdjs.FirstSceneCode.GDGreenGoalObjects1= [];
gdjs.FirstSceneCode.GDGreenGoalObjects2= [];
gdjs.FirstSceneCode.GDCurrentTimeObjects1= [];
gdjs.FirstSceneCode.GDCurrentTimeObjects2= [];
gdjs.FirstSceneCode.GDMenuObjects1= [];
gdjs.FirstSceneCode.GDMenuObjects2= [];
gdjs.FirstSceneCode.GDIntroductionObjects1= [];
gdjs.FirstSceneCode.GDIntroductionObjects2= [];
gdjs.FirstSceneCode.GDTipObjects1= [];
gdjs.FirstSceneCode.GDTipObjects2= [];

gdjs.FirstSceneCode.conditionTrue_0 = {val:false};
gdjs.FirstSceneCode.condition0IsTrue_0 = {val:false};
gdjs.FirstSceneCode.condition1IsTrue_0 = {val:false};
gdjs.FirstSceneCode.condition2IsTrue_0 = {val:false};
gdjs.FirstSceneCode.condition3IsTrue_0 = {val:false};
gdjs.FirstSceneCode.conditionTrue_1 = {val:false};
gdjs.FirstSceneCode.condition0IsTrue_1 = {val:false};
gdjs.FirstSceneCode.condition1IsTrue_1 = {val:false};
gdjs.FirstSceneCode.condition2IsTrue_1 = {val:false};
gdjs.FirstSceneCode.condition3IsTrue_1 = {val:false};


gdjs.FirstSceneCode.eventsList0x8a0ec4 = function(runtimeScene) {

}; //End of gdjs.FirstSceneCode.eventsList0x8a0ec4
gdjs.FirstSceneCode.eventsList0x83061c = function(runtimeScene) {

{


gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.FirstSceneCode.conditionTrue_1 = gdjs.FirstSceneCode.condition0IsTrue_0;
gdjs.FirstSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9048628);
}
}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).add(1);
}}

}


}; //End of gdjs.FirstSceneCode.eventsList0x83061c
gdjs.FirstSceneCode.eventsList0x8302c4 = function(runtimeScene) {

{


gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
gdjs.FirstSceneCode.condition1IsTrue_0.val = false;
{
{gdjs.FirstSceneCode.conditionTrue_1 = gdjs.FirstSceneCode.condition0IsTrue_0;
gdjs.FirstSceneCode.condition0IsTrue_1.val = false;
gdjs.FirstSceneCode.condition1IsTrue_1.val = false;
gdjs.FirstSceneCode.condition2IsTrue_1.val = false;
{
gdjs.FirstSceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.FirstSceneCode.condition0IsTrue_1.val ) {
    gdjs.FirstSceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.FirstSceneCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.FirstSceneCode.condition1IsTrue_1.val ) {
    gdjs.FirstSceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.FirstSceneCode.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.FirstSceneCode.condition2IsTrue_1.val ) {
    gdjs.FirstSceneCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.FirstSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.FirstSceneCode.conditionTrue_1 = gdjs.FirstSceneCode.condition1IsTrue_0;
gdjs.FirstSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9047972);
}
}}
if (gdjs.FirstSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.FirstSceneCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.FirstSceneCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.FirstSceneCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).add(1);
}
}
{ //Subevents
gdjs.FirstSceneCode.eventsList0x83061c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.FirstSceneCode.eventsList0x8302c4
gdjs.FirstSceneCode.eventsList0x83019c = function(runtimeScene) {

{

/* Reuse gdjs.FirstSceneCode.GDBoxPlayerObjects1 */

gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
gdjs.FirstSceneCode.condition1IsTrue_0.val = false;
{
{gdjs.FirstSceneCode.conditionTrue_1 = gdjs.FirstSceneCode.condition0IsTrue_0;
gdjs.FirstSceneCode.GDBoxPlayerObjects1_1final.length = 0;gdjs.FirstSceneCode.condition0IsTrue_1.val = false;
gdjs.FirstSceneCode.condition1IsTrue_1.val = false;
{
gdjs.FirstSceneCode.GDBoxPlayerObjects2.createFrom(gdjs.FirstSceneCode.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.FirstSceneCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.FirstSceneCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.FirstSceneCode.condition0IsTrue_1.val = true;
        gdjs.FirstSceneCode.GDBoxPlayerObjects2[k] = gdjs.FirstSceneCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.FirstSceneCode.GDBoxPlayerObjects2.length = k;if( gdjs.FirstSceneCode.condition0IsTrue_1.val ) {
    gdjs.FirstSceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.FirstSceneCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.FirstSceneCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.FirstSceneCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.FirstSceneCode.GDBoxPlayerObjects1_1final.push(gdjs.FirstSceneCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.FirstSceneCode.GDBoxPlayerObjects2.createFrom(gdjs.FirstSceneCode.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.FirstSceneCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.FirstSceneCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.FirstSceneCode.condition1IsTrue_1.val = true;
        gdjs.FirstSceneCode.GDBoxPlayerObjects2[k] = gdjs.FirstSceneCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.FirstSceneCode.GDBoxPlayerObjects2.length = k;if( gdjs.FirstSceneCode.condition1IsTrue_1.val ) {
    gdjs.FirstSceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.FirstSceneCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.FirstSceneCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.FirstSceneCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.FirstSceneCode.GDBoxPlayerObjects1_1final.push(gdjs.FirstSceneCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.FirstSceneCode.GDBoxPlayerObjects1.createFrom(gdjs.FirstSceneCode.GDBoxPlayerObjects1_1final);
}
}
}if ( gdjs.FirstSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.FirstSceneCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)) < 2 ) {
        gdjs.FirstSceneCode.condition1IsTrue_0.val = true;
        gdjs.FirstSceneCode.GDBoxPlayerObjects1[k] = gdjs.FirstSceneCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.FirstSceneCode.GDBoxPlayerObjects1.length = k;}}
if (gdjs.FirstSceneCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.FirstSceneCode.eventsList0x8302c4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.FirstSceneCode.eventsList0x83019c
gdjs.FirstSceneCode.eventsList0x7550c4 = function(runtimeScene) {

}; //End of gdjs.FirstSceneCode.eventsList0x7550c4
gdjs.FirstSceneCode.eventsList0x7556ac = function(runtimeScene) {

{

gdjs.FirstSceneCode.GDBoxPlayerObjects1.length = 0;


gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.FirstSceneCode.conditionTrue_1 = gdjs.FirstSceneCode.condition0IsTrue_0;
gdjs.FirstSceneCode.GDBoxPlayerObjects1_1final.length = 0;gdjs.FirstSceneCode.condition0IsTrue_1.val = false;
gdjs.FirstSceneCode.condition1IsTrue_1.val = false;
{
gdjs.FirstSceneCode.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.FirstSceneCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.FirstSceneCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.FirstSceneCode.condition0IsTrue_1.val = true;
        gdjs.FirstSceneCode.GDBoxPlayerObjects2[k] = gdjs.FirstSceneCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.FirstSceneCode.GDBoxPlayerObjects2.length = k;if( gdjs.FirstSceneCode.condition0IsTrue_1.val ) {
    gdjs.FirstSceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.FirstSceneCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.FirstSceneCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.FirstSceneCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.FirstSceneCode.GDBoxPlayerObjects1_1final.push(gdjs.FirstSceneCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.FirstSceneCode.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.FirstSceneCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.FirstSceneCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.FirstSceneCode.condition1IsTrue_1.val = true;
        gdjs.FirstSceneCode.GDBoxPlayerObjects2[k] = gdjs.FirstSceneCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.FirstSceneCode.GDBoxPlayerObjects2.length = k;if( gdjs.FirstSceneCode.condition1IsTrue_1.val ) {
    gdjs.FirstSceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.FirstSceneCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.FirstSceneCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.FirstSceneCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.FirstSceneCode.GDBoxPlayerObjects1_1final.push(gdjs.FirstSceneCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.FirstSceneCode.GDBoxPlayerObjects1.createFrom(gdjs.FirstSceneCode.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FirstSceneCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.FirstSceneCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


}; //End of gdjs.FirstSceneCode.eventsList0x7556ac
gdjs.FirstSceneCode.eventsList0x864cdc = function(runtimeScene) {

{

gdjs.FirstSceneCode.GDBoxPlayerObjects1.length = 0;


gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.FirstSceneCode.conditionTrue_1 = gdjs.FirstSceneCode.condition0IsTrue_0;
gdjs.FirstSceneCode.GDBoxPlayerObjects1_1final.length = 0;gdjs.FirstSceneCode.condition0IsTrue_1.val = false;
gdjs.FirstSceneCode.condition1IsTrue_1.val = false;
{
gdjs.FirstSceneCode.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.FirstSceneCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.FirstSceneCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.FirstSceneCode.condition0IsTrue_1.val = true;
        gdjs.FirstSceneCode.GDBoxPlayerObjects2[k] = gdjs.FirstSceneCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.FirstSceneCode.GDBoxPlayerObjects2.length = k;if( gdjs.FirstSceneCode.condition0IsTrue_1.val ) {
    gdjs.FirstSceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.FirstSceneCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.FirstSceneCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.FirstSceneCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.FirstSceneCode.GDBoxPlayerObjects1_1final.push(gdjs.FirstSceneCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.FirstSceneCode.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.FirstSceneCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.FirstSceneCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.FirstSceneCode.condition1IsTrue_1.val = true;
        gdjs.FirstSceneCode.GDBoxPlayerObjects2[k] = gdjs.FirstSceneCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.FirstSceneCode.GDBoxPlayerObjects2.length = k;if( gdjs.FirstSceneCode.condition1IsTrue_1.val ) {
    gdjs.FirstSceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.FirstSceneCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.FirstSceneCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.FirstSceneCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.FirstSceneCode.GDBoxPlayerObjects1_1final.push(gdjs.FirstSceneCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.FirstSceneCode.GDBoxPlayerObjects1.createFrom(gdjs.FirstSceneCode.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FirstSceneCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.FirstSceneCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


}; //End of gdjs.FirstSceneCode.eventsList0x864cdc
gdjs.FirstSceneCode.eventsList0x8a13ec = function(runtimeScene) {

}; //End of gdjs.FirstSceneCode.eventsList0x8a13ec
gdjs.FirstSceneCode.eventsList0x7aa23c = function(runtimeScene) {

}; //End of gdjs.FirstSceneCode.eventsList0x7aa23c
gdjs.FirstSceneCode.mapOfGDgdjs_46FirstSceneCode_46GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.FirstSceneCode.GDMenuObjects1});gdjs.FirstSceneCode.eventsList0x864c3c = function(runtimeScene) {

{


gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
gdjs.FirstSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


}; //End of gdjs.FirstSceneCode.eventsList0x864c3c
gdjs.FirstSceneCode.mapOfGDgdjs_46FirstSceneCode_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.FirstSceneCode.GDBoxPlayerObjects1});gdjs.FirstSceneCode.mapOfGDgdjs_46FirstSceneCode_46GDGreenGoalObjects1Objects = Hashtable.newFrom({"GreenGoal": gdjs.FirstSceneCode.GDGreenGoalObjects1});gdjs.FirstSceneCode.eventsList0x8a0a84 = function(runtimeScene) {

{

/* Reuse gdjs.FirstSceneCode.GDBoxPlayerObjects1 */

gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FirstSceneCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)) == 50 ) {
        gdjs.FirstSceneCode.condition0IsTrue_0.val = true;
        gdjs.FirstSceneCode.GDBoxPlayerObjects1[k] = gdjs.FirstSceneCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.FirstSceneCode.GDBoxPlayerObjects1.length = k;}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dark1", true);
}}

}


}; //End of gdjs.FirstSceneCode.eventsList0x8a0a84
gdjs.FirstSceneCode.eventsList0xb5aa0 = function(runtimeScene) {

{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Double Jump"); }gdjs.FirstSceneCode.eventsList0x8a0ec4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Double Jump"); }
}


{

gdjs.FirstSceneCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FirstSceneCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.FirstSceneCode.condition0IsTrue_0.val = true;
        gdjs.FirstSceneCode.GDBoxPlayerObjects1[k] = gdjs.FirstSceneCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.FirstSceneCode.GDBoxPlayerObjects1.length = k;}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.FirstSceneCode.eventsList0x83019c(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.FirstSceneCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FirstSceneCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.FirstSceneCode.condition0IsTrue_0.val = true;
        gdjs.FirstSceneCode.GDBoxPlayerObjects1[k] = gdjs.FirstSceneCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.FirstSceneCode.GDBoxPlayerObjects1.length = k;}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FirstSceneCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.FirstSceneCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.FirstSceneCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Key Events"); }gdjs.FirstSceneCode.eventsList0x7550c4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Key Events"); }
}


{



}


{


gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.FirstSceneCode.conditionTrue_1 = gdjs.FirstSceneCode.condition0IsTrue_0;
gdjs.FirstSceneCode.condition0IsTrue_1.val = false;
gdjs.FirstSceneCode.condition1IsTrue_1.val = false;
gdjs.FirstSceneCode.condition2IsTrue_1.val = false;
{
gdjs.FirstSceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.FirstSceneCode.condition0IsTrue_1.val ) {
    gdjs.FirstSceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.FirstSceneCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.FirstSceneCode.condition1IsTrue_1.val ) {
    gdjs.FirstSceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.FirstSceneCode.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.FirstSceneCode.condition2IsTrue_1.val ) {
    gdjs.FirstSceneCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {
gdjs.FirstSceneCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
{for(var i = 0, len = gdjs.FirstSceneCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{



}


{


gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.FirstSceneCode.conditionTrue_1 = gdjs.FirstSceneCode.condition0IsTrue_0;
gdjs.FirstSceneCode.condition0IsTrue_1.val = false;
gdjs.FirstSceneCode.condition1IsTrue_1.val = false;
{
gdjs.FirstSceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.FirstSceneCode.condition0IsTrue_1.val ) {
    gdjs.FirstSceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.FirstSceneCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.FirstSceneCode.condition1IsTrue_1.val ) {
    gdjs.FirstSceneCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.FirstSceneCode.eventsList0x7556ac(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.FirstSceneCode.conditionTrue_1 = gdjs.FirstSceneCode.condition0IsTrue_0;
gdjs.FirstSceneCode.condition0IsTrue_1.val = false;
gdjs.FirstSceneCode.condition1IsTrue_1.val = false;
{
gdjs.FirstSceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.FirstSceneCode.condition0IsTrue_1.val ) {
    gdjs.FirstSceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.FirstSceneCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.FirstSceneCode.condition1IsTrue_1.val ) {
    gdjs.FirstSceneCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.FirstSceneCode.eventsList0x864cdc(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
gdjs.FirstSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


{


gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
gdjs.FirstSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Respawn System"); }gdjs.FirstSceneCode.eventsList0x8a13ec(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Respawn System"); }
}


{

gdjs.FirstSceneCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FirstSceneCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].getY() > 900 ) {
        gdjs.FirstSceneCode.condition0IsTrue_0.val = true;
        gdjs.FirstSceneCode.GDBoxPlayerObjects1[k] = gdjs.FirstSceneCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.FirstSceneCode.GDBoxPlayerObjects1.length = k;}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FirstSceneCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.FirstSceneCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) - 50);
}
}{runtimeScene.getVariables().getFromIndex(5).add(1);
}}

}


{



}


{


{
{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "sec"));
}}

}


{


gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
gdjs.FirstSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == gdjs.evtTools.runtimeScene.getTime(runtimeScene, "sec") + 1;
}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Wall Jump"); }gdjs.FirstSceneCode.eventsList0x7aa23c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Wall Jump"); }
}


{

gdjs.FirstSceneCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FirstSceneCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isGrabbingPlatform() ) {
        gdjs.FirstSceneCode.condition0IsTrue_0.val = true;
        gdjs.FirstSceneCode.GDBoxPlayerObjects1[k] = gdjs.FirstSceneCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.FirstSceneCode.GDBoxPlayerObjects1.length = k;}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FirstSceneCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.FirstSceneCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}}

}


{



}


{



}


{


{
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "hour"));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "min"));
}}

}


{


gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
gdjs.FirstSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {
gdjs.FirstSceneCode.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.FirstSceneCode.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.FirstSceneCode.GDCurrentTimeObjects1[i].setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
gdjs.FirstSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {
gdjs.FirstSceneCode.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.FirstSceneCode.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.FirstSceneCode.GDCurrentTimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + "0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
gdjs.FirstSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 10;
}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {
gdjs.FirstSceneCode.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.FirstSceneCode.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.FirstSceneCode.GDCurrentTimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.FirstSceneCode.conditionTrue_1 = gdjs.FirstSceneCode.condition0IsTrue_0;
gdjs.FirstSceneCode.condition0IsTrue_1.val = false;
gdjs.FirstSceneCode.condition1IsTrue_1.val = false;
{
gdjs.FirstSceneCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if ( gdjs.FirstSceneCode.condition0IsTrue_1.val ) {
{
gdjs.FirstSceneCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}}
gdjs.FirstSceneCode.conditionTrue_1.val = true && gdjs.FirstSceneCode.condition0IsTrue_1.val && gdjs.FirstSceneCode.condition1IsTrue_1.val;
}
}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {
gdjs.FirstSceneCode.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.FirstSceneCode.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.FirstSceneCode.GDCurrentTimeObjects1[i].setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + "0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{

gdjs.FirstSceneCode.GDMenuObjects1.createFrom(runtimeScene.getObjects("Menu"));

gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
gdjs.FirstSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FirstSceneCode.mapOfGDgdjs_46FirstSceneCode_46GDMenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.FirstSceneCode.eventsList0x864c3c(runtimeScene);} //End of subevents
}

}


{

gdjs.FirstSceneCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FirstSceneCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].getY() < 0 ) {
        gdjs.FirstSceneCode.condition0IsTrue_0.val = true;
        gdjs.FirstSceneCode.GDBoxPlayerObjects1[k] = gdjs.FirstSceneCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.FirstSceneCode.GDBoxPlayerObjects1.length = k;}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, -(20), "", 0);
}}

}


{

gdjs.FirstSceneCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.FirstSceneCode.conditionTrue_1 = gdjs.FirstSceneCode.condition0IsTrue_0;
gdjs.FirstSceneCode.condition0IsTrue_1.val = false;
gdjs.FirstSceneCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.FirstSceneCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].getY() >= 0 ) {
        gdjs.FirstSceneCode.condition0IsTrue_1.val = true;
        gdjs.FirstSceneCode.GDBoxPlayerObjects1[k] = gdjs.FirstSceneCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.FirstSceneCode.GDBoxPlayerObjects1.length = k;}if ( gdjs.FirstSceneCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.FirstSceneCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].getY() <= 540 ) {
        gdjs.FirstSceneCode.condition1IsTrue_1.val = true;
        gdjs.FirstSceneCode.GDBoxPlayerObjects1[k] = gdjs.FirstSceneCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.FirstSceneCode.GDBoxPlayerObjects1.length = k;}}
gdjs.FirstSceneCode.conditionTrue_1.val = true && gdjs.FirstSceneCode.condition0IsTrue_1.val && gdjs.FirstSceneCode.condition1IsTrue_1.val;
}
}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.window.getCanvasHeight(runtimeScene) / 2, "", 0);
}}

}


{

gdjs.FirstSceneCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FirstSceneCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].getY() > 540 ) {
        gdjs.FirstSceneCode.condition0IsTrue_0.val = true;
        gdjs.FirstSceneCode.GDBoxPlayerObjects1[k] = gdjs.FirstSceneCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.FirstSceneCode.GDBoxPlayerObjects1.length = k;}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (20), "", 0);
}}

}


{

gdjs.FirstSceneCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
gdjs.FirstSceneCode.GDGreenGoalObjects1.createFrom(runtimeScene.getObjects("GreenGoal"));

gdjs.FirstSceneCode.condition0IsTrue_0.val = false;
{
gdjs.FirstSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FirstSceneCode.mapOfGDgdjs_46FirstSceneCode_46GDBoxPlayerObjects1Objects, gdjs.FirstSceneCode.mapOfGDgdjs_46FirstSceneCode_46GDGreenGoalObjects1Objects, false, runtimeScene, true);
}if (gdjs.FirstSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FirstSceneCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.FirstSceneCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.FirstSceneCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}
{ //Subevents
gdjs.FirstSceneCode.eventsList0x8a0a84(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.FirstSceneCode.eventsList0xb5aa0


gdjs.FirstSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FirstSceneCode.GDBoxPlayerObjects1.length = 0;
gdjs.FirstSceneCode.GDBoxPlayerObjects2.length = 0;
gdjs.FirstSceneCode.GDGreenXPlatformObjects1.length = 0;
gdjs.FirstSceneCode.GDGreenXPlatformObjects2.length = 0;
gdjs.FirstSceneCode.GDGreenGoalObjects1.length = 0;
gdjs.FirstSceneCode.GDGreenGoalObjects2.length = 0;
gdjs.FirstSceneCode.GDCurrentTimeObjects1.length = 0;
gdjs.FirstSceneCode.GDCurrentTimeObjects2.length = 0;
gdjs.FirstSceneCode.GDMenuObjects1.length = 0;
gdjs.FirstSceneCode.GDMenuObjects2.length = 0;
gdjs.FirstSceneCode.GDIntroductionObjects1.length = 0;
gdjs.FirstSceneCode.GDIntroductionObjects2.length = 0;
gdjs.FirstSceneCode.GDTipObjects1.length = 0;
gdjs.FirstSceneCode.GDTipObjects2.length = 0;

gdjs.FirstSceneCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['FirstSceneCode'] = gdjs.FirstSceneCode;
