const ctx = document.getElementById('myChart');

const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], // Days of the week
    datasets: [
        {
            label: 'High Risk',
            data: [22, 35, 28, 45, 30, 50, 40],
            backgroundColor: 'rgba(255, 99, 132, 0.4)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        },
        {
            label: 'Warning',
            data: [18, 25, 40, 38, 42, 48, 35],
            backgroundColor: 'rgba(255, 206, 86, 0.4)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        },
        {
            label: 'Critical',
            data: [27, 32, 25, 29, 45, 55, 33],
            backgroundColor: 'rgba(13, 110, 253, 0.4)',
            backgroundColor: 'rgba(13, 110, 253, 1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        },
        {
            label: 'Normal',
            data: [25, 45, 82, 47, 7, 5, 30],
            backgroundColor: 'rgba(25, 135, 84, 0.6)',
            borderColor: 'rgba(25, 135, 84, 0.6)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        },
    ]
};

new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Days of the Week'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Number of Activities'
                },
                beginAtZero: true,
                ticks: {
                    stepSize: 10
                }
            }
        }
    }
});






const pieCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['High Risk', 'Warning', 'Critical', 'Normal'],
        datasets: [{
            label: 'Pie Chart Example',
            data: [10, 80, 320, 500],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(13, 110, 253, 0.4)',
                'rgba(25, 135, 84, 0.4)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(13, 110, 253, 1)',
                'rgba(25, 135, 84, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Activities Flagging'
            }
        }
    }
});