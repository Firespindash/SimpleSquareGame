gdjs.Dark5Code = {};
gdjs.Dark5Code.GDBoxPlayerObjects1_1final = [];

gdjs.Dark5Code.GDBoxPlayerObjects1= [];
gdjs.Dark5Code.GDBoxPlayerObjects2= [];
gdjs.Dark5Code.GDLightPurpleXPlatformObjects1= [];
gdjs.Dark5Code.GDLightPurpleXPlatformObjects2= [];
gdjs.Dark5Code.GDLightPurpleYPlatformObjects1= [];
gdjs.Dark5Code.GDLightPurpleYPlatformObjects2= [];
gdjs.Dark5Code.GDPurpleGoalObjects1= [];
gdjs.Dark5Code.GDPurpleGoalObjects2= [];
gdjs.Dark5Code.GDCurrentTimeObjects1= [];
gdjs.Dark5Code.GDCurrentTimeObjects2= [];
gdjs.Dark5Code.GDMenuObjects1= [];
gdjs.Dark5Code.GDMenuObjects2= [];

gdjs.Dark5Code.conditionTrue_0 = {val:false};
gdjs.Dark5Code.condition0IsTrue_0 = {val:false};
gdjs.Dark5Code.condition1IsTrue_0 = {val:false};
gdjs.Dark5Code.condition2IsTrue_0 = {val:false};
gdjs.Dark5Code.condition3IsTrue_0 = {val:false};
gdjs.Dark5Code.conditionTrue_1 = {val:false};
gdjs.Dark5Code.condition0IsTrue_1 = {val:false};
gdjs.Dark5Code.condition1IsTrue_1 = {val:false};
gdjs.Dark5Code.condition2IsTrue_1 = {val:false};
gdjs.Dark5Code.condition3IsTrue_1 = {val:false};


