gdjs.Scene3Code = {};
gdjs.Scene3Code.GDBoxPlayerObjects1_1final = [];

gdjs.Scene3Code.GDBoxPlayerObjects1= [];
gdjs.Scene3Code.GDBoxPlayerObjects2= [];
gdjs.Scene3Code.GDOrangeXPlatformObjects1= [];
gdjs.Scene3Code.GDOrangeXPlatformObjects2= [];
gdjs.Scene3Code.GDOrangeYPlatformObjects1= [];
gdjs.Scene3Code.GDOrangeYPlatformObjects2= [];
gdjs.Scene3Code.GDOrangeGoalObjects1= [];
gdjs.Scene3Code.GDOrangeGoalObjects2= [];
gdjs.Scene3Code.GDCurrentTimeObjects1= [];
gdjs.Scene3Code.GDCurrentTimeObjects2= [];
gdjs.Scene3Code.GDMenuObjects1= [];
gdjs.Scene3Code.GDMenuObjects2= [];
gdjs.Scene3Code.GDTipObjects1= [];
gdjs.Scene3Code.GDTipObjects2= [];

gdjs.Scene3Code.conditionTrue_0 = {val:false};
gdjs.Scene3Code.condition0IsTrue_0 = {val:false};
gdjs.Scene3Code.condition1IsTrue_0 = {val:false};
gdjs.Scene3Code.condition2IsTrue_0 = {val:false};
gdjs.Scene3Code.condition3IsTrue_0 = {val:false};
gdjs.Scene3Code.conditionTrue_1 = {val:false};
gdjs.Scene3Code.condition0IsTrue_1 = {val:false};
gdjs.Scene3Code.condition1IsTrue_1 = {val:false};
gdjs.Scene3Code.condition2IsTrue_1 = {val:false};
gdjs.Scene3Code.condition3IsTrue_1 = {val:false};


