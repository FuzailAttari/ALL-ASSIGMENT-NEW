// if (4 ==="4") {
//     document.write ("sahi hai ")

// }
// else{
//     document.write( 'Galat hai')
// }

// ===========================================================================

// var email =  prompt('Enter Email') ;
// var Password = prompt('Enter Password')

// if ( email=='nabila' && Password =='nabila' ) {

//     document.write ( 'han jaan hai meri')
// }
// else{
//     document.write( ' galat bol rahy ')
// }
// ===========================================================================

var userinput = +prompt( 'Enter percentage')

if ( userinput >= 80 && userinput < 101){
    document.write( 'A+')
}

else if (userinput >= 70 && userinput < 80)
{
    document.write( 'A')
}
else if ( userinput >= 60  && userinput < 70 )
{
    document.write( 'B')
}
else if ( userinput >= 50  && userinput < 60 )
{
    document.write( 'C')
}
else if ( userinput >= 40  && userinput < 50 )
{
    document.write( 'D')
}
else {
    document.write( 'fail')
}