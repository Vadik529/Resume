var link = document.querySelector(".login-link");
			var popup = document.querySelector(".modal");
			var close = document.querySelector(".modal-close");
			var login = popup.querySelector("[name=login]");
			var form = document.querySelector("form");
			var storage = localStorage.getItem("login");
			var password = popup.querySelector("[name=password]");
			

			link.addEventListener('click', function (evt) {
			evt.preventDefault();
			popup.classList.add("modal-show");
			if (storage) {
				login.value = storage;
				password.focus();  
			} else 
				login.focus();
			});

			window.addEventListener('keydown', function (evt) {
				if (evt.keyCode === 27) {
					if (popup.classList.contains('modal-show')) {
						evt.preventDefault();
						popup.classList.remove('modal-show')
					}
			}
			})
			
			close.addEventListener('click', function (evt) {
			evt.preventDefault();
			popup.classList.remove("modal-show");	
			});

			form.addEventListener('submit', function (evt) {
				if (!login.value || !password.value) {
					evt.preventDefault();
					console.log("Нужно ввести логин и пароль");
				}
			});