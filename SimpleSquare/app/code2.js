gdjs.Dark1Code = {};
gdjs.Dark1Code.GDBoxPlayerObjects1_1final = [];

gdjs.Dark1Code.GDBoxPlayerObjects1= [];
gdjs.Dark1Code.GDBoxPlayerObjects2= [];
gdjs.Dark1Code.GDLighGreenXPlatformObjects1= [];
gdjs.Dark1Code.GDLighGreenXPlatformObjects2= [];
gdjs.Dark1Code.GDGreenGoalObjects1= [];
gdjs.Dark1Code.GDGreenGoalObjects2= [];
gdjs.Dark1Code.GDCurrentTimeObjects1= [];
gdjs.Dark1Code.GDCurrentTimeObjects2= [];
gdjs.Dark1Code.GDMenuObjects1= [];
gdjs.Dark1Code.GDMenuObjects2= [];
gdjs.Dark1Code.GDIntroductionObjects1= [];
gdjs.Dark1Code.GDIntroductionObjects2= [];
gdjs.Dark1Code.GDTipObjects1= [];
gdjs.Dark1Code.GDTipObjects2= [];

gdjs.Dark1Code.conditionTrue_0 = {val:false};
gdjs.Dark1Code.condition0IsTrue_0 = {val:false};
gdjs.Dark1Code.condition1IsTrue_0 = {val:false};
gdjs.Dark1Code.condition2IsTrue_0 = {val:false};
gdjs.Dark1Code.condition3IsTrue_0 = {val:false};
gdjs.Dark1Code.conditionTrue_1 = {val:false};
gdjs.Dark1Code.condition0IsTrue_1 = {val:false};
gdjs.Dark1Code.condition1IsTrue_1 = {val:false};
gdjs.Dark1Code.condition2IsTrue_1 = {val:false};
gdjs.Dark1Code.condition3IsTrue_1 = {val:false};


