$(function(){$(".currentDay ").datepicker({language:"zh-CN",format:"yyyy-mm-dd",startView:"days",minViewMode:"days",todayHighlight:!0,todayBtn:!0,autoclose:!0}).on("changeDate",function(t){$(this).datepicker("hide")}),$(".currentMonth ").datepicker({language:"zh-CN",format:"yyyy-mm",startView:"months",minViewMode:"months",todayHighlight:!0,todayBtn:!0,autoclose:!0}).on("changeDate",function(t){$(this).datepicker("hide")}),$(".currentYear ").datepicker({language:"zh-CN",format:"yyyy",startView:"years",minViewMode:"years",todayHighlight:!0,todayBtn:!0,autoclose:!0}).on("changeDate",function(t){$(this).datepicker("hide")})});