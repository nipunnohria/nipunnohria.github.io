var result1,result2;
function spi(){
    var mth1option = document.getElementById("MTH111");
    var mth2option = document.getElementById("MTH112");
    var phyoption = document.getElementById("PHY");
    var chm2option = document.getElementById("CHM112");
    var chm3option = document.getElementById("CHM113");
    var phylaboption = document.getElementById("PHY111");
    var taoption = document.getElementById("TA");
    var elcoption = document.getElementById("ELC");

    var  a1,a2,a3,a4,a5,a6,a7,a8;
    if (mth1option.options[mth1option.selectedIndex].value==="A*"){a1=10;}
     if (mth1option.options[mth1option.selectedIndex].value==="A"){a1=10;}
     if (mth1option.options[mth1option.selectedIndex].value==="B+"){a1=9;}
     if (mth1option.options[mth1option.selectedIndex].value==="B"){a1=8;}
     if (mth1option.options[mth1option.selectedIndex].value==="C+"){a1=7;}
     if (mth1option.options[mth1option.selectedIndex].value==="C"){a1=6;}
     if (mth1option.options[mth1option.selectedIndex].value==="D+"){a1=5;}
    else if (mth1option.options[mth1option.selectedIndex].value==="D"){a1=4;}

    if (mth2option.options[mth2option.selectedIndex].value==="A*"){a2=10;}
     if (mth2option.options[mth2option.selectedIndex].value==="A"){a2=10;}
     if (mth2option.options[mth2option.selectedIndex].value==="B+"){a2=9;}
     if (mth2option.options[mth2option.selectedIndex].value==="B"){a2=8;}
     if (mth2option.options[mth2option.selectedIndex].value==="C+"){a2=7;}
     if (mth2option.options[mth2option.selectedIndex].value==="C"){a2=6;}
     if (mth2option.options[mth2option.selectedIndex].value==="D+"){a2=5;}
    else if (mth2option.options[mth2option.selectedIndex].value==="D"){a2=4;}

    if (phyoption.options[phyoption.selectedIndex].value==="A*"){a3=10;}
     if (phyoption.options[phyoption.selectedIndex].value==="A"){a3=10;}
     if (phyoption.options[phyoption.selectedIndex].value==="B+"){a3=9;}
     if (phyoption.options[phyoption.selectedIndex].value==="B"){a3=8;}
     if (phyoption.options[phyoption.selectedIndex].value==="C+"){a3=7;}
     if (phyoption.options[phyoption.selectedIndex].value==="C"){a3=6;}
     if (phyoption.options[phyoption.selectedIndex].value==="D+"){a3=5;}
    else if (phyoption.options[phyoption.selectedIndex].value==="D"){a3=4;}

    if (chm2option.options[chm2option.selectedIndex].value==="A*"){a4=10;}
     if (chm2option.options[chm2option.selectedIndex].value==="A"){a4=10;}
     if (chm2option.options[chm2option.selectedIndex].value==="B+"){a4=9;}
     if (chm2option.options[chm2option.selectedIndex].value==="B"){a4=8;}
     if (chm2option.options[chm2option.selectedIndex].value==="C+"){a4=7;}
     if (chm2option.options[chm2option.selectedIndex].value==="C"){a4=6;}
     if (chm2option.options[chm2option.selectedIndex].value==="D+"){a4=5;}
    else if (chm2option.options[chm2option.selectedIndex].value==="D"){a4=4;}

    if (chm3option.options[chm3option.selectedIndex].value==="A*"){a5=10;}
     if (chm3option.options[chm3option.selectedIndex].value==="A"){a5=10;}
     if (chm3option.options[chm3option.selectedIndex].value==="B+"){a5=9;}
     if (chm3option.options[chm3option.selectedIndex].value==="B"){a5=8;}
     if (chm3option.options[chm3option.selectedIndex].value==="C+"){a5=7;}
     if (chm3option.options[chm3option.selectedIndex].value==="C"){a5=6;}
     if (chm3option.options[chm3option.selectedIndex].value==="D+"){a5=5;}
    else if (chm3option.options[chm3option.selectedIndex].value==="D"){a5=4;}

    if (phylaboption.options[phylaboption.selectedIndex].value==="A*"){a6=10;}
     if (phylaboption.options[phylaboption.selectedIndex].value==="A"){a6=10;}
     if (phylaboption.options[phylaboption.selectedIndex].value==="B+"){a6=9;}
     if (phylaboption.options[phylaboption.selectedIndex].value==="B"){a6=8;}
     if (phylaboption.options[phylaboption.selectedIndex].value==="C+"){a6=7;}
     if (phylaboption.options[phylaboption.selectedIndex].value==="C"){a6=6;}
     if (phylaboption.options[phylaboption.selectedIndex].value==="D+"){a6=5;}
    else if (phylaboption.options[phylaboption.selectedIndex].value==="D"){a6=4;}

    if (taoption.options[taoption.selectedIndex].value==="A*"){a7=10;}
     if (taoption.options[taoption.selectedIndex].value==="A"){a7=10;}
     if (taoption.options[taoption.selectedIndex].value==="B+"){a7=9;}
     if (taoption.options[taoption.selectedIndex].value==="B"){a7=8;}
     if (taoption.options[taoption.selectedIndex].value==="C+"){a7=7;}
     if (taoption.options[taoption.selectedIndex].value==="C"){a7=6;}
     if (taoption.options[taoption.selectedIndex].value==="D+"){a7=5;}
    else if (taoption.options[taoption.selectedIndex].value==="D"){a7=4;}

    if (elcoption.options[elcoption.selectedIndex].value==="A*"){a8=10;}
    if (elcoption.options[elcoption.selectedIndex].value==="A"){a8=10;}
    if (elcoption.options[elcoption.selectedIndex].value==="B+"){a8=9;}
     if (elcoption.options[elcoption.selectedIndex].value==="B"){a8=8;}
     if (elcoption.options[elcoption.selectedIndex].value==="C+"){a8=7;}
     if (elcoption.options[elcoption.selectedIndex].value==="C"){a8=6;}
     if (elcoption.options[elcoption.selectedIndex].value==="D+"){a8=5;}
    else if (elcoption.options[elcoption.selectedIndex].value==="D"){a8=4;}
   

  


    result1=(a1*6+a2*6+a3*11+a4*4+a5*4+a6*3+a7*9+a8*9)/52;



   
    document.courses_gp1.SPI1.value=result1;

}