gdjs.Scene3Code.eventsList0x83573c = function(runtimeScene) {

}; //End of gdjs.Scene3Code.eventsList0x83573c
gdjs.Scene3Code.eventsList0x864b0c = function(runtimeScene) {

{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene3Code.conditionTrue_1 = gdjs.Scene3Code.condition0IsTrue_0;
gdjs.Scene3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8035180);
}
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("jumpsTotal").add(1);
}}

}


}; //End of gdjs.Scene3Code.eventsList0x864b0c
gdjs.Scene3Code.eventsList0x6b2644 = function(runtimeScene) {

{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
{gdjs.Scene3Code.conditionTrue_1 = gdjs.Scene3Code.condition0IsTrue_0;
gdjs.Scene3Code.condition0IsTrue_1.val = false;
gdjs.Scene3Code.condition1IsTrue_1.val = false;
gdjs.Scene3Code.condition2IsTrue_1.val = false;
{
gdjs.Scene3Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Scene3Code.condition0IsTrue_1.val ) {
    gdjs.Scene3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene3Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Scene3Code.condition1IsTrue_1.val ) {
    gdjs.Scene3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene3Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Scene3Code.condition2IsTrue_1.val ) {
    gdjs.Scene3Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
{gdjs.Scene3Code.conditionTrue_1 = gdjs.Scene3Code.condition1IsTrue_0;
gdjs.Scene3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8197500);
}
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene3Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene3Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Scene3Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Scene3Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).add(1);
}
}
{ //Subevents
gdjs.Scene3Code.eventsList0x864b0c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Scene3Code.eventsList0x6b2644
gdjs.Scene3Code.eventsList0x83583c = function(runtimeScene) {

{

/* Reuse gdjs.Scene3Code.GDBoxPlayerObjects1 */

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
{gdjs.Scene3Code.conditionTrue_1 = gdjs.Scene3Code.condition0IsTrue_0;
gdjs.Scene3Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Scene3Code.condition0IsTrue_1.val = false;
gdjs.Scene3Code.condition1IsTrue_1.val = false;
{
gdjs.Scene3Code.GDBoxPlayerObjects2.createFrom(gdjs.Scene3Code.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.Scene3Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene3Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Scene3Code.condition0IsTrue_1.val = true;
        gdjs.Scene3Code.GDBoxPlayerObjects2[k] = gdjs.Scene3Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene3Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene3Code.condition0IsTrue_1.val ) {
    gdjs.Scene3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene3Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene3Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene3Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene3Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene3Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene3Code.GDBoxPlayerObjects2.createFrom(gdjs.Scene3Code.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.Scene3Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene3Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Scene3Code.condition1IsTrue_1.val = true;
        gdjs.Scene3Code.GDBoxPlayerObjects2[k] = gdjs.Scene3Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene3Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene3Code.condition1IsTrue_1.val ) {
    gdjs.Scene3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene3Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene3Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene3Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene3Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene3Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene3Code.GDBoxPlayerObjects1.createFrom(gdjs.Scene3Code.GDBoxPlayerObjects1_1final);
}
}
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene3Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene3Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Scene3Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)) < 2 ) {
        gdjs.Scene3Code.condition1IsTrue_0.val = true;
        gdjs.Scene3Code.GDBoxPlayerObjects1[k] = gdjs.Scene3Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene3Code.GDBoxPlayerObjects1.length = k;}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Scene3Code.eventsList0x6b2644(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Scene3Code.eventsList0x83583c
gdjs.Scene3Code.eventsList0x7d23cc = function(runtimeScene) {

}; //End of gdjs.Scene3Code.eventsList0x7d23cc
gdjs.Scene3Code.eventsList0x8a0db4 = function(runtimeScene) {

{

gdjs.Scene3Code.GDBoxPlayerObjects1.length = 0;


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene3Code.conditionTrue_1 = gdjs.Scene3Code.condition0IsTrue_0;
gdjs.Scene3Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Scene3Code.condition0IsTrue_1.val = false;
gdjs.Scene3Code.condition1IsTrue_1.val = false;
{
gdjs.Scene3Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Scene3Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene3Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Scene3Code.condition0IsTrue_1.val = true;
        gdjs.Scene3Code.GDBoxPlayerObjects2[k] = gdjs.Scene3Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene3Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene3Code.condition0IsTrue_1.val ) {
    gdjs.Scene3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene3Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene3Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene3Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene3Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene3Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene3Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Scene3Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene3Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Scene3Code.condition1IsTrue_1.val = true;
        gdjs.Scene3Code.GDBoxPlayerObjects2[k] = gdjs.Scene3Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene3Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene3Code.condition1IsTrue_1.val ) {
    gdjs.Scene3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene3Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene3Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene3Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene3Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene3Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene3Code.GDBoxPlayerObjects1.createFrom(gdjs.Scene3Code.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene3Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene3Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


}; //End of gdjs.Scene3Code.eventsList0x8a0db4
gdjs.Scene3Code.eventsList0x7d2c44 = function(runtimeScene) {

{

gdjs.Scene3Code.GDBoxPlayerObjects1.length = 0;


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene3Code.conditionTrue_1 = gdjs.Scene3Code.condition0IsTrue_0;
gdjs.Scene3Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Scene3Code.condition0IsTrue_1.val = false;
gdjs.Scene3Code.condition1IsTrue_1.val = false;
{
gdjs.Scene3Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Scene3Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene3Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Scene3Code.condition0IsTrue_1.val = true;
        gdjs.Scene3Code.GDBoxPlayerObjects2[k] = gdjs.Scene3Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene3Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene3Code.condition0IsTrue_1.val ) {
    gdjs.Scene3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene3Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene3Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene3Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene3Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene3Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene3Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Scene3Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene3Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Scene3Code.condition1IsTrue_1.val = true;
        gdjs.Scene3Code.GDBoxPlayerObjects2[k] = gdjs.Scene3Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene3Code.GDBoxPlayerObjects2.length = k;if( gdjs.Scene3Code.condition1IsTrue_1.val ) {
    gdjs.Scene3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Scene3Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Scene3Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Scene3Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Scene3Code.GDBoxPlayerObjects1_1final.push(gdjs.Scene3Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Scene3Code.GDBoxPlayerObjects1.createFrom(gdjs.Scene3Code.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene3Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene3Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


}; //End of gdjs.Scene3Code.eventsList0x7d2c44
gdjs.Scene3Code.eventsList0x6a404c = function(runtimeScene) {

}; //End of gdjs.Scene3Code.eventsList0x6a404c
gdjs.Scene3Code.eventsList0x8a1184 = function(runtimeScene) {

}; //End of gdjs.Scene3Code.eventsList0x8a1184
gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.Scene3Code.GDMenuObjects1});gdjs.Scene3Code.eventsList0x7aa13c = function(runtimeScene) {

{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


}; //End of gdjs.Scene3Code.eventsList0x7aa13c
gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.Scene3Code.GDBoxPlayerObjects1});gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDOrangeGoalObjects1Objects = Hashtable.newFrom({"OrangeGoal": gdjs.Scene3Code.GDOrangeGoalObjects1});gdjs.Scene3Code.eventsList0x7d25c4 = function(runtimeScene) {

{

/* Reuse gdjs.Scene3Code.GDBoxPlayerObjects1 */

gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene3Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene3Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Scene3Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)) == 50 ) {
        gdjs.Scene3Code.condition0IsTrue_0.val = true;
        gdjs.Scene3Code.GDBoxPlayerObjects1[k] = gdjs.Scene3Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene3Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene4", true);
}}

}


}; //End of gdjs.Scene3Code.eventsList0x7d25c4
gdjs.Scene3Code.eventsList0xb5aa0 = function(runtimeScene) {

{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Double Jump"); }gdjs.Scene3Code.eventsList0x83573c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Double Jump"); }
}


{

gdjs.Scene3Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene3Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene3Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Scene3Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Scene3Code.condition0IsTrue_0.val = true;
        gdjs.Scene3Code.GDBoxPlayerObjects1[k] = gdjs.Scene3Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene3Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene3Code.eventsList0x83583c(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.Scene3Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene3Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene3Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Scene3Code.condition0IsTrue_0.val = true;
        gdjs.Scene3Code.GDBoxPlayerObjects1[k] = gdjs.Scene3Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene3Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene3Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene3Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Scene3Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Key Events"); }gdjs.Scene3Code.eventsList0x7d23cc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Key Events"); }
}


{



}


{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene3Code.conditionTrue_1 = gdjs.Scene3Code.condition0IsTrue_0;
gdjs.Scene3Code.condition0IsTrue_1.val = false;
gdjs.Scene3Code.condition1IsTrue_1.val = false;
gdjs.Scene3Code.condition2IsTrue_1.val = false;
{
gdjs.Scene3Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Scene3Code.condition0IsTrue_1.val ) {
    gdjs.Scene3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene3Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Scene3Code.condition1IsTrue_1.val ) {
    gdjs.Scene3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene3Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Scene3Code.condition2IsTrue_1.val ) {
    gdjs.Scene3Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
gdjs.Scene3Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
{for(var i = 0, len = gdjs.Scene3Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{



}


{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene3Code.conditionTrue_1 = gdjs.Scene3Code.condition0IsTrue_0;
gdjs.Scene3Code.condition0IsTrue_1.val = false;
gdjs.Scene3Code.condition1IsTrue_1.val = false;
{
gdjs.Scene3Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Scene3Code.condition0IsTrue_1.val ) {
    gdjs.Scene3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene3Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.Scene3Code.condition1IsTrue_1.val ) {
    gdjs.Scene3Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene3Code.eventsList0x8a0db4(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene3Code.conditionTrue_1 = gdjs.Scene3Code.condition0IsTrue_0;
gdjs.Scene3Code.condition0IsTrue_1.val = false;
gdjs.Scene3Code.condition1IsTrue_1.val = false;
{
gdjs.Scene3Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Scene3Code.condition0IsTrue_1.val ) {
    gdjs.Scene3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Scene3Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.Scene3Code.condition1IsTrue_1.val ) {
    gdjs.Scene3Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene3Code.eventsList0x7d2c44(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Respawn System"); }gdjs.Scene3Code.eventsList0x6a404c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Respawn System"); }
}


{

gdjs.Scene3Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene3Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene3Code.GDBoxPlayerObjects1[i].getY() > 900 ) {
        gdjs.Scene3Code.condition0IsTrue_0.val = true;
        gdjs.Scene3Code.GDBoxPlayerObjects1[k] = gdjs.Scene3Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene3Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene3Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene3Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDBoxPlayerObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) - 50);
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


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Secs")) == gdjs.evtTools.runtimeScene.getTime(runtimeScene, "sec") + 1;
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{runtimeScene.getVariables().get("Secs").setNumber(0);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Wall Jump"); }gdjs.Scene3Code.eventsList0x8a1184(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Wall Jump"); }
}


{

gdjs.Scene3Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene3Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene3Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isGrabbingPlatform() ) {
        gdjs.Scene3Code.condition0IsTrue_0.val = true;
        gdjs.Scene3Code.GDBoxPlayerObjects1[k] = gdjs.Scene3Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene3Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene3Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene3Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Scene3Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
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


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
gdjs.Scene3Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Scene3Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDCurrentTimeObjects1[i].setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
gdjs.Scene3Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Scene3Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDCurrentTimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + "0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 10;
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
gdjs.Scene3Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Scene3Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDCurrentTimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene3Code.conditionTrue_1 = gdjs.Scene3Code.condition0IsTrue_0;
gdjs.Scene3Code.condition0IsTrue_1.val = false;
gdjs.Scene3Code.condition1IsTrue_1.val = false;
{
gdjs.Scene3Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if ( gdjs.Scene3Code.condition0IsTrue_1.val ) {
{
gdjs.Scene3Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}}
gdjs.Scene3Code.conditionTrue_1.val = true && gdjs.Scene3Code.condition0IsTrue_1.val && gdjs.Scene3Code.condition1IsTrue_1.val;
}
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
gdjs.Scene3Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Scene3Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDCurrentTimeObjects1[i].setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + "0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{

gdjs.Scene3Code.GDMenuObjects1.createFrom(runtimeScene.getObjects("Menu"));

gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDMenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene3Code.eventsList0x7aa13c(runtimeScene);} //End of subevents
}

}


{

gdjs.Scene3Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene3Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene3Code.GDBoxPlayerObjects1[i].getY() <= 0 ) {
        gdjs.Scene3Code.condition0IsTrue_0.val = true;
        gdjs.Scene3Code.GDBoxPlayerObjects1[k] = gdjs.Scene3Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene3Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, -(20), "", 0);
}}

}


