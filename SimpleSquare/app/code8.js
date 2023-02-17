gdjs.Dark3Code = {};
gdjs.Dark3Code.GDBoxPlayerObjects1_1final = [];

gdjs.Dark3Code.GDBoxPlayerObjects1= [];
gdjs.Dark3Code.GDBoxPlayerObjects2= [];
gdjs.Dark3Code.GDLightOrangeXPlatformObjects1= [];
gdjs.Dark3Code.GDLightOrangeXPlatformObjects2= [];
gdjs.Dark3Code.GDLightOrangeYPlatformObjects1= [];
gdjs.Dark3Code.GDLightOrangeYPlatformObjects2= [];
gdjs.Dark3Code.GDOrangeGoalObjects1= [];
gdjs.Dark3Code.GDOrangeGoalObjects2= [];
gdjs.Dark3Code.GDCurrentTimeObjects1= [];
gdjs.Dark3Code.GDCurrentTimeObjects2= [];
gdjs.Dark3Code.GDMenuObjects1= [];
gdjs.Dark3Code.GDMenuObjects2= [];

gdjs.Dark3Code.conditionTrue_0 = {val:false};
gdjs.Dark3Code.condition0IsTrue_0 = {val:false};
gdjs.Dark3Code.condition1IsTrue_0 = {val:false};
gdjs.Dark3Code.condition2IsTrue_0 = {val:false};
gdjs.Dark3Code.condition3IsTrue_0 = {val:false};
gdjs.Dark3Code.conditionTrue_1 = {val:false};
gdjs.Dark3Code.condition0IsTrue_1 = {val:false};
gdjs.Dark3Code.condition1IsTrue_1 = {val:false};
gdjs.Dark3Code.condition2IsTrue_1 = {val:false};
gdjs.Dark3Code.condition3IsTrue_1 = {val:false};


