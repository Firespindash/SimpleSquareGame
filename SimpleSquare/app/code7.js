gdjs.Dark2Code = {};
gdjs.Dark2Code.GDBoxPlayerObjects1_1final = [];

gdjs.Dark2Code.GDBoxPlayerObjects1= [];
gdjs.Dark2Code.GDBoxPlayerObjects2= [];
gdjs.Dark2Code.GDLightBlueXPlatformObjects1= [];
gdjs.Dark2Code.GDLightBlueXPlatformObjects2= [];
gdjs.Dark2Code.GDLightBlueYPlatformObjects1= [];
gdjs.Dark2Code.GDLightBlueYPlatformObjects2= [];
gdjs.Dark2Code.GDBlueGoalObjects1= [];
gdjs.Dark2Code.GDBlueGoalObjects2= [];
gdjs.Dark2Code.GDCurrentTimeObjects1= [];
gdjs.Dark2Code.GDCurrentTimeObjects2= [];
gdjs.Dark2Code.GDMenuObjects1= [];
gdjs.Dark2Code.GDMenuObjects2= [];

gdjs.Dark2Code.conditionTrue_0 = {val:false};
gdjs.Dark2Code.condition0IsTrue_0 = {val:false};
gdjs.Dark2Code.condition1IsTrue_0 = {val:false};
gdjs.Dark2Code.condition2IsTrue_0 = {val:false};
gdjs.Dark2Code.condition3IsTrue_0 = {val:false};
gdjs.Dark2Code.conditionTrue_1 = {val:false};
gdjs.Dark2Code.condition0IsTrue_1 = {val:false};
gdjs.Dark2Code.condition1IsTrue_1 = {val:false};
gdjs.Dark2Code.condition2IsTrue_1 = {val:false};
gdjs.Dark2Code.condition3IsTrue_1 = {val:false};


