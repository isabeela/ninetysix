    var loadButton = document.getElementById('load-more');
	var feed = new Instafeed({
    get: 'user',
    userId: 7580262878,
    accessToken: '7580262878.1677ed0.9e85d0f3de0e40f88ced087e5ecb4c00',
    target: 'instafeed',
    resolution: 'standard_resolution',
    limit: 6,
    template: '<div class="single-image"><a href="{{link}}"><img src="{{image}}" title="{{caption}}"/></a></div>',
    after: function () {
        if (!this.hasNext()) {
            loadButton.setAttribute('disabled', 'disabled');
        }
    },
});
loadButton.addEventListener('click', function () {
    feed.next();
});
feed.run();
