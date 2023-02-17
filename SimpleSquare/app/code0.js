gdjs.MenuCode = {};
gdjs.MenuCode.GDBoxPlayerObjects1_1final = [];

gdjs.MenuCode.GDBoxPlayerObjects1= [];
gdjs.MenuCode.GDBoxPlayerObjects2= [];
gdjs.MenuCode.GDXPlatformObjects1= [];
gdjs.MenuCode.GDXPlatformObjects2= [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDCreditsObjects1= [];
gdjs.MenuCode.GDCreditsObjects2= [];
gdjs.MenuCode.GDExitObjects1= [];
gdjs.MenuCode.GDExitObjects2= [];
gdjs.MenuCode.GDExitGoalObjects1= [];
gdjs.MenuCode.GDExitGoalObjects2= [];
gdjs.MenuCode.GDTeleporterObjects1= [];
gdjs.MenuCode.GDTeleporterObjects2= [];
gdjs.MenuCode.GDTeleporter1Objects1= [];
gdjs.MenuCode.GDTeleporter1Objects2= [];
gdjs.MenuCode.GDTeleporter2Objects1= [];
gdjs.MenuCode.GDTeleporter2Objects2= [];
gdjs.MenuCode.GDStage1Objects1= [];
gdjs.MenuCode.GDStage1Objects2= [];
gdjs.MenuCode.GDGreenGoal1Objects1= [];
gdjs.MenuCode.GDGreenGoal1Objects2= [];
gdjs.MenuCode.GDStage2Objects1= [];
gdjs.MenuCode.GDStage2Objects2= [];
gdjs.MenuCode.GDDarkGoal1Objects1= [];
gdjs.MenuCode.GDDarkGoal1Objects2= [];
gdjs.MenuCode.GDStage3Objects1= [];
gdjs.MenuCode.GDStage3Objects2= [];
gdjs.MenuCode.GDBlueGoal1Objects1= [];
gdjs.MenuCode.GDBlueGoal1Objects2= [];
gdjs.MenuCode.GDStage4Objects1= [];
gdjs.MenuCode.GDStage4Objects2= [];
gdjs.MenuCode.GDOrangeGoal1Objects1= [];
gdjs.MenuCode.GDOrangeGoal1Objects2= [];
gdjs.MenuCode.GDStage5Objects1= [];
gdjs.MenuCode.GDStage5Objects2= [];
gdjs.MenuCode.GDPinkGoal1Objects1= [];
gdjs.MenuCode.GDPinkGoal1Objects2= [];
gdjs.MenuCode.GDStage6Objects1= [];
gdjs.MenuCode.GDStage6Objects2= [];
gdjs.MenuCode.GDPurpleGoal1Objects1= [];
gdjs.MenuCode.GDPurpleGoal1Objects2= [];
gdjs.MenuCode.GDStage7Objects1= [];
gdjs.MenuCode.GDStage7Objects2= [];
gdjs.MenuCode.GDDarkGoal2Objects1= [];
gdjs.MenuCode.GDDarkGoal2Objects2= [];
gdjs.MenuCode.GDStage8Objects1= [];
gdjs.MenuCode.GDStage8Objects2= [];
gdjs.MenuCode.GDDarkGoal3Objects1= [];
gdjs.MenuCode.GDDarkGoal3Objects2= [];
gdjs.MenuCode.GDStage9Objects1= [];
gdjs.MenuCode.GDStage9Objects2= [];
gdjs.MenuCode.GDDarkGoal4Objects1= [];
gdjs.MenuCode.GDDarkGoal4Objects2= [];
gdjs.MenuCode.GDStage10Objects1= [];
gdjs.MenuCode.GDStage10Objects2= [];
gdjs.MenuCode.GDDarkGoal5Objects1= [];
gdjs.MenuCode.GDDarkGoal5Objects2= [];
gdjs.MenuCode.GDCopyrightObjects1= [];
gdjs.MenuCode.GDCopyrightObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.condition3IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};
gdjs.MenuCode.condition3IsTrue_1 = {val:false};


