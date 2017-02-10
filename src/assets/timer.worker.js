(function(){

  function TimerWorker() {
    onmessage = function(e) {
      console.log('Message received from main script');

      let timerService = e.data

      var timer = function() {
        var diff = timerService.duration - (((Date.now() - timerService.start) / 1000) | 0);

        if (diff > 0) {
          setTimeout(timer, timerService.granularity);
        }

        console.log('Posting message back to main script: ', diff);

        postMessage(diff);
      }

      timer();

    }
  }

  TimerWorker();

})();
