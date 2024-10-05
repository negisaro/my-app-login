import { Component } from '@angular/core';

@Component({
  selector: 'shared-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  /* const random = (max = 100) => {
    return Math.round(Math.random() * max) + 20
  }
  
  const randomData = () => {
    return [
      this.random(),
      this.random(),
      this.random(),
      this.random(),
      this.random(),
      this.random(),
      this.random(),
      this.random(),
      this.random(),
      this.random(),
      this.random(),
      this.random(),
    ]
  }
  
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
  const cssColors = (color: string) => {
    return getComputedStyle(document.documentElement).getPropertyValue(color)
  }
  
  const getColor = () => {
    return window.localStorage.getItem('color') ?? 'cyan'
  }
  
  const colors = {
    primary: this.cssColors(`--color-${this.getColor()}`),
    primaryLight: this.cssColors(`--color-${this.getColor()}-light`),
    primaryLighter: this.cssColors(`--color-${this.getColor()}-lighter`),
    primaryDark: this.cssColors(`--color-${this.getColor()}-dark`),
    primaryDarker: this.cssColors(`--color-${this.getColor()}-darker`),
  }
  
  const barChart = new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
      labels: this.months,
      datasets: [
        {
          data: this.randomData(),
          backgroundColor: this.colors.primary,
          hoverBackgroundColor: this.colors.primaryDark,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            gridLines: false,
            ticks: {
              beginAtZero: true,
              stepSize: 50,
              fontSize: 12,
              fontColor: '#97a4af',
              fontFamily: 'Open Sans, sans-serif',
              padding: 10,
            },
          },
        ],
        xAxes: [
          {
            gridLines: false,
            ticks: {
              fontSize: 12,
              fontColor: '#97a4af',
              fontFamily: 'Open Sans, sans-serif',
              padding: 5,
            },
            categoryPercentage: 0.5,
            maxBarThickness: '10',
          },
        ],
      },
      cornerRadius: 2,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
    },
  })
  
  const doughnutChart = new Chart(document.getElementById('doughnutChart'), {
    type: 'doughnut',
    data: {
      labels: ['Oct', 'Nov', 'Dec'],
      datasets: [
        {
          data: [this.random(), this.random(), this.random()],
          backgroundColor: [this.colors.primary, this.colors.primaryLighter, this.colors.primaryLight],
          hoverBackgroundColor: this.colors.primaryDark,
          borderWidth: 0,
          weight: 0.5,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom',
      },
  
      title: {
        display: false,
      },
      animation: {
        animateScale: true,
        animateRotate: true,
      },
    },
  })
  
  const activeUsersChart = new Chart(document.getElementById('activeUsersChart'), {
    type: 'bar',
    data: {
      labels: [...this.randomData(), ...this.randomData()],
      datasets: [
        {
          data: [...this.randomData(), ...this.randomData()],
          backgroundColor: this.colors.primary,
          borderWidth: 0,
          categoryPercentage: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            display: false,
            gridLines: false,
          },
        ],
        xAxes: [
          {
            display: false,
            gridLines: false,
          },
        ],
        ticks: {
          padding: 10,
        },
      },
      cornerRadius: 2,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        prefix: 'Users',
        bodySpacing: 4,
        footerSpacing: 4,
        hasIndicator: true,
        mode: 'index',
        intersect: true,
      },
      hover: {
        mode: 'nearest',
        intersect: true,
      },
    },
  })
  
  const lineChart = new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: {
      labels: this.months,
      datasets: [
        {
          data: this.randomData(),
          fill: false,
          borderColor: this.colors.primary,
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 0,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: false,
            ticks: {
              beginAtZero: false,
              stepSize: 50,
              fontSize: 12,
              fontColor: '#97a4af',
              fontFamily: 'Open Sans, sans-serif',
              padding: 20,
            },
          },
        ],
        xAxes: [
          {
            gridLines: false,
          },
        ],
      },
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        hasIndicator: true,
        intersect: false,
      },
    },
  })
  
  let randomUserCount = 0
  
  const usersCount = document.getElementById('usersCount')
  
  const fakeUsersCount = () => {
    randomUserCount = random()
    activeUsersChart.data.datasets[0].data.push(randomUserCount)
    activeUsersChart.data.datasets[0].data.splice(0, 1)
    activeUsersChart.update()
    usersCount.innerText = randomUserCount
  }
  
  setInterval(() => {
    fakeUsersCount()
  }, 1000) */
}
