/* Init function is the function called on the load of the page all other functions
 which need o be called on load will be placed here */

 var ns4 = (document.layers)? true:false
 var ie4 = (document.all)? true:false
 
 function init() {
         //Set the out/in time comobos
          setSelectedCmb(document.forms[0].OutTime,'07:00')
          setSelectedCmb(document.forms[0].InTime,'07:00')
         //Set the AGE COMBO
          setSelectedCmb(document.forms[0].age,'')
 }
 
 //this functon makes the combo get selected with the value passed
 function setSelectedCmb(cmbobj,selectedval){
     for(i=0;i<cmbobj.options.length;i++)
     if(cmbobj.options[i].value==selectedval)
     cmbobj.options[i].selected=true;
 
     return true;
 }
 
 
 function enableFlight()
  {
  with (document.forms[0])
     {
      if(AirLine_Code.value != '')
         FlightNo.disabled=false;
      else
      {
         FlightNo.disabled=true;
         FlightNo.style.background="ffffff";
         FlightNo.value='';
      }				
     }
  }
 
 
 function check_submit_query()
     {
         var odate =	document.forms[0].OutDate.value;
         var otime=	document.forms[0].OutTime.value;
 
         var date1 = prepareDateobj(odate,otime);
 
         var idate =	document.forms[0].InDate.value;
         var itime =	document.forms[0].InTime.value;
 
         var date2 = prepareDateobj(idate,itime);
 
         var posAt=document.forms[0].email.value.indexOf('@');
         var posDot=document.forms[0].email.value.indexOf('.');
         var len=document.forms[0].email.value.length;
     
         
         if(checkCurrentDate(document.forms[0].OutDate,document.forms[0].OutTime)==false)
                                         {
                                          return false;
                                         }
         
         
 
          if(!NotEmptyField(document.forms[0].FromBranch.value))
                {
                       alert("Please select the pick-up Location");
                         document.forms[0].FromBranch.focus();
                         }
         else if(!NotEmptyField(document.forms[0].OutDate.value))
                {
                       alert("Please enter pick-up Date");
                         document.forms[0].OutDate.focus();
                      }
         else if(!NotEmptyField(document.forms[0].InDate.value))
                {
                       alert("Please enter return Date");
                         document.forms[0].OutDate.focus();
                      }
         else if(timeDifference(date2,date1,'D')<0) //&& timeDifference(date2,date1,'H')<=0 && timeDifference(date2,date1,'M')<=0
                 {
                 alert("Not a valid Period");
                 document.forms[0].InTime.focus();
                  }
                  
     else if( document.forms[0].Companyformcode.value=="107"  && compareDatesByValue(document.forms[0].MinPickupdate.value,document.forms[0].OutDate.value))
     {
     
        alert("Pick-Up Date Time can not be less than "+  document.forms[0].MinPickupdate.value +" ,Minimum of 1 days advance booking is required"  );
        document.forms[0].OutDate.focus();
         return false;
     }
 
         else if(!NotEmptyField(document.forms[0].country_id.value))
                {
                       alert("Please select Your Country of Residence");
                         document.forms[0].country_id.focus();
                      }
         else if(!NotEmptyField(document.forms[0].age.value))
                {
                       alert("Please select Your Age");
                         document.forms[0].age.focus();
                      }
     //	else if((NotEmptyField(document.forms[0].clubno.value) || NotEmptyField(document.forms[0].driver_id.value)) && (!NotEmptyField(document.forms[0].email.value))  )		
         else		if(NotEmptyField(document.forms[0].email.value) && (posAt<1 || posDot<posAt || posDot<1 || posDot==len-1))
                         {
                               alert("Please enter valid email");
                               document.forms[0].email.focus();
                            }
         else  {
 
                             if(document.forms[0].ToBranch.value=='')
                             {
                                 document.forms[0].ToBranch.value=document.forms[0].FromBranch.value;
                             }
 
                             if(NotEmptyField(document.forms[0].clubno.value) || NotEmptyField(document.forms[0].driver_id.value))
                             {
                                 var loc="/Magic94Scripts/mgrqispi94.dll?APPNAME=ResPortal&PRGNAME=CheckDriverGetCDP&ARGUMENTS=-A"+document.forms[0].driver_id.value+",-A" +document.forms[0].clubno.value+",-Aclubno,-Adriver_id,-ACDP,-A"+document.forms[0].email.value+",-A"+document.forms[0].CDP.value+"";
                                 document.all.frm_page.src=loc;
                               }
                             else
                             {
                              document.forms[0].ToBranch.disabled = false;
                             if( document.forms[0].Companyformcode.value=="107")
                             {
                                                         NewWin('/Magic94Scripts/mgrqispi94.dll?appname=ResPortal&prgName=UpdateTimeAndPlace&Arguments=-A'+document.forms[0].SessionId.value+',-A'+document.forms[0].FromBranch.value+',-A'+document.forms[0].ToBranch.value+',-A'+document.forms[0].OutDate.value+',-A'+document.forms[0].OutTime.value+',-A'+document.forms[0].InDate.value+',-A'+document.forms[0].InTime.value+',-A'+document.forms[0].CDP.value+',-A'+document.forms[0].clubno.value+',-A'+document.forms[0].country_id.value+',-A'+document.forms[0].age.value+',-A'+document.forms[0].car_class.value+',-A'+document.forms[0].DriverCode.value+',-A,-A','ShowDetails','ShowDetails','left=200,top=100,width=740,height=540,scrollbars=1,resizable=1');
                                                         NewWin('/Magic94Scripts/mgrqispi94.dll?appname=ResPortal&prgName=UpdateTimeAndPlace&Arguments=-A'+document.forms[0].SessionId.value+',-A'+document.forms[0].FromBranch.value+',-A'+document.forms[0].ToBranch.value+',-A'+document.forms[0].OutDate.value+',-A'+document.forms[0].OutTime.value+',-A'+document.forms[0].InDate.value+',-A'+document.forms[0].InTime.value+',-A'+document.forms[0].CDP.value+',-A'+document.forms[0].clubno.value+',-A'+document.forms[0].country_id.value+',-A'+document.forms[0].age.value+',-A,-A'+document.forms[0].DriverCode.value+',-A,-A','ShowDetails','ShowDetails','left=200,top=100,width=740,height=540,scrollbars=1,resizable=1');
                             }
 
                              else
                                 document.forms[0].submit();
                                 
                                 //
                                 //window.Open('/Magic94Scripts/mgrqispi94.dll?appname=ResPortal&prgName=UpdateTimeAndPlace','ShowDetails','left=200,top=100,width=740,height=540,scrollbars=1,resizable=1');
                             }
                 }
     }
 
 function BranchDetails_win(obj)
 {
  if(obj.value == "")
  {
      alert('Please select the branch');
     obj.focus();
     }
  else
  {
      NewWin('/Magic94Scripts/mgrqispi94.dll?appname=ResPortal&prgName=Show_Branch_Details&Arguments=-A' + obj.value  ,'ShowBranchDetails','ShowBranchDetails','left=120,top=40,width=500,height=250,scrollbars=1');
  }
 }
 
 
 function CDP_validate()
 {
     if(document.forms[0].CDP.value != '')
      {
         with(document.forms[0])
             {
             var loc="/Magic94Scripts/mgrqispi94.dll?APPNAME=ResPortal&PRGNAME=CDPValidationPortal&ARGUMENTS=-A"+CDP.value+",-A" +OutDate.value+",-ACDP";
             }
         document.all.frm_page.src=loc;
     }
 }
 
 function NewRes()
     {
         window.location.href = "/Magic94Scripts/mgrqispi94.dll?APPNAME=ResPortal&prgname=SearchVehiclePrices"
     }
 function ExistingRes()
     {
         window.location.href = "/Magic94Scripts/mgrqispi94.dll?APPNAME=ResPortal&prgname=Choose_Resrv_View_Portal"		
     }
 
 function OutDateChanged(MyObj)
     {
         if( isDate(MyObj) )
         {
             var MyOutDate = prepareDateobj(MyObj.value,'00:00:00');
             var daysgap='   1';
             document.forms[0].InDate.value = getStrDate( addDays(MyOutDate , parseInt(daysgap)+1,'0' ));
             isDate(document.forms[0].InDate);
         }		
     }
 function checkCurrentDate(date12,time12)
 {
  with(document.forms[0])
  {
  var d = new Date()
  dd=d.getDate();
  mm=d.getMonth()+1;
  yy=d.getYear();
  if(d.getMinutes()>=0 && d.getMinutes()<=9)
  {
   t='0'+d.getMinutes();
  }
  else
  {
      t=d.getMinutes();
  }
  var CurrentTime=d.getHours()+':'+t;
  
  if(compareDatesByValue(Currentdate.value,date12.value))
     {
     // alert(Currentdate.value);
     // alert(date12.value);
        alert("Pick-Up Date Time can not be less than Current Date Time");
        date12.focus();
         return false;
     }
  else if(Currentdate.value==date12.value)
     {
      //alert(CurrentTime);
      if(CurrentTime>time12.value)
      {
        alert("Pick-Up Date Time can not be less than Current Date Time");
        time12.focus();
          return false;
         }
     }
  }
 }
 function CopyToInLocation()
 {
   with(document.forms[0])
   {
    ToBranch.value = FromBranch.value 
     }
 }