gdjs.Dark3Code.eventsList0x8235ac = function(runtimeScene) {

}; //End of gdjs.Dark3Code.eventsList0x8235ac
gdjs.Dark3Code.eventsList0x835854 = function(runtimeScene) {

{


gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark3Code.conditionTrue_1 = gdjs.Dark3Code.condition0IsTrue_0;
gdjs.Dark3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6964676);
}
}if (gdjs.Dark3Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("jumpsTotal").add(1);
}}

}


}; //End of gdjs.Dark3Code.eventsList0x835854
gdjs.Dark3Code.eventsList0x75513c = function(runtimeScene) {

{


gdjs.Dark3Code.condition0IsTrue_0.val = false;
gdjs.Dark3Code.condition1IsTrue_0.val = false;
{
{gdjs.Dark3Code.conditionTrue_1 = gdjs.Dark3Code.condition0IsTrue_0;
gdjs.Dark3Code.condition0IsTrue_1.val = false;
gdjs.Dark3Code.condition1IsTrue_1.val = false;
gdjs.Dark3Code.condition2IsTrue_1.val = false;
{
gdjs.Dark3Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Dark3Code.condition0IsTrue_1.val ) {
    gdjs.Dark3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark3Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Dark3Code.condition1IsTrue_1.val ) {
    gdjs.Dark3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark3Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Dark3Code.condition2IsTrue_1.val ) {
    gdjs.Dark3Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Dark3Code.condition0IsTrue_0.val ) {
{
{gdjs.Dark3Code.conditionTrue_1 = gdjs.Dark3Code.condition1IsTrue_0;
gdjs.Dark3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7022012);
}
}}
if (gdjs.Dark3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Dark3Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark3Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark3Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Dark3Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark3Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Dark3Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).add(1);
}
}
{ //Subevents
gdjs.Dark3Code.eventsList0x835854(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Dark3Code.eventsList0x75513c
gdjs.Dark3Code.eventsList0x75503c = function(runtimeScene) {

{

/* Reuse gdjs.Dark3Code.GDBoxPlayerObjects1 */

gdjs.Dark3Code.condition0IsTrue_0.val = false;
gdjs.Dark3Code.condition1IsTrue_0.val = false;
{
{gdjs.Dark3Code.conditionTrue_1 = gdjs.Dark3Code.condition0IsTrue_0;
gdjs.Dark3Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Dark3Code.condition0IsTrue_1.val = false;
gdjs.Dark3Code.condition1IsTrue_1.val = false;
{
gdjs.Dark3Code.GDBoxPlayerObjects2.createFrom(gdjs.Dark3Code.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.Dark3Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark3Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Dark3Code.condition0IsTrue_1.val = true;
        gdjs.Dark3Code.GDBoxPlayerObjects2[k] = gdjs.Dark3Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark3Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark3Code.condition0IsTrue_1.val ) {
    gdjs.Dark3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark3Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark3Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark3Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark3Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark3Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark3Code.GDBoxPlayerObjects2.createFrom(gdjs.Dark3Code.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.Dark3Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark3Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Dark3Code.condition1IsTrue_1.val = true;
        gdjs.Dark3Code.GDBoxPlayerObjects2[k] = gdjs.Dark3Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark3Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark3Code.condition1IsTrue_1.val ) {
    gdjs.Dark3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark3Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark3Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark3Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark3Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark3Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark3Code.GDBoxPlayerObjects1.createFrom(gdjs.Dark3Code.GDBoxPlayerObjects1_1final);
}
}
}if ( gdjs.Dark3Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dark3Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark3Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Dark3Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)) < 2 ) {
        gdjs.Dark3Code.condition1IsTrue_0.val = true;
        gdjs.Dark3Code.GDBoxPlayerObjects1[k] = gdjs.Dark3Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark3Code.GDBoxPlayerObjects1.length = k;}}
if (gdjs.Dark3Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Dark3Code.eventsList0x75513c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Dark3Code.eventsList0x75503c
gdjs.Dark3Code.eventsList0x7aa4dc = function(runtimeScene) {

}; //End of gdjs.Dark3Code.eventsList0x7aa4dc
gdjs.Dark3Code.eventsList0x86537c = function(runtimeScene) {

{

gdjs.Dark3Code.GDBoxPlayerObjects1.length = 0;


gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark3Code.conditionTrue_1 = gdjs.Dark3Code.condition0IsTrue_0;
gdjs.Dark3Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Dark3Code.condition0IsTrue_1.val = false;
gdjs.Dark3Code.condition1IsTrue_1.val = false;
{
gdjs.Dark3Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Dark3Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark3Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Dark3Code.condition0IsTrue_1.val = true;
        gdjs.Dark3Code.GDBoxPlayerObjects2[k] = gdjs.Dark3Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark3Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark3Code.condition0IsTrue_1.val ) {
    gdjs.Dark3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark3Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark3Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark3Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark3Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark3Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark3Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Dark3Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark3Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Dark3Code.condition1IsTrue_1.val = true;
        gdjs.Dark3Code.GDBoxPlayerObjects2[k] = gdjs.Dark3Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark3Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark3Code.condition1IsTrue_1.val ) {
    gdjs.Dark3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark3Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark3Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark3Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark3Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark3Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark3Code.GDBoxPlayerObjects1.createFrom(gdjs.Dark3Code.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.Dark3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark3Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark3Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark3Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


}; //End of gdjs.Dark3Code.eventsList0x86537c
gdjs.Dark3Code.eventsList0x7d219c = function(runtimeScene) {

{

gdjs.Dark3Code.GDBoxPlayerObjects1.length = 0;


gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark3Code.conditionTrue_1 = gdjs.Dark3Code.condition0IsTrue_0;
gdjs.Dark3Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Dark3Code.condition0IsTrue_1.val = false;
gdjs.Dark3Code.condition1IsTrue_1.val = false;
{
gdjs.Dark3Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Dark3Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark3Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Dark3Code.condition0IsTrue_1.val = true;
        gdjs.Dark3Code.GDBoxPlayerObjects2[k] = gdjs.Dark3Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark3Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark3Code.condition0IsTrue_1.val ) {
    gdjs.Dark3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark3Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark3Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark3Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark3Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark3Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark3Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Dark3Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark3Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Dark3Code.condition1IsTrue_1.val = true;
        gdjs.Dark3Code.GDBoxPlayerObjects2[k] = gdjs.Dark3Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark3Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark3Code.condition1IsTrue_1.val ) {
    gdjs.Dark3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark3Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark3Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark3Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark3Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark3Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark3Code.GDBoxPlayerObjects1.createFrom(gdjs.Dark3Code.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.Dark3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark3Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark3Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark3Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


}; //End of gdjs.Dark3Code.eventsList0x7d219c
gdjs.Dark3Code.eventsList0x75540c = function(runtimeScene) {

}; //End of gdjs.Dark3Code.eventsList0x75540c
gdjs.Dark3Code.eventsList0x6a436c = function(runtimeScene) {

}; //End of gdjs.Dark3Code.eventsList0x6a436c
gdjs.Dark3Code.mapOfGDgdjs_46Dark3Code_46GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.Dark3Code.GDMenuObjects1});gdjs.Dark3Code.eventsList0x6a4c6c = function(runtimeScene) {

{


gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
gdjs.Dark3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Dark3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


}; //End of gdjs.Dark3Code.eventsList0x6a4c6c
gdjs.Dark3Code.mapOfGDgdjs_46Dark3Code_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.Dark3Code.GDBoxPlayerObjects1});gdjs.Dark3Code.mapOfGDgdjs_46Dark3Code_46GDOrangeGoalObjects1Objects = Hashtable.newFrom({"OrangeGoal": gdjs.Dark3Code.GDOrangeGoalObjects1});gdjs.Dark3Code.eventsList0x8a10ac = function(runtimeScene) {

{

/* Reuse gdjs.Dark3Code.GDBoxPlayerObjects1 */

gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark3Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark3Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Dark3Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)) == 50 ) {
        gdjs.Dark3Code.condition0IsTrue_0.val = true;
        gdjs.Dark3Code.GDBoxPlayerObjects1[k] = gdjs.Dark3Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark3Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dark4", true);
}}

}


}; //End of gdjs.Dark3Code.eventsList0x8a10ac
gdjs.Dark3Code.eventsList0xb5aa0 = function(runtimeScene) {

{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Double Jump"); }gdjs.Dark3Code.eventsList0x8235ac(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Double Jump"); }
}


{

gdjs.Dark3Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark3Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark3Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Dark3Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Dark3Code.condition0IsTrue_0.val = true;
        gdjs.Dark3Code.GDBoxPlayerObjects1[k] = gdjs.Dark3Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark3Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Dark3Code.eventsList0x75503c(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.Dark3Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark3Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark3Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Dark3Code.condition0IsTrue_0.val = true;
        gdjs.Dark3Code.GDBoxPlayerObjects1[k] = gdjs.Dark3Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark3Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark3Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark3Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark3Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.Dark3Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark3Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Dark3Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Key Events"); }gdjs.Dark3Code.eventsList0x7aa4dc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Key Events"); }
}


{



}


{


gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark3Code.conditionTrue_1 = gdjs.Dark3Code.condition0IsTrue_0;
gdjs.Dark3Code.condition0IsTrue_1.val = false;
gdjs.Dark3Code.condition1IsTrue_1.val = false;
gdjs.Dark3Code.condition2IsTrue_1.val = false;
{
gdjs.Dark3Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Dark3Code.condition0IsTrue_1.val ) {
    gdjs.Dark3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark3Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Dark3Code.condition1IsTrue_1.val ) {
    gdjs.Dark3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark3Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Dark3Code.condition2IsTrue_1.val ) {
    gdjs.Dark3Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Dark3Code.condition0IsTrue_0.val) {
gdjs.Dark3Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
{for(var i = 0, len = gdjs.Dark3Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark3Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{



}


{


gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark3Code.conditionTrue_1 = gdjs.Dark3Code.condition0IsTrue_0;
gdjs.Dark3Code.condition0IsTrue_1.val = false;
gdjs.Dark3Code.condition1IsTrue_1.val = false;
{
gdjs.Dark3Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Dark3Code.condition0IsTrue_1.val ) {
    gdjs.Dark3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark3Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.Dark3Code.condition1IsTrue_1.val ) {
    gdjs.Dark3Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Dark3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Dark3Code.eventsList0x86537c(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark3Code.conditionTrue_1 = gdjs.Dark3Code.condition0IsTrue_0;
gdjs.Dark3Code.condition0IsTrue_1.val = false;
gdjs.Dark3Code.condition1IsTrue_1.val = false;
{
gdjs.Dark3Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Dark3Code.condition0IsTrue_1.val ) {
    gdjs.Dark3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark3Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.Dark3Code.condition1IsTrue_1.val ) {
    gdjs.Dark3Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Dark3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Dark3Code.eventsList0x7d219c(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
gdjs.Dark3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if (gdjs.Dark3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


{


gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
gdjs.Dark3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if (gdjs.Dark3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Respawn System"); }gdjs.Dark3Code.eventsList0x75540c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Respawn System"); }
}


{

gdjs.Dark3Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark3Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark3Code.GDBoxPlayerObjects1[i].getY() > 900 ) {
        gdjs.Dark3Code.condition0IsTrue_0.val = true;
        gdjs.Dark3Code.GDBoxPlayerObjects1[k] = gdjs.Dark3Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark3Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark3Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark3Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark3Code.GDBoxPlayerObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) - 50);
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


gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
gdjs.Dark3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Secs")) == gdjs.evtTools.runtimeScene.getTime(runtimeScene, "sec") + 1;
}if (gdjs.Dark3Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{runtimeScene.getVariables().get("Secs").setNumber(0);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Wall Jump"); }gdjs.Dark3Code.eventsList0x6a436c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Wall Jump"); }
}


{

gdjs.Dark3Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark3Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark3Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isGrabbingPlatform() ) {
        gdjs.Dark3Code.condition0IsTrue_0.val = true;
        gdjs.Dark3Code.GDBoxPlayerObjects1[k] = gdjs.Dark3Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark3Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark3Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark3Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark3Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Dark3Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
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


gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
gdjs.Dark3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if (gdjs.Dark3Code.condition0IsTrue_0.val) {
gdjs.Dark3Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Dark3Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Dark3Code.GDCurrentTimeObjects1[i].setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
gdjs.Dark3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}if (gdjs.Dark3Code.condition0IsTrue_0.val) {
gdjs.Dark3Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Dark3Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Dark3Code.GDCurrentTimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + "0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
gdjs.Dark3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 10;
}if (gdjs.Dark3Code.condition0IsTrue_0.val) {
gdjs.Dark3Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Dark3Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Dark3Code.GDCurrentTimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark3Code.conditionTrue_1 = gdjs.Dark3Code.condition0IsTrue_0;
gdjs.Dark3Code.condition0IsTrue_1.val = false;
gdjs.Dark3Code.condition1IsTrue_1.val = false;
{
gdjs.Dark3Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if ( gdjs.Dark3Code.condition0IsTrue_1.val ) {
{
gdjs.Dark3Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}}
gdjs.Dark3Code.conditionTrue_1.val = true && gdjs.Dark3Code.condition0IsTrue_1.val && gdjs.Dark3Code.condition1IsTrue_1.val;
}
}if (gdjs.Dark3Code.condition0IsTrue_0.val) {
gdjs.Dark3Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Dark3Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Dark3Code.GDCurrentTimeObjects1[i].setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + "0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{

gdjs.Dark3Code.GDMenuObjects1.createFrom(runtimeScene.getObjects("Menu"));

gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
gdjs.Dark3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Dark3Code.mapOfGDgdjs_46Dark3Code_46GDMenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.Dark3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Dark3Code.eventsList0x6a4c6c(runtimeScene);} //End of subevents
}

}


{

gdjs.Dark3Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark3Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark3Code.GDBoxPlayerObjects1[i].getY() <= 0 ) {
        gdjs.Dark3Code.condition0IsTrue_0.val = true;
        gdjs.Dark3Code.GDBoxPlayerObjects1[k] = gdjs.Dark3Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark3Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, -(20), "", 0);
}}

}


{

gdjs.Dark3Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark3Code.conditionTrue_1 = gdjs.Dark3Code.condition0IsTrue_0;
gdjs.Dark3Code.condition0IsTrue_1.val = false;
gdjs.Dark3Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark3Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark3Code.GDBoxPlayerObjects1[i].getY() > 0 ) {
        gdjs.Dark3Code.condition0IsTrue_1.val = true;
        gdjs.Dark3Code.GDBoxPlayerObjects1[k] = gdjs.Dark3Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark3Code.GDBoxPlayerObjects1.length = k;}if ( gdjs.Dark3Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dark3Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark3Code.GDBoxPlayerObjects1[i].getY() <= 540 ) {
        gdjs.Dark3Code.condition1IsTrue_1.val = true;
        gdjs.Dark3Code.GDBoxPlayerObjects1[k] = gdjs.Dark3Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark3Code.GDBoxPlayerObjects1.length = k;}}
gdjs.Dark3Code.conditionTrue_1.val = true && gdjs.Dark3Code.condition0IsTrue_1.val && gdjs.Dark3Code.condition1IsTrue_1.val;
}
}if (gdjs.Dark3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.window.getCanvasHeight(runtimeScene) / 2, "", 0);
}}

}


