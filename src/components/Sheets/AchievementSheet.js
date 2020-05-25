import React, { useState } from 'react';
import { Button, Sheet, SheetHeader, SheetBody, Heading, Icon, Text, Container, Image } from '../UI';
import Achievement from '../Progression/Achievement';
import { useProgression } from '../../hooks/useProgression';

const AchievementSheet = (props) => {
  const { progression } = useProgression();
  const [hidden, setHidden] = useState(true);
  const [activeAchievement, setActiveAchievement] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  //const buttonRef = useRef(null);

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
        {progression.achievements.map((element, index) => {
          if (index < 5) {
            return <Achievement achievement={element} key={index} onClick={() => handleSheet(index)} />;
          } 
          return '';
        })}
      </Container>
      <Container textAlign="center" my="xl">
        <Text>More achievements to come...</Text>
      </Container>
      <Sheet hidden={hidden} toggle={() => handleSheet(activeIndex)}>
        <SheetHeader>
          <Heading type="h4" mx="auto" fontWeight="reg">Achievement</Heading>
          <Button fontSize={['lg', 'xl']} position="absolute" right="0" m="sm" mr="lg" onClick={() => handleSheet(activeIndex)}>
            <Icon icon="times" style={{ verticalAlign: 'baseline' }} />
          </Button>
        </SheetHeader>
        <SheetBody p="lg" pt="0">
          <Container maxWidth="480px" mx="auto" backgroundColor="bg.1" borderRadius="md">
            <Text textAlign="center" fontWeight="bold" p="lg" mb="0">
              <Image src={activeAchievement.src} width="20px" mr="md" />
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