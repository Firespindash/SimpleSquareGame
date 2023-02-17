gdjs.Scene4Code = {};
gdjs.Scene4Code.GDBoxPlayerObjects1_1final = [];

gdjs.Scene4Code.GDBoxPlayerObjects1= [];
gdjs.Scene4Code.GDBoxPlayerObjects2= [];
gdjs.Scene4Code.GDPinkXPlatformObjects1= [];
gdjs.Scene4Code.GDPinkXPlatformObjects2= [];
gdjs.Scene4Code.GDPinkYPlatformObjects1= [];
gdjs.Scene4Code.GDPinkYPlatformObjects2= [];
gdjs.Scene4Code.GDPinkGoalObjects1= [];
gdjs.Scene4Code.GDPinkGoalObjects2= [];
gdjs.Scene4Code.GDCurrentTimeObjects1= [];
gdjs.Scene4Code.GDCurrentTimeObjects2= [];
gdjs.Scene4Code.GDMenuObjects1= [];
gdjs.Scene4Code.GDMenuObjects2= [];

gdjs.Scene4Code.conditionTrue_0 = {val:false};
gdjs.Scene4Code.condition0IsTrue_0 = {val:false};
gdjs.Scene4Code.condition1IsTrue_0 = {val:false};
gdjs.Scene4Code.condition2IsTrue_0 = {val:false};
gdjs.Scene4Code.condition3IsTrue_0 = {val:false};
gdjs.Scene4Code.conditionTrue_1 = {val:false};
gdjs.Scene4Code.condition0IsTrue_1 = {val:false};
gdjs.Scene4Code.condition1IsTrue_1 = {val:false};
gdjs.Scene4Code.condition2IsTrue_1 = {val:false};
gdjs.Scene4Code.condition3IsTrue_1 = {val:false};


