customerUpdate.onshow=function(){
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
        taCustomerList.value = message;
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}


btnUpdate.onclick=function(){
  check = inptCustomer.value
  newName = inptNewName.value
  query5 = "SELECT * FROM customer WHERE name = " + '"' + check + '"'  ;
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmg58665&pass=Klg28398&database=cmg58665&query=" + query5)
    if (req1.status == 200) { //transit worked
        results = JSON.parse(req1.responseText)
        console.log(results)
        if (results.length == 0)
            NSB.MsgBox("There are no customers of that name.")
          else { 
            query6 = "UPDATE customer SET name = " + '"' + newName + '"' + "WHERE name =" + '"' + check + '"' ;
            req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmg58665&pass=Klg28398&database=cmg58665&query=" + query6)
            query7 = "SELECT DISTINCT name FROM customer;" 
            req4 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmg58665&pass=Klg28398&database=cmg58665&query=" + query7)
            results = JSON.parse(req4.responseText)
            console.log("the parsed JSON is " + results)
            let message = ""
            for (i=0; i<= results.length - 1; i++){
                message = (message + (results[i][0]) + "\n");
              }
            console.log(message)
            taNewCustomers.value = message;
          } 
          

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)

}
