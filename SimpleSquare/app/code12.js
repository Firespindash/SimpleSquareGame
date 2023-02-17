gdjs.CongratulationsCode = {};
gdjs.CongratulationsCode.GDBoxPlayerObjects1_1final = [];

gdjs.CongratulationsCode.GDBoxPlayerObjects1= [];
gdjs.CongratulationsCode.GDBoxPlayerObjects2= [];
gdjs.CongratulationsCode.GDGreenXPlatformObjects1= [];
gdjs.CongratulationsCode.GDGreenXPlatformObjects2= [];
gdjs.CongratulationsCode.GDThankYouObjects1= [];
gdjs.CongratulationsCode.GDThankYouObjects2= [];
gdjs.CongratulationsCode.GDMenuObjects1= [];
gdjs.CongratulationsCode.GDMenuObjects2= [];
gdjs.CongratulationsCode.GDCongratsObjects1= [];
gdjs.CongratulationsCode.GDCongratsObjects2= [];

gdjs.CongratulationsCode.conditionTrue_0 = {val:false};
gdjs.CongratulationsCode.condition0IsTrue_0 = {val:false};
gdjs.CongratulationsCode.condition1IsTrue_0 = {val:false};
gdjs.CongratulationsCode.condition2IsTrue_0 = {val:false};
gdjs.CongratulationsCode.condition3IsTrue_0 = {val:false};
gdjs.CongratulationsCode.conditionTrue_1 = {val:false};
gdjs.CongratulationsCode.condition0IsTrue_1 = {val:false};
gdjs.CongratulationsCode.condition1IsTrue_1 = {val:false};
gdjs.CongratulationsCode.condition2IsTrue_1 = {val:false};
gdjs.CongratulationsCode.condition3IsTrue_1 = {val:false};


