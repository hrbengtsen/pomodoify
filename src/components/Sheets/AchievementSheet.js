import React, { useState, useEffect } from 'react';
import { Button, Sheet, SheetHeader, SheetBody, Heading, Icon, Text, Container, Badge } from '../UI';
import Achievement from '../Progression/Achievement';
import { useProgression } from '../../hooks/useProgression';

const AchievementSheet = (props) => {
  const { progression, resetNewAchievements } = useProgression();
  const [hidden, setHidden] = useState(true);
  const [activeAchievement, setActiveAchievement] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  //const buttonRef = useRef(null);

  useEffect(() => {
    return () => resetNewAchievements();
  }, [resetNewAchievements]);

  function handleSheet(index) {
    if (hidden) {
      setActiveIndex(index);
      setActiveAchievement(progression.achievements[index]);
    }
    setHidden(!hidden);
    //buttonRef.current.focus();
  }

  return (
    <>
      <Container my="xl" display="flex" justifyContent="space-between" flexWrap="wrap">
        {progression.achievements.map((achievement, index) => {
          if (index < 5) {
            return <Achievement achievement={achievement} key={index} onClick={() => handleSheet(index)} />;
          } 
          return '';
        })}
      </Container>
      <Container my="xl" display="flex" justifyContent="space-between" flexWrap="wrap">
        {progression.achievements.map((achievement, index) => {
          if (index >= 5 && index < 10) {
            return <Achievement achievement={achievement} key={index} onClick={() => handleSheet(index)} />;
          } 
          return '';
        })}
      </Container>
      <Container my="xl" display="flex" justifyContent="space-between" flexWrap="wrap">
        {progression.achievements.map((achievement, index) => {
          if (index >= 10 && index < 15) {
            return <Achievement achievement={achievement} key={index} onClick={() => handleSheet(index)} />;
          } 
          return '';
        })}
      </Container>
      <Container textAlign="center" my="xl">
        <Text>More achievements and progression coming soon...</Text>
      </Container>
      <Sheet hidden={hidden} toggle={() => handleSheet(activeIndex)}>
        <SheetHeader>
          <Heading type="h4" mx="auto" fontWeight="reg">Achievement {activeAchievement.isNew ? <Badge backgroundColor="secondary" color="bg.0">New</Badge> : ''}</Heading>
          <Button fontSize={['lg', 'xl']} position="absolute" right="0" m="sm" mr="lg" onClick={() => handleSheet(activeIndex)}>
            <Icon icon="times" style={{ verticalAlign: 'baseline' }} />
          </Button>
        </SheetHeader>
        <SheetBody p="lg" pt="0">
          <Container maxWidth="480px" mx="auto" backgroundColor="bg.1" borderRadius="md">
            <Text textAlign="center" fontWeight="bold" p="lg" mb="0">
              <Icon icon={activeAchievement.icon ? activeAchievement.icon : 'lock'} size="lg" mr="sm" />
              {activeAchievement.title}
            </Text>
            <Text textAlign="center" p="lg">
              {activeAchievement.desc}
            </Text>
          </Container>
        </SheetBody>
      </Sheet>
    </>
  );
}

export default AchievementSheet;