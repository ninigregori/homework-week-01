var adjective = [nice,  beautiful, amazing , awesome];
var noun = [village,  women, fairy, knight];
var verb = [be,  sing, cook, look];
var place = [school, Vienna, London, the mountains];
var person = [her brother, a friend, Nini, a villager];
var vehicle = [bike, car, helicopter, sailing boat];


adjective.forEach( function( value, index, array, ){
	console.log( array );
	console.log( array.pop() );
});

var story = 'Once upon a time there was a [adjective] [noun]. 
It was really [adjective]. It liked to [verb] all day. 
One day, it went to [place] to meet [person]. 
To get there, it rode in a [vehicle], but on the way there, 
the [vehicle] crashed.  It had to walk the rest of the way.'





