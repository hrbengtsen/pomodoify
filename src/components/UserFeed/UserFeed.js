import React from 'react';
import { Container } from '../UI';
import UserTip from './UserTip';
import UserStreak from './UserStreak';

function UserFeed() {
  return (
    <Container maxWidth="480px" mx="auto" mt="xxxl" px="lg">
      <UserStreak />
      <UserTip />
    </Container>
  );
}

export default UserFeed;