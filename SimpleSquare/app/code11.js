gdjs.FinalSceneCode = {};
gdjs.FinalSceneCode.GDBoxPlayerObjects1_1final = [];

gdjs.FinalSceneCode.GDBoxPlayerObjects1= [];
gdjs.FinalSceneCode.GDBoxPlayerObjects2= [];
gdjs.FinalSceneCode.GDGreenXPlatformObjects1= [];
gdjs.FinalSceneCode.GDGreenXPlatformObjects2= [];
gdjs.FinalSceneCode.GDGreenGoalObjects1= [];
gdjs.FinalSceneCode.GDGreenGoalObjects2= [];
gdjs.FinalSceneCode.GDCurrentTimeObjects1= [];
gdjs.FinalSceneCode.GDCurrentTimeObjects2= [];
gdjs.FinalSceneCode.GDMenuObjects1= [];
gdjs.FinalSceneCode.GDMenuObjects2= [];
gdjs.FinalSceneCode.GDFinalObjects1= [];
gdjs.FinalSceneCode.GDFinalObjects2= [];

gdjs.FinalSceneCode.conditionTrue_0 = {val:false};
gdjs.FinalSceneCode.condition0IsTrue_0 = {val:false};
gdjs.FinalSceneCode.condition1IsTrue_0 = {val:false};
gdjs.FinalSceneCode.condition2IsTrue_0 = {val:false};
gdjs.FinalSceneCode.condition3IsTrue_0 = {val:false};
gdjs.FinalSceneCode.conditionTrue_1 = {val:false};
gdjs.FinalSceneCode.condition0IsTrue_1 = {val:false};
gdjs.FinalSceneCode.condition1IsTrue_1 = {val:false};
gdjs.FinalSceneCode.condition2IsTrue_1 = {val:false};
gdjs.FinalSceneCode.condition3IsTrue_1 = {val:false};


