var SidebarMenuEffects = (function() {
	function init() {
		var container = document.getElementById( 'st-container' );
		var eventtype = Modernizr.touch ? 'touchstart' : 'click';

		document.getElementById('hamburger-nav').addEventListener( eventtype, function( ev ) {
			if (container.classList && container.classList.contains('st-menu-open')) {
				console.log('menu is open');
				//container.classList.remove('st-effect-1');
				document.getElementById( 'st-container' ).classList.remove('st-menu-open');
				return;
			}
			container.className = 'st-container'; // clear
			container.classList.add('st-effect-1');
			container.classList.add('st-menu-open');

			return;
		});

	}

	init();

})();

(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();