gdjs.Dark1Code.eventsList0x830074 = function(runtimeScene) {

}; //End of gdjs.Dark1Code.eventsList0x830074
gdjs.Dark1Code.eventsList0x6b276c = function(runtimeScene) {

{


gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark1Code.conditionTrue_1 = gdjs.Dark1Code.condition0IsTrue_0;
gdjs.Dark1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8200580);
}
}if (gdjs.Dark1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("jumpsTotal").add(1);
}}

}


}; //End of gdjs.Dark1Code.eventsList0x6b276c
gdjs.Dark1Code.eventsList0x830c44 = function(runtimeScene) {

{


gdjs.Dark1Code.condition0IsTrue_0.val = false;
gdjs.Dark1Code.condition1IsTrue_0.val = false;
{
{gdjs.Dark1Code.conditionTrue_1 = gdjs.Dark1Code.condition0IsTrue_0;
gdjs.Dark1Code.condition0IsTrue_1.val = false;
gdjs.Dark1Code.condition1IsTrue_1.val = false;
gdjs.Dark1Code.condition2IsTrue_1.val = false;
{
gdjs.Dark1Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Dark1Code.condition0IsTrue_1.val ) {
    gdjs.Dark1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark1Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Dark1Code.condition1IsTrue_1.val ) {
    gdjs.Dark1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark1Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Dark1Code.condition2IsTrue_1.val ) {
    gdjs.Dark1Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Dark1Code.condition0IsTrue_0.val ) {
{
{gdjs.Dark1Code.conditionTrue_1 = gdjs.Dark1Code.condition1IsTrue_0;
gdjs.Dark1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8197556);
}
}}
if (gdjs.Dark1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Dark1Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark1Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark1Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Dark1Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark1Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Dark1Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).add(1);
}
}
{ //Subevents
gdjs.Dark1Code.eventsList0x6b276c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Dark1Code.eventsList0x830c44
gdjs.Dark1Code.eventsList0x7d25e4 = function(runtimeScene) {

{

/* Reuse gdjs.Dark1Code.GDBoxPlayerObjects1 */

gdjs.Dark1Code.condition0IsTrue_0.val = false;
gdjs.Dark1Code.condition1IsTrue_0.val = false;
{
{gdjs.Dark1Code.conditionTrue_1 = gdjs.Dark1Code.condition0IsTrue_0;
gdjs.Dark1Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Dark1Code.condition0IsTrue_1.val = false;
gdjs.Dark1Code.condition1IsTrue_1.val = false;
{
gdjs.Dark1Code.GDBoxPlayerObjects2.createFrom(gdjs.Dark1Code.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.Dark1Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark1Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Dark1Code.condition0IsTrue_1.val = true;
        gdjs.Dark1Code.GDBoxPlayerObjects2[k] = gdjs.Dark1Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark1Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark1Code.condition0IsTrue_1.val ) {
    gdjs.Dark1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark1Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark1Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark1Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark1Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark1Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark1Code.GDBoxPlayerObjects2.createFrom(gdjs.Dark1Code.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.Dark1Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark1Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Dark1Code.condition1IsTrue_1.val = true;
        gdjs.Dark1Code.GDBoxPlayerObjects2[k] = gdjs.Dark1Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark1Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark1Code.condition1IsTrue_1.val ) {
    gdjs.Dark1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark1Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark1Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark1Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark1Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark1Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark1Code.GDBoxPlayerObjects1.createFrom(gdjs.Dark1Code.GDBoxPlayerObjects1_1final);
}
}
}if ( gdjs.Dark1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dark1Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark1Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Dark1Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)) < 2 ) {
        gdjs.Dark1Code.condition1IsTrue_0.val = true;
        gdjs.Dark1Code.GDBoxPlayerObjects1[k] = gdjs.Dark1Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark1Code.GDBoxPlayerObjects1.length = k;}}
if (gdjs.Dark1Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Dark1Code.eventsList0x830c44(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Dark1Code.eventsList0x7d25e4
gdjs.Dark1Code.eventsList0x8a0b74 = function(runtimeScene) {

}; //End of gdjs.Dark1Code.eventsList0x8a0b74
gdjs.Dark1Code.eventsList0x7d2874 = function(runtimeScene) {

{

gdjs.Dark1Code.GDBoxPlayerObjects1.length = 0;


gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark1Code.conditionTrue_1 = gdjs.Dark1Code.condition0IsTrue_0;
gdjs.Dark1Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Dark1Code.condition0IsTrue_1.val = false;
gdjs.Dark1Code.condition1IsTrue_1.val = false;
{
gdjs.Dark1Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Dark1Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark1Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Dark1Code.condition0IsTrue_1.val = true;
        gdjs.Dark1Code.GDBoxPlayerObjects2[k] = gdjs.Dark1Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark1Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark1Code.condition0IsTrue_1.val ) {
    gdjs.Dark1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark1Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark1Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark1Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark1Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark1Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark1Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Dark1Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark1Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Dark1Code.condition1IsTrue_1.val = true;
        gdjs.Dark1Code.GDBoxPlayerObjects2[k] = gdjs.Dark1Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark1Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark1Code.condition1IsTrue_1.val ) {
    gdjs.Dark1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark1Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark1Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark1Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark1Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark1Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark1Code.GDBoxPlayerObjects1.createFrom(gdjs.Dark1Code.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.Dark1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark1Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark1Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark1Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


}; //End of gdjs.Dark1Code.eventsList0x7d2874
gdjs.Dark1Code.eventsList0x8303fc = function(runtimeScene) {

{

gdjs.Dark1Code.GDBoxPlayerObjects1.length = 0;


gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark1Code.conditionTrue_1 = gdjs.Dark1Code.condition0IsTrue_0;
gdjs.Dark1Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Dark1Code.condition0IsTrue_1.val = false;
gdjs.Dark1Code.condition1IsTrue_1.val = false;
{
gdjs.Dark1Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Dark1Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark1Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Dark1Code.condition0IsTrue_1.val = true;
        gdjs.Dark1Code.GDBoxPlayerObjects2[k] = gdjs.Dark1Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark1Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark1Code.condition0IsTrue_1.val ) {
    gdjs.Dark1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark1Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark1Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark1Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark1Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark1Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark1Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Dark1Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark1Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Dark1Code.condition1IsTrue_1.val = true;
        gdjs.Dark1Code.GDBoxPlayerObjects2[k] = gdjs.Dark1Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark1Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark1Code.condition1IsTrue_1.val ) {
    gdjs.Dark1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark1Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark1Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark1Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark1Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark1Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark1Code.GDBoxPlayerObjects1.createFrom(gdjs.Dark1Code.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.Dark1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark1Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark1Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark1Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


}; //End of gdjs.Dark1Code.eventsList0x8303fc
gdjs.Dark1Code.eventsList0x8a1474 = function(runtimeScene) {

}; //End of gdjs.Dark1Code.eventsList0x8a1474
gdjs.Dark1Code.eventsList0x75558c = function(runtimeScene) {

}; //End of gdjs.Dark1Code.eventsList0x75558c
gdjs.Dark1Code.mapOfGDgdjs_46Dark1Code_46GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.Dark1Code.GDMenuObjects1});gdjs.Dark1Code.eventsList0x83035c = function(runtimeScene) {

{


gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
gdjs.Dark1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Dark1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


}; //End of gdjs.Dark1Code.eventsList0x83035c
gdjs.Dark1Code.mapOfGDgdjs_46Dark1Code_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.Dark1Code.GDBoxPlayerObjects1});gdjs.Dark1Code.mapOfGDgdjs_46Dark1Code_46GDGreenGoalObjects1Objects = Hashtable.newFrom({"GreenGoal": gdjs.Dark1Code.GDGreenGoalObjects1});gdjs.Dark1Code.eventsList0x6b2f3c = function(runtimeScene) {

{

/* Reuse gdjs.Dark1Code.GDBoxPlayerObjects1 */

gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark1Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark1Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Dark1Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)) == 50 ) {
        gdjs.Dark1Code.condition0IsTrue_0.val = true;
        gdjs.Dark1Code.GDBoxPlayerObjects1[k] = gdjs.Dark1Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark1Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene2", true);
}}

}


}; //End of gdjs.Dark1Code.eventsList0x6b2f3c
gdjs.Dark1Code.eventsList0xb5aa0 = function(runtimeScene) {

{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Double Jump"); }gdjs.Dark1Code.eventsList0x830074(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Double Jump"); }
}


{

gdjs.Dark1Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark1Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark1Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Dark1Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Dark1Code.condition0IsTrue_0.val = true;
        gdjs.Dark1Code.GDBoxPlayerObjects1[k] = gdjs.Dark1Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark1Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Dark1Code.eventsList0x7d25e4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.Dark1Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark1Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark1Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Dark1Code.condition0IsTrue_0.val = true;
        gdjs.Dark1Code.GDBoxPlayerObjects1[k] = gdjs.Dark1Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark1Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark1Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark1Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark1Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.Dark1Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark1Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Dark1Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Key Events"); }gdjs.Dark1Code.eventsList0x8a0b74(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Key Events"); }
}


{



}


{


gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark1Code.conditionTrue_1 = gdjs.Dark1Code.condition0IsTrue_0;
gdjs.Dark1Code.condition0IsTrue_1.val = false;
gdjs.Dark1Code.condition1IsTrue_1.val = false;
gdjs.Dark1Code.condition2IsTrue_1.val = false;
{
gdjs.Dark1Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Dark1Code.condition0IsTrue_1.val ) {
    gdjs.Dark1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark1Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Dark1Code.condition1IsTrue_1.val ) {
    gdjs.Dark1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark1Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Dark1Code.condition2IsTrue_1.val ) {
    gdjs.Dark1Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Dark1Code.condition0IsTrue_0.val) {
gdjs.Dark1Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
{for(var i = 0, len = gdjs.Dark1Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark1Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{



}


{


gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark1Code.conditionTrue_1 = gdjs.Dark1Code.condition0IsTrue_0;
gdjs.Dark1Code.condition0IsTrue_1.val = false;
gdjs.Dark1Code.condition1IsTrue_1.val = false;
{
gdjs.Dark1Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Dark1Code.condition0IsTrue_1.val ) {
    gdjs.Dark1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark1Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.Dark1Code.condition1IsTrue_1.val ) {
    gdjs.Dark1Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Dark1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Dark1Code.eventsList0x7d2874(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark1Code.conditionTrue_1 = gdjs.Dark1Code.condition0IsTrue_0;
gdjs.Dark1Code.condition0IsTrue_1.val = false;
gdjs.Dark1Code.condition1IsTrue_1.val = false;
{
gdjs.Dark1Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Dark1Code.condition0IsTrue_1.val ) {
    gdjs.Dark1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark1Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.Dark1Code.condition1IsTrue_1.val ) {
    gdjs.Dark1Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Dark1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Dark1Code.eventsList0x8303fc(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
gdjs.Dark1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if (gdjs.Dark1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


{


gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
gdjs.Dark1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if (gdjs.Dark1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Respawn System"); }gdjs.Dark1Code.eventsList0x8a1474(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Respawn System"); }
}


{

gdjs.Dark1Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark1Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark1Code.GDBoxPlayerObjects1[i].getY() > 900 ) {
        gdjs.Dark1Code.condition0IsTrue_0.val = true;
        gdjs.Dark1Code.GDBoxPlayerObjects1[k] = gdjs.Dark1Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark1Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark1Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark1Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark1Code.GDBoxPlayerObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) - 50);
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


gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
gdjs.Dark1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Secs")) == gdjs.evtTools.runtimeScene.getTime(runtimeScene, "sec") + 1;
}if (gdjs.Dark1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{runtimeScene.getVariables().get("Secs").setNumber(0);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Wall Jump"); }gdjs.Dark1Code.eventsList0x75558c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Wall Jump"); }
}


{

gdjs.Dark1Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark1Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark1Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isGrabbingPlatform() ) {
        gdjs.Dark1Code.condition0IsTrue_0.val = true;
        gdjs.Dark1Code.GDBoxPlayerObjects1[k] = gdjs.Dark1Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark1Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark1Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark1Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark1Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Dark1Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
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


gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
gdjs.Dark1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if (gdjs.Dark1Code.condition0IsTrue_0.val) {
gdjs.Dark1Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Dark1Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Dark1Code.GDCurrentTimeObjects1[i].setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
gdjs.Dark1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}if (gdjs.Dark1Code.condition0IsTrue_0.val) {
gdjs.Dark1Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Dark1Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Dark1Code.GDCurrentTimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + "0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
gdjs.Dark1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 10;
}if (gdjs.Dark1Code.condition0IsTrue_0.val) {
gdjs.Dark1Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Dark1Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Dark1Code.GDCurrentTimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark1Code.conditionTrue_1 = gdjs.Dark1Code.condition0IsTrue_0;
gdjs.Dark1Code.condition0IsTrue_1.val = false;
gdjs.Dark1Code.condition1IsTrue_1.val = false;
{
gdjs.Dark1Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if ( gdjs.Dark1Code.condition0IsTrue_1.val ) {
{
gdjs.Dark1Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}}
gdjs.Dark1Code.conditionTrue_1.val = true && gdjs.Dark1Code.condition0IsTrue_1.val && gdjs.Dark1Code.condition1IsTrue_1.val;
}
}if (gdjs.Dark1Code.condition0IsTrue_0.val) {
gdjs.Dark1Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Dark1Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Dark1Code.GDCurrentTimeObjects1[i].setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + "0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{

gdjs.Dark1Code.GDMenuObjects1.createFrom(runtimeScene.getObjects("Menu"));

gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
gdjs.Dark1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Dark1Code.mapOfGDgdjs_46Dark1Code_46GDMenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.Dark1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Dark1Code.eventsList0x83035c(runtimeScene);} //End of subevents
}

}


{

gdjs.Dark1Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark1Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark1Code.GDBoxPlayerObjects1[i].getY() < 0 ) {
        gdjs.Dark1Code.condition0IsTrue_0.val = true;
        gdjs.Dark1Code.GDBoxPlayerObjects1[k] = gdjs.Dark1Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark1Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, -(20), "", 0);
}}

}


{

gdjs.Dark1Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark1Code.conditionTrue_1 = gdjs.Dark1Code.condition0IsTrue_0;
gdjs.Dark1Code.condition0IsTrue_1.val = false;
gdjs.Dark1Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark1Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark1Code.GDBoxPlayerObjects1[i].getY() >= 100 ) {
        gdjs.Dark1Code.condition0IsTrue_1.val = true;
        gdjs.Dark1Code.GDBoxPlayerObjects1[k] = gdjs.Dark1Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark1Code.GDBoxPlayerObjects1.length = k;}if ( gdjs.Dark1Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dark1Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark1Code.GDBoxPlayerObjects1[i].getY() <= 540 ) {
        gdjs.Dark1Code.condition1IsTrue_1.val = true;
        gdjs.Dark1Code.GDBoxPlayerObjects1[k] = gdjs.Dark1Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark1Code.GDBoxPlayerObjects1.length = k;}}
gdjs.Dark1Code.conditionTrue_1.val = true && gdjs.Dark1Code.condition0IsTrue_1.val && gdjs.Dark1Code.condition1IsTrue_1.val;
}
}if (gdjs.Dark1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.window.getCanvasHeight(runtimeScene) / 2, "", 0);
}}

}


