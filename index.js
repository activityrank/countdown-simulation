define(['jquery'], function($)
{
    var Simulation = function(dom_element, options)
    {
        var that = this;
        this.dom_element = $(dom_element);
        this.options = options || {};

        this.initializeHtmlElements();

        var current_position = 3;
        that.setCountdownTime(current_position);
        that.showCountdownTime();

        var countdown_timer = setInterval(function()
        {
            current_position--;

            if (!current_position)
            {
                that.hideCountdownTime();
                that.showWinner();
                clearInterval(countdown_timer);
            }
            else
            {
                that.setCountdownTime(current_position);
                that.showCountdownTime();
            }
        }, Math.max(Math.ceil(500 * this.options.speed), 10));
    };

    Simulation.prototype.initializeHtmlElements = function()
    {
        this.dom_element.css({
            'height': '150px',
            'text-align': 'center'
        });

        this.countdown_text = $($.parseHTML('<strong />'));
        this.countdown_text.css({
            "font-family": "serif",
            "font-size": "64px",
            "font-weight": "400",
            "display": "block"
        });
        this.countdown_text.hide();

        this.winner_text = $($.parseHTML('<strong />'));
        this.winner_text.css({
            "font-family": "serif",
            "font-size": "64px",
            "font-weight": "400",
            "display": "block"
        });
        this.winner_text.hide();

        this.result_text = $($.parseHTML('<em />'));
        this.result_text.css({
            "font-family": "sans-serif",
            "font-size": "64px",
            "font-style": "italic",
            "font-weight": "700",
            "display": "block"
        });
        this.result_text.hide();

        this.dom_element.append(this.countdown_text, this.winner_text, this.result_text);
    };

    Simulation.prototype.setCountdownTime = function(new_time)
    {
        this.countdown_text.text(new_time);
    };

    Simulation.prototype.showCountdownTime = function()
    {
        this.countdown_text.stop().fadeIn();
    };

    Simulation.prototype.hideCountdownTime = function()
    {
        this.countdown_text.stop().hide();
    };

    Simulation.prototype.showWinner = function()
    {
        var winner_name = '';
        var result_text = '';

        if (this.options.first.score > this.options.second.score)
        {
            winner_name = this.options.first.name;
            result_text = 'WINS';
        }
        else if (this.options.first.score < this.options.second.score)
        {
            winner_name = this.options.second.name;
            result_text = 'WINS';
        }
        else
        {
            result_text = 'TIE';
        }

        if (winner_name)
        {
            this.winner_text.text(winner_name);
            this.winner_text.stop().fadeIn();
        }
        else
        {
            this.winner_text.stop().hide();
        }

        this.result_text.text(result_text);
        this.result_text.stop().fadeIn();
    };

    return Simulation;
});