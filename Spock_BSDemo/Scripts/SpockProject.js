//   MathExercise.....


        //MathExercise...
        $("#btnStartMath").click(function(){
            var num1 = Number($("#mathnum1").val());
            var num2 = Number($("#mathnum2").val());
            var num3 = Number($("#mathnum3").val());
            var num4 = +$("#mathnum4").val();
            var num5 = +$("#mathnum5").val();

            var smallest = Math.min(num1, num2, num3, num4, num5);
            var largest = Math.max(num1, num2, num3, num4, num5);
            var sum = num1 + num2 + num3 + num4 + num5;
            var product = num1 * num2 * num3 * num4 * num5;
            var average = sum / 5;

            $("#smallest").text("The smallest number is:" + ' ' + smallest);
            $("#largest").text("The largest number is:" + ' ' + largest);
            $("#sum").text("The sum is:" + sum);
            $("#product").text("The product is:" + ' ' + product);
            $("#average").text("The average is:" + ' ' + average);
        });

        $("#btnClearMath").click(function () {
            $("#mathnum1, #mathnum2, #mathnum3, #mathnum4, #mathnum5").val('');
            $("#smallest, #largest, #sum, #product, #average").text('');
        });

        $("#codeMath").hide();
        $("#btnToggleCodeMath").click(function () {
            $("#codeMath").toggle();
            if ($(this).text() == "Show Code") {
                $(this).text("Hide Code");
            } else {
                $(this).text("Show Code");
            }
        });


// Factorial Exercise.....
//
        $("#btnFact").click(function () {

            //Step1: Get the user data
            var number = +$("#fact").val();

            if (number > 170) {
                alert("Please enter positive number less than 171!");
                $("#fact").val('');

            } else {
                //Step2: Calculate the Factorial
                for (var i = number-1; i > 1; i--) {
                number *= i;
                    }
                $("#factOut").text(number);
            }
        });

        $("#btnClearFact").click(function () {

            $("#factOut").text('');
             $("#fact").val('');
        });
        $("#codeFact").hide();
        $("#btnToggleCodeFact").click(function () {
            $("#codeFact").toggle();
            if ($(this).text() == "Show Code") {
                $(this).text("Hide Code");
            } else {
                $(this).text("Show Code");
            }
        });

//   Palindrome...
//
        $("#btnPal").click(function () {
            var word = $("#palIn").val();
            var revWord = "";
           
            for (var i = word.length - 1; i >= 0; i--) {
                revWord += word.substr(i, 1);
            }

            if (revWord == word) {
                $("#palOut").html("This is Palindrome:<br/>" + ' ' + revWord);
            } else {
                $("#palOut").html("This is not Palindrome:<br/>" + ' ' + revWord);
            }
        });
        
        $("#btnClearPalin").click(function () {

            $("#palOut").text('');
            $("#palIn").val('');
        });

        $("#codePalin").hide();
        $("#btnToggleCodePalin").click(function () {
            $("#codePalin").toggle();
            if ($(this).text() == "Show Code") {
                $(this).text("Hide Code");
            } else {
                $(this).text("Show Code");
            }
        });

//...Fizz Buzz....
//
        $("#btnFB").click(function () {

            var num1 = +$("#fbIn1").val();
            var num2 = +$("#fbIn2").val();
            var output = "";

            for (var counter = 1; counter <= 100; counter++) {
               
                if ((counter % num1 == 0) && (counter % num2 == 0)) {
                    output += "<span class='fizzBuzzbl'>Fizz</span><span class ='fizzBuzzred'>Buzz</span>"+ ',  ';

                } else if (counter % num1 == 0) {
                    output += "<span class='fizz'>Fizz</span>"+ ',  ';

                } else if (counter % num2 == 0) {
                    output += "<span class='buzz'>Buzz</span>"+',  ';

                } else {
                    output += counter + ',  ';
                }
            }          
            output = output.substr(0, output.length - 3);
            $("#fbOut").html(output);

        });


         $("#btnClearFB").click(function () {
            $("#fbIn1,#fbIn2").val('');
            $("#fbOut").text('');
        });
     

        $("#codeFB").hide();
        $("#btnToggleCodeFB").click(function () {
            $("#codeFB").toggle();
            if ($(this).text() == "Show Code") {
                $(this).text("Hide Code");
            } else {
                $(this).text("Show Code");
            }

        });


// The Sum of All Fears...
//

        $("#codeSumof").hide();

        $("#btnToggleCodeSumof").click(() => {
            $("#codeSumof").toggle();
            if ($("#btnToggleCodeSumof").text() == "Show Code")
            {
                $("#btnToggleCodeSumof").text("Hide Code");
            }
            else {
                $("#btnToggleCodeSumof").text("Show Code");
            }
        });
      
        $("#btnSearchSumof").click(() => {


            //Collect values from user.
            //Warm user if no values are entered.

            if ($("#number1").val().length == 0 ||
                $("#number2").val().length == 0 ||
                $("#number3").val().length == 0 ||
                $("#number4").val().length == 0 ||
                $("#number5").val().length == 0 ||
                $("#number6").val().length == 0 ||
                $("#kValue").val().length == 0) {
                alert("Empty fiels are not allowed. Sorry!");
            }
            else
            {
       
                var numbList = [];

                //Populate array with numerical values.
                numbList.push(  Number($("#number1").val()) );
                numbList.push(  Number($("#number2").val()) );
                numbList.push(  Number($("#number3").val()) );
                numbList.push(  Number($("#number4").val()) );
                numbList.push(  Number($("#number5").val()) );
                numbList.push(  Number($("#number6").val()) );
                var kValue = Number($("#kValue").val())

               //Iterate through array using brute force method.
               for (var i = 0, foundSet = false; i < numbList.length - 1; i++)
               {
                  for (var j = i + 1; j <= numbList.length - 1; j++)
                  {
                    if (numbList[i] + numbList[j] == kValue)
                    {
                        //Display result
                        $("#displayResult").append($.parseHTML(kValue + " was found by adding array member <span class=\"red\">" + numbList[i] + "</span> and <span class=\"red\">" + numbList[j] + "</span>"));
                        foundSet = true;
                    }
                      //Exit all loops if set is found.
                      if (foundSet) break;
                  }
               }
            }
        });
        $("#clearFBResult").click(function () {
            $("#number1").val('');
            $("#number2").val('');
            $("#number3").val('');
            $("#number4").val('');
            $("#number5").val('');
            $("#number6").val('');
            $("#kValue").val('');
            $("#displayResult").text('');
        });