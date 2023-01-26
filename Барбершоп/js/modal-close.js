var map = document.querySelector(".modal-map");
			var closeMap = document.querySelector(".modal-close");

			map.addEventListener('click', function (evt) {
				evt.preventDefault();
				map.classList.add("modal-map");
			});

			closeMap.addEventListener('click', function (evt) {
				evt.preventDefault();
				closeMap.classList.remove("modal-show");
			});