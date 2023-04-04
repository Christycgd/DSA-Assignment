function areRotations (str1,str2)
    {
        return (str1.length == str2.length) &&
               ((str1 + str1).indexOf(str2) != -1);
    }
    let str1 = prompt();
    let str2 = prompt();
 
    if (areRotations(str1, str2))
{
      	alert("Strings are rotations of each other");
	}
    else
      {
        alert("Strings are not rotations of each other");
      }
 
