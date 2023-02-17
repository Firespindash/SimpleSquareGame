gdjs.Scene5Code = {};
gdjs.Scene5Code.GDBoxPlayerObjects1_1final = [];

gdjs.Scene5Code.GDBoxPlayerObjects1= [];
gdjs.Scene5Code.GDBoxPlayerObjects2= [];
gdjs.Scene5Code.GDPurpleXPlatformObjects1= [];
gdjs.Scene5Code.GDPurpleXPlatformObjects2= [];
gdjs.Scene5Code.GDPurpleYPlatformObjects1= [];
gdjs.Scene5Code.GDPurpleYPlatformObjects2= [];
gdjs.Scene5Code.GDPurpleGoalObjects1= [];
gdjs.Scene5Code.GDPurpleGoalObjects2= [];
gdjs.Scene5Code.GDCurrentTimeObjects1= [];
gdjs.Scene5Code.GDCurrentTimeObjects2= [];
gdjs.Scene5Code.GDMenuObjects1= [];
gdjs.Scene5Code.GDMenuObjects2= [];

gdjs.Scene5Code.conditionTrue_0 = {val:false};
gdjs.Scene5Code.condition0IsTrue_0 = {val:false};
gdjs.Scene5Code.condition1IsTrue_0 = {val:false};
gdjs.Scene5Code.condition2IsTrue_0 = {val:false};
gdjs.Scene5Code.condition3IsTrue_0 = {val:false};
gdjs.Scene5Code.conditionTrue_1 = {val:false};
gdjs.Scene5Code.condition0IsTrue_1 = {val:false};
gdjs.Scene5Code.condition1IsTrue_1 = {val:false};
gdjs.Scene5Code.condition2IsTrue_1 = {val:false};
gdjs.Scene5Code.condition3IsTrue_1 = {val:false};


