const data = ['Mon Premier', 'Mon Deuxième', 'Mon Troisième', 'Mon Quatrième'];

		// Fonction pour générer dynamiquement les éléments HTML
		function generateElements(container, items) {
			container.innerHTML = '';
			items.forEach(item => {
				const p = document.createElement('p');
				p.textContent = item;
				p.addEventListener('mouseover', function() {
					p.classList.add('selected');
				});
				p.addEventListener('mouseout', function() {
					p.classList.remove('selected');
				});
				container.appendChild(p);
			});
		}

		// Générer les éléments dans la div gauche au chargement de la page
		const leftContainer = document.getElementById('left-container');
		generateElements(leftContainer, data);

		// Bouton >>
		const moveRightBtn = document.getElementById('move-right');
		moveRightBtn.addEventListener('click', function() {
			const selectedElement = document.querySelector('.selected');
			if (selectedElement) {
				const rightContainer = document.getElementById('right-container');
				rightContainer.appendChild(selectedElement);
				moveRightBtn.classList.add('disabled');
				moveLeftBtn.classList.remove('disabled');
			}
		});

		// Bouton <<
		const moveLeftBtn = document.getElementById('move-left');
		moveLeftBtn.addEventListener('click', function() {
			const selectedElement = document.querySelector('.selected');
			if (selectedElement) {
				const leftContainer = document.getElementById('left-container');
				leftContainer.appendChild(selectedElement);
				moveLeftBtn.classList.add('disabled');
				moveRightBtn.classList.remove('disabled');
			}
		});