
// This array is for check all the questions, by using in the loop at the bottom in the function checkAll(); 
var questions = [ "a1", "a2", "a3", "a4", "a5"];
	
	
//var marks = 0;

// "s" is a parameter which is entered as an argument at "checkAnswers( questions[i] )" in the function "function checkAll()". and questions[i] is an array index will retrieve the content of the document, by using object "document.getElementsByName(s)" 	
function checkAnswers(s)
	{
		var answers = document.getElementsByName(s); //getting all the radio buttons named as a1 || a2 || a3 ..ect
		var noOfAnswers = answers.length; //check how many answers are there named as a1
		
		//console.log( noOfAnswers );
		
		var  marks = 0; 

		for(var i = 0; i < noOfAnswers; i++) // go through every single radio button named as a1
			{ 
				//if you find the radio button checked what to do // if the value of the radio button is correct 
				
				if( (answers[i].checked) && (answers[i].value == "true") ) 
					{  
						marks = 1;
						break;
					}
				
				else { marks = 0; }
			}
			
		return marks;

	}

	
//This function will check all the questions with the syntax checkAnswers( questions[i] );, because in the above array we have taken total number of answers as a1, a2, a3 ect...
function result()
	{
		{
			/* for( i=0; i<questions.length; i++ )
				 {
				  checkAnswers( questions[i]);		
				 } */
				
			//To test in console.log
			console.log( "a1 Score is: " + checkAnswers( questions[0] ) );
			console.log( "a2 Score is: " + checkAnswers( questions[1] ) );
			console.log( "a3 Score is: " + checkAnswers( questions[2] ) );
			console.log( "a4 Score is: " + checkAnswers( questions[3] ) );
			console.log( "a5 Score is: " + checkAnswers( questions[4] ) );
			
			// To accumulate total marks in to one variable 
			var m1 = parseInt( checkAnswers( questions[0] ) );
			var m2 = parseInt( checkAnswers( questions[1] ) );
			var m3 = parseInt( checkAnswers( questions[2] ) );
			var m4 = parseInt( checkAnswers( questions[3] ) );
			var m5 = parseInt( checkAnswers( questions[4] ) );

			var total = m1 + m2 + m3 + m4 + m5;

			console.log( "Total Score is: " + total );
			
			quiz.answersBox.value = "Total Score is: " + total;
		}
	}

	
	
	
	
	
	