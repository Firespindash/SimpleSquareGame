gdjs.Dark4Code = {};
gdjs.Dark4Code.GDBoxPlayerObjects1_1final = [];

gdjs.Dark4Code.GDBoxPlayerObjects1= [];
gdjs.Dark4Code.GDBoxPlayerObjects2= [];
gdjs.Dark4Code.GDLightPinkXPlatformObjects1= [];
gdjs.Dark4Code.GDLightPinkXPlatformObjects2= [];
gdjs.Dark4Code.GDLightPinkYPlatformObjects1= [];
gdjs.Dark4Code.GDLightPinkYPlatformObjects2= [];
gdjs.Dark4Code.GDPinkGoalObjects1= [];
gdjs.Dark4Code.GDPinkGoalObjects2= [];
gdjs.Dark4Code.GDCurrentTimeObjects1= [];
gdjs.Dark4Code.GDCurrentTimeObjects2= [];
gdjs.Dark4Code.GDMenuObjects1= [];
gdjs.Dark4Code.GDMenuObjects2= [];

gdjs.Dark4Code.conditionTrue_0 = {val:false};
gdjs.Dark4Code.condition0IsTrue_0 = {val:false};
gdjs.Dark4Code.condition1IsTrue_0 = {val:false};
gdjs.Dark4Code.condition2IsTrue_0 = {val:false};
gdjs.Dark4Code.condition3IsTrue_0 = {val:false};
gdjs.Dark4Code.conditionTrue_1 = {val:false};
gdjs.Dark4Code.condition0IsTrue_1 = {val:false};
gdjs.Dark4Code.condition1IsTrue_1 = {val:false};
gdjs.Dark4Code.condition2IsTrue_1 = {val:false};
gdjs.Dark4Code.condition3IsTrue_1 = {val:false};