gdjs.Dark5Code.eventsList0x6b32ac = function(runtimeScene) {

}; //End of gdjs.Dark5Code.eventsList0x6b32ac
gdjs.Dark5Code.eventsList0x75503c = function(runtimeScene) {

{


gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark5Code.conditionTrue_1 = gdjs.Dark5Code.condition0IsTrue_0;
gdjs.Dark5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8607860);
}
}if (gdjs.Dark5Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("jumpsTotal").add(1);
}}

}


}; //End of gdjs.Dark5Code.eventsList0x75503c
gdjs.Dark5Code.eventsList0x83637c = function(runtimeScene) {

{


gdjs.Dark5Code.condition0IsTrue_0.val = false;
gdjs.Dark5Code.condition1IsTrue_0.val = false;
{
{gdjs.Dark5Code.conditionTrue_1 = gdjs.Dark5Code.condition0IsTrue_0;
gdjs.Dark5Code.condition0IsTrue_1.val = false;
gdjs.Dark5Code.condition1IsTrue_1.val = false;
gdjs.Dark5Code.condition2IsTrue_1.val = false;
{
gdjs.Dark5Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Dark5Code.condition0IsTrue_1.val ) {
    gdjs.Dark5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark5Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Dark5Code.condition1IsTrue_1.val ) {
    gdjs.Dark5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark5Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Dark5Code.condition2IsTrue_1.val ) {
    gdjs.Dark5Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Dark5Code.condition0IsTrue_0.val ) {
{
{gdjs.Dark5Code.conditionTrue_1 = gdjs.Dark5Code.condition1IsTrue_0;
gdjs.Dark5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7024220);
}
}}
if (gdjs.Dark5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Dark5Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark5Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark5Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Dark5Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark5Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Dark5Code.GDBoxPlayerObjects1[i].getVariables().get("jumpCounter")).add(1);
}
}
{ //Subevents
gdjs.Dark5Code.eventsList0x75503c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Dark5Code.eventsList0x83637c
gdjs.Dark5Code.eventsList0x836254 = function(runtimeScene) {

{

/* Reuse gdjs.Dark5Code.GDBoxPlayerObjects1 */

gdjs.Dark5Code.condition0IsTrue_0.val = false;
gdjs.Dark5Code.condition1IsTrue_0.val = false;
{
{gdjs.Dark5Code.conditionTrue_1 = gdjs.Dark5Code.condition0IsTrue_0;
gdjs.Dark5Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Dark5Code.condition0IsTrue_1.val = false;
gdjs.Dark5Code.condition1IsTrue_1.val = false;
{
gdjs.Dark5Code.GDBoxPlayerObjects2.createFrom(gdjs.Dark5Code.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.Dark5Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark5Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Dark5Code.condition0IsTrue_1.val = true;
        gdjs.Dark5Code.GDBoxPlayerObjects2[k] = gdjs.Dark5Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark5Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark5Code.condition0IsTrue_1.val ) {
    gdjs.Dark5Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark5Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark5Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark5Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark5Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark5Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark5Code.GDBoxPlayerObjects2.createFrom(gdjs.Dark5Code.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.Dark5Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark5Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Dark5Code.condition1IsTrue_1.val = true;
        gdjs.Dark5Code.GDBoxPlayerObjects2[k] = gdjs.Dark5Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark5Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark5Code.condition1IsTrue_1.val ) {
    gdjs.Dark5Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark5Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark5Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark5Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark5Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark5Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark5Code.GDBoxPlayerObjects1.createFrom(gdjs.Dark5Code.GDBoxPlayerObjects1_1final);
}
}
}if ( gdjs.Dark5Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dark5Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark5Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Dark5Code.GDBoxPlayerObjects1[i].getVariables().get("jumpCounter")) < 2 ) {
        gdjs.Dark5Code.condition1IsTrue_0.val = true;
        gdjs.Dark5Code.GDBoxPlayerObjects1[k] = gdjs.Dark5Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark5Code.GDBoxPlayerObjects1.length = k;}}
if (gdjs.Dark5Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Dark5Code.eventsList0x83637c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Dark5Code.eventsList0x836254
gdjs.Dark5Code.eventsList0x6a4544 = function(runtimeScene) {

}; //End of gdjs.Dark5Code.eventsList0x6a4544
gdjs.Dark5Code.eventsList0x7aa5f4 = function(runtimeScene) {

{

gdjs.Dark5Code.GDBoxPlayerObjects1.length = 0;


gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark5Code.conditionTrue_1 = gdjs.Dark5Code.condition0IsTrue_0;
gdjs.Dark5Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Dark5Code.condition0IsTrue_1.val = false;
gdjs.Dark5Code.condition1IsTrue_1.val = false;
{
gdjs.Dark5Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Dark5Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark5Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Dark5Code.condition0IsTrue_1.val = true;
        gdjs.Dark5Code.GDBoxPlayerObjects2[k] = gdjs.Dark5Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark5Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark5Code.condition0IsTrue_1.val ) {
    gdjs.Dark5Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark5Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark5Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark5Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark5Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark5Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark5Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Dark5Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark5Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Dark5Code.condition1IsTrue_1.val = true;
        gdjs.Dark5Code.GDBoxPlayerObjects2[k] = gdjs.Dark5Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark5Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark5Code.condition1IsTrue_1.val ) {
    gdjs.Dark5Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark5Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark5Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark5Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark5Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark5Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark5Code.GDBoxPlayerObjects1.createFrom(gdjs.Dark5Code.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.Dark5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark5Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark5Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark5Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


}; //End of gdjs.Dark5Code.eventsList0x7aa5f4
gdjs.Dark5Code.eventsList0x6b3134 = function(runtimeScene) {

{

gdjs.Dark5Code.GDBoxPlayerObjects1.length = 0;


gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark5Code.conditionTrue_1 = gdjs.Dark5Code.condition0IsTrue_0;
gdjs.Dark5Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Dark5Code.condition0IsTrue_1.val = false;
gdjs.Dark5Code.condition1IsTrue_1.val = false;
{
gdjs.Dark5Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Dark5Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark5Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Dark5Code.condition0IsTrue_1.val = true;
        gdjs.Dark5Code.GDBoxPlayerObjects2[k] = gdjs.Dark5Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark5Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark5Code.condition0IsTrue_1.val ) {
    gdjs.Dark5Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark5Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark5Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark5Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark5Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark5Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark5Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Dark5Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark5Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Dark5Code.condition1IsTrue_1.val = true;
        gdjs.Dark5Code.GDBoxPlayerObjects2[k] = gdjs.Dark5Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark5Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark5Code.condition1IsTrue_1.val ) {
    gdjs.Dark5Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark5Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark5Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark5Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark5Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark5Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark5Code.GDBoxPlayerObjects1.createFrom(gdjs.Dark5Code.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.Dark5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark5Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark5Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark5Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


}; //End of gdjs.Dark5Code.eventsList0x6b3134
gdjs.Dark5Code.eventsList0x6a4774 = function(runtimeScene) {

}; //End of gdjs.Dark5Code.eventsList0x6a4774
gdjs.Dark5Code.eventsList0x8a0c44 = function(runtimeScene) {

}; //End of gdjs.Dark5Code.eventsList0x8a0c44
gdjs.Dark5Code.mapOfGDgdjs_46Dark5Code_46GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.Dark5Code.GDMenuObjects1});gdjs.Dark5Code.eventsList0x755384 = function(runtimeScene) {

{


gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
gdjs.Dark5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Dark5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


}; //End of gdjs.Dark5Code.eventsList0x755384
gdjs.Dark5Code.mapOfGDgdjs_46Dark5Code_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.Dark5Code.GDBoxPlayerObjects1});gdjs.Dark5Code.mapOfGDgdjs_46Dark5Code_46GDPurpleGoalObjects1Objects = Hashtable.newFrom({"PurpleGoal": gdjs.Dark5Code.GDPurpleGoalObjects1});gdjs.Dark5Code.eventsList0x75521c = function(runtimeScene) {

{

/* Reuse gdjs.Dark5Code.GDBoxPlayerObjects1 */

gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark5Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark5Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Dark5Code.GDBoxPlayerObjects1[i].getVariables().get("timeGoal")) == 50 ) {
        gdjs.Dark5Code.condition0IsTrue_0.val = true;
        gdjs.Dark5Code.GDBoxPlayerObjects1[k] = gdjs.Dark5Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark5Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FinalScene", true);
}}

}


}; //End of gdjs.Dark5Code.eventsList0x75521c
gdjs.Dark5Code.eventsList0xb5aa0 = function(runtimeScene) {

{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Double Jump"); }gdjs.Dark5Code.eventsList0x6b32ac(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Double Jump"); }
}


{

gdjs.Dark5Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark5Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark5Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Dark5Code.GDBoxPlayerObjects1[i].getVariables().get("doubleJump")) == 1 ) {
        gdjs.Dark5Code.condition0IsTrue_0.val = true;
        gdjs.Dark5Code.GDBoxPlayerObjects1[k] = gdjs.Dark5Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark5Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Dark5Code.eventsList0x836254(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.Dark5Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark5Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark5Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Dark5Code.condition0IsTrue_0.val = true;
        gdjs.Dark5Code.GDBoxPlayerObjects1[k] = gdjs.Dark5Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark5Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark5Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark5Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark5Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.Dark5Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark5Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Dark5Code.GDBoxPlayerObjects1[i].getVariables().get("jumpCounter")).setNumber(0);
}
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Key Events"); }gdjs.Dark5Code.eventsList0x6a4544(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Key Events"); }
}


