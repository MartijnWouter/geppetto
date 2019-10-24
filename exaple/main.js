window.onload = function() {
    var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('fileDisplayArea');
    let inputText = "";
    var ctx = document.getElementById('myChart').getContext('2d');

    fileInput.addEventListener('change', function(e) {
        //setting up the filereader
        var file = fileInput.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            //accessing the file's content
            inputText =  reader.result;
            fileDisplayArea.innerText = inputText;
            //splitting it on the spaces to get an array
            let inputNumbers = inputText.split(" ");
            let tempArray = [];
            //getting only the numbers out of the array and turning them into intergers ussing a for loop
            //the loop is kind of prone to failure since it need a specific format text file to work
            for(let i = 1; i <= inputNumbers.length; i += 2){
                let number = parseInt(inputNumbers[i]);
                tempArray.push(number);
            }
            //calling the chart function
            makeChart(tempArray);
        }
        //now the file content will be read as text
        reader.readAsText(file);
        });
    function makeChart(numbers){
        //starting a chart
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                //labels for the bottom of the chart
                labels: ['number 1', 'number 2', 'number 3', 'number 4', 'number 5', 'number 6'],
                datasets: [{
                    //overall label
                    label: 'chart of numbers',
                    data: numbers,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
}