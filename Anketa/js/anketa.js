let adressReg = document.getElementsByName('regCheck');
let actualAdress = document.querySelector('.adress_actual');
let inputEmploy = document.querySelectorAll('.typeEmploy_type input');
let confirm = document.querySelector('.typeEmploy_notConfirm input');
let confirmLabel = document.querySelector('.typeEmploy_notConfirm label');
let phone = document.querySelectorAll('.phonee');

for(let i=0; i<phone.length;i++){
	phone[i].addEventListener('keypress', e => {
	  // Отменяем ввод не цифр
	  if(!/\d/.test(e.key))
	    e.preventDefault();
	});
}

setTimeout(function test(){
	console.log(document.querySelector('.typeEmploy_profit input').value);
}, 2000)
function start(){
	adressReg[0].checked = true;
	actualAdress.style.display = 'none';
	inputEmploy[0].checked = true;
	confirmLabel.style.opacity = '0.5';
}
start();

function employ(){
	document.querySelector('.typeEmploy_sphere').classList.add('notvisible');
	document.querySelector('.typeEmploy_phoneCo').classList.add('notvisible');
	document.querySelector('.typeEmploy_share').classList.add('notvisible');
}
employ();

confirm.addEventListener('click',function(){
	if(confirm.checked == false){
		confirmLabel.style.opacity = '0.5';
	}else{
		confirmLabel.style.opacity = '1';
	}
});

adressReg[0].addEventListener('click',function(){
	if(adressReg[0].checked == false){
		actualAdress.style.display = 'block';
	}else{
		actualAdress.style.display = 'none';
	}
});

for(let i=0; i<inputEmploy.length;i++){
	inputEmploy[i].addEventListener('click',function(){
		if(i == 0){
			document.querySelector('.typeEmploy_sphere').classList.add('notvisible');
			document.querySelector('.typeEmploy_notConfirm').classList.remove('notvisible');
			document.querySelector('.typeEmploy_phone').classList.remove('notvisible');
			document.querySelector('.typeEmploy_phoneCo').classList.add('notvisible');
			document.querySelector('.typeEmploy_direct').classList.remove('notvisible');
			document.querySelector('.typeEmploy_addWork').classList.remove('notvisible');
			document.querySelector('.typeEmploy_site').classList.remove('notvisible');
			document.querySelector('.typeEmploy_share').classList.add('notvisible');
		}
		else if(i == 1){
			document.querySelector('.typeEmploy_sphere').classList.remove('notvisible');
			document.querySelector('.typeEmploy_notConfirm').classList.add('notvisible');
			document.querySelector('.typeEmploy_phone').classList.add('notvisible');
			document.querySelector('.typeEmploy_phoneCo').classList.remove('notvisible');
			document.querySelector('.typeEmploy_direct').classList.add('notvisible');
			document.querySelector('.typeEmploy_addWork').classList.add('notvisible');
			document.querySelector('.typeEmploy_site').classList.add('notvisible');
		}else{
			document.querySelector('.typeEmploy_sphere').classList.remove('notvisible');
			document.querySelector('.typeEmploy_notConfirm').classList.add('notvisible');
			document.querySelector('.typeEmploy_phone').classList.add('notvisible');
			document.querySelector('.typeEmploy_phoneCo').classList.remove('notvisible');
			document.querySelector('.typeEmploy_direct').classList.add('notvisible');
			document.querySelector('.typeEmploy_addWork').classList.remove('notvisible');
			document.querySelector('.typeEmploy_site').classList.add('notvisible');
			document.querySelector('.typeEmploy_share').classList.remove('notvisible');
		};
	});
}