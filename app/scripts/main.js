(function($, window, document) {

  // seting initial values and constants
  var INITIAL_VALUE = 56;
  var TARGET = 125;
  var ANIMATION_DELAY = 500;
  var CURRENCY = '$';
  var PROGRESS_BAR_COLOR = '#61b256';

  var proresBarHTML = '<div id="progress-bar" class="barfiller">' + 
    '<div class="tipWrap">' +
    '<span class="tip"></span>' +
    '</div>' +
    '<span class="fill"></span>' +
    '</div>';

  // setting popover options
  var progressPopoverOptions = {
    height: 140,
    title: 'Your progress',
    width: 580,
    onShow: onShow
  };

  var progressBarOptions = {
    // color of bar
    barColor: PROGRESS_BAR_COLOR,

    // shows a tooltip
    tooltip: true,

    // duration in ms
    duration: 500,

    // re-animate on resize
    animateOnResize: true,

    // custom text to show
    textToShow: "$" + INITIAL_VALUE,

    // percentage to show
    percentage: (INITIAL_VALUE * 100) / TARGET // calculating percentage
  };

  function onShow($element) {
    $element.find('#progress-bar-container').html(proresBarHTML);
    $element.find('#progress-bar').barfiller(progressBarOptions);
  }

  
  $('#target').text(CURRENCY + TARGET);
  $('#remaining').text(CURRENCY + (TARGET - INITIAL_VALUE));
  // linking popover to link
  $('#progress-link').webuiPopover(progressPopoverOptions);

  


})(jQuery, window, document)