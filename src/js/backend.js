/*
 * backend.js : collection of all backend calls
 *
 * Copyright 2012 konijn@gmail.com aka Tom Demuyt
 *
 * Licensed under Apache v2.0 http://www.apache.org/licenses/LICENSE-2.0.html

Template for new functionality:
  if( document.location.protocol == "file:" )
  //local
  {
  }
  else
  //server
  {
  }
 *
 */

backend = { form : {} , view : {} , user : {} , list : {} };

//This will either save changes over an existing form or create a new form
//A form is said to exist already if it has a uid property ( unique id )
//o must be generated by form.serialize()
backend.form.save = function( o )
{
  if( document.location.protocol == "file:" )
  //local
  {
    //If o.form has id, then it has been stored at least once before
    if( o.form.id )
    {
    
    }
    else
    {}
  }
  else
  //server
  {
  }
}

backend.form.exists = function( name )
{
  if( document.location.protocol == "file:" )
  //local
  {
    var a = db.query( { key : "name" , value : name } )
    return (a.length!=0)
  }
  else
  //server
  {
  }
}