gdjs.Scene5Code.eventsList0x83578c = function(runtimeScene) {

}; //End of gdjs.Scene5Code.eventsList0x83578c
gdjs.Scene5Code.eventsList0x755914 = function(runtimeScene) {

{


gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene5Code.conditionTrue_1 = gdjs.Scene5Code.condition0IsTrue_0;
gdjs.Scene5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8197324);
}
}if (gdjs.Scene5Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("jumpsTotal").add(1);
}}

}


}; //End of gdjs.Scene5Code.eventsList0x755914
gdjs.Scene5Code.eventsList0x6b30e4 = function(runtimeScene) {

{


gdjs.Scene5Code.condition0IsTrue_0.val = false;
gdjs.Scene5Code.condition1IsTrue_0.val = false;
{
{gdjs.Scene5Code.conditionTrue_1 = gdjs.Scene5Code.condition0IsTrue_0;
gdjs.Scene5Code.condition0IsTrue_1.val = false;
gdjs.Scene5Code.condition1IsTrue_1.val = false;
gdjs.Scene5Code.condition2IsTrue_1.val = false;
{
gdjs.Scene5Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Scene5Code.condition0IsTrue_1.val ) {
    gdjs.Scene5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene5Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Scene5Code.condition1IsTrue_1.val ) {
    gdjs.Scene5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene5Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Scene5Code.condition2IsTrue_1.val ) {
    gdjs.Scene5Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Scene5Code.condition0IsTrue_0.val ) {
{
{gdjs.Scene5Code.conditionTrue_1 = gdjs.Scene5Code.condition1IsTrue_0;
gdjs.Scene5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8800764);
}
}}
if (gdjs.Scene5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene5Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene5Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Scene5Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Scene5Code.GDBoxPlayerObjects1[i].getVariables().get("jumpCounter")).add(1);
}
}
{ //Subevents
gdjs.Scene5Code.eventsList0x755914(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Scene5Code.eventsList0x6b30e4
gdjs.Scene5Code.eventsList0x83588c = function(runtimeScene) {

{

/* Reuse gdjs.Scene5Code.GDBoxPlayerObjects1 */

gdjs.Scene5Code.condition0IsTrue_0.val = false;
gdjs.Scene5Code.condition1IsTrue_0.val = false;
{
{gdjs.Scene5Code.conditionTrue_1 = gdjs.Scene5Code.condition0IsTrue_0;
gdjs.Scene5Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Scene5Code.condition0IsTrue_1.val = false;
gdjs.Scene5Code.condition1IsTrue_1.val = false;
{
gdjs.Scene5Code.GDBoxPlayerObjects2.createFrom(gdjs.Scene5Code.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.Scene5Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene5Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Scene5Code.condition0IsTrue_1.val = true;
        gdjs.Scene5Code.GDBoxPlayerObjects2[k] = gdjs.Scene5Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene5Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene5Code.condition0IsTrue_1.val ) {
    gdjs.Scene5Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene5Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene5Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene5Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene5Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene5Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene5Code.GDBoxPlayerObjects2.createFrom(gdjs.Scene5Code.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.Scene5Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene5Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Scene5Code.condition1IsTrue_1.val = true;
        gdjs.Scene5Code.GDBoxPlayerObjects2[k] = gdjs.Scene5Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene5Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene5Code.condition1IsTrue_1.val ) {
    gdjs.Scene5Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene5Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene5Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene5Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene5Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene5Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene5Code.GDBoxPlayerObjects1.createFrom(gdjs.Scene5Code.GDBoxPlayerObjects1_1final);
}
}
}if ( gdjs.Scene5Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene5Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene5Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Scene5Code.GDBoxPlayerObjects1[i].getVariables().get("jumpCounter")) < 2 ) {
        gdjs.Scene5Code.condition1IsTrue_0.val = true;
        gdjs.Scene5Code.GDBoxPlayerObjects1[k] = gdjs.Scene5Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene5Code.GDBoxPlayerObjects1.length = k;}}
if (gdjs.Scene5Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Scene5Code.eventsList0x6b30e4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Scene5Code.eventsList0x83588c
gdjs.Scene5Code.eventsList0x7a9ac4 = function(runtimeScene) {

}; //End of gdjs.Scene5Code.eventsList0x7a9ac4
gdjs.Scene5Code.eventsList0x7d22ec = function(runtimeScene) {

{

gdjs.Scene5Code.GDBoxPlayerObjects1.length = 0;


gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene5Code.conditionTrue_1 = gdjs.Scene5Code.condition0IsTrue_0;
gdjs.Scene5Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Scene5Code.condition0IsTrue_1.val = false;
gdjs.Scene5Code.condition1IsTrue_1.val = false;
{
gdjs.Scene5Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Scene5Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene5Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Scene5Code.condition0IsTrue_1.val = true;
        gdjs.Scene5Code.GDBoxPlayerObjects2[k] = gdjs.Scene5Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene5Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene5Code.condition0IsTrue_1.val ) {
    gdjs.Scene5Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene5Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene5Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene5Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene5Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene5Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene5Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Scene5Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene5Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Scene5Code.condition1IsTrue_1.val = true;
        gdjs.Scene5Code.GDBoxPlayerObjects2[k] = gdjs.Scene5Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene5Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene5Code.condition1IsTrue_1.val ) {
    gdjs.Scene5Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene5Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene5Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene5Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene5Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene5Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene5Code.GDBoxPlayerObjects1.createFrom(gdjs.Scene5Code.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.Scene5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene5Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene5Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


}; //End of gdjs.Scene5Code.eventsList0x7d22ec
gdjs.Scene5Code.eventsList0x865104 = function(runtimeScene) {

{

gdjs.Scene5Code.GDBoxPlayerObjects1.length = 0;


gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene5Code.conditionTrue_1 = gdjs.Scene5Code.condition0IsTrue_0;
gdjs.Scene5Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Scene5Code.condition0IsTrue_1.val = false;
gdjs.Scene5Code.condition1IsTrue_1.val = false;
{
gdjs.Scene5Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Scene5Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene5Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Scene5Code.condition0IsTrue_1.val = true;
        gdjs.Scene5Code.GDBoxPlayerObjects2[k] = gdjs.Scene5Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene5Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene5Code.condition0IsTrue_1.val ) {
    gdjs.Scene5Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene5Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene5Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene5Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene5Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene5Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene5Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Scene5Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene5Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Scene5Code.condition1IsTrue_1.val = true;
        gdjs.Scene5Code.GDBoxPlayerObjects2[k] = gdjs.Scene5Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene5Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene5Code.condition1IsTrue_1.val ) {
    gdjs.Scene5Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene5Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene5Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene5Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene5Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene5Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene5Code.GDBoxPlayerObjects1.createFrom(gdjs.Scene5Code.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.Scene5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene5Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene5Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


}; //End of gdjs.Scene5Code.eventsList0x865104
gdjs.Scene5Code.eventsList0x6a4bc4 = function(runtimeScene) {

}; //End of gdjs.Scene5Code.eventsList0x6a4bc4
gdjs.Scene5Code.eventsList0x7d274c = function(runtimeScene) {

}; //End of gdjs.Scene5Code.eventsList0x7d274c
gdjs.Scene5Code.mapOfGDgdjs_46Scene5Code_46GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.Scene5Code.GDMenuObjects1});gdjs.Scene5Code.eventsList0x6b2cbc = function(runtimeScene) {

{


gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
gdjs.Scene5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Scene5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


}; //End of gdjs.Scene5Code.eventsList0x6b2cbc
gdjs.Scene5Code.mapOfGDgdjs_46Scene5Code_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.Scene5Code.GDBoxPlayerObjects1});gdjs.Scene5Code.mapOfGDgdjs_46Scene5Code_46GDPurpleGoalObjects1Objects = Hashtable.newFrom({"PurpleGoal": gdjs.Scene5Code.GDPurpleGoalObjects1});gdjs.Scene5Code.eventsList0x6b32f4 = function(runtimeScene) {

{

/* Reuse gdjs.Scene5Code.GDBoxPlayerObjects1 */

gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene5Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene5Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Scene5Code.GDBoxPlayerObjects1[i].getVariables().get("timeGoal")) == 50 ) {
        gdjs.Scene5Code.condition0IsTrue_0.val = true;
        gdjs.Scene5Code.GDBoxPlayerObjects1[k] = gdjs.Scene5Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene5Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dark2", true);
}}

}


}; //End of gdjs.Scene5Code.eventsList0x6b32f4
gdjs.Scene5Code.eventsList0xb5aa0 = function(runtimeScene) {

{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Double Jump"); }gdjs.Scene5Code.eventsList0x83578c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Double Jump"); }
}


{

gdjs.Scene5Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene5Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene5Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Scene5Code.GDBoxPlayerObjects1[i].getVariables().get("doubleJump")) == 1 ) {
        gdjs.Scene5Code.condition0IsTrue_0.val = true;
        gdjs.Scene5Code.GDBoxPlayerObjects1[k] = gdjs.Scene5Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene5Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene5Code.eventsList0x83588c(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.Scene5Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene5Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene5Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Scene5Code.condition0IsTrue_0.val = true;
        gdjs.Scene5Code.GDBoxPlayerObjects1[k] = gdjs.Scene5Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene5Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene5Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene5Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.Scene5Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Scene5Code.GDBoxPlayerObjects1[i].getVariables().get("jumpCounter")).setNumber(0);
}
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Key Events"); }gdjs.Scene5Code.eventsList0x7a9ac4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Key Events"); }
}


{



}


{


gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene5Code.conditionTrue_1 = gdjs.Scene5Code.condition0IsTrue_0;
gdjs.Scene5Code.condition0IsTrue_1.val = false;
gdjs.Scene5Code.condition1IsTrue_1.val = false;
gdjs.Scene5Code.condition2IsTrue_1.val = false;
{
gdjs.Scene5Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Scene5Code.condition0IsTrue_1.val ) {
    gdjs.Scene5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene5Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Scene5Code.condition1IsTrue_1.val ) {
    gdjs.Scene5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene5Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Scene5Code.condition2IsTrue_1.val ) {
    gdjs.Scene5Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Scene5Code.condition0IsTrue_0.val) {
gdjs.Scene5Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
{for(var i = 0, len = gdjs.Scene5Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{



}


{


gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene5Code.conditionTrue_1 = gdjs.Scene5Code.condition0IsTrue_0;
gdjs.Scene5Code.condition0IsTrue_1.val = false;
gdjs.Scene5Code.condition1IsTrue_1.val = false;
{
gdjs.Scene5Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Scene5Code.condition0IsTrue_1.val ) {
    gdjs.Scene5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene5Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.Scene5Code.condition1IsTrue_1.val ) {
    gdjs.Scene5Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Scene5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene5Code.eventsList0x7d22ec(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene5Code.conditionTrue_1 = gdjs.Scene5Code.condition0IsTrue_0;
gdjs.Scene5Code.condition0IsTrue_1.val = false;
gdjs.Scene5Code.condition1IsTrue_1.val = false;
{
gdjs.Scene5Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Scene5Code.condition0IsTrue_1.val ) {
    gdjs.Scene5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene5Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.Scene5Code.condition1IsTrue_1.val ) {
    gdjs.Scene5Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Scene5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene5Code.eventsList0x865104(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
gdjs.Scene5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if (gdjs.Scene5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


{


gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
gdjs.Scene5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if (gdjs.Scene5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Respawn System"); }gdjs.Scene5Code.eventsList0x6a4bc4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Respawn System"); }
}


{

gdjs.Scene5Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene5Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene5Code.GDBoxPlayerObjects1[i].getY() > 900 ) {
        gdjs.Scene5Code.condition0IsTrue_0.val = true;
        gdjs.Scene5Code.GDBoxPlayerObjects1[k] = gdjs.Scene5Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene5Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene5Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene5Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDBoxPlayerObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) - 50);
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


gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
gdjs.Scene5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Secs")) == gdjs.evtTools.runtimeScene.getTime(runtimeScene, "sec") + 1;
}if (gdjs.Scene5Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{runtimeScene.getVariables().get("Secs").setNumber(0);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Wall Jump"); }gdjs.Scene5Code.eventsList0x7d274c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Wall Jump"); }
}


{

gdjs.Scene5Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene5Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene5Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isGrabbingPlatform() ) {
        gdjs.Scene5Code.condition0IsTrue_0.val = true;
        gdjs.Scene5Code.GDBoxPlayerObjects1[k] = gdjs.Scene5Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene5Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene5Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene5Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Scene5Code.GDBoxPlayerObjects1[i].getVariables().get("jumpCounter")).setNumber(0);
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


gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
gdjs.Scene5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if (gdjs.Scene5Code.condition0IsTrue_0.val) {
gdjs.Scene5Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Scene5Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDCurrentTimeObjects1[i].setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
gdjs.Scene5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}if (gdjs.Scene5Code.condition0IsTrue_0.val) {
gdjs.Scene5Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Scene5Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDCurrentTimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + "0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
gdjs.Scene5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 10;
}if (gdjs.Scene5Code.condition0IsTrue_0.val) {
gdjs.Scene5Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Scene5Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDCurrentTimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene5Code.conditionTrue_1 = gdjs.Scene5Code.condition0IsTrue_0;
gdjs.Scene5Code.condition0IsTrue_1.val = false;
gdjs.Scene5Code.condition1IsTrue_1.val = false;
{
gdjs.Scene5Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if ( gdjs.Scene5Code.condition0IsTrue_1.val ) {
{
gdjs.Scene5Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}}
gdjs.Scene5Code.conditionTrue_1.val = true && gdjs.Scene5Code.condition0IsTrue_1.val && gdjs.Scene5Code.condition1IsTrue_1.val;
}
}if (gdjs.Scene5Code.condition0IsTrue_0.val) {
gdjs.Scene5Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Scene5Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDCurrentTimeObjects1[i].setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + "0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{

gdjs.Scene5Code.GDMenuObjects1.createFrom(runtimeScene.getObjects("Menu"));

gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
gdjs.Scene5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene5Code.mapOfGDgdjs_46Scene5Code_46GDMenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.Scene5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene5Code.eventsList0x6b2cbc(runtimeScene);} //End of subevents
}

}


{

gdjs.Scene5Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene5Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene5Code.GDBoxPlayerObjects1[i].getY() < 0 ) {
        gdjs.Scene5Code.condition0IsTrue_0.val = true;
        gdjs.Scene5Code.GDBoxPlayerObjects1[k] = gdjs.Scene5Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene5Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, -(20), "", 0);
}}

}


{

gdjs.Scene5Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene5Code.conditionTrue_1 = gdjs.Scene5Code.condition0IsTrue_0;
gdjs.Scene5Code.condition0IsTrue_1.val = false;
gdjs.Scene5Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene5Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene5Code.GDBoxPlayerObjects1[i].getY() >= 0 ) {
        gdjs.Scene5Code.condition0IsTrue_1.val = true;
        gdjs.Scene5Code.GDBoxPlayerObjects1[k] = gdjs.Scene5Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene5Code.GDBoxPlayerObjects1.length = k;}if ( gdjs.Scene5Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene5Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene5Code.GDBoxPlayerObjects1[i].getY() <= 540 ) {
        gdjs.Scene5Code.condition1IsTrue_1.val = true;
        gdjs.Scene5Code.GDBoxPlayerObjects1[k] = gdjs.Scene5Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene5Code.GDBoxPlayerObjects1.length = k;}}
gdjs.Scene5Code.conditionTrue_1.val = true && gdjs.Scene5Code.condition0IsTrue_1.val && gdjs.Scene5Code.condition1IsTrue_1.val;
}
}if (gdjs.Scene5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.window.getCanvasHeight(runtimeScene) / 2, "", 0);
}}

}


