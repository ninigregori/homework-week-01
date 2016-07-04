<!DOCTYPE html>
<html>
<body>

<script>


var adjective = ["nice",  "beautiful", "amazing" , "awesome"];
var noun = ["village",  "women", "fairy", "knight"];
var verb = ["be",  "sing", "cook", "look"];
var place = ["school", "Vienna", "London", "the mountains"];
var person = ["her brother", "a friend", "Nini, a villager"];
var vehicle = ["bike", "car", "helicopter", "sailing boat"];

var story = ['Once upon a time there was a ','. It was really ', 
'. It liked to ', ' all day. One day, it went to ' , 
' to meet ' , '. To get there, it rode in a ' ,
' , but on the way there, the ' , 
' crashed.  It had to walk the rest of the way.'];


function NewStory ()
{
	var newS = story[0] + adjective[Math.round(Math.random()*3)] + 
	story[1] + adjective[Math.round(Math.random()*3)] + 
	story[2] + verb[Math.round(Math.random()*3)] +
	story[3] + place[Math.round(Math.random()*3)] +
	story[4] + person[Math.round(Math.random()*3)] +
	story[5] + vehicle[Math.round(Math.random()*3)] +
	story[6] + vehicle[Math.round(Math.random()*3)] + story[7];
	return newS;
}



document.write(NewStory());
</script>

</body>
</html>