{

gdjs.Dark3Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark3Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark3Code.GDBoxPlayerObjects1[i].getY() > 540 ) {
        gdjs.Dark3Code.condition0IsTrue_0.val = true;
        gdjs.Dark3Code.GDBoxPlayerObjects1[k] = gdjs.Dark3Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark3Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (20), "", 0);
}}

}


{

gdjs.Dark3Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
gdjs.Dark3Code.GDOrangeGoalObjects1.createFrom(runtimeScene.getObjects("OrangeGoal"));

gdjs.Dark3Code.condition0IsTrue_0.val = false;
{
gdjs.Dark3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dark3Code.mapOfGDgdjs_46Dark3Code_46GDBoxPlayerObjects1Objects, gdjs.Dark3Code.mapOfGDgdjs_46Dark3Code_46GDOrangeGoalObjects1Objects, false, runtimeScene, true);
}if (gdjs.Dark3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark3Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark3Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark3Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Dark3Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}
{ //Subevents
gdjs.Dark3Code.eventsList0x8a10ac(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Dark3Code.eventsList0xb5aa0


gdjs.Dark3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Dark3Code.GDBoxPlayerObjects1.length = 0;
gdjs.Dark3Code.GDBoxPlayerObjects2.length = 0;
gdjs.Dark3Code.GDLightOrangeXPlatformObjects1.length = 0;
gdjs.Dark3Code.GDLightOrangeXPlatformObjects2.length = 0;
gdjs.Dark3Code.GDLightOrangeYPlatformObjects1.length = 0;
gdjs.Dark3Code.GDLightOrangeYPlatformObjects2.length = 0;
gdjs.Dark3Code.GDOrangeGoalObjects1.length = 0;
gdjs.Dark3Code.GDOrangeGoalObjects2.length = 0;
gdjs.Dark3Code.GDCurrentTimeObjects1.length = 0;
gdjs.Dark3Code.GDCurrentTimeObjects2.length = 0;
gdjs.Dark3Code.GDMenuObjects1.length = 0;
gdjs.Dark3Code.GDMenuObjects2.length = 0;

gdjs.Dark3Code.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['Dark3Code'] = gdjs.Dark3Code;