gdjs.MenuCode.eventsList0x7d2a44 = function(runtimeScene) {

}; //End of gdjs.MenuCode.eventsList0x7d2a44
gdjs.MenuCode.eventsList0x6a41d4 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6964900);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).add(1);
}}

}


}; //End of gdjs.MenuCode.eventsList0x6a41d4
gdjs.MenuCode.eventsList0x7d2c7c = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
gdjs.MenuCode.condition2IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.MenuCode.condition0IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.MenuCode.condition1IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.MenuCode.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.MenuCode.condition2IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6964244);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.MenuCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).add(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x6a41d4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuCode.eventsList0x7d2c7c
gdjs.MenuCode.eventsList0x7d2b44 = function(runtimeScene) {

{

/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.GDBoxPlayerObjects1_1final.length = 0;gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.GDBoxPlayerObjects2.createFrom(gdjs.MenuCode.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.MenuCode.condition0IsTrue_1.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects2[k] = gdjs.MenuCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects2.length = k;if( gdjs.MenuCode.condition0IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MenuCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.MenuCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.MenuCode.GDBoxPlayerObjects1_1final.push(gdjs.MenuCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.MenuCode.GDBoxPlayerObjects2.createFrom(gdjs.MenuCode.GDBoxPlayerObjects1);

for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.MenuCode.condition1IsTrue_1.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects2[k] = gdjs.MenuCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects2.length = k;if( gdjs.MenuCode.condition1IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MenuCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.MenuCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.MenuCode.GDBoxPlayerObjects1_1final.push(gdjs.MenuCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(gdjs.MenuCode.GDBoxPlayerObjects1_1final);
}
}
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)) < 2 ) {
        gdjs.MenuCode.condition1IsTrue_0.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0x7d2c7c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuCode.eventsList0x7d2b44
gdjs.MenuCode.eventsList0x6a4c74 = function(runtimeScene) {

}; //End of gdjs.MenuCode.eventsList0x6a4c74
gdjs.MenuCode.eventsList0x891c9c = function(runtimeScene) {

{

gdjs.MenuCode.GDBoxPlayerObjects1.length = 0;


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.GDBoxPlayerObjects1_1final.length = 0;gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.MenuCode.condition0IsTrue_1.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects2[k] = gdjs.MenuCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects2.length = k;if( gdjs.MenuCode.condition0IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MenuCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.MenuCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.MenuCode.GDBoxPlayerObjects1_1final.push(gdjs.MenuCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.MenuCode.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.MenuCode.condition1IsTrue_1.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects2[k] = gdjs.MenuCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects2.length = k;if( gdjs.MenuCode.condition1IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MenuCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.MenuCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.MenuCode.GDBoxPlayerObjects1_1final.push(gdjs.MenuCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(gdjs.MenuCode.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


}; //End of gdjs.MenuCode.eventsList0x891c9c
gdjs.MenuCode.eventsList0x892324 = function(runtimeScene) {

{

gdjs.MenuCode.GDBoxPlayerObjects1.length = 0;


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.GDBoxPlayerObjects1_1final.length = 0;gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.MenuCode.condition0IsTrue_1.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects2[k] = gdjs.MenuCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects2.length = k;if( gdjs.MenuCode.condition0IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MenuCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.MenuCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.MenuCode.GDBoxPlayerObjects1_1final.push(gdjs.MenuCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.MenuCode.GDBoxPlayerObjects2.createFrom(runtimeScene.getObjects("BoxPlayer"));
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.MenuCode.condition1IsTrue_1.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects2[k] = gdjs.MenuCode.GDBoxPlayerObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects2.length = k;if( gdjs.MenuCode.condition1IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MenuCode.GDBoxPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDBoxPlayerObjects1_1final.indexOf(gdjs.MenuCode.GDBoxPlayerObjects2[j]) === -1 )
            gdjs.MenuCode.GDBoxPlayerObjects1_1final.push(gdjs.MenuCode.GDBoxPlayerObjects2[j]);
    }
}
}
{
gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(gdjs.MenuCode.GDBoxPlayerObjects1_1final);
}
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


}; //End of gdjs.MenuCode.eventsList0x892324
gdjs.MenuCode.eventsList0x6bf72c = function(runtimeScene) {

}; //End of gdjs.MenuCode.eventsList0x6bf72c
gdjs.MenuCode.eventsList0x8a0b74 = function(runtimeScene) {

}; //End of gdjs.MenuCode.eventsList0x8a0b74
gdjs.MenuCode.eventsList0x7a9ee4 = function(runtimeScene) {

}; //End of gdjs.MenuCode.eventsList0x7a9ee4
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDTeleporterObjects1Objects = Hashtable.newFrom({"Teleporter": gdjs.MenuCode.GDTeleporterObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDTeleporter1Objects1Objects = Hashtable.newFrom({"Teleporter1": gdjs.MenuCode.GDTeleporter1Objects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDTeleporterObjects1Objects = Hashtable.newFrom({"Teleporter": gdjs.MenuCode.GDTeleporterObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDTeleporter2Objects1Objects = Hashtable.newFrom({"Teleporter2": gdjs.MenuCode.GDTeleporter2Objects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.MenuCode.GDBoxPlayerObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDTeleporter1Objects1Objects = Hashtable.newFrom({"Teleporter1": gdjs.MenuCode.GDTeleporter1Objects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.MenuCode.GDBoxPlayerObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDTeleporter2Objects1Objects = Hashtable.newFrom({"Teleporter2": gdjs.MenuCode.GDTeleporter2Objects1});gdjs.MenuCode.eventsList0x864dd4 = function(runtimeScene) {

}; //End of gdjs.MenuCode.eventsList0x864dd4
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.MenuCode.GDBoxPlayerObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDExitGoalObjects1Objects = Hashtable.newFrom({"ExitGoal": gdjs.MenuCode.GDExitGoalObjects1});gdjs.MenuCode.eventsList0x864ebc = function(runtimeScene) {

{

/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)) == 50 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.MenuCode.eventsList0x864ebc
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.MenuCode.GDBoxPlayerObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDGreenGoal1Objects1Objects = Hashtable.newFrom({"GreenGoal1": gdjs.MenuCode.GDGreenGoal1Objects1});gdjs.MenuCode.eventsList0x8652ac = function(runtimeScene) {

{

/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)) == 50 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FirstScene", true);
}}

}


}; //End of gdjs.MenuCode.eventsList0x8652ac
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.MenuCode.GDBoxPlayerObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDDarkGoal1Objects1Objects = Hashtable.newFrom({"DarkGoal1": gdjs.MenuCode.GDDarkGoal1Objects1});gdjs.MenuCode.eventsList0x835694 = function(runtimeScene) {

{

/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)) == 50 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dark1", true);
}}

}


}; //End of gdjs.MenuCode.eventsList0x835694
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.MenuCode.GDBoxPlayerObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBlueGoal1Objects1Objects = Hashtable.newFrom({"BlueGoal1": gdjs.MenuCode.GDBlueGoal1Objects1});gdjs.MenuCode.eventsList0x835bac = function(runtimeScene) {

{

/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)) == 50 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene2", true);
}}

}


}; //End of gdjs.MenuCode.eventsList0x835bac
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.MenuCode.GDBoxPlayerObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDOrangeGoal1Objects1Objects = Hashtable.newFrom({"OrangeGoal1": gdjs.MenuCode.GDOrangeGoal1Objects1});gdjs.MenuCode.eventsList0x835fbc = function(runtimeScene) {

{

/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)) == 50 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene3", true);
}}

}


}; //End of gdjs.MenuCode.eventsList0x835fbc
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.MenuCode.GDBoxPlayerObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPinkGoal1Objects1Objects = Hashtable.newFrom({"PinkGoal1": gdjs.MenuCode.GDPinkGoal1Objects1});gdjs.MenuCode.eventsList0x7a9fe4 = function(runtimeScene) {

{

/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)) == 50 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene4", true);
}}

}


}; //End of gdjs.MenuCode.eventsList0x7a9fe4
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.MenuCode.GDBoxPlayerObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPurpleGoal1Objects1Objects = Hashtable.newFrom({"PurpleGoal1": gdjs.MenuCode.GDPurpleGoal1Objects1});gdjs.MenuCode.eventsList0x6b298c = function(runtimeScene) {

{

/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)) == 50 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene5", true);
}}

}


}; //End of gdjs.MenuCode.eventsList0x6b298c
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.MenuCode.GDBoxPlayerObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDDarkGoal2Objects1Objects = Hashtable.newFrom({"DarkGoal2": gdjs.MenuCode.GDDarkGoal2Objects1});gdjs.MenuCode.eventsList0x6b2db4 = function(runtimeScene) {

{

/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)) == 50 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dark2", true);
}}

}


}; //End of gdjs.MenuCode.eventsList0x6b2db4
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.MenuCode.GDBoxPlayerObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDDarkGoal3Objects1Objects = Hashtable.newFrom({"DarkGoal3": gdjs.MenuCode.GDDarkGoal3Objects1});gdjs.MenuCode.eventsList0x6b31c4 = function(runtimeScene) {

{

/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)) == 50 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dark3", true);
}}

}


}; //End of gdjs.MenuCode.eventsList0x6b31c4
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.MenuCode.GDBoxPlayerObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDDarkGoal4Objects1Objects = Hashtable.newFrom({"DarkGoal4": gdjs.MenuCode.GDDarkGoal4Objects1});gdjs.MenuCode.eventsList0x7d21cc = function(runtimeScene) {

{

/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)) == 50 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dark4", true);
}}

}


}; //End of gdjs.MenuCode.eventsList0x7d21cc
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects = Hashtable.newFrom({"BoxPlayer": gdjs.MenuCode.GDBoxPlayerObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDDarkGoal5Objects1Objects = Hashtable.newFrom({"DarkGoal5": gdjs.MenuCode.GDDarkGoal5Objects1});gdjs.MenuCode.eventsList0x7d25dc = function(runtimeScene) {

{

/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)) == 50 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dark5", true);
}}

}


}; //End of gdjs.MenuCode.eventsList0x7d25dc
gdjs.MenuCode.eventsList0xb5aa0 = function(runtimeScene) {

{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Double Jump"); }gdjs.MenuCode.eventsList0x7d2a44(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Double Jump"); }
}


