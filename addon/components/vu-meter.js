import Ember from 'ember';
import layout from '../templates/components/vu-meter';

/*global
$
*/

function normalize(opts, value){
    if (value > opts.max) {
        return opts.max;
    }else if (value < opts.min || isNaN(value)) {
        return opts.min;
    }else{
        return (value - opts.min) / (opts.max - opts.min);
    }
}

//peak callculation wrapper
var Peak = function(delay, fallDuration){
    this.value = 0;
    this.lastTime = 0;        
    this.falling = null;

    if (typeof fallDuration === 'undefined') {
        fallDuration = 200;
        if (typeof delay === 'undefined') {
            delay = 1000;
        }
    }
    this.delay = delay;
    this.fallDuration = fallDuration;        
};

Peak.prototype.update = function(value){
    var now = (new Date()).getTime();
    if (value > this.value){
        this.value = value;
        this.lastTime = now;
        this.falling = null;
    }else if (now > this.lastTime + this.delay) {
        if (this.falling === null){ //start falling, determine speed
            this.falling = {
                startTime: now,
                from: this.value,
                to: value
            };
        }
        var fallRatio = Math.min(1, (now - this.falling.startTime) / this.fallDuration);
        this.value = this.falling.from - (this.falling.from - this.falling.to) * fallRatio;
    }
    return this.value;    
};


//width of position value
function formatValue(value, opts){    
    return Math.round(value * opts.size) + 'px';
}

function drawChannel(opts, value){
    //console.log("ARGS", arguments);
    
    var peak = false;
    if (opts.peak && opts.peak.enabled){
        peak = normalize(opts, value.peak);
        value = value.value;        
    }    
    value = normalize(opts, value);    
    var dom = opts.dom;
    
    dom.green.style.width = formatValue(value, opts);
    
    if (value > opts.thresholds.yellow) {
        dom.yellow.style.width = formatValue(value - opts.thresholds.yellow, opts);
    }else{
        dom.yellow.style.width = 0;
    }
    
    if (value > opts.thresholds.red) {
        dom.red.style.width = formatValue(value - opts.thresholds.red, opts);
    }else{
        dom.red.style.width = 0;
    }    
    
    if (peak !== false) {
        dom.peak.style.left = Math.round(peak * opts.size - opts.peak.width) + 'px';
    }
}



export default Ember.Component.extend({
  layout: layout,
  classNames: ['vu-meter'],

  //has effects on channel count and class names for channel
  channelNames: ['left', 'right'],

  //opts for normalization
  min: 0,
  max: 1,

  //smoothing options
  proxyDelay: 65,
  proxyFallDuration: 200,

  //levels
  red: 0.85,
  yellow: 0.65,

  peak: true,
  peakWidth: 2, //in px

  _values: [],
  _builtChannelOptions: null,

  values: Ember.computed({
    get: function(){
        return this.get('_values');
    },
    set: function(k, v){
        this.set('_values', v);
        this.renderChannels(v);
        return v;
    }
  }),

  didInsertElement: function(){
    this._super();
    this.buildOptions();
    this.renderChannels();
  },

  rebuildAndRender: function(){
    this.buildOptions();
    this.renderChannels();
  },

  updateObserver: Ember.observer('channelNames', 'min', 'max', 'proxyDelay', 'proxyFallDuration', 'red', 'yellow', 'peak', 'peakWidth', function(){
    Ember.run.once(this, this.rebuildAndRender);
  }),

  renderChannels: function(values){
    var opts = this.get('_builtChannelOptions');
    if (!values) {
        values = this.get('_values');
    }

    if (opts && values && values.length > 0) {
        for (var i = 0; i < opts.length; i++) {
            var opt = opts[i];
            var value = i < values.length ? values[i] : 0;
            value = opt.proxy.value.update(value);
            
            if (opt.peak.enabled) {
                value = {
                    value: value, 
                    peak: opt.proxy.peak.update(value)
                };
            }
            drawChannel(opt, value);
        }   
    }
  },


  buildOptions: function(){
    var opts = {
        thresholds:{
            red: this.get('red'),
            yellow: this.get('yellow'),
        },
        peak:{
            enabled: this.get('peak'),
            width: this.get('peakWidth')
        },
        min: this.get('min'),
        max: this.get('max'),
        proxy: {
            valueDelay: this.get('proxyDelay'),
            valueFallDuration: this.get('proxyFallDuration')
        }
    };

    var optionsArray = [];
    
    this.$().find('.vu-channel').each(function(){
        var $t = $(this);
        var channelOpts = $.extend(true, 
            {
                dom: {
                    green: $t.find('.green')[0],
                    yellow: $t.find('.yellow')[0],
                    red: $t.find('.red')[0],
                    peak: $t.find('.peak')[0],
                },
                size: $t.innerWidth(), //for horizontal orientation                
                proxy: {
                    value: new Peak(opts.proxy.valueDelay, opts.proxy.valueFallDuration)
                }
            },            
            opts
        );

        channelOpts.dom.yellow.style.left = formatValue(channelOpts.thresholds.yellow, channelOpts);
        channelOpts.dom.red.style.left = formatValue(channelOpts.thresholds.red, channelOpts);
        if (channelOpts.peak.enabled) {
            channelOpts.dom.peak.style.width = channelOpts.peak.width + 'px';            
            channelOpts.dom.peak.style.display = '';
            channelOpts.proxy.peak = new Peak(); //with defaults
        }else{
            channelOpts.dom.peak.style.display = 'none';            
        }
        optionsArray.push(channelOpts);
    });

    this.set('_builtChannelOptions', optionsArray);
  }
});
