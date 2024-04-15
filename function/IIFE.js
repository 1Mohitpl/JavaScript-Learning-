// immdetiately invoked Functions Expressions (IIFE)

(function connected () {             // named iife           
    
    console.log(`you are now connected`)
}) ();



( (name ) => {                           // unknown iife

    console.log(`you are now online ${name}`);
}) ('mohit')