gdjs.FinalSceneCode.eventsList0x8309f4 = function(runtimeScene) {

}; //End of gdjs.FinalSceneCode.eventsList0x8309f4
gdjs.FinalSceneCode.eventsList0x6b32f4 = function(runtimeScene) {

{


gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.FinalSceneCode.conditionTrue_1 = gdjs.FinalSceneCode.condition0IsTrue_0;
gdjs.FinalSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6966444);
}
}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("jumpsTotal").add(1);
}}

}


}; //End of gdjs.FinalSceneCode.eventsList0x6b32f4
gdjs.FinalSceneCode.eventsList0x830c8c = function(runtimeScene) {

{


gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
gdjs.FinalSceneCode.condition1IsTrue_0.val = false;
{
{gdjs.FinalSceneCode.conditionTrue_1 = gdjs.FinalSceneCode.condition0IsTrue_0;
gdjs.FinalSceneCode.condition0IsTrue_1.val = false;
gdjs.FinalSceneCode.condition1IsTrue_1.val = false;
gdjs.FinalSceneCode.condition2IsTrue_1.val = false;
{
gdjs.FinalSceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.FinalSceneCode.condition0IsTrue_1.val ) {
    gdjs.FinalSceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.FinalSceneCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.FinalSceneCode.condition1IsTrue_1.val ) {
    gdjs.FinalSceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.FinalSceneCode.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.FinalSceneCode.condition2IsTrue_1.val ) {
    gdjs.FinalSceneCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.FinalSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.FinalSceneCode.conditionTrue_1 = gdjs.FinalSceneCode.condition1IsTrue_0;
gdjs.FinalSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8533308);
}
}}
if (gdjs.FinalSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.FinalSceneCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.FinalSceneCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.FinalSceneCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].getVariables().get("jumpCounter")).add(1);
}
}
{ //Subevents
gdjs.FinalSceneCode.eventsList0x6b32f4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.FinalSceneCode.eventsList0x830c8c
gdjs.FinalSceneCode.eventsList0x75521c = function(runtimeScene) {

{

/* Reuse gdjs.FinalSceneCode.GDBoxPlayerObjects1 */

gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
gdjs.FinalSceneCode.condition1IsTrue_0.val = false;
{
{gdjs.FinalSceneCode.conditionTrue_1 = gdjs.FinalSceneCode.condition0IsTrue_0;
gdjs.FinalSceneCode.GDBoxPlayerObjects1_1final.length = 0;gdjs.FinalSceneCode.condition0IsTrue_1.val = false;
gdjs.FinalSceneCode.condition1IsTrue_1.val = false;
{
gdjs.FinalSceneCode.GDBoxPlayerObjects2.createFrom(gdjs.FinalSceneCode.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.FinalSceneCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.FinalSceneCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.FinalSceneCode.condition0IsTrue_1.val = true;
        gdjs.FinalSceneCode.GDBoxPlayerObjects2[k] = gdjs.FinalSceneCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.FinalSceneCode.GDBoxPlayerObjects2.length = k;if( gdjs.FinalSceneCode.condition0IsTrue_1.val ) {
    gdjs.FinalSceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.FinalSceneCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.FinalSceneCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.FinalSceneCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.FinalSceneCode.GDBoxPlayerObjects1_1final.push(gdjs.FinalSceneCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.FinalSceneCode.GDBoxPlayerObjects2.createFrom(gdjs.FinalSceneCode.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.FinalSceneCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.FinalSceneCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.FinalSceneCode.condition1IsTrue_1.val = true;
        gdjs.FinalSceneCode.GDBoxPlayerObjects2[k] = gdjs.FinalSceneCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.FinalSceneCode.GDBoxPlayerObjects2.length = k;if( gdjs.FinalSceneCode.condition1IsTrue_1.val ) {
    gdjs.FinalSceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.FinalSceneCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.FinalSceneCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.FinalSceneCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.FinalSceneCode.GDBoxPlayerObjects1_1final.push(gdjs.FinalSceneCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.FinalSceneCode.GDBoxPlayerObjects1.createFrom(gdjs.FinalSceneCode.GDBoxPlayerObjects1_1final);
}
}
}if ( gdjs.FinalSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.FinalSceneCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].getVariables().get("jumpCounter")) < 2 ) {
        gdjs.FinalSceneCode.condition1IsTrue_0.val = true;
        gdjs.FinalSceneCode.GDBoxPlayerObjects1[k] = gdjs.FinalSceneCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.FinalSceneCode.GDBoxPlayerObjects1.length = k;}}
if (gdjs.FinalSceneCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.FinalSceneCode.eventsList0x830c8c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.FinalSceneCode.eventsList0x75521c
gdjs.FinalSceneCode.eventsList0x6b3024 = function(runtimeScene) {

}; //End of gdjs.FinalSceneCode.eventsList0x6b3024
gdjs.FinalSceneCode.eventsList0x755964 = function(runtimeScene) {

{

gdjs.FinalSceneCode.GDBoxPlayerObjects1.length = 0;


gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.FinalSceneCode.conditionTrue_1 = gdjs.FinalSceneCode.condition0IsTrue_0;
gdjs.FinalSceneCode.GDBoxPlayerObjects1_1final.length = 0;gdjs.FinalSceneCode.condition0IsTrue_1.val = false;
gdjs.FinalSceneCode.condition1IsTrue_1.val = false;
{
gdjs.FinalSceneCode.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.FinalSceneCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.FinalSceneCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.FinalSceneCode.condition0IsTrue_1.val = true;
        gdjs.FinalSceneCode.GDBoxPlayerObjects2[k] = gdjs.FinalSceneCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.FinalSceneCode.GDBoxPlayerObjects2.length = k;if( gdjs.FinalSceneCode.condition0IsTrue_1.val ) {
    gdjs.FinalSceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.FinalSceneCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.FinalSceneCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.FinalSceneCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.FinalSceneCode.GDBoxPlayerObjects1_1final.push(gdjs.FinalSceneCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.FinalSceneCode.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.FinalSceneCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.FinalSceneCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.FinalSceneCode.condition1IsTrue_1.val = true;
        gdjs.FinalSceneCode.GDBoxPlayerObjects2[k] = gdjs.FinalSceneCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.FinalSceneCode.GDBoxPlayerObjects2.length = k;if( gdjs.FinalSceneCode.condition1IsTrue_1.val ) {
    gdjs.FinalSceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.FinalSceneCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.FinalSceneCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.FinalSceneCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.FinalSceneCode.GDBoxPlayerObjects1_1final.push(gdjs.FinalSceneCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.FinalSceneCode.GDBoxPlayerObjects1.createFrom(gdjs.FinalSceneCode.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalSceneCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.FinalSceneCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


}; //End of gdjs.FinalSceneCode.eventsList0x755964
gdjs.FinalSceneCode.eventsList0x7aa60c = function(runtimeScene) {

{

gdjs.FinalSceneCode.GDBoxPlayerObjects1.length = 0;


gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.FinalSceneCode.conditionTrue_1 = gdjs.FinalSceneCode.condition0IsTrue_0;
gdjs.FinalSceneCode.GDBoxPlayerObjects1_1final.length = 0;gdjs.FinalSceneCode.condition0IsTrue_1.val = false;
gdjs.FinalSceneCode.condition1IsTrue_1.val = false;
{
gdjs.FinalSceneCode.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.FinalSceneCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.FinalSceneCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.FinalSceneCode.condition0IsTrue_1.val = true;
        gdjs.FinalSceneCode.GDBoxPlayerObjects2[k] = gdjs.FinalSceneCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.FinalSceneCode.GDBoxPlayerObjects2.length = k;if( gdjs.FinalSceneCode.condition0IsTrue_1.val ) {
    gdjs.FinalSceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.FinalSceneCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.FinalSceneCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.FinalSceneCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.FinalSceneCode.GDBoxPlayerObjects1_1final.push(gdjs.FinalSceneCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.FinalSceneCode.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.FinalSceneCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.FinalSceneCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.FinalSceneCode.condition1IsTrue_1.val = true;
        gdjs.FinalSceneCode.GDBoxPlayerObjects2[k] = gdjs.FinalSceneCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.FinalSceneCode.GDBoxPlayerObjects2.length = k;if( gdjs.FinalSceneCode.condition1IsTrue_1.val ) {
    gdjs.FinalSceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.FinalSceneCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.FinalSceneCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.FinalSceneCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.FinalSceneCode.GDBoxPlayerObjects1_1final.push(gdjs.FinalSceneCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.FinalSceneCode.GDBoxPlayerObjects1.createFrom(gdjs.FinalSceneCode.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalSceneCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.FinalSceneCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


}; //End of gdjs.FinalSceneCode.eventsList0x7aa60c
gdjs.FinalSceneCode.eventsList0x6b2884 = function(runtimeScene) {

}; //End of gdjs.FinalSceneCode.eventsList0x6b2884
gdjs.FinalSceneCode.eventsList0x7a9e14 = function(runtimeScene) {

}; //End of gdjs.FinalSceneCode.eventsList0x7a9e14
gdjs.FinalSceneCode.mapOfGDgdjs_46FinalSceneCode_46GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.FinalSceneCode.GDMenuObjects1});gdjs.FinalSceneCode.eventsList0x8a0dcc = function(runtimeScene) {

{


gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
gdjs.FinalSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


}; //End of gdjs.FinalSceneCode.eventsList0x8a0dcc
gdjs.FinalSceneCode.mapOfGDgdjs_46FinalSceneCode_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.FinalSceneCode.GDBoxPlayerObjects1});gdjs.FinalSceneCode.mapOfGDgdjs_46FinalSceneCode_46GDGreenGoalObjects1Objects = Hashtable.newFrom({"GreenGoal": gdjs.FinalSceneCode.GDGreenGoalObjects1});gdjs.FinalSceneCode.eventsList0x8a0934 = function(runtimeScene) {

{

/* Reuse gdjs.FinalSceneCode.GDBoxPlayerObjects1 */

gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalSceneCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].getVariables().get("timeGoal")) == 50 ) {
        gdjs.FinalSceneCode.condition0IsTrue_0.val = true;
        gdjs.FinalSceneCode.GDBoxPlayerObjects1[k] = gdjs.FinalSceneCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.FinalSceneCode.GDBoxPlayerObjects1.length = k;}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Congratulations", true);
}}

}


}; //End of gdjs.FinalSceneCode.eventsList0x8a0934
gdjs.FinalSceneCode.eventsList0xb5aa0 = function(runtimeScene) {

{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Double Jump"); }gdjs.FinalSceneCode.eventsList0x8309f4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Double Jump"); }
}


{

gdjs.FinalSceneCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalSceneCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].getVariables().get("doubleJump")) == 1 ) {
        gdjs.FinalSceneCode.condition0IsTrue_0.val = true;
        gdjs.FinalSceneCode.GDBoxPlayerObjects1[k] = gdjs.FinalSceneCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.FinalSceneCode.GDBoxPlayerObjects1.length = k;}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.FinalSceneCode.eventsList0x75521c(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.FinalSceneCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalSceneCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.FinalSceneCode.condition0IsTrue_0.val = true;
        gdjs.FinalSceneCode.GDBoxPlayerObjects1[k] = gdjs.FinalSceneCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.FinalSceneCode.GDBoxPlayerObjects1.length = k;}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalSceneCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.FinalSceneCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.FinalSceneCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].getVariables().get("jumpCounter")).setNumber(0);
}
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Key Events"); }gdjs.FinalSceneCode.eventsList0x6b3024(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Key Events"); }
}


{



}


{


gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.FinalSceneCode.conditionTrue_1 = gdjs.FinalSceneCode.condition0IsTrue_0;
gdjs.FinalSceneCode.condition0IsTrue_1.val = false;
gdjs.FinalSceneCode.condition1IsTrue_1.val = false;
gdjs.FinalSceneCode.condition2IsTrue_1.val = false;
{
gdjs.FinalSceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.FinalSceneCode.condition0IsTrue_1.val ) {
    gdjs.FinalSceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.FinalSceneCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.FinalSceneCode.condition1IsTrue_1.val ) {
    gdjs.FinalSceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.FinalSceneCode.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.FinalSceneCode.condition2IsTrue_1.val ) {
    gdjs.FinalSceneCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {
gdjs.FinalSceneCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
{for(var i = 0, len = gdjs.FinalSceneCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{



}


{


gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.FinalSceneCode.conditionTrue_1 = gdjs.FinalSceneCode.condition0IsTrue_0;
gdjs.FinalSceneCode.condition0IsTrue_1.val = false;
gdjs.FinalSceneCode.condition1IsTrue_1.val = false;
{
gdjs.FinalSceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.FinalSceneCode.condition0IsTrue_1.val ) {
    gdjs.FinalSceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.FinalSceneCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.FinalSceneCode.condition1IsTrue_1.val ) {
    gdjs.FinalSceneCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.FinalSceneCode.eventsList0x755964(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.FinalSceneCode.conditionTrue_1 = gdjs.FinalSceneCode.condition0IsTrue_0;
gdjs.FinalSceneCode.condition0IsTrue_1.val = false;
gdjs.FinalSceneCode.condition1IsTrue_1.val = false;
{
gdjs.FinalSceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.FinalSceneCode.condition0IsTrue_1.val ) {
    gdjs.FinalSceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.FinalSceneCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.FinalSceneCode.condition1IsTrue_1.val ) {
    gdjs.FinalSceneCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.FinalSceneCode.eventsList0x7aa60c(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
gdjs.FinalSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


{


gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
gdjs.FinalSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Respawn System"); }gdjs.FinalSceneCode.eventsList0x6b2884(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Respawn System"); }
}


{

gdjs.FinalSceneCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalSceneCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].getY() > 900 ) {
        gdjs.FinalSceneCode.condition0IsTrue_0.val = true;
        gdjs.FinalSceneCode.GDBoxPlayerObjects1[k] = gdjs.FinalSceneCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.FinalSceneCode.GDBoxPlayerObjects1.length = k;}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalSceneCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.FinalSceneCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) - 50);
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


gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
gdjs.FinalSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Secs")) == gdjs.evtTools.runtimeScene.getTime(runtimeScene, "sec") + 1;
}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{runtimeScene.getVariables().get("Secs").setNumber(0);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Wall Jump"); }gdjs.FinalSceneCode.eventsList0x7a9e14(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Wall Jump"); }
}


{

gdjs.FinalSceneCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalSceneCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isGrabbingPlatform() ) {
        gdjs.FinalSceneCode.condition0IsTrue_0.val = true;
        gdjs.FinalSceneCode.GDBoxPlayerObjects1[k] = gdjs.FinalSceneCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.FinalSceneCode.GDBoxPlayerObjects1.length = k;}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalSceneCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.FinalSceneCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].getVariables().get("jumpCounter")).setNumber(0);
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


gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
gdjs.FinalSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {
gdjs.FinalSceneCode.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.FinalSceneCode.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.FinalSceneCode.GDCurrentTimeObjects1[i].setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
gdjs.FinalSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {
gdjs.FinalSceneCode.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.FinalSceneCode.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.FinalSceneCode.GDCurrentTimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + "0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
gdjs.FinalSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 10;
}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {
gdjs.FinalSceneCode.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.FinalSceneCode.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.FinalSceneCode.GDCurrentTimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.FinalSceneCode.conditionTrue_1 = gdjs.FinalSceneCode.condition0IsTrue_0;
gdjs.FinalSceneCode.condition0IsTrue_1.val = false;
gdjs.FinalSceneCode.condition1IsTrue_1.val = false;
{
gdjs.FinalSceneCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if ( gdjs.FinalSceneCode.condition0IsTrue_1.val ) {
{
gdjs.FinalSceneCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}}
gdjs.FinalSceneCode.conditionTrue_1.val = true && gdjs.FinalSceneCode.condition0IsTrue_1.val && gdjs.FinalSceneCode.condition1IsTrue_1.val;
}
}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {
gdjs.FinalSceneCode.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.FinalSceneCode.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.FinalSceneCode.GDCurrentTimeObjects1[i].setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + "0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{

gdjs.FinalSceneCode.GDMenuObjects1.createFrom(runtimeScene.getObjects("Menu"));

gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
gdjs.FinalSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FinalSceneCode.mapOfGDgdjs_46FinalSceneCode_46GDMenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.FinalSceneCode.eventsList0x8a0dcc(runtimeScene);} //End of subevents
}

}


{

gdjs.FinalSceneCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalSceneCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].getY() < 0 ) {
        gdjs.FinalSceneCode.condition0IsTrue_0.val = true;
        gdjs.FinalSceneCode.GDBoxPlayerObjects1[k] = gdjs.FinalSceneCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.FinalSceneCode.GDBoxPlayerObjects1.length = k;}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, -(20), "", 0);
}}

}


