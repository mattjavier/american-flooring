const group1 = [
  {
    name: "Fleming's Steakhouse",
    location: '',
    pictures: [
      ''
    ]
  },
  {
    name: 'Montclair Plaza',
    location: '',
    pictures: []
  },
  {
    name: 'Coronado Center',
    location: '',
    pictures: []
  },
  {
    name: 'Northridge Fashion Center',
    location: '',
    pictures: []
  }
]

const group2 = [
  {
    name: 'Prince Kuhio Plaza',
    location: '',
    pictures: []
  },
  {
    name: 'Whalers Village',
    location: '',
    pictures: []
  },
  {
    name: 'Willowbrook Mall',
    location: '',
    pictrues: []
  },
  {
    name: 'Tyler Mall',
    location: '',
    pictures: []
  },
]

const group3 = [
  {
    name: 'Bluecoral Shopping Mall',
    location: '',
    pictures: []
  },
  {
    name: "Dave & Buster's",
    location: '',
    pictures: []
  },
  {
    name: "P.F. Chang's China Bistro",
    location: '',
    pictures: []
  },
  {
    name: 'Pizzeria Mozza',
    location: '',
    pictures: []
  }
]

const group4 = [
  {
    name: "McCormick & Schmick's",
    location: '',
    pictures: []
  },
  {
    name: 'The Winery',
    location: '',
    pictures: []
  },
  {
    name: '94th Aero Squadron Restaurant',
    location: '',
    pictures: []
  },
  {
    name: 'The Proud Bird Restaurant',
    location: '',
    pictures: []
  }
]

const loadGroup = (group, rowID) => {
  let colElem = document.createElement('div')
  colElem.className = 'col-3'
  group.forEach(element => {
    let dataElem = document.createElement('p')
    dataElem.textContent = element.name
    colElem.append(dataElem)
  })
  document.getElementById(rowID).append(colElem)
}

document.getElementById('viewWorks').addEventListener('click', () => {
  loadGroup(group1, 'row1')
  loadGroup(group2, 'row2')
  loadGroup(group3, 'row3')
  loadGroup(group4, 'row4')
})

