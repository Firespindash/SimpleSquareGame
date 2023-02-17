gdjs.Scene2Code = {};
gdjs.Scene2Code.GDBoxPlayerObjects1_1final = [];

gdjs.Scene2Code.GDBoxPlayerObjects1= [];
gdjs.Scene2Code.GDBoxPlayerObjects2= [];
gdjs.Scene2Code.GDBlueXPlatformObjects1= [];
gdjs.Scene2Code.GDBlueXPlatformObjects2= [];
gdjs.Scene2Code.GDBlueYPlatformObjects1= [];
gdjs.Scene2Code.GDBlueYPlatformObjects2= [];
gdjs.Scene2Code.GDBlueGoalObjects1= [];
gdjs.Scene2Code.GDBlueGoalObjects2= [];
gdjs.Scene2Code.GDCurrentTimeObjects1= [];
gdjs.Scene2Code.GDCurrentTimeObjects2= [];
gdjs.Scene2Code.GDMenuObjects1= [];
gdjs.Scene2Code.GDMenuObjects2= [];

gdjs.Scene2Code.conditionTrue_0 = {val:false};
gdjs.Scene2Code.condition0IsTrue_0 = {val:false};
gdjs.Scene2Code.condition1IsTrue_0 = {val:false};
gdjs.Scene2Code.condition2IsTrue_0 = {val:false};
gdjs.Scene2Code.condition3IsTrue_0 = {val:false};
gdjs.Scene2Code.conditionTrue_1 = {val:false};
gdjs.Scene2Code.condition0IsTrue_1 = {val:false};
gdjs.Scene2Code.condition1IsTrue_1 = {val:false};
gdjs.Scene2Code.condition2IsTrue_1 = {val:false};
gdjs.Scene2Code.condition3IsTrue_1 = {val:false};


