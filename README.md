# countdown-simulation

Simple countdown simulation for http://activityrank.com (one vs. one social media ranking site).

This repository can basicly be seen as an example how to use the "api" and how to write your own simulations
to embed them into activityrank.com.

# Test the simulation

To test this simulation, run:

``` console
$ bower install
```

and afterwards open test.html in your favourite (javascript enabled) web browser.

# Options for the Simulation

The Simulation gets two parameters: `dom_element, options`.

The options look like this:

``` javascript
{
    "first": {
        "name": "First One", /* the name of the first "player" */
        "score": 20 /* the score of the first "player" */
    },
    "second": {
        "name": "Second One",
        "score": 100
    },
    "speed": 1 /* The speed for the simulation. 1 is normal speed. It's seen as multiplicator and cannot be below 0.*/
}
```

# License

This simulation is licensed under MIT License and copyright 2014 by [DracoBlue](http://dracoblue.net).