document.getElementById('wish-btn').addEventListener('click', function() {
	document.getElementById('wish-message').innerHTML = 'Wishing you a lifetime of friendship, love, and happiness!';
	document.querySelector('.confetti-container').style.display = 'block';
	setTimeout(function() {
		var confettiContainer = document.querySelector('.confetti-container');
		for (var i = 0; i < 100; i++) {
			var confetti = document.createElement('div');
			confetti.className = 'confetti';
			confetti.style.left = Math.random() * window.innerWidth + 'px';
			confetti.style.animationDelay = Math.random() * 3 + 's';
			confettiContainer.appendChild(confetti);
		}
	}, 1000);
});