gdjs.Scene4Code.eventsList0x7d14ac = function(runtimeScene) {

}; //End of gdjs.Scene4Code.eventsList0x7d14ac
gdjs.Scene4Code.eventsList0x7a9d84 = function(runtimeScene) {

{


gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene4Code.conditionTrue_1 = gdjs.Scene4Code.condition0IsTrue_0;
gdjs.Scene4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8201284);
}
}if (gdjs.Scene4Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("jumpsTotal").add(1);
}}

}


}; //End of gdjs.Scene4Code.eventsList0x7a9d84
gdjs.Scene4Code.eventsList0x7a9a54 = function(runtimeScene) {

{


gdjs.Scene4Code.condition0IsTrue_0.val = false;
gdjs.Scene4Code.condition1IsTrue_0.val = false;
{
{gdjs.Scene4Code.conditionTrue_1 = gdjs.Scene4Code.condition0IsTrue_0;
gdjs.Scene4Code.condition0IsTrue_1.val = false;
gdjs.Scene4Code.condition1IsTrue_1.val = false;
gdjs.Scene4Code.condition2IsTrue_1.val = false;
{
gdjs.Scene4Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Scene4Code.condition0IsTrue_1.val ) {
    gdjs.Scene4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene4Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Scene4Code.condition1IsTrue_1.val ) {
    gdjs.Scene4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene4Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Scene4Code.condition2IsTrue_1.val ) {
    gdjs.Scene4Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Scene4Code.condition0IsTrue_0.val ) {
{
{gdjs.Scene4Code.conditionTrue_1 = gdjs.Scene4Code.condition1IsTrue_0;
gdjs.Scene4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8200628);
}
}}
if (gdjs.Scene4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene4Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene4Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Scene4Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Scene4Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).add(1);
}
}
{ //Subevents
gdjs.Scene4Code.eventsList0x7a9d84(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Scene4Code.eventsList0x7a9a54
gdjs.Scene4Code.eventsList0x7d15ac = function(runtimeScene) {

{

/* Reuse gdjs.Scene4Code.GDBoxPlayerObjects1 */

gdjs.Scene4Code.condition0IsTrue_0.val = false;
gdjs.Scene4Code.condition1IsTrue_0.val = false;
{
{gdjs.Scene4Code.conditionTrue_1 = gdjs.Scene4Code.condition0IsTrue_0;
gdjs.Scene4Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Scene4Code.condition0IsTrue_1.val = false;
gdjs.Scene4Code.condition1IsTrue_1.val = false;
{
gdjs.Scene4Code.GDBoxPlayerObjects2.createFrom(gdjs.Scene4Code.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.Scene4Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene4Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Scene4Code.condition0IsTrue_1.val = true;
        gdjs.Scene4Code.GDBoxPlayerObjects2[k] = gdjs.Scene4Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene4Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene4Code.condition0IsTrue_1.val ) {
    gdjs.Scene4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene4Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene4Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene4Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene4Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene4Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene4Code.GDBoxPlayerObjects2.createFrom(gdjs.Scene4Code.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.Scene4Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene4Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Scene4Code.condition1IsTrue_1.val = true;
        gdjs.Scene4Code.GDBoxPlayerObjects2[k] = gdjs.Scene4Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene4Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene4Code.condition1IsTrue_1.val ) {
    gdjs.Scene4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene4Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene4Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene4Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene4Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene4Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene4Code.GDBoxPlayerObjects1.createFrom(gdjs.Scene4Code.GDBoxPlayerObjects1_1final);
}
}
}if ( gdjs.Scene4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene4Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Scene4Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)) < 2 ) {
        gdjs.Scene4Code.condition1IsTrue_0.val = true;
        gdjs.Scene4Code.GDBoxPlayerObjects1[k] = gdjs.Scene4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene4Code.GDBoxPlayerObjects1.length = k;}}
if (gdjs.Scene4Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Scene4Code.eventsList0x7a9a54(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Scene4Code.eventsList0x7d15ac
gdjs.Scene4Code.eventsList0x6a4774 = function(runtimeScene) {

}; //End of gdjs.Scene4Code.eventsList0x6a4774
gdjs.Scene4Code.eventsList0x7d1444 = function(runtimeScene) {

{

gdjs.Scene4Code.GDBoxPlayerObjects1.length = 0;


gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene4Code.conditionTrue_1 = gdjs.Scene4Code.condition0IsTrue_0;
gdjs.Scene4Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Scene4Code.condition0IsTrue_1.val = false;
gdjs.Scene4Code.condition1IsTrue_1.val = false;
{
gdjs.Scene4Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Scene4Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene4Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Scene4Code.condition0IsTrue_1.val = true;
        gdjs.Scene4Code.GDBoxPlayerObjects2[k] = gdjs.Scene4Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene4Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene4Code.condition0IsTrue_1.val ) {
    gdjs.Scene4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene4Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene4Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene4Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene4Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene4Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene4Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Scene4Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene4Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Scene4Code.condition1IsTrue_1.val = true;
        gdjs.Scene4Code.GDBoxPlayerObjects2[k] = gdjs.Scene4Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene4Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene4Code.condition1IsTrue_1.val ) {
    gdjs.Scene4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene4Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene4Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene4Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene4Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene4Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene4Code.GDBoxPlayerObjects1.createFrom(gdjs.Scene4Code.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.Scene4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene4Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene4Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


}; //End of gdjs.Scene4Code.eventsList0x7d1444
gdjs.Scene4Code.eventsList0x7d276c = function(runtimeScene) {

{

gdjs.Scene4Code.GDBoxPlayerObjects1.length = 0;


gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene4Code.conditionTrue_1 = gdjs.Scene4Code.condition0IsTrue_0;
gdjs.Scene4Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Scene4Code.condition0IsTrue_1.val = false;
gdjs.Scene4Code.condition1IsTrue_1.val = false;
{
gdjs.Scene4Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Scene4Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene4Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Scene4Code.condition0IsTrue_1.val = true;
        gdjs.Scene4Code.GDBoxPlayerObjects2[k] = gdjs.Scene4Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene4Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene4Code.condition0IsTrue_1.val ) {
    gdjs.Scene4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene4Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene4Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene4Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene4Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene4Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene4Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Scene4Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene4Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Scene4Code.condition1IsTrue_1.val = true;
        gdjs.Scene4Code.GDBoxPlayerObjects2[k] = gdjs.Scene4Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene4Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene4Code.condition1IsTrue_1.val ) {
    gdjs.Scene4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene4Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene4Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene4Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene4Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene4Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene4Code.GDBoxPlayerObjects1.createFrom(gdjs.Scene4Code.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.Scene4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene4Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene4Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


}; //End of gdjs.Scene4Code.eventsList0x7d276c
gdjs.Scene4Code.eventsList0x8304bc = function(runtimeScene) {

}; //End of gdjs.Scene4Code.eventsList0x8304bc
gdjs.Scene4Code.eventsList0x6a444c = function(runtimeScene) {

}; //End of gdjs.Scene4Code.eventsList0x6a444c
gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.Scene4Code.GDMenuObjects1});gdjs.Scene4Code.eventsList0x7aa534 = function(runtimeScene) {

{


gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Scene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


}; //End of gdjs.Scene4Code.eventsList0x7aa534
gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.Scene4Code.GDBoxPlayerObjects1});gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDPinkGoalObjects1Objects = Hashtable.newFrom({"PinkGoal": gdjs.Scene4Code.GDPinkGoalObjects1});gdjs.Scene4Code.eventsList0x755914 = function(runtimeScene) {

{

/* Reuse gdjs.Scene4Code.GDBoxPlayerObjects1 */

gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene4Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Scene4Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)) == 50 ) {
        gdjs.Scene4Code.condition0IsTrue_0.val = true;
        gdjs.Scene4Code.GDBoxPlayerObjects1[k] = gdjs.Scene4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene4Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene5", true);
}}

}


}; //End of gdjs.Scene4Code.eventsList0x755914
gdjs.Scene4Code.eventsList0xb5aa0 = function(runtimeScene) {

{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Double Jump"); }gdjs.Scene4Code.eventsList0x7d14ac(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Double Jump"); }
}


{

gdjs.Scene4Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene4Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Scene4Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Scene4Code.condition0IsTrue_0.val = true;
        gdjs.Scene4Code.GDBoxPlayerObjects1[k] = gdjs.Scene4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene4Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene4Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene4Code.eventsList0x7d15ac(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.Scene4Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene4Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Scene4Code.condition0IsTrue_0.val = true;
        gdjs.Scene4Code.GDBoxPlayerObjects1[k] = gdjs.Scene4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene4Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene4Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene4Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.Scene4Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Scene4Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Key Events"); }gdjs.Scene4Code.eventsList0x6a4774(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Key Events"); }
}


{



}


{


gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene4Code.conditionTrue_1 = gdjs.Scene4Code.condition0IsTrue_0;
gdjs.Scene4Code.condition0IsTrue_1.val = false;
gdjs.Scene4Code.condition1IsTrue_1.val = false;
gdjs.Scene4Code.condition2IsTrue_1.val = false;
{
gdjs.Scene4Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Scene4Code.condition0IsTrue_1.val ) {
    gdjs.Scene4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene4Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Scene4Code.condition1IsTrue_1.val ) {
    gdjs.Scene4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene4Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Scene4Code.condition2IsTrue_1.val ) {
    gdjs.Scene4Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Scene4Code.condition0IsTrue_0.val) {
gdjs.Scene4Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
{for(var i = 0, len = gdjs.Scene4Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{



}


{


gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene4Code.conditionTrue_1 = gdjs.Scene4Code.condition0IsTrue_0;
gdjs.Scene4Code.condition0IsTrue_1.val = false;
gdjs.Scene4Code.condition1IsTrue_1.val = false;
{
gdjs.Scene4Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Scene4Code.condition0IsTrue_1.val ) {
    gdjs.Scene4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene4Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.Scene4Code.condition1IsTrue_1.val ) {
    gdjs.Scene4Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Scene4Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene4Code.eventsList0x7d1444(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene4Code.conditionTrue_1 = gdjs.Scene4Code.condition0IsTrue_0;
gdjs.Scene4Code.condition0IsTrue_1.val = false;
gdjs.Scene4Code.condition1IsTrue_1.val = false;
{
gdjs.Scene4Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Scene4Code.condition0IsTrue_1.val ) {
    gdjs.Scene4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene4Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.Scene4Code.condition1IsTrue_1.val ) {
    gdjs.Scene4Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Scene4Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene4Code.eventsList0x7d276c(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if (gdjs.Scene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


{


gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if (gdjs.Scene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Respawn System"); }gdjs.Scene4Code.eventsList0x8304bc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Respawn System"); }
}


{

gdjs.Scene4Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene4Code.GDBoxPlayerObjects1[i].getY() > 900 ) {
        gdjs.Scene4Code.condition0IsTrue_0.val = true;
        gdjs.Scene4Code.GDBoxPlayerObjects1[k] = gdjs.Scene4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene4Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene4Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene4Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDBoxPlayerObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) - 50);
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


gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Secs")) == gdjs.evtTools.runtimeScene.getTime(runtimeScene, "sec") + 1;
}if (gdjs.Scene4Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{runtimeScene.getVariables().get("Secs").setNumber(0);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Wall Jump"); }gdjs.Scene4Code.eventsList0x6a444c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Wall Jump"); }
}


{

gdjs.Scene4Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene4Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isGrabbingPlatform() ) {
        gdjs.Scene4Code.condition0IsTrue_0.val = true;
        gdjs.Scene4Code.GDBoxPlayerObjects1[k] = gdjs.Scene4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene4Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene4Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene4Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Scene4Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
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


gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if (gdjs.Scene4Code.condition0IsTrue_0.val) {
gdjs.Scene4Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Scene4Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDCurrentTimeObjects1[i].setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}if (gdjs.Scene4Code.condition0IsTrue_0.val) {
gdjs.Scene4Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Scene4Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDCurrentTimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + "0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 10;
}if (gdjs.Scene4Code.condition0IsTrue_0.val) {
gdjs.Scene4Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Scene4Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDCurrentTimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene4Code.conditionTrue_1 = gdjs.Scene4Code.condition0IsTrue_0;
gdjs.Scene4Code.condition0IsTrue_1.val = false;
gdjs.Scene4Code.condition1IsTrue_1.val = false;
{
gdjs.Scene4Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if ( gdjs.Scene4Code.condition0IsTrue_1.val ) {
{
gdjs.Scene4Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}}
gdjs.Scene4Code.conditionTrue_1.val = true && gdjs.Scene4Code.condition0IsTrue_1.val && gdjs.Scene4Code.condition1IsTrue_1.val;
}
}if (gdjs.Scene4Code.condition0IsTrue_0.val) {
gdjs.Scene4Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Scene4Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDCurrentTimeObjects1[i].setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + "0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{

gdjs.Scene4Code.GDMenuObjects1.createFrom(runtimeScene.getObjects("Menu"));

gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDMenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.Scene4Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene4Code.eventsList0x7aa534(runtimeScene);} //End of subevents
}

}


{

gdjs.Scene4Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene4Code.conditionTrue_1 = gdjs.Scene4Code.condition0IsTrue_0;
gdjs.Scene4Code.condition0IsTrue_1.val = false;
gdjs.Scene4Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene4Code.GDBoxPlayerObjects1[i].getY() <= 0 ) {
        gdjs.Scene4Code.condition0IsTrue_1.val = true;
        gdjs.Scene4Code.GDBoxPlayerObjects1[k] = gdjs.Scene4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene4Code.GDBoxPlayerObjects1.length = k;}if ( gdjs.Scene4Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene4Code.GDBoxPlayerObjects1[i].getY() > -(150) ) {
        gdjs.Scene4Code.condition1IsTrue_1.val = true;
        gdjs.Scene4Code.GDBoxPlayerObjects1[k] = gdjs.Scene4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene4Code.GDBoxPlayerObjects1.length = k;}}
gdjs.Scene4Code.conditionTrue_1.val = true && gdjs.Scene4Code.condition0IsTrue_1.val && gdjs.Scene4Code.condition1IsTrue_1.val;
}
}if (gdjs.Scene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, -(175), "", 0);
}}

}


{

gdjs.Scene4Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene4Code.conditionTrue_1 = gdjs.Scene4Code.condition0IsTrue_0;
gdjs.Scene4Code.condition0IsTrue_1.val = false;
gdjs.Scene4Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene4Code.GDBoxPlayerObjects1[i].getY() >= -(600) ) {
        gdjs.Scene4Code.condition0IsTrue_1.val = true;
        gdjs.Scene4Code.GDBoxPlayerObjects1[k] = gdjs.Scene4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene4Code.GDBoxPlayerObjects1.length = k;}if ( gdjs.Scene4Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene4Code.GDBoxPlayerObjects1[i].getY() < -(300) ) {
        gdjs.Scene4Code.condition1IsTrue_1.val = true;
        gdjs.Scene4Code.GDBoxPlayerObjects1[k] = gdjs.Scene4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene4Code.GDBoxPlayerObjects1.length = k;}}
gdjs.Scene4Code.conditionTrue_1.val = true && gdjs.Scene4Code.condition0IsTrue_1.val && gdjs.Scene4Code.condition1IsTrue_1.val;
}
}if (gdjs.Scene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, -(350), "", 0);
}}

}


