/*  try { }  => encloses the code with error
   catch { }  => catch and handle any throw errors
   finally { } => always execute used mostly for clean up
*/


try {
    console.log(x);
    if(x == -1){
        throw new error("No, not possible");
    }
}

catch(error){
    console.log(error);
}

finally{
    console.log("always execute");
}
console.log("ending");