gdjs.Dark2Code.eventsList0x755094 = function(runtimeScene) {

}; //End of gdjs.Dark2Code.eventsList0x755094
gdjs.Dark2Code.eventsList0x6b26b4 = function(runtimeScene) {

{


gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark2Code.conditionTrue_1 = gdjs.Dark2Code.condition0IsTrue_0;
gdjs.Dark2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8800620);
}
}if (gdjs.Dark2Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("jumpsTotal").add(1);
}}

}


}; //End of gdjs.Dark2Code.eventsList0x6b26b4
gdjs.Dark2Code.eventsList0x83584c = function(runtimeScene) {

{


gdjs.Dark2Code.condition0IsTrue_0.val = false;
gdjs.Dark2Code.condition1IsTrue_0.val = false;
{
{gdjs.Dark2Code.conditionTrue_1 = gdjs.Dark2Code.condition0IsTrue_0;
gdjs.Dark2Code.condition0IsTrue_1.val = false;
gdjs.Dark2Code.condition1IsTrue_1.val = false;
gdjs.Dark2Code.condition2IsTrue_1.val = false;
{
gdjs.Dark2Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Dark2Code.condition0IsTrue_1.val ) {
    gdjs.Dark2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark2Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Dark2Code.condition1IsTrue_1.val ) {
    gdjs.Dark2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark2Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Dark2Code.condition2IsTrue_1.val ) {
    gdjs.Dark2Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Dark2Code.condition0IsTrue_0.val ) {
{
{gdjs.Dark2Code.conditionTrue_1 = gdjs.Dark2Code.condition1IsTrue_0;
gdjs.Dark2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7690788);
}
}}
if (gdjs.Dark2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Dark2Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark2Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark2Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Dark2Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark2Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Dark2Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).add(1);
}
}
{ //Subevents
gdjs.Dark2Code.eventsList0x6b26b4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Dark2Code.eventsList0x83584c
gdjs.Dark2Code.eventsList0x83575c = function(runtimeScene) {

{

/* Reuse gdjs.Dark2Code.GDBoxPlayerObjects1 */

gdjs.Dark2Code.condition0IsTrue_0.val = false;
gdjs.Dark2Code.condition1IsTrue_0.val = false;
{
{gdjs.Dark2Code.conditionTrue_1 = gdjs.Dark2Code.condition0IsTrue_0;
gdjs.Dark2Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Dark2Code.condition0IsTrue_1.val = false;
gdjs.Dark2Code.condition1IsTrue_1.val = false;
{
gdjs.Dark2Code.GDBoxPlayerObjects2.createFrom(gdjs.Dark2Code.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.Dark2Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark2Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Dark2Code.condition0IsTrue_1.val = true;
        gdjs.Dark2Code.GDBoxPlayerObjects2[k] = gdjs.Dark2Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark2Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark2Code.condition0IsTrue_1.val ) {
    gdjs.Dark2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark2Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark2Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark2Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark2Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark2Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark2Code.GDBoxPlayerObjects2.createFrom(gdjs.Dark2Code.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.Dark2Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark2Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Dark2Code.condition1IsTrue_1.val = true;
        gdjs.Dark2Code.GDBoxPlayerObjects2[k] = gdjs.Dark2Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark2Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark2Code.condition1IsTrue_1.val ) {
    gdjs.Dark2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark2Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark2Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark2Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark2Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark2Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark2Code.GDBoxPlayerObjects1.createFrom(gdjs.Dark2Code.GDBoxPlayerObjects1_1final);
}
}
}if ( gdjs.Dark2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dark2Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark2Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Dark2Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)) < 2 ) {
        gdjs.Dark2Code.condition1IsTrue_0.val = true;
        gdjs.Dark2Code.GDBoxPlayerObjects1[k] = gdjs.Dark2Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark2Code.GDBoxPlayerObjects1.length = k;}}
if (gdjs.Dark2Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Dark2Code.eventsList0x83584c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Dark2Code.eventsList0x83575c
gdjs.Dark2Code.eventsList0x865374 = function(runtimeScene) {

}; //End of gdjs.Dark2Code.eventsList0x865374
gdjs.Dark2Code.eventsList0x7a9d7c = function(runtimeScene) {

{

gdjs.Dark2Code.GDBoxPlayerObjects1.length = 0;


gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark2Code.conditionTrue_1 = gdjs.Dark2Code.condition0IsTrue_0;
gdjs.Dark2Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Dark2Code.condition0IsTrue_1.val = false;
gdjs.Dark2Code.condition1IsTrue_1.val = false;
{
gdjs.Dark2Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Dark2Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark2Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Dark2Code.condition0IsTrue_1.val = true;
        gdjs.Dark2Code.GDBoxPlayerObjects2[k] = gdjs.Dark2Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark2Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark2Code.condition0IsTrue_1.val ) {
    gdjs.Dark2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark2Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark2Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark2Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark2Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark2Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark2Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Dark2Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark2Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Dark2Code.condition1IsTrue_1.val = true;
        gdjs.Dark2Code.GDBoxPlayerObjects2[k] = gdjs.Dark2Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark2Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark2Code.condition1IsTrue_1.val ) {
    gdjs.Dark2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark2Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark2Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark2Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark2Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark2Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark2Code.GDBoxPlayerObjects1.createFrom(gdjs.Dark2Code.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.Dark2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark2Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark2Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark2Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


}; //End of gdjs.Dark2Code.eventsList0x7a9d7c
gdjs.Dark2Code.eventsList0x864ee4 = function(runtimeScene) {

{

gdjs.Dark2Code.GDBoxPlayerObjects1.length = 0;


gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark2Code.conditionTrue_1 = gdjs.Dark2Code.condition0IsTrue_0;
gdjs.Dark2Code.GDBoxPlayerObjects1_1final.length = 0;gdjs.Dark2Code.condition0IsTrue_1.val = false;
gdjs.Dark2Code.condition1IsTrue_1.val = false;
{
gdjs.Dark2Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Dark2Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark2Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Dark2Code.condition0IsTrue_1.val = true;
        gdjs.Dark2Code.GDBoxPlayerObjects2[k] = gdjs.Dark2Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark2Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark2Code.condition0IsTrue_1.val ) {
    gdjs.Dark2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark2Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark2Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark2Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark2Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark2Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark2Code.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.Dark2Code.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Dark2Code.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Dark2Code.condition1IsTrue_1.val = true;
        gdjs.Dark2Code.GDBoxPlayerObjects2[k] = gdjs.Dark2Code.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.Dark2Code.GDBoxPlayerObjects2.length = k;if( gdjs.Dark2Code.condition1IsTrue_1.val ) {
    gdjs.Dark2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Dark2Code.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Dark2Code.GDBoxPlayerObjects1_1final.indexOf(gdjs.Dark2Code.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.Dark2Code.GDBoxPlayerObjects1_1final.push(gdjs.Dark2Code.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.Dark2Code.GDBoxPlayerObjects1.createFrom(gdjs.Dark2Code.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.Dark2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark2Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark2Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark2Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


}; //End of gdjs.Dark2Code.eventsList0x864ee4
gdjs.Dark2Code.eventsList0x6a4084 = function(runtimeScene) {

}; //End of gdjs.Dark2Code.eventsList0x6a4084
gdjs.Dark2Code.eventsList0x6a4ba4 = function(runtimeScene) {

}; //End of gdjs.Dark2Code.eventsList0x6a4ba4
gdjs.Dark2Code.mapOfGDgdjs_46Dark2Code_46GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.Dark2Code.GDMenuObjects1});gdjs.Dark2Code.eventsList0x830464 = function(runtimeScene) {

{


gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
gdjs.Dark2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Dark2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


}; //End of gdjs.Dark2Code.eventsList0x830464
gdjs.Dark2Code.mapOfGDgdjs_46Dark2Code_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.Dark2Code.GDBoxPlayerObjects1});gdjs.Dark2Code.mapOfGDgdjs_46Dark2Code_46GDBlueGoalObjects1Objects = Hashtable.newFrom({"BlueGoal": gdjs.Dark2Code.GDBlueGoalObjects1});gdjs.Dark2Code.eventsList0x6b3304 = function(runtimeScene) {

{

/* Reuse gdjs.Dark2Code.GDBoxPlayerObjects1 */

gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark2Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark2Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Dark2Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)) == 50 ) {
        gdjs.Dark2Code.condition0IsTrue_0.val = true;
        gdjs.Dark2Code.GDBoxPlayerObjects1[k] = gdjs.Dark2Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark2Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dark3", true);
}}

}


}; //End of gdjs.Dark2Code.eventsList0x6b3304
gdjs.Dark2Code.eventsList0xb5aa0 = function(runtimeScene) {

{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Double Jump"); }gdjs.Dark2Code.eventsList0x755094(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Double Jump"); }
}


{

gdjs.Dark2Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark2Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark2Code.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.Dark2Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Dark2Code.condition0IsTrue_0.val = true;
        gdjs.Dark2Code.GDBoxPlayerObjects1[k] = gdjs.Dark2Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark2Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Dark2Code.eventsList0x83575c(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.Dark2Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark2Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark2Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Dark2Code.condition0IsTrue_0.val = true;
        gdjs.Dark2Code.GDBoxPlayerObjects1[k] = gdjs.Dark2Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark2Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark2Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark2Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark2Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.Dark2Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark2Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Dark2Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Key Events"); }gdjs.Dark2Code.eventsList0x865374(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Key Events"); }
}


{



}


{


gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark2Code.conditionTrue_1 = gdjs.Dark2Code.condition0IsTrue_0;
gdjs.Dark2Code.condition0IsTrue_1.val = false;
gdjs.Dark2Code.condition1IsTrue_1.val = false;
gdjs.Dark2Code.condition2IsTrue_1.val = false;
{
gdjs.Dark2Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Dark2Code.condition0IsTrue_1.val ) {
    gdjs.Dark2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark2Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Dark2Code.condition1IsTrue_1.val ) {
    gdjs.Dark2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark2Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Dark2Code.condition2IsTrue_1.val ) {
    gdjs.Dark2Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Dark2Code.condition0IsTrue_0.val) {
gdjs.Dark2Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
{for(var i = 0, len = gdjs.Dark2Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark2Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{



}


{


gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark2Code.conditionTrue_1 = gdjs.Dark2Code.condition0IsTrue_0;
gdjs.Dark2Code.condition0IsTrue_1.val = false;
gdjs.Dark2Code.condition1IsTrue_1.val = false;
{
gdjs.Dark2Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Dark2Code.condition0IsTrue_1.val ) {
    gdjs.Dark2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark2Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.Dark2Code.condition1IsTrue_1.val ) {
    gdjs.Dark2Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Dark2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Dark2Code.eventsList0x7a9d7c(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark2Code.conditionTrue_1 = gdjs.Dark2Code.condition0IsTrue_0;
gdjs.Dark2Code.condition0IsTrue_1.val = false;
gdjs.Dark2Code.condition1IsTrue_1.val = false;
{
gdjs.Dark2Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Dark2Code.condition0IsTrue_1.val ) {
    gdjs.Dark2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Dark2Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.Dark2Code.condition1IsTrue_1.val ) {
    gdjs.Dark2Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Dark2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Dark2Code.eventsList0x864ee4(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
gdjs.Dark2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if (gdjs.Dark2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


{


gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
gdjs.Dark2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if (gdjs.Dark2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Respawn System"); }gdjs.Dark2Code.eventsList0x6a4084(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Respawn System"); }
}


{

gdjs.Dark2Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark2Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark2Code.GDBoxPlayerObjects1[i].getY() > 900 ) {
        gdjs.Dark2Code.condition0IsTrue_0.val = true;
        gdjs.Dark2Code.GDBoxPlayerObjects1[k] = gdjs.Dark2Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark2Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark2Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark2Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark2Code.GDBoxPlayerObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) - 50);
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


gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
gdjs.Dark2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Secs")) == gdjs.evtTools.runtimeScene.getTime(runtimeScene, "sec") + 1;
}if (gdjs.Dark2Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{runtimeScene.getVariables().get("Secs").setNumber(0);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Wall Jump"); }gdjs.Dark2Code.eventsList0x6a4ba4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Wall Jump"); }
}


{

gdjs.Dark2Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark2Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark2Code.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isGrabbingPlatform() ) {
        gdjs.Dark2Code.condition0IsTrue_0.val = true;
        gdjs.Dark2Code.GDBoxPlayerObjects1[k] = gdjs.Dark2Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark2Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark2Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark2Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark2Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Dark2Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
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


gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
gdjs.Dark2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if (gdjs.Dark2Code.condition0IsTrue_0.val) {
gdjs.Dark2Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Dark2Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Dark2Code.GDCurrentTimeObjects1[i].setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
gdjs.Dark2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}if (gdjs.Dark2Code.condition0IsTrue_0.val) {
gdjs.Dark2Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Dark2Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Dark2Code.GDCurrentTimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + "0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
gdjs.Dark2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 10;
}if (gdjs.Dark2Code.condition0IsTrue_0.val) {
gdjs.Dark2Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Dark2Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Dark2Code.GDCurrentTimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark2Code.conditionTrue_1 = gdjs.Dark2Code.condition0IsTrue_0;
gdjs.Dark2Code.condition0IsTrue_1.val = false;
gdjs.Dark2Code.condition1IsTrue_1.val = false;
{
gdjs.Dark2Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if ( gdjs.Dark2Code.condition0IsTrue_1.val ) {
{
gdjs.Dark2Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}}
gdjs.Dark2Code.conditionTrue_1.val = true && gdjs.Dark2Code.condition0IsTrue_1.val && gdjs.Dark2Code.condition1IsTrue_1.val;
}
}if (gdjs.Dark2Code.condition0IsTrue_0.val) {
gdjs.Dark2Code.GDCurrentTimeObjects1.createFrom(runtimeScene.getObjects("CurrentTime"));
{for(var i = 0, len = gdjs.Dark2Code.GDCurrentTimeObjects1.length ;i < len;++i) {
    gdjs.Dark2Code.GDCurrentTimeObjects1[i].setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ":" + "0" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{

gdjs.Dark2Code.GDMenuObjects1.createFrom(runtimeScene.getObjects("Menu"));

gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
gdjs.Dark2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Dark2Code.mapOfGDgdjs_46Dark2Code_46GDMenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.Dark2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Dark2Code.eventsList0x830464(runtimeScene);} //End of subevents
}

}


{

gdjs.Dark2Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark2Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark2Code.GDBoxPlayerObjects1[i].getY() <= 0 ) {
        gdjs.Dark2Code.condition0IsTrue_0.val = true;
        gdjs.Dark2Code.GDBoxPlayerObjects1[k] = gdjs.Dark2Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark2Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, -(20), "", 0);
}}

}


{

gdjs.Dark2Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
{gdjs.Dark2Code.conditionTrue_1 = gdjs.Dark2Code.condition0IsTrue_0;
gdjs.Dark2Code.condition0IsTrue_1.val = false;
gdjs.Dark2Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark2Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark2Code.GDBoxPlayerObjects1[i].getY() > 0 ) {
        gdjs.Dark2Code.condition0IsTrue_1.val = true;
        gdjs.Dark2Code.GDBoxPlayerObjects1[k] = gdjs.Dark2Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark2Code.GDBoxPlayerObjects1.length = k;}if ( gdjs.Dark2Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Dark2Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark2Code.GDBoxPlayerObjects1[i].getY() <= 540 ) {
        gdjs.Dark2Code.condition1IsTrue_1.val = true;
        gdjs.Dark2Code.GDBoxPlayerObjects1[k] = gdjs.Dark2Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark2Code.GDBoxPlayerObjects1.length = k;}}
gdjs.Dark2Code.conditionTrue_1.val = true && gdjs.Dark2Code.condition0IsTrue_1.val && gdjs.Dark2Code.condition1IsTrue_1.val;
}
}if (gdjs.Dark2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.window.getCanvasHeight(runtimeScene) / 2, "", 0);
}}

}


{

gdjs.Dark2Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Dark2Code.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Dark2Code.GDBoxPlayerObjects1[i].getY() > 540 ) {
        gdjs.Dark2Code.condition0IsTrue_0.val = true;
        gdjs.Dark2Code.GDBoxPlayerObjects1[k] = gdjs.Dark2Code.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.Dark2Code.GDBoxPlayerObjects1.length = k;}if (gdjs.Dark2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (20), "", 0);
}}

}


{

gdjs.Dark2Code.GDBlueGoalObjects1.createFrom(runtimeScene.getObjects("BlueGoal"));
gdjs.Dark2Code.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.Dark2Code.condition0IsTrue_0.val = false;
{
gdjs.Dark2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Dark2Code.mapOfGDgdjs_46Dark2Code_46GDBoxPlayerObjects1Objects, gdjs.Dark2Code.mapOfGDgdjs_46Dark2Code_46GDBlueGoalObjects1Objects, false, runtimeScene, true);
}if (gdjs.Dark2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Dark2Code.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.Dark2Code.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.Dark2Code.GDBoxPlayerObjects1[i].returnVariable(gdjs.Dark2Code.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}
{ //Subevents
gdjs.Dark2Code.eventsList0x6b3304(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Dark2Code.eventsList0xb5aa0


gdjs.Dark2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Dark2Code.GDBoxPlayerObjects1.length = 0;
gdjs.Dark2Code.GDBoxPlayerObjects2.length = 0;
gdjs.Dark2Code.GDLightBlueXPlatformObjects1.length = 0;
gdjs.Dark2Code.GDLightBlueXPlatformObjects2.length = 0;
gdjs.Dark2Code.GDLightBlueYPlatformObjects1.length = 0;
gdjs.Dark2Code.GDLightBlueYPlatformObjects2.length = 0;
gdjs.Dark2Code.GDBlueGoalObjects1.length = 0;
gdjs.Dark2Code.GDBlueGoalObjects2.length = 0;
gdjs.Dark2Code.GDCurrentTimeObjects1.length = 0;
gdjs.Dark2Code.GDCurrentTimeObjects2.length = 0;
gdjs.Dark2Code.GDMenuObjects1.length = 0;
gdjs.Dark2Code.GDMenuObjects2.length = 0;

gdjs.Dark2Code.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['Dark2Code'] = gdjs.Dark2Code;
