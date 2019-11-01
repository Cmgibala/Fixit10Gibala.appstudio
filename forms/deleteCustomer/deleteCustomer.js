//Fill 
deleteCustomer.onshow=function(){
    let stateQuery = "SELECT DISTINCT name FROM customer;" 
   req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmg58665&pass=Klg28398&database=cmg58665&query=" + stateQuery)

    if (req1.status == 200) { //transit worked
        let results = JSON.parse(req1.responseText)
        console.log(results)
      if (results.length == 0)
        NSB.MsgBox("There are no customers from that state.")
      else {        

        console.log("the parsed JSON is " + results)
        // output the names of all the dogs
        let message = ""
        for (i=0; i<= results.length - 1; i++){
            message = (message + (results[i][0]) + "\n");
          }
        console.log(message)
        taCustomers.value = message;
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
      
}

btnSubmit1.onclick=function(){
  
   check = inptState1.value
   let query = "SELECT * FROM customer WHERE name = " + '"' + check + '"'  ;
 // alert(query)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmg58665&pass=Klg28398&database=cmg58665&query=" + query)

    if (req1.status == 200) { //transit worked
        results = JSON.parse(req1.responseText)
        console.log(results)
      if (results.length == 0)
        NSB.MsgBox("There are no customers of that name.")
      else { 
        query = "DELETE FROM customer WHERE name =  " + '"' + check + '"'  ;
        req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmg58665&pass=Klg28398&database=cmg58665&query=" + query)
        query2 = "SELECT * FROM customer";
        req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmg58665&pass=Klg28398&database=cmg58665&query=" + query2)
        results = JSON.parse(req3.responseText)
        console.log("the parsed JSON is " + results)
        // output the names of all the dogs
        var message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][1] + "\n"
        taUpdatedCustomer.value = message
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}