gdjs.Scene2Code.eventsList0x7d1614 = function(runtimeScene) {

}; //End of gdjs.Scene2Code.eventsList0x7d1614
gdjs.Scene2Code.eventsList0x7d24ac = function(runtimeScene) {

{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene2Code.conditionTrue_1 = gdjs.Scene2Code.condition0IsTrue_0;
gdjs.Scene2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9047428);
}
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("jumpsTotal").add(1);
}}

}


}; //End of gdjs.Scene2Code.eventsList0x7d24ac
gdjs.Scene2Code.eventsList0x7d2154 = function(runtimeScene) {

{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
gdjs.Scene2Code.condition1IsTrue_0.val = false;
{
{gdjs.Scene2Code.conditionTrue_1 = gdjs.Scene2Code.condition0IsTrue_0;
gdjs.Scene2Code.condition0IsTrue_1.val = false;
gdjs.Scene2Code.condition1IsTrue_1.val = false;
gdjs.Scene2Code.condition2IsTrue_1.val = false;
{
gdjs.Scene2Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Scene2Code.condition0IsTrue_1.val ) {
    gdjs.Scene2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene2Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Scene2Code.condition1IsTrue_1.val ) {
    gdjs.Scene2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene2Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Scene2Code.condition2IsTrue_1.val ) {
    gdjs.Scene2Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Scene2Code.condition0IsTrue_0.val ) {
{
{gdjs.Scene2Code.conditionTrue_1 = gdjs.Scene2Code.condition1IsTrue_0;
gdjs.Scene2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9046772);
}
}}
if (gdjs.Scene2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene2Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene2Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Scene2Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Scene2Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).add(1);
}
}
{ //Subevents
gdjs.Scene2Code.eventsList0x7d24ac(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Scene2Code.eventsList0x7d2154
gdjs.Scene2Code.eventsList0x7d202c = function(runtimeScene) {

{

/* Reuse gdjs.Scene2Code.GDBoxPlayerObjects1 */

gdjs.Scene2Code.condition0IsTrue_0.val = false;
gdjs.Scene2Code.condition1IsTrue_0.val = false;
{
{gdjs.Scene2Code.conditionTrue_1 = gdjs.Scene2Code.condition0IsTrue_0;
gdjs.Scene2Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Scene2Code.condition0IsTrue_1.val = false;
gdjs.Scene2Code.condition1IsTrue_1.val = false;
{
gdjs.Scene2Code.GDBoxPlayerObjects2.createFrom(gdjs.Scene2Code.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.Scene2Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene2Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Scene2Code.condition0IsTrue_1.val = true;
        gdjs.Scene2Code.GDBoxPlayerObjects2[k] = gdjs.Scene2Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene2Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene2Code.condition0IsTrue_1.val ) {
    gdjs.Scene2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene2Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene2Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene2Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene2Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene2Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene2Code.GDBoxPlayerObjects2.createFrom(gdjs.Scene2Code.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.Scene2Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene2Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Scene2Code.condition1IsTrue_1.val = true;
        gdjs.Scene2Code.GDBoxPlayerObjects2[k] = gdjs.Scene2Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene2Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene2Code.condition1IsTrue_1.val ) {
    gdjs.Scene2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene2Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene2Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene2Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene2Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene2Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene2Code.GDBoxPlayerObjects1.createFrom(gdjs.Scene2Code.GDBoxPlayerObjects1_1final);
}
}
}if ( gdjs.Scene2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene2Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene2Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Scene2Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)) < 2 ) {
        gdjs.Scene2Code.condition1IsTrue_0.val = true;
        gdjs.Scene2Code.GDBoxPlayerObjects1[k] = gdjs.Scene2Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene2Code.GDBoxPlayerObjects1.length = k;}}
if (gdjs.Scene2Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Scene2Code.eventsList0x7d2154(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Scene2Code.eventsList0x7d202c
gdjs.Scene2Code.eventsList0x7d2aa4 = function(runtimeScene) {

}; //End of gdjs.Scene2Code.eventsList0x7d2aa4
gdjs.Scene2Code.eventsList0x830484 = function(runtimeScene) {

{

gdjs.Scene2Code.GDBoxPlayerObjects1.length = 0;


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene2Code.conditionTrue_1 = gdjs.Scene2Code.condition0IsTrue_0;
gdjs.Scene2Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Scene2Code.condition0IsTrue_1.val = false;
gdjs.Scene2Code.condition1IsTrue_1.val = false;
{
gdjs.Scene2Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Scene2Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene2Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Scene2Code.condition0IsTrue_1.val = true;
        gdjs.Scene2Code.GDBoxPlayerObjects2[k] = gdjs.Scene2Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene2Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene2Code.condition0IsTrue_1.val ) {
    gdjs.Scene2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene2Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene2Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene2Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene2Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene2Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene2Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Scene2Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene2Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Scene2Code.condition1IsTrue_1.val = true;
        gdjs.Scene2Code.GDBoxPlayerObjects2[k] = gdjs.Scene2Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene2Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene2Code.condition1IsTrue_1.val ) {
    gdjs.Scene2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene2Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene2Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene2Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene2Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene2Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene2Code.GDBoxPlayerObjects1.createFrom(gdjs.Scene2Code.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene2Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene2Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


}; //End of gdjs.Scene2Code.eventsList0x830484
gdjs.Scene2Code.eventsList0x8a1354 = function(runtimeScene) {

{

gdjs.Scene2Code.GDBoxPlayerObjects1.length = 0;


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene2Code.conditionTrue_1 = gdjs.Scene2Code.condition0IsTrue_0;
gdjs.Scene2Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Scene2Code.condition0IsTrue_1.val = false;
gdjs.Scene2Code.condition1IsTrue_1.val = false;
{
gdjs.Scene2Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Scene2Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene2Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Scene2Code.condition0IsTrue_1.val = true;
        gdjs.Scene2Code.GDBoxPlayerObjects2[k] = gdjs.Scene2Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene2Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene2Code.condition0IsTrue_1.val ) {
    gdjs.Scene2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene2Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene2Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene2Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene2Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene2Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene2Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Scene2Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene2Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Scene2Code.condition1IsTrue_1.val = true;
        gdjs.Scene2Code.GDBoxPlayerObjects2[k] = gdjs.Scene2Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene2Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene2Code.condition1IsTrue_1.val ) {
    gdjs.Scene2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene2Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene2Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene2Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene2Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene2Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene2Code.GDBoxPlayerObjects1.createFrom(gdjs.Scene2Code.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene2Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene2Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


}; //End of gdjs.Scene2Code.eventsList0x8a1354
gdjs.Scene2Code.eventsList0x835e2c = function(runtimeScene) {

}; //End of gdjs.Scene2Code.eventsList0x835e2c
gdjs.Scene2Code.eventsList0x755504 = function(runtimeScene) {

}; //End of gdjs.Scene2Code.eventsList0x755504
gdjs.Scene2Code.mapOfGDgdjs_46Scene2Code_46GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.Scene2Code.GDMenuObjects1});gdjs.Scene2Code.eventsList0x7a9aa4 = function(runtimeScene) {

{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


}; //End of gdjs.Scene2Code.eventsList0x7a9aa4
gdjs.Scene2Code.mapOfGDgdjs_46Scene2Code_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.Scene2Code.GDBoxPlayerObjects1});gdjs.Scene2Code.mapOfGDgdjs_46Scene2Code_46GDBlueGoalObjects1Objects = Hashtable.newFrom({"BlueGoal": gdjs.Scene2Code.GDBlueGoalObjects1});gdjs.Scene2Code.eventsList0x6b25fc = function(runtimeScene) {

{

/* Reuse gdjs.Scene2Code.GDBoxPlayerObjects1 */

gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene2Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene2Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Scene2Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)) == 50 ) {
        gdjs.Scene2Code.condition0IsTrue_0.val = true;
        gdjs.Scene2Code.GDBoxPlayerObjects1[k] = gdjs.Scene2Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene2Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene3", true);
}}

}


}; //End of gdjs.Scene2Code.eventsList0x6b25fc
gdjs.Scene2Code.eventsList0xb5aa0 = function(runtimeScene) {

{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Double Jump"); }gdjs.Scene2Code.eventsList0x7d1614(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Double Jump"); }
}


{

gdjs.Scene2Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene2Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene2Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Scene2Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Scene2Code.condition0IsTrue_0.val = true;
        gdjs.Scene2Code.GDBoxPlayerObjects1[k] = gdjs.Scene2Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene2Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene2Code.eventsList0x7d202c(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.Scene2Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene2Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene2Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Scene2Code.condition0IsTrue_0.val = true;
        gdjs.Scene2Code.GDBoxPlayerObjects1[k] = gdjs.Scene2Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene2Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene2Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene2Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.Scene2Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Scene2Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Key Events"); }gdjs.Scene2Code.eventsList0x7d2aa4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Key Events"); }
}


{



}


{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene2Code.conditionTrue_1 = gdjs.Scene2Code.condition0IsTrue_0;
gdjs.Scene2Code.condition0IsTrue_1.val = false;
gdjs.Scene2Code.condition1IsTrue_1.val = false;
gdjs.Scene2Code.condition2IsTrue_1.val = false;
{
gdjs.Scene2Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Scene2Code.condition0IsTrue_1.val ) {
    gdjs.Scene2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene2Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Scene2Code.condition1IsTrue_1.val ) {
    gdjs.Scene2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene2Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Scene2Code.condition2IsTrue_1.val ) {
    gdjs.Scene2Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
gdjs.Scene2Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
{for(var i = 0, len = gdjs.Scene2Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{



}


{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene2Code.conditionTrue_1 = gdjs.Scene2Code.condition0IsTrue_0;
gdjs.Scene2Code.condition0IsTrue_1.val = false;
gdjs.Scene2Code.condition1IsTrue_1.val = false;
{
gdjs.Scene2Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Scene2Code.condition0IsTrue_1.val ) {
    gdjs.Scene2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene2Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.Scene2Code.condition1IsTrue_1.val ) {
    gdjs.Scene2Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene2Code.eventsList0x830484(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene2Code.conditionTrue_1 = gdjs.Scene2Code.condition0IsTrue_0;
gdjs.Scene2Code.condition0IsTrue_1.val = false;
gdjs.Scene2Code.condition1IsTrue_1.val = false;
{
gdjs.Scene2Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Scene2Code.condition0IsTrue_1.val ) {
    gdjs.Scene2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene2Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.Scene2Code.condition1IsTrue_1.val ) {
    gdjs.Scene2Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene2Code.eventsList0x8a1354(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Respawn System"); }gdjs.Scene2Code.eventsList0x835e2c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Respawn System"); }
}


{

gdjs.Scene2Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene2Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene2Code.GDBoxPlayerObjects1[i].getY() > 900 ) {
        gdjs.Scene2Code.condition0IsTrue_0.val = true;
        gdjs.Scene2Code.GDBoxPlayerObjects1[k] = gdjs.Scene2Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene2Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene2Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene2Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDBoxPlayerObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) - 50);
}
}{runtimeScene.getVariables().get("deathCounter").add(1);
}}

}


{



}


{


{
{runtimeScene.getVariables().get("Secs").setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "sec"));
}}

}


{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Secs")) == gdjs.evtTools.runtimeScene.getTime(runtimeScene, "sec") + 1;
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{runtimeScene.getVariables().get("Secs").setNumber(0);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Wall Jump"); }gdjs.Scene2Code.eventsList0x755504(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Wall Jump"); }
}


{

gdjs.Scene2Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene2Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene2Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isGrabbingPlatform() ) {
        gdjs.Scene2Code.condition0IsTrue_0.val = true;
        gdjs.Scene2Code.GDBoxPlayerObjects1[k] = gdjs.Scene2Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene2Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene2Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene2Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Scene2Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
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


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
gdjs.Scene2Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Scene2Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDCurrentTimeObjects1[i].setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
gdjs.Scene2Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Scene2Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDCurrentTimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + "0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 10;
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
gdjs.Scene2Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Scene2Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDCurrentTimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene2Code.conditionTrue_1 = gdjs.Scene2Code.condition0IsTrue_0;
gdjs.Scene2Code.condition0IsTrue_1.val = false;
gdjs.Scene2Code.condition1IsTrue_1.val = false;
{
gdjs.Scene2Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if ( gdjs.Scene2Code.condition0IsTrue_1.val ) {
{
gdjs.Scene2Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}}
gdjs.Scene2Code.conditionTrue_1.val = true && gdjs.Scene2Code.condition0IsTrue_1.val && gdjs.Scene2Code.condition1IsTrue_1.val;
}
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
gdjs.Scene2Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Scene2Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDCurrentTimeObjects1[i].setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + "0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{

gdjs.Scene2Code.GDMenuObjects1.createFrom(runtimeScene.getObjects("Menu"));

gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene2Code.mapOfGDgdjs_46Scene2Code_46GDMenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene2Code.eventsList0x7a9aa4(runtimeScene);} //End of subevents
}

}