{

gdjs.Scene4Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene4Code.GDBoxPlayerObjects1[i].getY() < -(600) ) {
        gdjs.Scene4Code.condition0IsTrue_0.val = true;
        gdjs.Scene4Code.GDBoxPlayerObjects1[k] = gdjs.Scene4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene4Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, -(700), "", 0);
}}

}


{

gdjs.Scene4Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene4Code.conditionTrue_1 = gdjs.Scene4Code.condition0IsTrue_0;
gdjs.Scene4Code.condition0IsTrue_1.val = false;
gdjs.Scene4Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene4Code.GDBoxPlayerObjects1[i].getY() > 0 ) {
        gdjs.Scene4Code.condition0IsTrue_1.val = true;
        gdjs.Scene4Code.GDBoxPlayerObjects1[k] = gdjs.Scene4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene4Code.GDBoxPlayerObjects1.length = k;}if ( gdjs.Scene4Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene4Code.GDBoxPlayerObjects1[i].getY() <= 540 ) {
        gdjs.Scene4Code.condition1IsTrue_1.val = true;
        gdjs.Scene4Code.GDBoxPlayerObjects1[k] = gdjs.Scene4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene4Code.GDBoxPlayerObjects1.length = k;}}
gdjs.Scene4Code.conditionTrue_1.val = true && gdjs.Scene4Code.condition0IsTrue_1.val && gdjs.Scene4Code.condition1IsTrue_1.val;
}
}if (gdjs.Scene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.window.getCanvasHeight(runtimeScene) / 2, "", 0);
}}

}


