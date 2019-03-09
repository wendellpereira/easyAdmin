import {User} from '../../user';

export const USERS: User[] = [
  {
    id: 1,
    name: 'Wendell',
    email: 'wendell@easyplanner',
    company: 'Easyplanner',
    events: [
      {
        name: 'Casamento da Julia e André',
        guests: '300',
        tasks: '34',
        vendors: '20',
        scripts: '5',
        docs: '13',
        budget: 'R$15.000'
      },
      {
        name: 'Aniversário da Jussara',
        guests: '200',
        tasks: '34',
        vendors: '20',
        scripts: '5',
        docs: '13',
        budget: 'R$15.000'
      }
    ]
  },
  {
    id: 2,
    name: 'Zé',
    email: 'ze.maria@gmail.com',
    company: 'Ze events',
    events: [
      {
        name: 'Aniversário do Seu Madruga',
        guests: '900',
        tasks: '34',
        vendors: '20',
        scripts: '5',
        docs: '13',
        budget: 'R$15.000'
      },
      {
        name: 'Aniversário da Bruna',
        guests: '200',
        tasks: '34',
        vendors: '20',
        scripts: '5',
        docs: '13',
        budget: 'R$15.000'
      },
    ]
  },
  {
    id: 3,
    name: 'Maria',
    email: 'maria@gmail.com',
    company: 'Maria events',
    events: [
      {
        name: '15 Anos de Morgana',
        guests: '250',
        tasks: '74',
        vendors: '20',
        scripts: '5',
        docs: '13',
        budget: 'R$15.000'
      },
      {
        name: 'Aniversário da Joaninha',
        guests: '200',
        tasks: '34',
        vendors: '20',
        scripts: '5',
        docs: '13',
        budget: 'R$15.000'
      },
    ]
  },
  {
    id: 4,
    name: 'João',
    email: 'joao@gmail.com',
    company: 'João events',
    events: [
      {
        name: 'Corporativo Oracle',
        guests: '1500',
        tasks: '134',
        vendors: '120',
        scripts: '5',
        docs: '53',
        budget: 'R$150.000'
      },
      {
        name: 'Bodas de João e Maria',
        guests: '100',
        tasks: '64',
        vendors: '10',
        scripts: '3',
        docs: '33',
        budget: 'R$25.000'
      },
    ]
  }
];