{

gdjs.Scene2Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene2Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene2Code.GDBoxPlayerObjects1[i].getY() <= 0 ) {
        gdjs.Scene2Code.condition0IsTrue_0.val = true;
        gdjs.Scene2Code.GDBoxPlayerObjects1[k] = gdjs.Scene2Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene2Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, -(20), "", 0);
}}

}


{

gdjs.Scene2Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene2Code.conditionTrue_1 = gdjs.Scene2Code.condition0IsTrue_0;
gdjs.Scene2Code.condition0IsTrue_1.val = false;
gdjs.Scene2Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene2Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene2Code.GDBoxPlayerObjects1[i].getY() > 0 ) {
        gdjs.Scene2Code.condition0IsTrue_1.val = true;
        gdjs.Scene2Code.GDBoxPlayerObjects1[k] = gdjs.Scene2Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene2Code.GDBoxPlayerObjects1.length = k;}if ( gdjs.Scene2Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene2Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene2Code.GDBoxPlayerObjects1[i].getY() <= 540 ) {
        gdjs.Scene2Code.condition1IsTrue_1.val = true;
        gdjs.Scene2Code.GDBoxPlayerObjects1[k] = gdjs.Scene2Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene2Code.GDBoxPlayerObjects1.length = k;}}
gdjs.Scene2Code.conditionTrue_1.val = true && gdjs.Scene2Code.condition0IsTrue_1.val && gdjs.Scene2Code.condition1IsTrue_1.val;
}
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.window.getCanvasHeight(runtimeScene) / 2, "", 0);
}}

}