{

gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariableNumber(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0x7d2b44(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.MenuCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Key Events"); }gdjs.MenuCode.eventsList0x6a4c74(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Key Events"); }
}


{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
gdjs.MenuCode.condition2IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.MenuCode.condition0IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.MenuCode.condition1IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.MenuCode.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.MenuCode.condition2IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
{for(var i = 0, len = gdjs.MenuCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.MenuCode.condition0IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.MenuCode.condition1IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0x891c9c(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.MenuCode.condition0IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.MenuCode.condition1IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0x892324(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Respawn System"); }gdjs.MenuCode.eventsList0x6bf72c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Respawn System"); }
}


{

gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getY() > 900 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBoxPlayerObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) - 50);
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


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Secs")) == gdjs.evtTools.runtimeScene.getTime(runtimeScene, "sec") + 1;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{runtimeScene.getVariables().get("Secs").setNumber(0);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Wall Jump"); }gdjs.MenuCode.eventsList0x8a0b74(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Wall Jump"); }
}


{

gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getBehavior("PlatformerObject").isGrabbingPlatform() ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}}

}


{

gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getX() < 0 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, -(50), "", 0);
}}

}


{

gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getX() >= 0 ) {
        gdjs.MenuCode.condition0IsTrue_1.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}if ( gdjs.MenuCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getX() < 400 ) {
        gdjs.MenuCode.condition1IsTrue_1.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}}
