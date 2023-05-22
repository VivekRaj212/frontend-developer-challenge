
const form = document.getElementById("form-input");
const input1 = document.getElementById("day");
const input2 = document.getElementById("month");
const input3 = document.getElementById("year");
const submit = document.getElementById("submitButton");
const capYear = document.getElementById('years');
const capMonths = document.getElementById('months');
const capDays = document.getElementById('days');
const currentDate = new Date();



input1.addEventListener('input', (event) => {
     event.target.value = event.target.value.replace(/\D/g, '');
   });
   
   input2.addEventListener('input', (event) => {
     event.target.value = event.target.value.replace(/\D/g, '');
   });
   
   input3.addEventListener('input', (event) => {
     event.target.value = event.target.value.replace(/\D/g, '');
   });

submit.addEventListener('click',(event)=>{
 event.preventDefault();

 const birth_day = input1.value;
 const birth_month = input2.value;
 const birth_year = input3.value;

  calcAge(birth_day, birth_month, birth_year);

  input1.value = "";
  input2.value = "";
  input3.value = "";

})


const calcAge=(birth_day, birth_month, birth_year)=> {

     if(birth_day == "" && birth_month == "" && birth_year == "")
     {
          
          capYear.innerHTML = `<span>--</span> years`;
          capMonths.innerHTML = `<span>--</span> months`;
          capDays.innerHTML = `<span>--</span> days`;

          for (let i = 1; i <= 3; i++) {
               document.getElementById(`error${i}`).innerText = "The field is required";
               document.getElementById(`error${i}`).style.color = "red";
               document.getElementById(`error${i}`).style.fontSize = "13px";
             }


     }

     else if(birth_day === "" || birth_month === ""  || birth_year === ""){


          alert("All three fields should be filled");

          for (let i = 1; i <= 3; i++) {
               document.getElementById(`error${i}`).innerText = "The field is required";
               document.getElementById(`error${i}`).style.color = "red";
               document.getElementById(`error${i}`).style.fontSize = "13px";
             }

             capYear.innerHTML = `<span>--</span> years`;
             capMonths.innerHTML = `<span>--</span> months`;
             capDays.innerHTML = `<span>--</span> days`;

     }

     else if(birth_day < 1 || birth_day > 31) {
          document.getElementById('error1').innerText = "Enter valid birth date";
          document.getElementById('error1').style.color = "red";
          document.getElementById('error1').style.fontSize = "13px";
          
        }

     else if(birth_month < 1 || birth_month > 12) {
          document.getElementById('error2').innerText = "Enter correct month";
          document.getElementById('error2').style.color = "red";
          document.getElementById('error2').style.fontSize = "13px";
          
        }

     else if(birth_year < 1900 || birth_year > currentDate.getFullYear())
     {

          document.getElementById('error3').innerText = "Enter correct birth year";
          document.getElementById('error3').style.color = "red";
          document.getElementById('error3').style.fontSize = "13px";

     }

     else if(birth_day > 29  && (birth_month == 02 || birth_month == 2))
     {
           alert("February month does not have more than 29 days. So, Enter correct date of birth");
     }

     else {

     let currentYear = currentDate.getFullYear();
     let currentMonth =  currentDate.getMonth()+1;
     console.log("The current month",currentMonth);
     let currentDay = currentDate.getDate();   // 22
     let month_list = [31,(currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


     if(birth_day>currentDay)
     {

          currentDay = currentDay + month_list[currentMonth - 1];  // 22 + 31 = 53
          currentMonth = currentMonth -1;
     }

     if(birth_month >currentMonth)
     {

          currentMonth = currentMonth + 12;
          currentYear = currentYear - 1;
          console.log("The updated current month",currentMonth);
     }

     let day = currentDay - birth_day;   // 53 - 31 = 22
     let month = currentMonth - birth_month;
     let year = currentYear - birth_year;
     console.log("The final month",month);

     capYear.innerHTML = `<span>${year}</span> years`;
     capMonths.innerHTML = `<span>${month}</span> months`;
     capDays.innerHTML = `<span>${day}</span> days`;

     for (let i = 1; i <= 3; i++) {
          document.getElementById(`error${i}`).innerText = "";
        }

     }


}