gdjs.Dark4Code.eventsList0x6b2f2c = function(runtimeScene) {

}; //End of gdjs.Dark4Code.eventsList0x6b2f2c
gdjs.Dark4Code.eventsList0x6a4564 = function(runtimeScene) {

{


gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark4Code.conditionTrue_1 = gdjs.Dark4Code.condition0IsTrue_0;
gdjs.Dark4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8800828);
}
}if (gdjs.Dark4Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("jumpsTotal").add(1);
}}

}


}; //End of gdjs.Dark4Code.eventsList0x6a4564
gdjs.Dark4Code.eventsList0x6b306c = function(runtimeScene) {

{


gdjs.Dark4Code.condition0IsTrue_0.val = false;
gdjs.Dark4Code.condition1IsTrue_0.val = false;
{
{gdjs.Dark4Code.conditionTrue_1 = gdjs.Dark4Code.condition0IsTrue_0;
gdjs.Dark4Code.condition0IsTrue_1.val = false;
gdjs.Dark4Code.condition1IsTrue_1.val = false;
gdjs.Dark4Code.condition2IsTrue_1.val = false;
{
gdjs.Dark4Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Dark4Code.condition0IsTrue_1.val ) {
    gdjs.Dark4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark4Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Dark4Code.condition1IsTrue_1.val ) {
    gdjs.Dark4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark4Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Dark4Code.condition2IsTrue_1.val ) {
    gdjs.Dark4Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Dark4Code.condition0IsTrue_0.val ) {
{
{gdjs.Dark4Code.conditionTrue_1 = gdjs.Dark4Code.condition1IsTrue_0;
gdjs.Dark4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7690532);
}
}}
if (gdjs.Dark4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Dark4Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark4Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark4Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Dark4Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark4Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Dark4Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).add(1);
}
}
{ //Subevents
gdjs.Dark4Code.eventsList0x6a4564(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Dark4Code.eventsList0x6b306c
gdjs.Dark4Code.eventsList0x83584c = function(runtimeScene) {

{

/* Reuse gdjs.Dark4Code.GDBoxPlayerObjects1 */

gdjs.Dark4Code.condition0IsTrue_0.val = false;
gdjs.Dark4Code.condition1IsTrue_0.val = false;
{
{gdjs.Dark4Code.conditionTrue_1 = gdjs.Dark4Code.condition0IsTrue_0;
gdjs.Dark4Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Dark4Code.condition0IsTrue_1.val = false;
gdjs.Dark4Code.condition1IsTrue_1.val = false;
{
gdjs.Dark4Code.GDBoxPlayerObjects2.createFrom(gdjs.Dark4Code.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.Dark4Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark4Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Dark4Code.condition0IsTrue_1.val = true;
        gdjs.Dark4Code.GDBoxPlayerObjects2[k] = gdjs.Dark4Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark4Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark4Code.condition0IsTrue_1.val ) {
    gdjs.Dark4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark4Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark4Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark4Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark4Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark4Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark4Code.GDBoxPlayerObjects2.createFrom(gdjs.Dark4Code.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.Dark4Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark4Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Dark4Code.condition1IsTrue_1.val = true;
        gdjs.Dark4Code.GDBoxPlayerObjects2[k] = gdjs.Dark4Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark4Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark4Code.condition1IsTrue_1.val ) {
    gdjs.Dark4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark4Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark4Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark4Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark4Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark4Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark4Code.GDBoxPlayerObjects1.createFrom(gdjs.Dark4Code.GDBoxPlayerObjects1_1final);
}
}
}if ( gdjs.Dark4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dark4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark4Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Dark4Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)) < 2 ) {
        gdjs.Dark4Code.condition1IsTrue_0.val = true;
        gdjs.Dark4Code.GDBoxPlayerObjects1[k] = gdjs.Dark4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark4Code.GDBoxPlayerObjects1.length = k;}}
if (gdjs.Dark4Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Dark4Code.eventsList0x6b306c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Dark4Code.eventsList0x83584c
gdjs.Dark4Code.eventsList0x8307bc = function(runtimeScene) {

}; //End of gdjs.Dark4Code.eventsList0x8307bc
gdjs.Dark4Code.eventsList0x83575c = function(runtimeScene) {

{

gdjs.Dark4Code.GDBoxPlayerObjects1.length = 0;


gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark4Code.conditionTrue_1 = gdjs.Dark4Code.condition0IsTrue_0;
gdjs.Dark4Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Dark4Code.condition0IsTrue_1.val = false;
gdjs.Dark4Code.condition1IsTrue_1.val = false;
{
gdjs.Dark4Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Dark4Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark4Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Dark4Code.condition0IsTrue_1.val = true;
        gdjs.Dark4Code.GDBoxPlayerObjects2[k] = gdjs.Dark4Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark4Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark4Code.condition0IsTrue_1.val ) {
    gdjs.Dark4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark4Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark4Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark4Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark4Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark4Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark4Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Dark4Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark4Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Dark4Code.condition1IsTrue_1.val = true;
        gdjs.Dark4Code.GDBoxPlayerObjects2[k] = gdjs.Dark4Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark4Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark4Code.condition1IsTrue_1.val ) {
    gdjs.Dark4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark4Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark4Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark4Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark4Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark4Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark4Code.GDBoxPlayerObjects1.createFrom(gdjs.Dark4Code.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.Dark4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark4Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark4Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark4Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


}; //End of gdjs.Dark4Code.eventsList0x83575c
gdjs.Dark4Code.eventsList0x7a9c8c = function(runtimeScene) {

{

gdjs.Dark4Code.GDBoxPlayerObjects1.length = 0;


gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark4Code.conditionTrue_1 = gdjs.Dark4Code.condition0IsTrue_0;
gdjs.Dark4Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Dark4Code.condition0IsTrue_1.val = false;
gdjs.Dark4Code.condition1IsTrue_1.val = false;
{
gdjs.Dark4Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Dark4Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark4Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Dark4Code.condition0IsTrue_1.val = true;
        gdjs.Dark4Code.GDBoxPlayerObjects2[k] = gdjs.Dark4Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark4Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark4Code.condition0IsTrue_1.val ) {
    gdjs.Dark4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark4Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark4Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark4Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark4Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark4Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark4Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Dark4Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark4Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Dark4Code.condition1IsTrue_1.val = true;
        gdjs.Dark4Code.GDBoxPlayerObjects2[k] = gdjs.Dark4Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark4Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark4Code.condition1IsTrue_1.val ) {
    gdjs.Dark4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark4Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark4Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark4Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark4Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark4Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark4Code.GDBoxPlayerObjects1.createFrom(gdjs.Dark4Code.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.Dark4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark4Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark4Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark4Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


}; //End of gdjs.Dark4Code.eventsList0x7a9c8c
gdjs.Dark4Code.eventsList0x864c9c = function(runtimeScene) {

}; //End of gdjs.Dark4Code.eventsList0x864c9c
gdjs.Dark4Code.eventsList0x75568c = function(runtimeScene) {

}; //End of gdjs.Dark4Code.eventsList0x75568c
gdjs.Dark4Code.mapOfGDgdjs_46Dark4Code_46GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.Dark4Code.GDMenuObjects1});gdjs.Dark4Code.eventsList0x8a168c = function(runtimeScene) {

{


gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
gdjs.Dark4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Dark4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


}; //End of gdjs.Dark4Code.eventsList0x8a168c
gdjs.Dark4Code.mapOfGDgdjs_46Dark4Code_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.Dark4Code.GDBoxPlayerObjects1});gdjs.Dark4Code.mapOfGDgdjs_46Dark4Code_46GDPinkGoalObjects1Objects = Hashtable.newFrom({"PinkGoal": gdjs.Dark4Code.GDPinkGoalObjects1});gdjs.Dark4Code.eventsList0x823554 = function(runtimeScene) {

{

/* Reuse gdjs.Dark4Code.GDBoxPlayerObjects1 */

gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark4Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Dark4Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)) == 50 ) {
        gdjs.Dark4Code.condition0IsTrue_0.val = true;
        gdjs.Dark4Code.GDBoxPlayerObjects1[k] = gdjs.Dark4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark4Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dark5", true);
}}

}


}; //End of gdjs.Dark4Code.eventsList0x823554
gdjs.Dark4Code.eventsList0xb5aa0 = function(runtimeScene) {

{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Double Jump"); }gdjs.Dark4Code.eventsList0x6b2f2c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Double Jump"); }
}


{

gdjs.Dark4Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark4Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Dark4Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Dark4Code.condition0IsTrue_0.val = true;
        gdjs.Dark4Code.GDBoxPlayerObjects1[k] = gdjs.Dark4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark4Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark4Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Dark4Code.eventsList0x83584c(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.Dark4Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark4Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Dark4Code.condition0IsTrue_0.val = true;
        gdjs.Dark4Code.GDBoxPlayerObjects1[k] = gdjs.Dark4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark4Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark4Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark4Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark4Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.Dark4Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark4Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Dark4Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Key Events"); }gdjs.Dark4Code.eventsList0x8307bc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Key Events"); }
}


{



}


{


gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark4Code.conditionTrue_1 = gdjs.Dark4Code.condition0IsTrue_0;
gdjs.Dark4Code.condition0IsTrue_1.val = false;
gdjs.Dark4Code.condition1IsTrue_1.val = false;
gdjs.Dark4Code.condition2IsTrue_1.val = false;
{
gdjs.Dark4Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Dark4Code.condition0IsTrue_1.val ) {
    gdjs.Dark4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark4Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Dark4Code.condition1IsTrue_1.val ) {
    gdjs.Dark4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark4Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Dark4Code.condition2IsTrue_1.val ) {
    gdjs.Dark4Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Dark4Code.condition0IsTrue_0.val) {
gdjs.Dark4Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
{for(var i = 0, len = gdjs.Dark4Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark4Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{



}


{


gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark4Code.conditionTrue_1 = gdjs.Dark4Code.condition0IsTrue_0;
gdjs.Dark4Code.condition0IsTrue_1.val = false;
gdjs.Dark4Code.condition1IsTrue_1.val = false;
{
gdjs.Dark4Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Dark4Code.condition0IsTrue_1.val ) {
    gdjs.Dark4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark4Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.Dark4Code.condition1IsTrue_1.val ) {
    gdjs.Dark4Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Dark4Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Dark4Code.eventsList0x83575c(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark4Code.conditionTrue_1 = gdjs.Dark4Code.condition0IsTrue_0;
gdjs.Dark4Code.condition0IsTrue_1.val = false;
gdjs.Dark4Code.condition1IsTrue_1.val = false;
{
gdjs.Dark4Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Dark4Code.condition0IsTrue_1.val ) {
    gdjs.Dark4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark4Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.Dark4Code.condition1IsTrue_1.val ) {
    gdjs.Dark4Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Dark4Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Dark4Code.eventsList0x7a9c8c(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
gdjs.Dark4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if (gdjs.Dark4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


{


gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
gdjs.Dark4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if (gdjs.Dark4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Respawn System"); }gdjs.Dark4Code.eventsList0x864c9c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Respawn System"); }
}


{

gdjs.Dark4Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark4Code.GDBoxPlayerObjects1[i].getY() > 900 ) {
        gdjs.Dark4Code.condition0IsTrue_0.val = true;
        gdjs.Dark4Code.GDBoxPlayerObjects1[k] = gdjs.Dark4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark4Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark4Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark4Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark4Code.GDBoxPlayerObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) - 50);
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


gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
gdjs.Dark4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Secs")) == gdjs.evtTools.runtimeScene.getTime(runtimeScene, "sec") + 1;
}if (gdjs.Dark4Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{runtimeScene.getVariables().get("Secs").setNumber(0);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Wall Jump"); }gdjs.Dark4Code.eventsList0x75568c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Wall Jump"); }
}


{

gdjs.Dark4Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark4Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isGrabbingPlatform() ) {
        gdjs.Dark4Code.condition0IsTrue_0.val = true;
        gdjs.Dark4Code.GDBoxPlayerObjects1[k] = gdjs.Dark4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark4Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark4Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark4Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark4Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Dark4Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
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


gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
gdjs.Dark4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if (gdjs.Dark4Code.condition0IsTrue_0.val) {
gdjs.Dark4Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Dark4Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Dark4Code.GDCurrentTimeObjects1[i].setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
gdjs.Dark4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}if (gdjs.Dark4Code.condition0IsTrue_0.val) {
gdjs.Dark4Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Dark4Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Dark4Code.GDCurrentTimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + "0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
gdjs.Dark4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 10;
}if (gdjs.Dark4Code.condition0IsTrue_0.val) {
gdjs.Dark4Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Dark4Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Dark4Code.GDCurrentTimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark4Code.conditionTrue_1 = gdjs.Dark4Code.condition0IsTrue_0;
gdjs.Dark4Code.condition0IsTrue_1.val = false;
gdjs.Dark4Code.condition1IsTrue_1.val = false;
{
gdjs.Dark4Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if ( gdjs.Dark4Code.condition0IsTrue_1.val ) {
{
gdjs.Dark4Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}}
gdjs.Dark4Code.conditionTrue_1.val = true && gdjs.Dark4Code.condition0IsTrue_1.val && gdjs.Dark4Code.condition1IsTrue_1.val;
}
}if (gdjs.Dark4Code.condition0IsTrue_0.val) {
gdjs.Dark4Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Dark4Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Dark4Code.GDCurrentTimeObjects1[i].setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + "0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{

gdjs.Dark4Code.GDMenuObjects1.createFrom(runtimeScene.getObjects("Menu"));

gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
gdjs.Dark4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Dark4Code.mapOfGDgdjs_46Dark4Code_46GDMenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.Dark4Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Dark4Code.eventsList0x8a168c(runtimeScene);} //End of subevents
}

}


{

gdjs.Dark4Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark4Code.conditionTrue_1 = gdjs.Dark4Code.condition0IsTrue_0;
gdjs.Dark4Code.condition0IsTrue_1.val = false;
gdjs.Dark4Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark4Code.GDBoxPlayerObjects1[i].getY() <= 0 ) {
        gdjs.Dark4Code.condition0IsTrue_1.val = true;
        gdjs.Dark4Code.GDBoxPlayerObjects1[k] = gdjs.Dark4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark4Code.GDBoxPlayerObjects1.length = k;}if ( gdjs.Dark4Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dark4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark4Code.GDBoxPlayerObjects1[i].getY() > -(150) ) {
        gdjs.Dark4Code.condition1IsTrue_1.val = true;
        gdjs.Dark4Code.GDBoxPlayerObjects1[k] = gdjs.Dark4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark4Code.GDBoxPlayerObjects1.length = k;}}
gdjs.Dark4Code.conditionTrue_1.val = true && gdjs.Dark4Code.condition0IsTrue_1.val && gdjs.Dark4Code.condition1IsTrue_1.val;
}
}if (gdjs.Dark4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, -(175), "", 0);
}}

}


{

gdjs.Dark4Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark4Code.conditionTrue_1 = gdjs.Dark4Code.condition0IsTrue_0;
gdjs.Dark4Code.condition0IsTrue_1.val = false;
gdjs.Dark4Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark4Code.GDBoxPlayerObjects1[i].getY() >= -(600) ) {
        gdjs.Dark4Code.condition0IsTrue_1.val = true;
        gdjs.Dark4Code.GDBoxPlayerObjects1[k] = gdjs.Dark4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark4Code.GDBoxPlayerObjects1.length = k;}if ( gdjs.Dark4Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dark4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark4Code.GDBoxPlayerObjects1[i].getY() < -(300) ) {
        gdjs.Dark4Code.condition1IsTrue_1.val = true;
        gdjs.Dark4Code.GDBoxPlayerObjects1[k] = gdjs.Dark4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark4Code.GDBoxPlayerObjects1.length = k;}}