gdjs.MenuCode.conditionTrue_1.val = true && gdjs.MenuCode.condition0IsTrue_1.val && gdjs.MenuCode.condition1IsTrue_1.val;
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.window.getCanvasWidth(runtimeScene) / 2, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.window.getCanvasHeight(runtimeScene) / 2, "", 0);
}}

}


{

gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getX() >= 400 ) {
        gdjs.MenuCode.condition0IsTrue_1.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}if ( gdjs.MenuCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getX() < 800 ) {
        gdjs.MenuCode.condition1IsTrue_1.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}}
gdjs.MenuCode.conditionTrue_1.val = true && gdjs.MenuCode.condition0IsTrue_1.val && gdjs.MenuCode.condition1IsTrue_1.val;
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, 540, "", 0);
}}

}


{

gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getX() >= 800 ) {
        gdjs.MenuCode.condition0IsTrue_1.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}if ( gdjs.MenuCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getX() < 1200 ) {
        gdjs.MenuCode.condition1IsTrue_1.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}}
gdjs.MenuCode.conditionTrue_1.val = true && gdjs.MenuCode.condition0IsTrue_1.val && gdjs.MenuCode.condition1IsTrue_1.val;
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, 1080, "", 0);
}}

}


{

gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getX() >= 1200 ) {
        gdjs.MenuCode.condition0IsTrue_1.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}if ( gdjs.MenuCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getX() < 2000 ) {
        gdjs.MenuCode.condition1IsTrue_1.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}}
gdjs.MenuCode.conditionTrue_1.val = true && gdjs.MenuCode.condition0IsTrue_1.val && gdjs.MenuCode.condition1IsTrue_1.val;
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, 1620, "", 0);
}}

}


{

gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getX() >= 2000 ) {
        gdjs.MenuCode.condition0IsTrue_1.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}if ( gdjs.MenuCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getX() < 3200 ) {
        gdjs.MenuCode.condition1IsTrue_1.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}}
