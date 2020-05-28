import Logo from '../assets/logo.svg';

export function getAchievements() {
  const achievements = [
    {
      title: 'Your first Pomodoro!',
      desc: 'Obtained by completing a Pomodoro.',
      locked: true,
      isNew: false,
      src: Logo,
      pomodoros: 1,
      sets: 0
    },
    {
      title: 'Persistense I',
      desc: 'Obtained by completing 5 Pomodoros.',
      locked: true,
      isNew: false,
      src: Logo,
      pomodoros: 5,
      sets: 0
    },
    {
      title: 'Persistense II',
      desc: 'Obtained by completing 25 Pomodoros.',
      locked: true,
      isNew: false,
      src: Logo,
      pomodoros: 25,
      sets: 0
    },
    {
      title: 'Persistense III',
      desc: 'Obtained by completing 50 Pomodoros.',
      locked: true,
      isNew: false,
      src: Logo,
      pomodoros: 50,
      sets: 0
    },
    {
      title: 'Persistense IV',
      desc: 'Obtained by completing 100 Pomodoros.',
      locked: true,
      isNew: false,
      src: Logo,
      pomodoros: 100,
      sets: 0
    },

    {
      title: 'Your first Set!',
      desc: 'Obtained by completing a Set.',
      locked: true,
      isNew: false,
      src: Logo,
      pomodoros: 0,
      sets: 1 
    },
    {
      title: 'Resilience I',
      desc: 'Obtained by completing 2 Sets.',
      locked: true,
      isNew: false,
      src: Logo,
      pomodoros: 0,
      sets: 2 
    },
    {
      title: 'Resilience II',
      desc: 'Obtained by completing 5 Sets.',
      locked: true,
      isNew: false,
      src: Logo,
      pomodoros: 0,
      sets: 5
    },
    {
      title: 'Resilience III',
      desc: 'Obtained by completing 10 Sets.',
      locked: true,
      isNew: false,
      src: Logo,
      pomodoros: 0,
      sets: 10
    },
    {
      title: 'Resilience IV',
      desc: 'Obtained by completing 20 Sets.',
      locked: true,
      isNew: false,
      src: Logo,
      pomodoros: 0,
      sets: 20
    },
  ];

  return achievements;
}