{

gdjs.Scene5Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene5Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene5Code.GDBoxPlayerObjects1[i].getY() > 540 ) {
        gdjs.Scene5Code.condition0IsTrue_0.val = true;
        gdjs.Scene5Code.GDBoxPlayerObjects1[k] = gdjs.Scene5Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene5Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (20), "", 0);
}}

}


{

gdjs.Scene5Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
gdjs.Scene5Code.GDPurpleGoalObjects1.createFrom(runtimeScene.getObjects("PurpleGoal"));

gdjs.Scene5Code.condition0IsTrue_0.val = false;
{
gdjs.Scene5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene5Code.mapOfGDgdjs_46Scene5Code_46GDBoxPlayerObjects1Objects, gdjs.Scene5Code.mapOfGDgdjs_46Scene5Code_46GDPurpleGoalObjects1Objects, false, runtimeScene, true);
}if (gdjs.Scene5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene5Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene5Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Scene5Code.GDBoxPlayerObjects1[i].getVariables().get("timeGoal")).add(1);
}
}
{ //Subevents
gdjs.Scene5Code.eventsList0x6b32f4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Scene5Code.eventsList0xb5aa0


gdjs.Scene5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene5Code.GDBoxPlayerObjects1.length = 0;
gdjs.Scene5Code.GDBoxPlayerObjects2.length = 0;
gdjs.Scene5Code.GDPurpleXPlatformObjects1.length = 0;
gdjs.Scene5Code.GDPurpleXPlatformObjects2.length = 0;
gdjs.Scene5Code.GDPurpleYPlatformObjects1.length = 0;
gdjs.Scene5Code.GDPurpleYPlatformObjects2.length = 0;
gdjs.Scene5Code.GDPurpleGoalObjects1.length = 0;
gdjs.Scene5Code.GDPurpleGoalObjects2.length = 0;
gdjs.Scene5Code.GDCurrentTimeObjects1.length = 0;
gdjs.Scene5Code.GDCurrentTimeObjects2.length = 0;
gdjs.Scene5Code.GDMenuObjects1.length = 0;
gdjs.Scene5Code.GDMenuObjects2.length = 0;

gdjs.Scene5Code.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['Scene5Code'] = gdjs.Scene5Code;