gdjs.MenuCode.conditionTrue_1.val = true && gdjs.MenuCode.condition0IsTrue_1.val && gdjs.MenuCode.condition1IsTrue_1.val;
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, 2160, "", 0);
}}

}


{

gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBoxPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBoxPlayerObjects1[i].getY() > 540 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDBoxPlayerObjects1[k] = gdjs.MenuCode.GDBoxPlayerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBoxPlayerObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (20), "", 0);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Teleporters"); }gdjs.MenuCode.eventsList0x7a9ee4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Teleporters"); }
}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "t");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8036612);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.MenuCode.GDTeleporterObjects1.length = 0;

gdjs.MenuCode.GDTeleporter1Objects1.length = 0;

gdjs.MenuCode.GDTeleporter2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDTeleporterObjects1Objects, 130, 216, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDTeleporter1Objects1Objects, 170, 268, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDTeleporterObjects1Objects, 1780, 216, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDTeleporter2Objects1Objects, 1820, 268, "");
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "t");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDTeleporterObjects1.createFrom(runtimeScene.getObjects("Teleporter"));
gdjs.MenuCode.GDTeleporter1Objects1.createFrom(runtimeScene.getObjects("Teleporter1"));
gdjs.MenuCode.GDTeleporter2Objects1.createFrom(runtimeScene.getObjects("Teleporter2"));
{for(var i = 0, len = gdjs.MenuCode.GDTeleporterObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTeleporterObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.MenuCode.GDTeleporter1Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTeleporter1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.MenuCode.GDTeleporter2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTeleporter2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
gdjs.MenuCode.GDTeleporter1Objects1.createFrom(runtimeScene.getObjects("Teleporter1"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDTeleporter1Objects1Objects, false, runtimeScene, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBoxPlayerObjects1[i].setX(2000);
}
}}

}


{

gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
gdjs.MenuCode.GDTeleporter2Objects1.createFrom(runtimeScene.getObjects("Teleporter2"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDTeleporter2Objects1Objects, false, runtimeScene, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBoxPlayerObjects1[i].setX(50);
}
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Doors"); }gdjs.MenuCode.eventsList0x864dd4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Doors"); }
}