{



}


{


gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark5Code.conditionTrue_1 = gdjs.Dark5Code.condition0IsTrue_0;
gdjs.Dark5Code.condition0IsTrue_1.val = false;
gdjs.Dark5Code.condition1IsTrue_1.val = false;
gdjs.Dark5Code.condition2IsTrue_1.val = false;
{
gdjs.Dark5Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Dark5Code.condition0IsTrue_1.val ) {
    gdjs.Dark5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark5Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Dark5Code.condition1IsTrue_1.val ) {
    gdjs.Dark5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark5Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Dark5Code.condition2IsTrue_1.val ) {
    gdjs.Dark5Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Dark5Code.condition0IsTrue_0.val) {
gdjs.Dark5Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
{for(var i = 0, len = gdjs.Dark5Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark5Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{



}


{


gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark5Code.conditionTrue_1 = gdjs.Dark5Code.condition0IsTrue_0;
gdjs.Dark5Code.condition0IsTrue_1.val = false;
gdjs.Dark5Code.condition1IsTrue_1.val = false;
{
gdjs.Dark5Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Dark5Code.condition0IsTrue_1.val ) {
    gdjs.Dark5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark5Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.Dark5Code.condition1IsTrue_1.val ) {
    gdjs.Dark5Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Dark5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Dark5Code.eventsList0x7aa5f4(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark5Code.conditionTrue_1 = gdjs.Dark5Code.condition0IsTrue_0;
gdjs.Dark5Code.condition0IsTrue_1.val = false;
gdjs.Dark5Code.condition1IsTrue_1.val = false;
{
gdjs.Dark5Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Dark5Code.condition0IsTrue_1.val ) {
    gdjs.Dark5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark5Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.Dark5Code.condition1IsTrue_1.val ) {
    gdjs.Dark5Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Dark5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Dark5Code.eventsList0x6b3134(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
gdjs.Dark5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if (gdjs.Dark5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


{


gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
gdjs.Dark5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if (gdjs.Dark5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Respawn System"); }gdjs.Dark5Code.eventsList0x6a4774(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Respawn System"); }
}


{

gdjs.Dark5Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark5Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark5Code.GDBoxPlayerObjects1[i].getY() > 900 ) {
        gdjs.Dark5Code.condition0IsTrue_0.val = true;
        gdjs.Dark5Code.GDBoxPlayerObjects1[k] = gdjs.Dark5Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark5Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark5Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark5Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark5Code.GDBoxPlayerObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) - 50);
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


gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
gdjs.Dark5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Secs")) == gdjs.evtTools.runtimeScene.getTime(runtimeScene, "sec") + 1;
}if (gdjs.Dark5Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{runtimeScene.getVariables().get("Secs").setNumber(0);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Wall Jump"); }gdjs.Dark5Code.eventsList0x8a0c44(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Wall Jump"); }
}


{

gdjs.Dark5Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark5Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark5Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isGrabbingPlatform() ) {
        gdjs.Dark5Code.condition0IsTrue_0.val = true;
        gdjs.Dark5Code.GDBoxPlayerObjects1[k] = gdjs.Dark5Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark5Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark5Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark5Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark5Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Dark5Code.GDBoxPlayerObjects1[i].getVariables().get("jumpCounter")).setNumber(0);
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


gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
gdjs.Dark5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if (gdjs.Dark5Code.condition0IsTrue_0.val) {
gdjs.Dark5Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Dark5Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Dark5Code.GDCurrentTimeObjects1[i].setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
gdjs.Dark5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}if (gdjs.Dark5Code.condition0IsTrue_0.val) {
gdjs.Dark5Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Dark5Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Dark5Code.GDCurrentTimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + "0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
gdjs.Dark5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 10;
}if (gdjs.Dark5Code.condition0IsTrue_0.val) {
gdjs.Dark5Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Dark5Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Dark5Code.GDCurrentTimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark5Code.conditionTrue_1 = gdjs.Dark5Code.condition0IsTrue_0;
gdjs.Dark5Code.condition0IsTrue_1.val = false;
gdjs.Dark5Code.condition1IsTrue_1.val = false;
{
gdjs.Dark5Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if ( gdjs.Dark5Code.condition0IsTrue_1.val ) {
{
gdjs.Dark5Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}}
gdjs.Dark5Code.conditionTrue_1.val = true && gdjs.Dark5Code.condition0IsTrue_1.val && gdjs.Dark5Code.condition1IsTrue_1.val;
}
}if (gdjs.Dark5Code.condition0IsTrue_0.val) {
gdjs.Dark5Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Dark5Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Dark5Code.GDCurrentTimeObjects1[i].setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + "0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{

gdjs.Dark5Code.GDMenuObjects1.createFrom(runtimeScene.getObjects("Menu"));

gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
gdjs.Dark5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Dark5Code.mapOfGDgdjs_46Dark5Code_46GDMenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.Dark5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Dark5Code.eventsList0x755384(runtimeScene);} //End of subevents
}

}


{

gdjs.Dark5Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark5Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark5Code.GDBoxPlayerObjects1[i].getY() < 0 ) {
        gdjs.Dark5Code.condition0IsTrue_0.val = true;
        gdjs.Dark5Code.GDBoxPlayerObjects1[k] = gdjs.Dark5Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark5Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, -(20), "", 0);
}}

}


{

gdjs.Dark5Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark5Code.conditionTrue_1 = gdjs.Dark5Code.condition0IsTrue_0;
gdjs.Dark5Code.condition0IsTrue_1.val = false;
gdjs.Dark5Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark5Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark5Code.GDBoxPlayerObjects1[i].getY() >= 0 ) {
        gdjs.Dark5Code.condition0IsTrue_1.val = true;
        gdjs.Dark5Code.GDBoxPlayerObjects1[k] = gdjs.Dark5Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark5Code.GDBoxPlayerObjects1.length = k;}if ( gdjs.Dark5Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dark5Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark5Code.GDBoxPlayerObjects1[i].getY() <= 540 ) {
        gdjs.Dark5Code.condition1IsTrue_1.val = true;
        gdjs.Dark5Code.GDBoxPlayerObjects1[k] = gdjs.Dark5Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark5Code.GDBoxPlayerObjects1.length = k;}}
