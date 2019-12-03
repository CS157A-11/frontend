var ctx = document.getElementById("mycanvas").getContext('2d');
var mychart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Angry", "Excited", "Happy", "Productive", "Sad", "Tired", "Usual"],
    datasets: [
      {
        label: "Moods",
        backgroundColor: ["orange", "lightgreen","skyblue","red","purple", "black", "yellow"],
        data: [10, 1, 3, 2, 12, 2, 6]
      }
    ]
},
   options: {
     title: {
       display: true,
       text: 'Your Moods Over This Month'
     }
   }
 });
