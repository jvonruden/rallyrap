$(function() {

    var hooks = [{
        eventName: 'onStoryCompleted',
        action: 'raptorize',
        args: [chrome.extension.getURL('img/unicorn.png'),
                chrome.extension.getURL('audio/lalala.mp3')]
    }, {
        eventName: 'onStoryUnBlock',
        action: 'showImage',
        args: [chrome.extension.getURL('img/chewy.gif'),
                'raptorizeShowImage',
                'peek-up-fade-out 4s']
    }, {
        eventName: 'onStoryAssign',
        action: 'showImage',
        filters: {
            user: 'Mark Dreyer'
        },
        args: [chrome.extension.getURL('img/datayes.gif'),
                'raptorizeShowImage',
                'peek-up-fade-out 4s']
    }, {
        eventName: 'onStoryAssign',
        action: 'showImage',
        filters: {
            user: 'Mark Snyder'
        },
        args: [chrome.extension.getURL('img/tombstone.gif'),
                'raptorizeShowImage',
                'peek-up-fade-out 4s']
    }, {
        eventName: 'onStoryAssign',
        action: 'showImage',
        filters: {
            user: 'Jason VonRuden'
        },
        args: [chrome.extension.getURL('img/sw-me.gif'),
                'raptorizeShowImage',
                'peek-up-fade-out 4s']
    }, {
        eventName: 'onStoryBackTrack',
        action: 'showImageWithSound',
        args: [chrome.extension.getURL('img/soupNazi.gif'),
               chrome.extension.getURL('audio/noSoup.mp3'),
               'peek-down-quick 2s']
    }];

    rallyrapEventsDOM.init();
    rallyrapEvents.initHooks(hooks);
}
);