//.....................................................................................................

function spi2(){
    var mth3option = document.getElementById("MTH113");
    var mth4option = document.getElementById("MTH114");
    var phyxoption = document.getElementById("PHY_");
    var chmlaboption = document.getElementById("CHM111");
    var esc1option = document.getElementById("ESC111");
    var esc2option = document.getElementById("ESC112");
    var lifoption = document.getElementById("LIF");
    

    var  b1,b2,b3,b4,b5,b6,b7;
    if (mth3option.options[mth3option.selectedIndex].value==="A*"){b1=10;}
     if (mth3option.options[mth3option.selectedIndex].value==="A"){b1=10;}
     if (mth3option.options[mth3option.selectedIndex].value==="B+"){b1=9;}
     if (mth3option.options[mth3option.selectedIndex].value==="B"){b1=8;}
     if (mth3option.options[mth3option.selectedIndex].value==="C+"){b1=7;}
     if (mth3option.options[mth3option.selectedIndex].value==="C"){b1=6;}
     if (mth3option.options[mth3option.selectedIndex].value==="D+"){b1=5;}
     if (mth3option.options[mth3option.selectedIndex].value==="E"){b1=0;}
     if (mth3option.options[mth3option.selectedIndex].value==="F"){b1=0;}
     if (mth3option.options[mth3option.selectedIndex].value==="I"){b1=0;}
    else if (mth3option.options[mth3option.selectedIndex].value==="D"){b1=4;}
    
    

    if (mth4option.options[mth4option.selectedIndex].value==="A*"){b2=10;}
     if (mth4option.options[mth4option.selectedIndex].value==="A"){b2=10;}
     if (mth4option.options[mth4option.selectedIndex].value==="B+"){b2=9;}
     if (mth4option.options[mth4option.selectedIndex].value==="B"){b2=8;}
     if (mth4option.options[mth4option.selectedIndex].value==="C+"){b2=7;}
     if (mth4option.options[mth4option.selectedIndex].value==="C"){b2=6;}
     if (mth4option.options[mth4option.selectedIndex].value==="D+"){b2=5;}
     if (mth4option.options[mth4option.selectedIndex].value==="E"){b2=0;}
     if (mth4option.options[mth4option.selectedIndex].value==="F"){b2=0;}
     if (mth4option.options[mth4option.selectedIndex].value==="I"){b2=0;}
    else if (mth4option.options[mth4option.selectedIndex].value==="D"){b2=4;}
       

    if (phyxoption.options[phyxoption.selectedIndex].value==="A*"){b3=10;}
     if (phyxoption.options[phyxoption.selectedIndex].value==="A"){b3=10;}
     if (phyxoption.options[phyxoption.selectedIndex].value==="B+"){b3=9;}
     if (phyxoption.options[phyxoption.selectedIndex].value==="B"){b3=8;}
     if (phyxoption.options[phyxoption.selectedIndex].value==="C+"){b3=7;}
     if (phyxoption.options[phyxoption.selectedIndex].value==="C"){b3=6;}
     if (phyxoption.options[phyxoption.selectedIndex].value==="D+"){b3=5;}
     if (phyxoption.options[phyxoption.selectedIndex].value==="E"){b3=0;}
     if (phyxoption.options[phyxoption.selectedIndex].value==="F"){b3=0;}
     if (phyxoption.options[phyxoption.selectedIndex].value==="I"){b3=0;}
    else if (phyxoption.options[phyxoption.selectedIndex].value==="D"){b3=4;}
       

    if (chmlaboption.options[chmlaboption.selectedIndex].value==="A*"){b4=10;}
     if (chmlaboption.options[chmlaboption.selectedIndex].value==="A"){b4=10;}
     if (chmlaboption.options[chmlaboption.selectedIndex].value==="B+"){b4=9;}
     if (chmlaboption.options[chmlaboption.selectedIndex].value==="B"){b4=8;}
     if (chmlaboption.options[chmlaboption.selectedIndex].value==="C+"){b4=7;}
     if (chmlaboption.options[chmlaboption.selectedIndex].value==="C"){b4=6;}
     if (chmlaboption.options[chmlaboption.selectedIndex].value==="D+"){b4=5;}
     if (chmlaboption.options[chmlaboption.selectedIndex].value==="E"){b4=0;}
     if (chmlaboption.options[chmlaboption.selectedIndex].value==="F"){b4=0;}
     if (chmlaboption.options[chmlaboption.selectedIndex].value==="I"){b4=0;}
    else if (chmlaboption.options[chmlaboption.selectedIndex].value==="D"){b4=4;}
       

    if (esc1option.options[esc1option.selectedIndex].value==="A*"){b5=10;}
     if (esc1option.options[esc1option.selectedIndex].value==="A"){b5=10;}
     if (esc1option.options[esc1option.selectedIndex].value==="B+"){b5=9;}
     if (esc1option.options[esc1option.selectedIndex].value==="B"){b5=8;}
     if (esc1option.options[esc1option.selectedIndex].value==="C+"){b5=7;}
     if (esc1option.options[esc1option.selectedIndex].value==="C"){b5=6;}
     if (esc1option.options[esc1option.selectedIndex].value==="D+"){b5=5;}
     if (esc1option.options[esc1option.selectedIndex].value==="E"){b5=0;}
     if (esc1option.options[esc1option.selectedIndex].value==="F"){b5=0;}
     if (esc1option.options[esc1option.selectedIndex].value==="I"){b5=0;}
    else if (esc1option.options[esc1option.selectedIndex].value==="D"){b5=4;}
       

    if (esc2option.options[esc2option.selectedIndex].value==="A*"){b6=10;}
     if (esc2option.options[esc2option.selectedIndex].value==="A"){b6=10;}
     if (esc2option.options[esc2option.selectedIndex].value==="B+"){b6=9;}
     if (esc2option.options[esc2option.selectedIndex].value==="B"){b6=8;}
     if (esc2option.options[esc2option.selectedIndex].value==="C+"){b6=7;}
     if (esc2option.options[esc2option.selectedIndex].value==="C"){b6=6;}
     if (esc2option.options[esc2option.selectedIndex].value==="D+"){b6=5;}
     if (esc2option.options[esc2option.selectedIndex].value==="E"){b6=0;}
     if (esc2option.options[esc2option.selectedIndex].value==="F"){b6=0;}
     if (esc2option.options[esc2option.selectedIndex].value==="I"){b6=0;}
    else if (esc2option.options[esc2option.selectedIndex].value==="D"){b6=4;}
       
        
        if (lifoption.options[lifoption.selectedIndex].value==="A*"){b7=10;}
     if (lifoption.options[lifoption.selectedIndex].value==="A"){b7=10;}
     if (lifoption.options[lifoption.selectedIndex].value==="B+"){b7=9;}
     if (lifoption.options[lifoption.selectedIndex].value==="B"){b7=8;}
     if (lifoption.options[lifoption.selectedIndex].value==="C+"){b7=7;}
     if (lifoption.options[lifoption.selectedIndex].value==="C"){b7=6;}
     if (lifoption.options[lifoption.selectedIndex].value==="D+"){b7=5;}
     if (lifoption.options[lifoption.selectedIndex].value==="E"){b7=0;}
     if (lifoption.options[lifoption.selectedIndex].value==="F"){b7=0;}
     if (lifoption.options[lifoption.selectedIndex].value==="I"){b7=0;}
    else if (lifoption.options[lifoption.selectedIndex].value==="D"){b7=4;}
      
  


    result2=(b1*6+b2*6+b3*11+b4*3+b5*7+b6*7+b7*6)/46;



   
    document.courses_gp1_.SPI2.value=result2;

}



function cpi(){
    var cpi__;
    cpi__= (result1*52+result2*46)/98;
    
    document.cpisem.CPI.value=cpi__;

}