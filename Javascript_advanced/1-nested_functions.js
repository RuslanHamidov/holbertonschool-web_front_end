var globalVariable = "Welcome";

function outer(){
    alert(globalVariable);
    var course = "Holberton";
    function inner(){
        alert(globalVariable.concat(" ", course));
        var exclamation = '!';
        function inception(){
            alert(globalVariable.concat(" ", course, exclamation));
        }
        inception()
    }
    inner();
}
outer();