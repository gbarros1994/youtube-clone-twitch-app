import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import { 
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
 } from './styles';

const StreamList: React.FC = () => {

  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail}></StreamThumbnail>

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar>
              <StreamUsername numberOfLines={1}>Gerson</StreamUsername>
            </StreamAvatar>
          </StreamHeader>
          <StreamDescription numberOfLines={1}>Fron end com Next</StreamDescription>

          <StreamCategory numberOfLines={1}>
            Science e technologhy
          </StreamCategory>
        </StreamRow>
      
        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Web</TagText>
          </TagView>
        </TagRow>

      </StreamColumn>
    </StreamContainer>
  );


  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  )
};

export default StreamList;