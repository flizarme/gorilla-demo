(function($, window, document) {

  // seting initial values and constants
  var INITIAL_VALUE = 56;
  var TARGET = 125;
  var ANIMATION_DELAY = 500;
  var CURRENCY = '$';
  var PROGRESS_BAR_COLOR = '#61b256';

  // template to reset the progress bar animation
  var proresBarHTML = '<div id="progress-bar" class="barfiller">' + 
    '<div class="tipWrap">' +
    '<span class="tip"></span>' +
    '</div>' +
    '<span class="fill"></span>' +
    '</div>';

  // setting popover options
  var progressPopoverOptions = {
    height: 140,
    width: 580,
    title: 'Your progress',
    onShow: onShow
  };

  // setting progress bar options
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
    textToShow: CURRENCY + INITIAL_VALUE,

    // percentage to show
    percentage: (INITIAL_VALUE * 100) / TARGET // calculating percentage
  };

  /**
   * funciton called by the popover plugin when the popover is shown
   * @param  {Object} $element jQuery element of the popover
   * @return {null}          
   */
  function onShow($element) {
    // resetting progress bar html
    $element.find('#progress-bar-container').html(proresBarHTML);
    // creating progress bar animation
    $element.find('#progress-bar').barfiller(progressBarOptions);
  }

  // finding and setting the target text to display it
  $('#target').text(CURRENCY + TARGET);

  // calculating the remaining and setting it as text
  $('#remaining').text(CURRENCY + (TARGET - INITIAL_VALUE));

  // linking popover to link
  $('#progress-link').webuiPopover(progressPopoverOptions);

  
})(jQuery, window, document)