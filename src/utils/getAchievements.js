export function getAchievements() {
  const achievements = [
    {
      title: 'Your first Pomodoro!',
      desc: 'Congratulations you have completed your first Pomodoro and obtained your first achievement!',
      locked: true,
      isNew: false,
      icon: 'award',
      pomodoros: 1,
      sets: 0
    },
    {
      title: 'Persistense I',
      desc: 'You have completed 5 Pomodoros! Keep it up.',
      locked: true,
      isNew: false,
      icon: 'burn',
      pomodoros: 5,
      sets: 0
    },
    {
      title: 'Persistense II',
      desc: 'Well done! You have completed 25 Pomodoros.',
      locked: true,
      isNew: false,
      icon: 'bullseye',
      pomodoros: 25,
      sets: 0
    },
    {
      title: 'Persistense III',
      desc: "It's addicting right? You have completed 50 Pomodoros.",
      locked: true,
      isNew: false,
      icon: 'grin-beam-sweat',
      pomodoros: 50,
      sets: 0
    },
    {
      title: 'Persistense IV',
      desc: 'Woah... You have completed 100 Pomodoros.',
      locked: true,
      isNew: false,
      icon: 'bomb',
      pomodoros: 100,
      sets: 0
    },

    {
      title: 'Your first Set!',
      desc: 'Congratulations you have completed your first Set! You are on a roll.',
      locked: true,
      isNew: false,
      icon: 'medal',
      pomodoros: 0,
      sets: 1 
    },
    {
      title: 'Resilience I',
      desc: 'Nice job! You have completed 2 Sets.',
      locked: true,
      isNew: false,
      icon: 'candy-cane',
      pomodoros: 0,
      sets: 2 
    },
    {
      title: 'Resilience II',
      desc: "It's working, you are already at 5. You have completed 5 Sets.",
      locked: true,
      isNew: false,
      icon: 'surprise',
      pomodoros: 0,
      sets: 5
    },
    {
      title: 'Resilience III',
      desc: 'This is fun right? You have completed 10 Sets.',
      locked: true,
      isNew: false,
      icon: 'hourglass',
      pomodoros: 0,
      sets: 10
    },
    {
      title: 'Resilience IV',
      desc: 'Excellent! You really are resillient. You have completed 20 Sets.',
      locked: true,
      isNew: false,
      icon: 'shield-alt',
      pomodoros: 0,
      sets: 20
    },
  ];

  return achievements;
}