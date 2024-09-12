document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('visible');

    document.querySelectorAll('a[href]').forEach(function(link) {
        link.addEventListener('click', function(event) {
            if (this.href.includes(window.location.hostname)) {
                event.preventDefault();
                const href = this.href;

                document.body.classList.remove('visible');
                document.body.classList.add('hidden');

                setTimeout(function() {
                    window.location.href = href;
                }, 500);
            }
        });
    });
});