{

gdjs.Scene3Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene3Code.conditionTrue_1 = gdjs.Scene3Code.condition0IsTrue_0;
gdjs.Scene3Code.condition0IsTrue_1.val = false;
gdjs.Scene3Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene3Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene3Code.GDBoxPlayerObjects1[i].getY() > 0 ) {
        gdjs.Scene3Code.condition0IsTrue_1.val = true;
        gdjs.Scene3Code.GDBoxPlayerObjects1[k] = gdjs.Scene3Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene3Code.GDBoxPlayerObjects1.length = k;}if ( gdjs.Scene3Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene3Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene3Code.GDBoxPlayerObjects1[i].getY() <= 540 ) {
        gdjs.Scene3Code.condition1IsTrue_1.val = true;
        gdjs.Scene3Code.GDBoxPlayerObjects1[k] = gdjs.Scene3Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene3Code.GDBoxPlayerObjects1.length = k;}}
gdjs.Scene3Code.conditionTrue_1.val = true && gdjs.Scene3Code.condition0IsTrue_1.val && gdjs.Scene3Code.condition1IsTrue_1.val;
}
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.window.getCanvasHeight(runtimeScene) / 2, "", 0);
}}

}


{

gdjs.Scene3Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene3Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene3Code.GDBoxPlayerObjects1[i].getY() > 540 ) {
        gdjs.Scene3Code.condition0IsTrue_0.val = true;
        gdjs.Scene3Code.GDBoxPlayerObjects1[k] = gdjs.Scene3Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene3Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (20), "", 0);
}}

}