gdjs.Dark4Code.conditionTrue_1.val = true && gdjs.Dark4Code.condition0IsTrue_1.val && gdjs.Dark4Code.condition1IsTrue_1.val;
}
}if (gdjs.Dark4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, -(350), "", 0);
}}

}


{

gdjs.Dark4Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark4Code.GDBoxPlayerObjects1[i].getY() < -(600) ) {
        gdjs.Dark4Code.condition0IsTrue_0.val = true;
        gdjs.Dark4Code.GDBoxPlayerObjects1[k] = gdjs.Dark4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark4Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, -(730), "", 0);
}}

}


{

gdjs.Dark4Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark4Code.conditionTrue_1 = gdjs.Dark4Code.condition0IsTrue_0;
gdjs.Dark4Code.condition0IsTrue_1.val = false;
gdjs.Dark4Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark4Code.GDBoxPlayerObjects1[i].getY() > 0 ) {
        gdjs.Dark4Code.condition0IsTrue_1.val = true;
        gdjs.Dark4Code.GDBoxPlayerObjects1[k] = gdjs.Dark4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark4Code.GDBoxPlayerObjects1.length = k;}if ( gdjs.Dark4Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dark4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark4Code.GDBoxPlayerObjects1[i].getY() <= 540 ) {
        gdjs.Dark4Code.condition1IsTrue_1.val = true;
        gdjs.Dark4Code.GDBoxPlayerObjects1[k] = gdjs.Dark4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark4Code.GDBoxPlayerObjects1.length = k;}}