{

gdjs.Scene4Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene4Code.GDBoxPlayerObjects1[i].getY() > 540 ) {
        gdjs.Scene4Code.condition0IsTrue_0.val = true;
        gdjs.Scene4Code.GDBoxPlayerObjects1[k] = gdjs.Scene4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene4Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (20), "", 0);
}}

}


{

gdjs.Scene4Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
gdjs.Scene4Code.GDPinkGoalObjects1.createFrom(runtimeScene.getObjects("PinkGoal"));

gdjs.Scene4Code.condition0IsTrue_0.val = false;
{
gdjs.Scene4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDBoxPlayerObjects1Objects, gdjs.Scene4Code.mapOfGDgdjs_46Scene4Code_46GDPinkGoalObjects1Objects, false, runtimeScene, true);
}if (gdjs.Scene4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene4Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene4Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene4Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Scene4Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}
{ //Subevents
gdjs.Scene4Code.eventsList0x755914(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Scene4Code.eventsList0xb5aa0


gdjs.Scene4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene4Code.GDBoxPlayerObjects1.length = 0;
gdjs.Scene4Code.GDBoxPlayerObjects2.length = 0;
gdjs.Scene4Code.GDPinkXPlatformObjects1.length = 0;
gdjs.Scene4Code.GDPinkXPlatformObjects2.length = 0;
gdjs.Scene4Code.GDPinkYPlatformObjects1.length = 0;
gdjs.Scene4Code.GDPinkYPlatformObjects2.length = 0;
gdjs.Scene4Code.GDPinkGoalObjects1.length = 0;
gdjs.Scene4Code.GDPinkGoalObjects2.length = 0;
gdjs.Scene4Code.GDCurrentTimeObjects1.length = 0;
gdjs.Scene4Code.GDCurrentTimeObjects2.length = 0;
gdjs.Scene4Code.GDMenuObjects1.length = 0;
gdjs.Scene4Code.GDMenuObjects2.length = 0;

gdjs.Scene4Code.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['Scene4Code'] = gdjs.Scene4Code;
