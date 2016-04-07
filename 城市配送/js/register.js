function userProv(){
	var info_user = $('#corporate-register .info-user');
	var infor_error = $('#corporate-register .info-error');
	var info_success = $('#corporate-register .info-success');
	$("#cor-user").bind('focus',function(){
		info_user.css('display','block');
		infor_error.css('display','none');
		info_success.css('display','none');
		if(/[a-zA-Z0-9_]{6,20}/.test($(this).val())){
			return false;	
		}else{
			$(this).val('');
		}
	}).bind('blur',function(){
		if($(this).val()==''){
			info_user.css('display','none');
			infor_error.css('display','block');
		}else if(!/[a-zA-Z0-9_]{6,20}/.test($(this).val())){
			info_user.css('display','none');
			infor_error.css('display','block');
		}else{
			infor_error.css('display','none');
			info_user.css('display','none');
			info_success.css('display','block');
			$(this).attr("message",true);
		}
	})
	return false;
}

function passwordProv(){
	var info_password = $('#corporate-register .info-password');
	var info_pError = $('#corporate-register .info-password-error');
	var info_pSuccess = $('#corporate-register .info-password-success');
	$("#corLogin-password").bind('focus',function(){
		info_password.css('display','block');
		info_pError.css('display','none');
		info_pSuccess.css('display','none');
		if(/[a-zA-Z0-9_]{6,20}/.test($(this).val())){
			return false;
		}else{
			$(this).val('');
		}
	}).bind('blur',function(){
		if($(this).val()==''){
			info_password.css('display','none');
			info_pError.css('display','block');
		}else if(!/[a-zA-Z0-9_]{6,20}/.test($(this).val())){
			info_password.css('display','none');
			info_pError.css('display','block');
		}else{
			info_pError.css('display','none');
			info_password.css('display','none');
			info_pSuccess.css('display','block');
			$(this).attr("message",true);
		}
	})
	return false;
}
function rePasswordProv(){
	var info_re_password = $('#corporate-register .info-re-password');
	var info_re_pError = $('#corporate-register .info-re-password-error');
	var info_re_pSuccess = $('#corporate-register .info-re-password-success');
	$("#cor-confirm-password").bind('focus',function(){
		info_re_password.css('display','block');
		info_re_pError.css('display','none');
		info_re_pSuccess.css('display','none');
		if(/[a-zA-Z0-9_]{6,20}/.test($(this).val())){
			return false;
		}else{
			$(this).val('');
		}
	}).bind('blur',function(){
		if($(this).val()==''){
			info_re_password.css('display','none');
			info_re_pError.css('display','block');
		}else if($(this).val()!==$("#corLogin-password").val()){
			info_re_password.css('display','none');
			info_re_pError.css('display','block');
		}else{
			info_re_pError.css('display','none');
			info_re_password.css('display','none');
			info_re_pSuccess.css('display','block');
			$(this).attr("message",true);
		}
	})
	return false;
}
userProv();
passwordProv();
rePasswordProv()
function userNameProv(){
	var info_user = $('#users-register .info-user');
	var infor_error = $('#users-register .info-error');
	var info_success = $('#users-register .info-success');
	$("#user-name").bind('focus',function(){
		info_user.css('display','block');
		infor_error.css('display','none');
		info_success.css('display','none');
		if(/[a-zA-Z0-9_]{6,20}/.test($(this).val())){
			return false;	
		}else{
			$(this).val('');
		}
	}).bind('blur',function(){
		if($(this).val()==''){
			info_user.css('display','none');
			infor_error.css('display','block');
		}else if(!/[a-zA-Z0-9_]{6,20}/.test($(this).val())){
			info_user.css('display','none');
			infor_error.css('display','block');
		}else{
			infor_error.css('display','none');
			info_user.css('display','none');
			info_success.css('display','block');
			$(this).attr("message",true);
		}
	})
	return false;
}

function passwordLoginProv(){
	var info_password = $('#users-register .info-password');
	var info_pError = $('#users-register .info-password-error');
	var info_pSuccess = $('#users-register .info-password-success');
	$("#Login-password").bind('focus',function(){
		info_password.css('display','block');
		info_pError.css('display','none');
		info_pSuccess.css('display','none');
		if(/[a-zA-Z0-9_]{6,20}/.test($(this).val())){
			return false;
		}else{
			$(this).val('');
		}
	}).bind('blur',function(){
		if($(this).val()==''){
			info_password.css('display','none');
			info_pError.css('display','block');
		}else if(!/[a-zA-Z0-9_]{6,20}/.test($(this).val())){
			info_password.css('display','none');
			info_pError.css('display','block');
		}else{
			info_pError.css('display','none');
			info_password.css('display','none');
			info_pSuccess.css('display','block');
			$(this).attr("message",true);
		}
	})
	return false;
}
function rePasswordLoginProv(){
	var info_re_password = $('#users-register .info-re-password');
	var info_re_pError = $('#users-register .info-re-password-error');
	var info_re_pSuccess = $('#users-register .info-re-password-success');
	$("#confirm-password").bind('focus',function(){
		info_re_password.css('display','block');
		info_re_pError.css('display','none');
		info_re_pSuccess.css('display','none');
		if(/[a-zA-Z0-9_]{6,20}/.test($(this).val())){
			return false;
		}else{
			$(this).val('');
		}
	}).bind('blur',function(){
		if($(this).val()==''){
			info_re_password.css('display','none');
			info_re_pError.css('display','block');
		}else if($(this).val()!==$("#Login-password").val()){
			info_re_password.css('display','none');
			info_re_pError.css('display','block');
		}else{
			info_re_pError.css('display','none');
			info_re_password.css('display','none');
			info_re_pSuccess.css('display','block');
			$(this).attr("message",true);
		}
	})
	return false;
}
function telProv(){
	var info_tel_Error = $('#users-register .info-tel-error');
	var info_tel_Success = $('#users-register .info-tel-success');
	$("#telephone-number").bind('focus',function(){
		info_tel_Error.css('display','none');
		info_tel_Success.css('display','none');
		if(/^1[3|4|5|7|8][0-9]\d{8}$/.test($(this).val())){
			return false;
		}else{
			$(this).val('');
		}
	}).bind('blur',function(){
		if($(this).val()==''){
			info_tel_Error.css('display','inline-block');
		}else if(!/^1[3|4|5|7|8][0-9]\d{8}$/.test($(this).val())){
			info_tel_Error.css('display','inline-block');
		}else{
			info_tel_Error.css('display','none');
			info_tel_Success.css('display','inline-block');
			$(this).attr("message",true);
		}
	})
	return false;
}
userNameProv();
passwordLoginProv();
rePasswordLoginProv();
telProv();

function submitValidation(personages,requisites){
	var personage = personages;
	personage.onclick = function(){
		var requisite = requisites;
		for (var i = 0; i < requisite.length; i++) {
			if(requisite[i].value==''){
				alert('必填项不能为空');
				return false;
			}else if(requisite[i].getAttribute("message") != 'true'){
				alert('填写错误');
				return false;
			}
		}
		personage.submit();
	}
} 
function userSubmit(){
	var _personage = document.getElementById("personage-submit");
	var _requisite = document.getElementsByClassName("requisite");
	submitValidation(_personage,_requisite);
}
function companySubmit(){
	var _company = document.getElementById("company-submit");
	var _cor_requisite = document.getElementsByClassName("cor-requisite");
	submitValidation(_company,_cor_requisite);
}
userSubmit();
companySubmit();
