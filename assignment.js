function feetToMile(ft){
    var mile = ft / 5280;
    if(ft > 0){
    var result = mile.toFixed(2);
    return 'Miles : ' + result +' (approximately)';
   }
   else{
       return `Distance couldn't be negative. Revise the number!`;
   }
}
var userInput = feetToMile(3985850539);
console.log(userInput);



function woodCalculator(chair, table, bed){
    var wood = (chair * 1) + (table * 3) + (bed * 5);
    return 'Total wood : '+ wood +' cft';
}
var result = woodCalculator(0, 2, 1);
console.log(result);




function brickCalculator(floorNum){
    if(floorNum <= 10){
        var brick = floorNum * 15 * 1000;
        return 'Total number of bricks : '+ brick +' Nos.';
    }
    else if (floorNum > 10 && floorNum <= 20) {
        var brick = ((10 * 15) + ((floorNum - 10) * 12)) * 1000;
        return 'Total number of bricks : '+ brick +' Nos.';
    }
    else{
        var brick = ((10 * 15) +(10 * 12) + ((floorNum - 20) * 10)) * 1000;
        return 'Total number of bricks : '+ brick +' Nos.';
    } 
}
var result = brickCalculator(5);
console.log(result);





function tinyFriend(ages){
    var smallest = ages[0];
    for(i = 0; i < ages.length; i++){
        var currentAges = ages[i];
        if(currentAges < smallest){
            smallest = currentAges;
        }
    }
    return 'Smallest friend is '+ smallest;
}
var ages =[14, 16, 13, 12, 11, 21, 22];
var findSmallest = tinyFriend(ages);
console.log(findSmallest);

// Due to misunderstanding ,I have done it with ages earlier. After showing Jhankar bhai's fb post I do the tinyFriend with the length of name.

function tinyFriends(name){
    var smallest= name[0].length;
    for(i = 0; i < name.length; i++){
         var currentFriend = name[i].length;
         if(currentFriend < smallest){
             smallest = currentFriend;
         }
    }
    return smallest;
}

var smallestFind = tinyFriends(['rahim', 'kari', 'poli', 'ham', 'fu']);
console.log(smallestFind);