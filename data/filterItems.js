const filterItems = [ // TODO: uit wordpress halen
  {
    group: 'group1',
    label: 'genre',
    items: [
      { value: 'Dans', active: false },
      { value: 'Kunst & Design', active: false },
      { value: 'Muziek', active: false },
      { value: 'Theater', active: false },
    ]
  },
  {
    group: 'group2',
    label: 'doelgroep',
    items: [
      { value: 'Allerkleinsten', active: false },
      { value: 'Kinderen', active: false },
      { value: 'Jongeren', active: false },
      { value: 'Volwassenen', active: false },
      { value: 'Senioren', active: false },
    ]
  },
  {
    group: 'group3',
    label: 'dag',
    items: [
      { value: 'Maandag', active: false },
      { value: 'Dinsdag', active: false },
      { value: 'Woensdag', active: false },
      { value: 'Donderdag', active: false },
      { value: 'Vrijdag', active: false },
      { value: 'Zaterdag', active: false },
      { value: 'Zondag', active: false },
    ]
  },
  {
    group: 'group4',
    label: 'locatie',
    items: [
      { value: 'Dordrecht', active: false },
      { value: 'Papendrecht', active: false },
      { value: 'Ridderkerk', active: false },
      { value: 'Zwijndrecht', active: false },
    ]
  },
];

export { filterItems };