gdjs.Dark5Code.conditionTrue_1.val = true && gdjs.Dark5Code.condition0IsTrue_1.val && gdjs.Dark5Code.condition1IsTrue_1.val;
}
}if (gdjs.Dark5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.window.getCanvasHeight(runtimeScene) / 2, "", 0);
}}

}


{

gdjs.Dark5Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark5Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark5Code.GDBoxPlayerObjects1[i].getY() > 540 ) {
        gdjs.Dark5Code.condition0IsTrue_0.val = true;
        gdjs.Dark5Code.GDBoxPlayerObjects1[k] = gdjs.Dark5Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark5Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, 560, "", 0);
}}

}


{

gdjs.Dark5Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
gdjs.Dark5Code.GDPurpleGoalObjects1.createFrom(runtimeScene.getObjects("PurpleGoal"));

gdjs.Dark5Code.condition0IsTrue_0.val = false;
{
gdjs.Dark5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dark5Code.mapOfGDgdjs_46Dark5Code_46GDBoxPlayerObjects1Objects, gdjs.Dark5Code.mapOfGDgdjs_46Dark5Code_46GDPurpleGoalObjects1Objects, false, runtimeScene, true);
}if (gdjs.Dark5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark5Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark5Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark5Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Dark5Code.GDBoxPlayerObjects1[i].getVariables().get("timeGoal")).add(1);
}
}
{ //Subevents
gdjs.Dark5Code.eventsList0x75521c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Dark5Code.eventsList0xb5aa0


gdjs.Dark5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Dark5Code.GDBoxPlayerObjects1.length = 0;
gdjs.Dark5Code.GDBoxPlayerObjects2.length = 0;
gdjs.Dark5Code.GDLightPurpleXPlatformObjects1.length = 0;
gdjs.Dark5Code.GDLightPurpleXPlatformObjects2.length = 0;
gdjs.Dark5Code.GDLightPurpleYPlatformObjects1.length = 0;
gdjs.Dark5Code.GDLightPurpleYPlatformObjects2.length = 0;
gdjs.Dark5Code.GDPurpleGoalObjects1.length = 0;
gdjs.Dark5Code.GDPurpleGoalObjects2.length = 0;
gdjs.Dark5Code.GDCurrentTimeObjects1.length = 0;
gdjs.Dark5Code.GDCurrentTimeObjects2.length = 0;
gdjs.Dark5Code.GDMenuObjects1.length = 0;
gdjs.Dark5Code.GDMenuObjects2.length = 0;

gdjs.Dark5Code.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['Dark5Code'] = gdjs.Dark5Code;