gdjs.Dark4Code.conditionTrue_1.val = true && gdjs.Dark4Code.condition0IsTrue_1.val && gdjs.Dark4Code.condition1IsTrue_1.val;
}
}if (gdjs.Dark4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.window.getCanvasHeight(runtimeScene) / 2, "", 0);
}}

}


{

gdjs.Dark4Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark4Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark4Code.GDBoxPlayerObjects1[i].getY() > 540 ) {
        gdjs.Dark4Code.condition0IsTrue_0.val = true;
        gdjs.Dark4Code.GDBoxPlayerObjects1[k] = gdjs.Dark4Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark4Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (20), "", 0);
}}

}


{

gdjs.Dark4Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
gdjs.Dark4Code.GDPinkGoalObjects1.createFrom(runtimeScene.getObjects("PinkGoal"));

gdjs.Dark4Code.condition0IsTrue_0.val = false;
{
gdjs.Dark4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dark4Code.mapOfGDgdjs_46Dark4Code_46GDBoxPlayerObjects1Objects, gdjs.Dark4Code.mapOfGDgdjs_46Dark4Code_46GDPinkGoalObjects1Objects, false, runtimeScene, true);
}if (gdjs.Dark4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark4Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark4Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark4Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Dark4Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}
{ //Subevents
gdjs.Dark4Code.eventsList0x823554(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Dark4Code.eventsList0xb5aa0


gdjs.Dark4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Dark4Code.GDBoxPlayerObjects1.length = 0;
gdjs.Dark4Code.GDBoxPlayerObjects2.length = 0;
gdjs.Dark4Code.GDLightPinkXPlatformObjects1.length = 0;
gdjs.Dark4Code.GDLightPinkXPlatformObjects2.length = 0;
gdjs.Dark4Code.GDLightPinkYPlatformObjects1.length = 0;
gdjs.Dark4Code.GDLightPinkYPlatformObjects2.length = 0;
gdjs.Dark4Code.GDPinkGoalObjects1.length = 0;
gdjs.Dark4Code.GDPinkGoalObjects2.length = 0;
gdjs.Dark4Code.GDCurrentTimeObjects1.length = 0;
gdjs.Dark4Code.GDCurrentTimeObjects2.length = 0;
gdjs.Dark4Code.GDMenuObjects1.length = 0;
gdjs.Dark4Code.GDMenuObjects2.length = 0;

gdjs.Dark4Code.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['Dark4Code'] = gdjs.Dark4Code;