{

gdjs.Scene3Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
gdjs.Scene3Code.GDOrangeGoalObjects1.createFrom(runtimeScene.getObjects("OrangeGoal"));

gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDBoxPlayerObjects1Objects, gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDOrangeGoalObjects1Objects, false, runtimeScene, true);
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene3Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene3Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Scene3Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}
{ //Subevents
gdjs.Scene3Code.eventsList0x7d25c4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Scene3Code.eventsList0xb5aa0


gdjs.Scene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene3Code.GDBoxPlayerObjects1.length = 0;
gdjs.Scene3Code.GDBoxPlayerObjects2.length = 0;
gdjs.Scene3Code.GDOrangeXPlatformObjects1.length = 0;
gdjs.Scene3Code.GDOrangeXPlatformObjects2.length = 0;
gdjs.Scene3Code.GDOrangeYPlatformObjects1.length = 0;
gdjs.Scene3Code.GDOrangeYPlatformObjects2.length = 0;
gdjs.Scene3Code.GDOrangeGoalObjects1.length = 0;
gdjs.Scene3Code.GDOrangeGoalObjects2.length = 0;
gdjs.Scene3Code.GDCurrentTimeObjects1.length = 0;
gdjs.Scene3Code.GDCurrentTimeObjects2.length = 0;
gdjs.Scene3Code.GDMenuObjects1.length = 0;
gdjs.Scene3Code.GDMenuObjects2.length = 0;
gdjs.Scene3Code.GDTipObjects1.length = 0;
gdjs.Scene3Code.GDTipObjects2.length = 0;

gdjs.Scene3Code.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['Scene3Code'] = gdjs.Scene3Code;