gdjs.CongratulationsCode.eventsList0x8309a4 = function(runtimeScene) {

}; //End of gdjs.CongratulationsCode.eventsList0x8309a4
gdjs.CongratulationsCode.eventsList0x8a105c = function(runtimeScene) {

{


gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
{
{gdjs.CongratulationsCode.conditionTrue_1 = gdjs.CongratulationsCode.condition0IsTrue_0;
gdjs.CongratulationsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8533524);
}
}if (gdjs.CongratulationsCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("jumpsTotal").add(1);
}}

}


}; //End of gdjs.CongratulationsCode.eventsList0x8a105c
gdjs.CongratulationsCode.eventsList0x7d202c = function(runtimeScene) {

{


gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
gdjs.CongratulationsCode.condition1IsTrue_0.val = false;
{
{gdjs.CongratulationsCode.conditionTrue_1 = gdjs.CongratulationsCode.condition0IsTrue_0;
gdjs.CongratulationsCode.condition0IsTrue_1.val = false;
gdjs.CongratulationsCode.condition1IsTrue_1.val = false;
gdjs.CongratulationsCode.condition2IsTrue_1.val = false;
{
gdjs.CongratulationsCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.CongratulationsCode.condition0IsTrue_1.val ) {
    gdjs.CongratulationsCode.conditionTrue_1.val = true;
}
}
{
gdjs.CongratulationsCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.CongratulationsCode.condition1IsTrue_1.val ) {
    gdjs.CongratulationsCode.conditionTrue_1.val = true;
}
}
{
gdjs.CongratulationsCode.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.CongratulationsCode.condition2IsTrue_1.val ) {
    gdjs.CongratulationsCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.CongratulationsCode.condition0IsTrue_0.val ) {
{
{gdjs.CongratulationsCode.conditionTrue_1 = gdjs.CongratulationsCode.condition1IsTrue_0;
gdjs.CongratulationsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8610324);
}
}}
if (gdjs.CongratulationsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.CongratulationsCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.CongratulationsCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.CongratulationsCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.CongratulationsCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.CongratulationsCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.CongratulationsCode.GDBoxPlayerObjects1[i].getVariables().get("jumpCounter")).add(1);
}
}
{ //Subevents
gdjs.CongratulationsCode.eventsList0x8a105c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.CongratulationsCode.eventsList0x7d202c
gdjs.CongratulationsCode.eventsList0x75521c = function(runtimeScene) {

{

/* Reuse gdjs.CongratulationsCode.GDBoxPlayerObjects1 */

gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
gdjs.CongratulationsCode.condition1IsTrue_0.val = false;
{
{gdjs.CongratulationsCode.conditionTrue_1 = gdjs.CongratulationsCode.condition0IsTrue_0;
gdjs.CongratulationsCode.GDBoxPlayerObjects1_1final.length = 0;gdjs.CongratulationsCode.condition0IsTrue_1.val = false;
gdjs.CongratulationsCode.condition1IsTrue_1.val = false;
{
gdjs.CongratulationsCode.GDBoxPlayerObjects2.createFrom(gdjs.CongratulationsCode.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.CongratulationsCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.CongratulationsCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.CongratulationsCode.condition0IsTrue_1.val = true;
        gdjs.CongratulationsCode.GDBoxPlayerObjects2[k] = gdjs.CongratulationsCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.CongratulationsCode.GDBoxPlayerObjects2.length = k;if( gdjs.CongratulationsCode.condition0IsTrue_1.val ) {
    gdjs.CongratulationsCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.CongratulationsCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.CongratulationsCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.CongratulationsCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.CongratulationsCode.GDBoxPlayerObjects1_1final.push(gdjs.CongratulationsCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.CongratulationsCode.GDBoxPlayerObjects2.createFrom(gdjs.CongratulationsCode.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.CongratulationsCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.CongratulationsCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.CongratulationsCode.condition1IsTrue_1.val = true;
        gdjs.CongratulationsCode.GDBoxPlayerObjects2[k] = gdjs.CongratulationsCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.CongratulationsCode.GDBoxPlayerObjects2.length = k;if( gdjs.CongratulationsCode.condition1IsTrue_1.val ) {
    gdjs.CongratulationsCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.CongratulationsCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.CongratulationsCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.CongratulationsCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.CongratulationsCode.GDBoxPlayerObjects1_1final.push(gdjs.CongratulationsCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.CongratulationsCode.GDBoxPlayerObjects1.createFrom(gdjs.CongratulationsCode.GDBoxPlayerObjects1_1final);
}
}
}if ( gdjs.CongratulationsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.CongratulationsCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CongratulationsCode.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.CongratulationsCode.GDBoxPlayerObjects1[i].getVariables().get("jumpCounter")) < 2 ) {
        gdjs.CongratulationsCode.condition1IsTrue_0.val = true;
        gdjs.CongratulationsCode.GDBoxPlayerObjects1[k] = gdjs.CongratulationsCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.CongratulationsCode.GDBoxPlayerObjects1.length = k;}}
if (gdjs.CongratulationsCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.CongratulationsCode.eventsList0x7d202c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.CongratulationsCode.eventsList0x75521c
gdjs.CongratulationsCode.eventsList0x835784 = function(runtimeScene) {

}; //End of gdjs.CongratulationsCode.eventsList0x835784
gdjs.CongratulationsCode.eventsList0x7559e4 = function(runtimeScene) {

{

gdjs.CongratulationsCode.GDBoxPlayerObjects1.length = 0;


gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
{
{gdjs.CongratulationsCode.conditionTrue_1 = gdjs.CongratulationsCode.condition0IsTrue_0;
gdjs.CongratulationsCode.GDBoxPlayerObjects1_1final.length = 0;gdjs.CongratulationsCode.condition0IsTrue_1.val = false;
gdjs.CongratulationsCode.condition1IsTrue_1.val = false;
{
gdjs.CongratulationsCode.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.CongratulationsCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.CongratulationsCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.CongratulationsCode.condition0IsTrue_1.val = true;
        gdjs.CongratulationsCode.GDBoxPlayerObjects2[k] = gdjs.CongratulationsCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.CongratulationsCode.GDBoxPlayerObjects2.length = k;if( gdjs.CongratulationsCode.condition0IsTrue_1.val ) {
    gdjs.CongratulationsCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.CongratulationsCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.CongratulationsCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.CongratulationsCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.CongratulationsCode.GDBoxPlayerObjects1_1final.push(gdjs.CongratulationsCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.CongratulationsCode.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.CongratulationsCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.CongratulationsCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.CongratulationsCode.condition1IsTrue_1.val = true;
        gdjs.CongratulationsCode.GDBoxPlayerObjects2[k] = gdjs.CongratulationsCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.CongratulationsCode.GDBoxPlayerObjects2.length = k;if( gdjs.CongratulationsCode.condition1IsTrue_1.val ) {
    gdjs.CongratulationsCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.CongratulationsCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.CongratulationsCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.CongratulationsCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.CongratulationsCode.GDBoxPlayerObjects1_1final.push(gdjs.CongratulationsCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.CongratulationsCode.GDBoxPlayerObjects1.createFrom(gdjs.CongratulationsCode.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.CongratulationsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CongratulationsCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.CongratulationsCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.CongratulationsCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


}; //End of gdjs.CongratulationsCode.eventsList0x7559e4
gdjs.CongratulationsCode.eventsList0x6b2c9c = function(runtimeScene) {

{

gdjs.CongratulationsCode.GDBoxPlayerObjects1.length = 0;


gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
{
{gdjs.CongratulationsCode.conditionTrue_1 = gdjs.CongratulationsCode.condition0IsTrue_0;
gdjs.CongratulationsCode.GDBoxPlayerObjects1_1final.length = 0;gdjs.CongratulationsCode.condition0IsTrue_1.val = false;
gdjs.CongratulationsCode.condition1IsTrue_1.val = false;
{
gdjs.CongratulationsCode.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.CongratulationsCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.CongratulationsCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.CongratulationsCode.condition0IsTrue_1.val = true;
        gdjs.CongratulationsCode.GDBoxPlayerObjects2[k] = gdjs.CongratulationsCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.CongratulationsCode.GDBoxPlayerObjects2.length = k;if( gdjs.CongratulationsCode.condition0IsTrue_1.val ) {
    gdjs.CongratulationsCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.CongratulationsCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.CongratulationsCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.CongratulationsCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.CongratulationsCode.GDBoxPlayerObjects1_1final.push(gdjs.CongratulationsCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.CongratulationsCode.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.CongratulationsCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.CongratulationsCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.CongratulationsCode.condition1IsTrue_1.val = true;
        gdjs.CongratulationsCode.GDBoxPlayerObjects2[k] = gdjs.CongratulationsCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.CongratulationsCode.GDBoxPlayerObjects2.length = k;if( gdjs.CongratulationsCode.condition1IsTrue_1.val ) {
    gdjs.CongratulationsCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.CongratulationsCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.CongratulationsCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.CongratulationsCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.CongratulationsCode.GDBoxPlayerObjects1_1final.push(gdjs.CongratulationsCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.CongratulationsCode.GDBoxPlayerObjects1.createFrom(gdjs.CongratulationsCode.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.CongratulationsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CongratulationsCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.CongratulationsCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.CongratulationsCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


}; //End of gdjs.CongratulationsCode.eventsList0x6b2c9c
gdjs.CongratulationsCode.eventsList0x8307bc = function(runtimeScene) {

}; //End of gdjs.CongratulationsCode.eventsList0x8307bc
gdjs.CongratulationsCode.eventsList0x6b29dc = function(runtimeScene) {

}; //End of gdjs.CongratulationsCode.eventsList0x6b29dc
gdjs.CongratulationsCode.mapOfGDgdjs_46CongratulationsCode_46GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.CongratulationsCode.GDMenuObjects1});gdjs.CongratulationsCode.eventsList0x6a4794 = function(runtimeScene) {

{


gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
{
gdjs.CongratulationsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.CongratulationsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


}; //End of gdjs.CongratulationsCode.eventsList0x6a4794
gdjs.CongratulationsCode.eventsList0xb5aa0 = function(runtimeScene) {

{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Double Jump"); }gdjs.CongratulationsCode.eventsList0x8309a4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Double Jump"); }
}


{

gdjs.CongratulationsCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CongratulationsCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CongratulationsCode.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.CongratulationsCode.GDBoxPlayerObjects1[i].getVariables().get("doubleJump")) == 1 ) {
        gdjs.CongratulationsCode.condition0IsTrue_0.val = true;
        gdjs.CongratulationsCode.GDBoxPlayerObjects1[k] = gdjs.CongratulationsCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.CongratulationsCode.GDBoxPlayerObjects1.length = k;}if (gdjs.CongratulationsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.CongratulationsCode.eventsList0x75521c(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.CongratulationsCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CongratulationsCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CongratulationsCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.CongratulationsCode.condition0IsTrue_0.val = true;
        gdjs.CongratulationsCode.GDBoxPlayerObjects1[k] = gdjs.CongratulationsCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.CongratulationsCode.GDBoxPlayerObjects1.length = k;}if (gdjs.CongratulationsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CongratulationsCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.CongratulationsCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.CongratulationsCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.CongratulationsCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.CongratulationsCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.CongratulationsCode.GDBoxPlayerObjects1[i].getVariables().get("jumpCounter")).setNumber(0);
}
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Key Events"); }gdjs.CongratulationsCode.eventsList0x835784(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Key Events"); }
}


{



}


{


gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
{
{gdjs.CongratulationsCode.conditionTrue_1 = gdjs.CongratulationsCode.condition0IsTrue_0;
gdjs.CongratulationsCode.condition0IsTrue_1.val = false;
gdjs.CongratulationsCode.condition1IsTrue_1.val = false;
gdjs.CongratulationsCode.condition2IsTrue_1.val = false;
{
gdjs.CongratulationsCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.CongratulationsCode.condition0IsTrue_1.val ) {
    gdjs.CongratulationsCode.conditionTrue_1.val = true;
}
}
{
gdjs.CongratulationsCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.CongratulationsCode.condition1IsTrue_1.val ) {
    gdjs.CongratulationsCode.conditionTrue_1.val = true;
}
}
{
gdjs.CongratulationsCode.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.CongratulationsCode.condition2IsTrue_1.val ) {
    gdjs.CongratulationsCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.CongratulationsCode.condition0IsTrue_0.val) {
gdjs.CongratulationsCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
{for(var i = 0, len = gdjs.CongratulationsCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.CongratulationsCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{



}


{


gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
{
{gdjs.CongratulationsCode.conditionTrue_1 = gdjs.CongratulationsCode.condition0IsTrue_0;
gdjs.CongratulationsCode.condition0IsTrue_1.val = false;
gdjs.CongratulationsCode.condition1IsTrue_1.val = false;
{
gdjs.CongratulationsCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.CongratulationsCode.condition0IsTrue_1.val ) {
    gdjs.CongratulationsCode.conditionTrue_1.val = true;
}
}
{
gdjs.CongratulationsCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.CongratulationsCode.condition1IsTrue_1.val ) {
    gdjs.CongratulationsCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.CongratulationsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.CongratulationsCode.eventsList0x7559e4(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
{
{gdjs.CongratulationsCode.conditionTrue_1 = gdjs.CongratulationsCode.condition0IsTrue_0;
gdjs.CongratulationsCode.condition0IsTrue_1.val = false;
gdjs.CongratulationsCode.condition1IsTrue_1.val = false;
{
gdjs.CongratulationsCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.CongratulationsCode.condition0IsTrue_1.val ) {
    gdjs.CongratulationsCode.conditionTrue_1.val = true;
}
}
{
gdjs.CongratulationsCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.CongratulationsCode.condition1IsTrue_1.val ) {
    gdjs.CongratulationsCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.CongratulationsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.CongratulationsCode.eventsList0x6b2c9c(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
{
gdjs.CongratulationsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if (gdjs.CongratulationsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


{


gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
{
gdjs.CongratulationsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if (gdjs.CongratulationsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Respawn System"); }gdjs.CongratulationsCode.eventsList0x8307bc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Respawn System"); }
}


{

gdjs.CongratulationsCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CongratulationsCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CongratulationsCode.GDBoxPlayerObjects1[i].getY() > 900 ) {
        gdjs.CongratulationsCode.condition0IsTrue_0.val = true;
        gdjs.CongratulationsCode.GDBoxPlayerObjects1[k] = gdjs.CongratulationsCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.CongratulationsCode.GDBoxPlayerObjects1.length = k;}if (gdjs.CongratulationsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CongratulationsCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.CongratulationsCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.CongratulationsCode.GDBoxPlayerObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) - 50);
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


gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
{
gdjs.CongratulationsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Secs")) == gdjs.evtTools.runtimeScene.getTime(runtimeScene, "sec") + 1;
}if (gdjs.CongratulationsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{runtimeScene.getVariables().get("Secs").setNumber(0);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Wall Jump"); }gdjs.CongratulationsCode.eventsList0x6b29dc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Wall Jump"); }
}


{

gdjs.CongratulationsCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CongratulationsCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CongratulationsCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isGrabbingPlatform() ) {
        gdjs.CongratulationsCode.condition0IsTrue_0.val = true;
        gdjs.CongratulationsCode.GDBoxPlayerObjects1[k] = gdjs.CongratulationsCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.CongratulationsCode.GDBoxPlayerObjects1.length = k;}if (gdjs.CongratulationsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CongratulationsCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.CongratulationsCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.CongratulationsCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.CongratulationsCode.GDBoxPlayerObjects1[i].getVariables().get("jumpCounter")).setNumber(0);
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


gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
{
gdjs.CongratulationsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if (gdjs.CongratulationsCode.condition0IsTrue_0.val) {
{}}

}


{


gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
{
gdjs.CongratulationsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}if (gdjs.CongratulationsCode.condition0IsTrue_0.val) {
{}}

}


{


gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
{
gdjs.CongratulationsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 10;
}if (gdjs.CongratulationsCode.condition0IsTrue_0.val) {
{}}

}


{


gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
{
{gdjs.CongratulationsCode.conditionTrue_1 = gdjs.CongratulationsCode.condition0IsTrue_0;
gdjs.CongratulationsCode.condition0IsTrue_1.val = false;
gdjs.CongratulationsCode.condition1IsTrue_1.val = false;
{
gdjs.CongratulationsCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 10;
}if ( gdjs.CongratulationsCode.condition0IsTrue_1.val ) {
{
gdjs.CongratulationsCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
}}
gdjs.CongratulationsCode.conditionTrue_1.val = true && gdjs.CongratulationsCode.condition0IsTrue_1.val && gdjs.CongratulationsCode.condition1IsTrue_1.val;
}
}if (gdjs.CongratulationsCode.condition0IsTrue_0.val) {
{}}

}


{



}


{

gdjs.CongratulationsCode.GDMenuObjects1.createFrom(runtimeScene.getObjects("Menu"));

gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
{
gdjs.CongratulationsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CongratulationsCode.mapOfGDgdjs_46CongratulationsCode_46GDMenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.CongratulationsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.CongratulationsCode.eventsList0x6a4794(runtimeScene);} //End of subevents
}

}


{

gdjs.CongratulationsCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CongratulationsCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CongratulationsCode.GDBoxPlayerObjects1[i].getY() <= 10 ) {
        gdjs.CongratulationsCode.condition0IsTrue_0.val = true;
        gdjs.CongratulationsCode.GDBoxPlayerObjects1[k] = gdjs.CongratulationsCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.CongratulationsCode.GDBoxPlayerObjects1.length = k;}if (gdjs.CongratulationsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, -(20), "", 0);
}}

}


{

gdjs.CongratulationsCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
{
{gdjs.CongratulationsCode.conditionTrue_1 = gdjs.CongratulationsCode.condition0IsTrue_0;
gdjs.CongratulationsCode.condition0IsTrue_1.val = false;
gdjs.CongratulationsCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.CongratulationsCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CongratulationsCode.GDBoxPlayerObjects1[i].getY() > 10 ) {
        gdjs.CongratulationsCode.condition0IsTrue_1.val = true;
        gdjs.CongratulationsCode.GDBoxPlayerObjects1[k] = gdjs.CongratulationsCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.CongratulationsCode.GDBoxPlayerObjects1.length = k;}if ( gdjs.CongratulationsCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.CongratulationsCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CongratulationsCode.GDBoxPlayerObjects1[i].getY() <= 540 ) {
        gdjs.CongratulationsCode.condition1IsTrue_1.val = true;
        gdjs.CongratulationsCode.GDBoxPlayerObjects1[k] = gdjs.CongratulationsCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.CongratulationsCode.GDBoxPlayerObjects1.length = k;}}
gdjs.CongratulationsCode.conditionTrue_1.val = true && gdjs.CongratulationsCode.condition0IsTrue_1.val && gdjs.CongratulationsCode.condition1IsTrue_1.val;
}
}if (gdjs.CongratulationsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.window.getCanvasHeight(runtimeScene) / 2, "", 0);
}}

}


{

gdjs.CongratulationsCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.CongratulationsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CongratulationsCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CongratulationsCode.GDBoxPlayerObjects1[i].getY() > 540 ) {
        gdjs.CongratulationsCode.condition0IsTrue_0.val = true;
        gdjs.CongratulationsCode.GDBoxPlayerObjects1[k] = gdjs.CongratulationsCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.CongratulationsCode.GDBoxPlayerObjects1.length = k;}if (gdjs.CongratulationsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (20), "", 0);
}}

}


}; //End of gdjs.CongratulationsCode.eventsList0xb5aa0


gdjs.CongratulationsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CongratulationsCode.GDBoxPlayerObjects1.length = 0;
gdjs.CongratulationsCode.GDBoxPlayerObjects2.length = 0;
gdjs.CongratulationsCode.GDGreenXPlatformObjects1.length = 0;
gdjs.CongratulationsCode.GDGreenXPlatformObjects2.length = 0;
gdjs.CongratulationsCode.GDThankYouObjects1.length = 0;
gdjs.CongratulationsCode.GDThankYouObjects2.length = 0;
gdjs.CongratulationsCode.GDMenuObjects1.length = 0;
gdjs.CongratulationsCode.GDMenuObjects2.length = 0;
gdjs.CongratulationsCode.GDCongratsObjects1.length = 0;
gdjs.CongratulationsCode.GDCongratsObjects2.length = 0;

gdjs.CongratulationsCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['CongratulationsCode'] = gdjs.CongratulationsCode;
