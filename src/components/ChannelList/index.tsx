import React from 'react';

import { 
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  UserName,
  Info,
  RightSide,
  WhiteCircle,
 } from './styles';

const ChannelList: React.FC = () => {

  const ChannelItem = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
          <Column>
            <UserName>Gerson</UserName>
            <Info></Info>
          </Column>
      </LeftSide>
      <RightSide>
        <WhiteCircle>

        </WhiteCircle>
      </RightSide>
    </ChannelContainer>
  )

  return (
    <List>
      <ChannelItem/>
      <ChannelItem/>
      <ChannelItem/>
      <ChannelItem/>
      <ChannelItem/>
      <ChannelItem/>
      <ChannelItem/>
      <ChannelItem/>
      <ChannelItem/>
    </List>
  )
};

export default ChannelList;