{

gdjs.FinalSceneCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.FinalSceneCode.conditionTrue_1 = gdjs.FinalSceneCode.condition0IsTrue_0;
gdjs.FinalSceneCode.condition0IsTrue_1.val = false;
gdjs.FinalSceneCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalSceneCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].getY() >= 0 ) {
        gdjs.FinalSceneCode.condition0IsTrue_1.val = true;
        gdjs.FinalSceneCode.GDBoxPlayerObjects1[k] = gdjs.FinalSceneCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.FinalSceneCode.GDBoxPlayerObjects1.length = k;}if ( gdjs.FinalSceneCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.FinalSceneCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].getY() <= 540 ) {
        gdjs.FinalSceneCode.condition1IsTrue_1.val = true;
        gdjs.FinalSceneCode.GDBoxPlayerObjects1[k] = gdjs.FinalSceneCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.FinalSceneCode.GDBoxPlayerObjects1.length = k;}}
gdjs.FinalSceneCode.conditionTrue_1.val = true && gdjs.FinalSceneCode.condition0IsTrue_1.val && gdjs.FinalSceneCode.condition1IsTrue_1.val;
}
}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.window.getCanvasHeight(runtimeScene) / 2, "", 0);
}}

}


{

gdjs.FinalSceneCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinalSceneCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].getY() > 540 ) {
        gdjs.FinalSceneCode.condition0IsTrue_0.val = true;
        gdjs.FinalSceneCode.GDBoxPlayerObjects1[k] = gdjs.FinalSceneCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.FinalSceneCode.GDBoxPlayerObjects1.length = k;}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (20), "", 0);
}}

}


