angular.module('musicApp')
  .factory('voice', [function () {
    
    var voice = {
      initialize: initialize
    };

    return voice
    
    function initialize () {
      if (annyang) {
        var commands = {
          'search *query': function search (query) {
            vm.voiceSearch(query);
          },
          'start': function start () {
            vm.voiceStart();
          },
          'play': function play () {
            vm.voicePlay();
          },        
          'stop': function pause() {
            vm.voicePause();
          },
          ':nomatch': function none (message) {
            console.log('no recognized command')
            return
          }
        };
        annyang.addCommands(commands);
        // annyang.start();
      }  
    }
  
}])