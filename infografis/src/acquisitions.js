// import { Chart } from 'chart.js/auto'

(async function () {
    const data = [
        { year: "Rata-rata IPK", count: 4 },
        { year: "Rata-rata waktu lulus", count: 5 },
        { year: "Lama Menganggur", count: 3 },
        { year: "Mendapat Pekerjaan Linear", count: 4 }
    ];

    const rataRataIPK = [
        { year: 2018, count: 3 },
        { year: 2019, count: 3.5 },
        { year: 2020, count: 3.75 },
        { year: 2021, count: 4 }
    ];

    new Chart(
        document.getElementById('chart-line'),
        {
            type: 'line',
            data: {
                labels: rataRataIPK.map(row => row.year),
                datasets: [
                    {
                        label: 'Acquisitions by year',
                        data: rataRataIPK.map(row => row.count)
                    }
                ],
                
            }
        }
    );

    new Chart(
        document.getElementById('chart-bar'),
        {
            type: 'bar',
            data: {
                labels: rataRataIPK.map(row => row.year),
                datasets: [
                    {
                        label: 'Acquisitions by year',
                        data: rataRataIPK.map(row => row.count)
                    }
                ]
            }
        }
    );
})();