{

gdjs.FinalSceneCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
gdjs.FinalSceneCode.GDGreenGoalObjects1.createFrom(runtimeScene.getObjects("GreenGoal"));

gdjs.FinalSceneCode.condition0IsTrue_0.val = false;
{
gdjs.FinalSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FinalSceneCode.mapOfGDgdjs_46FinalSceneCode_46GDBoxPlayerObjects1Objects, gdjs.FinalSceneCode.mapOfGDgdjs_46FinalSceneCode_46GDGreenGoalObjects1Objects, false, runtimeScene, true);
}if (gdjs.FinalSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalSceneCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.FinalSceneCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.FinalSceneCode.GDBoxPlayerObjects1[i].getVariables().get("timeGoal")).add(1);
}
}
{ //Subevents
gdjs.FinalSceneCode.eventsList0x8a0934(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.FinalSceneCode.eventsList0xb5aa0


gdjs.FinalSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FinalSceneCode.GDBoxPlayerObjects1.length = 0;
gdjs.FinalSceneCode.GDBoxPlayerObjects2.length = 0;
gdjs.FinalSceneCode.GDGreenXPlatformObjects1.length = 0;
gdjs.FinalSceneCode.GDGreenXPlatformObjects2.length = 0;
gdjs.FinalSceneCode.GDGreenGoalObjects1.length = 0;
gdjs.FinalSceneCode.GDGreenGoalObjects2.length = 0;
gdjs.FinalSceneCode.GDCurrentTimeObjects1.length = 0;
gdjs.FinalSceneCode.GDCurrentTimeObjects2.length = 0;
gdjs.FinalSceneCode.GDMenuObjects1.length = 0;
gdjs.FinalSceneCode.GDMenuObjects2.length = 0;
gdjs.FinalSceneCode.GDFinalObjects1.length = 0;
gdjs.FinalSceneCode.GDFinalObjects2.length = 0;

gdjs.FinalSceneCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['FinalSceneCode'] = gdjs.FinalSceneCode;