{

gdjs.Dark1Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark1Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark1Code.GDBoxPlayerObjects1[i].getY() > 540 ) {
        gdjs.Dark1Code.condition0IsTrue_0.val = true;
        gdjs.Dark1Code.GDBoxPlayerObjects1[k] = gdjs.Dark1Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark1Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (20), "", 0);
}}

}


{

gdjs.Dark1Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
gdjs.Dark1Code.GDGreenGoalObjects1.createFrom(runtimeScene.getObjects("GreenGoal"));

gdjs.Dark1Code.condition0IsTrue_0.val = false;
{
gdjs.Dark1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dark1Code.mapOfGDgdjs_46Dark1Code_46GDBoxPlayerObjects1Objects, gdjs.Dark1Code.mapOfGDgdjs_46Dark1Code_46GDGreenGoalObjects1Objects, false, runtimeScene, true);
}if (gdjs.Dark1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark1Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark1Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark1Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Dark1Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}
{ //Subevents
gdjs.Dark1Code.eventsList0x6b2f3c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Dark1Code.eventsList0xb5aa0


gdjs.Dark1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Dark1Code.GDBoxPlayerObjects1.length = 0;
gdjs.Dark1Code.GDBoxPlayerObjects2.length = 0;
gdjs.Dark1Code.GDLighGreenXPlatformObjects1.length = 0;
gdjs.Dark1Code.GDLighGreenXPlatformObjects2.length = 0;
gdjs.Dark1Code.GDGreenGoalObjects1.length = 0;
gdjs.Dark1Code.GDGreenGoalObjects2.length = 0;
gdjs.Dark1Code.GDCurrentTimeObjects1.length = 0;
gdjs.Dark1Code.GDCurrentTimeObjects2.length = 0;
gdjs.Dark1Code.GDMenuObjects1.length = 0;
gdjs.Dark1Code.GDMenuObjects2.length = 0;
gdjs.Dark1Code.GDIntroductionObjects1.length = 0;
gdjs.Dark1Code.GDIntroductionObjects2.length = 0;
gdjs.Dark1Code.GDTipObjects1.length = 0;
gdjs.Dark1Code.GDTipObjects2.length = 0;

gdjs.Dark1Code.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['Dark1Code'] = gdjs.Dark1Code;