{

gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
gdjs.MenuCode.GDExitGoalObjects1.createFrom(runtimeScene.getObjects("ExitGoal"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDExitGoalObjects1Objects, false, runtimeScene, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x864ebc(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
gdjs.MenuCode.GDGreenGoal1Objects1.createFrom(runtimeScene.getObjects("GreenGoal1"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDGreenGoal1Objects1Objects, false, runtimeScene, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x8652ac(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
gdjs.MenuCode.GDDarkGoal1Objects1.createFrom(runtimeScene.getObjects("DarkGoal1"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDDarkGoal1Objects1Objects, false, runtimeScene, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x835694(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDBlueGoal1Objects1.createFrom(runtimeScene.getObjects("BlueGoal1"));
gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBlueGoal1Objects1Objects, false, runtimeScene, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x835bac(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
gdjs.MenuCode.GDOrangeGoal1Objects1.createFrom(runtimeScene.getObjects("OrangeGoal1"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDOrangeGoal1Objects1Objects, false, runtimeScene, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x835fbc(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
gdjs.MenuCode.GDPinkGoal1Objects1.createFrom(runtimeScene.getObjects("PinkGoal1"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPinkGoal1Objects1Objects, false, runtimeScene, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x7a9fe4(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
gdjs.MenuCode.GDPurpleGoal1Objects1.createFrom(runtimeScene.getObjects("PurpleGoal1"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPurpleGoal1Objects1Objects, false, runtimeScene, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x6b298c(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
gdjs.MenuCode.GDDarkGoal2Objects1.createFrom(runtimeScene.getObjects("DarkGoal2"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDDarkGoal2Objects1Objects, false, runtimeScene, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x6b2db4(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
gdjs.MenuCode.GDDarkGoal3Objects1.createFrom(runtimeScene.getObjects("DarkGoal3"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDDarkGoal3Objects1Objects, false, runtimeScene, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x6b31c4(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
gdjs.MenuCode.GDDarkGoal4Objects1.createFrom(runtimeScene.getObjects("DarkGoal4"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDDarkGoal4Objects1Objects, false, runtimeScene, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x7d21cc(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDBoxPlayerObjects1.createFrom(runtimeScene.getObjects("BoxPlayer"));
gdjs.MenuCode.GDDarkGoal5Objects1.createFrom(runtimeScene.getObjects("DarkGoal5"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBoxPlayerObjects1Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDDarkGoal5Objects1Objects, false, runtimeScene, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDBoxPlayerObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBoxPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBoxPlayerObjects1[i].returnVariable(gdjs.MenuCode.GDBoxPlayerObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x7d25dc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuCode.eventsList0xb5aa0


gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBoxPlayerObjects1.length = 0;
gdjs.MenuCode.GDBoxPlayerObjects2.length = 0;
gdjs.MenuCode.GDXPlatformObjects1.length = 0;
gdjs.MenuCode.GDXPlatformObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDCreditsObjects1.length = 0;
gdjs.MenuCode.GDCreditsObjects2.length = 0;
gdjs.MenuCode.GDExitObjects1.length = 0;
gdjs.MenuCode.GDExitObjects2.length = 0;
gdjs.MenuCode.GDExitGoalObjects1.length = 0;
gdjs.MenuCode.GDExitGoalObjects2.length = 0;
gdjs.MenuCode.GDTeleporterObjects1.length = 0;
gdjs.MenuCode.GDTeleporterObjects2.length = 0;
gdjs.MenuCode.GDTeleporter1Objects1.length = 0;
gdjs.MenuCode.GDTeleporter1Objects2.length = 0;
gdjs.MenuCode.GDTeleporter2Objects1.length = 0;
gdjs.MenuCode.GDTeleporter2Objects2.length = 0;
gdjs.MenuCode.GDStage1Objects1.length = 0;
gdjs.MenuCode.GDStage1Objects2.length = 0;
gdjs.MenuCode.GDGreenGoal1Objects1.length = 0;
gdjs.MenuCode.GDGreenGoal1Objects2.length = 0;
gdjs.MenuCode.GDStage2Objects1.length = 0;
gdjs.MenuCode.GDStage2Objects2.length = 0;
gdjs.MenuCode.GDDarkGoal1Objects1.length = 0;
gdjs.MenuCode.GDDarkGoal1Objects2.length = 0;
gdjs.MenuCode.GDStage3Objects1.length = 0;
gdjs.MenuCode.GDStage3Objects2.length = 0;
gdjs.MenuCode.GDBlueGoal1Objects1.length = 0;
gdjs.MenuCode.GDBlueGoal1Objects2.length = 0;
gdjs.MenuCode.GDStage4Objects1.length = 0;
gdjs.MenuCode.GDStage4Objects2.length = 0;
gdjs.MenuCode.GDOrangeGoal1Objects1.length = 0;
gdjs.MenuCode.GDOrangeGoal1Objects2.length = 0;
gdjs.MenuCode.GDStage5Objects1.length = 0;
gdjs.MenuCode.GDStage5Objects2.length = 0;
gdjs.MenuCode.GDPinkGoal1Objects1.length = 0;
gdjs.MenuCode.GDPinkGoal1Objects2.length = 0;
gdjs.MenuCode.GDStage6Objects1.length = 0;
gdjs.MenuCode.GDStage6Objects2.length = 0;
gdjs.MenuCode.GDPurpleGoal1Objects1.length = 0;
gdjs.MenuCode.GDPurpleGoal1Objects2.length = 0;
gdjs.MenuCode.GDStage7Objects1.length = 0;
gdjs.MenuCode.GDStage7Objects2.length = 0;
gdjs.MenuCode.GDDarkGoal2Objects1.length = 0;
gdjs.MenuCode.GDDarkGoal2Objects2.length = 0;
gdjs.MenuCode.GDStage8Objects1.length = 0;
gdjs.MenuCode.GDStage8Objects2.length = 0;
gdjs.MenuCode.GDDarkGoal3Objects1.length = 0;
gdjs.MenuCode.GDDarkGoal3Objects2.length = 0;
gdjs.MenuCode.GDStage9Objects1.length = 0;
gdjs.MenuCode.GDStage9Objects2.length = 0;
gdjs.MenuCode.GDDarkGoal4Objects1.length = 0;
gdjs.MenuCode.GDDarkGoal4Objects2.length = 0;
gdjs.MenuCode.GDStage10Objects1.length = 0;
gdjs.MenuCode.GDStage10Objects2.length = 0;
gdjs.MenuCode.GDDarkGoal5Objects1.length = 0;
gdjs.MenuCode.GDDarkGoal5Objects2.length = 0;
gdjs.MenuCode.GDCopyrightObjects1.length = 0;
gdjs.MenuCode.GDCopyrightObjects2.length = 0;

gdjs.MenuCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['MenuCode'] = gdjs.MenuCode;