{

gdjs.Scene2Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene2Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene2Code.GDBoxPlayerObjects1[i].getY() > 540 ) {
        gdjs.Scene2Code.condition0IsTrue_0.val = true;
        gdjs.Scene2Code.GDBoxPlayerObjects1[k] = gdjs.Scene2Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene2Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (20), "", 0);
}}

}


{

gdjs.Scene2Code.GDBlueGoalObjects1.createFrom(runtimeScene.getObjects("BlueGoal"));
gdjs.Scene2Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene2Code.mapOfGDgdjs_46Scene2Code_46GDBoxPlayerObjects1Objects, gdjs.Scene2Code.mapOfGDgdjs_46Scene2Code_46GDBlueGoalObjects1Objects, false, runtimeScene, true);
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene2Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene2Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Scene2Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}
{ //Subevents
gdjs.Scene2Code.eventsList0x6b25fc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Scene2Code.eventsList0xb5aa0


gdjs.Scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene2Code.GDBoxPlayerObjects1.length = 0;
gdjs.Scene2Code.GDBoxPlayerObjects2.length = 0;
gdjs.Scene2Code.GDBlueXPlatformObjects1.length = 0;
gdjs.Scene2Code.GDBlueXPlatformObjects2.length = 0;
gdjs.Scene2Code.GDBlueYPlatformObjects1.length = 0;
gdjs.Scene2Code.GDBlueYPlatformObjects2.length = 0;
gdjs.Scene2Code.GDBlueGoalObjects1.length = 0;
gdjs.Scene2Code.GDBlueGoalObjects2.length = 0;
gdjs.Scene2Code.GDCurrentTimeObjects1.length = 0;
gdjs.Scene2Code.GDCurrentTimeObjects2.length = 0;
gdjs.Scene2Code.GDMenuObjects1.length = 0;
gdjs.Scene2Code.GDMenuObjects2.length = 0;

gdjs.Scene2Code.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['Scene2Code'] = gdjs.Scene2Code;
