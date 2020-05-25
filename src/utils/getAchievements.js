import Logo from '../assets/logo.svg';

export function getAchievements() {
  const achievements = [
    {
      title: 'Your first Pomodoro!',
      desc: 'Obtained by completing a Pomodoro.',
      locked: true,
      src: Logo,
      pomodoros: 1,
      sets: 0
    },
    {
      title: 'Persistense I',
      desc: 'Obtained by completing 5 Pomodoros.',
      locked: true,
      src: Logo,
      pomodoros: 5,
      sets: 0
    },
    {
      title: 'Persistense II',
      desc: 'Obtained by completing 25 Pomodoros.',
      locked: true,
      src: Logo,
      pomodoros: 25,
      sets: 0
    },
    {
      title: 'Persistense III',
      desc: 'Obtained by completing 50 Pomodoros.',
      locked: true,
      src: Logo,
      pomodoros: 50,
      sets: 0
    },
    {
      title: 'Persistense IV',
      desc: 'Obtained by completing 100 Pomodoros.',
      locked: true,
      src: Logo,
      pomodoros: 100,
      sets: 0
    },
  ];

  return achievements;
}