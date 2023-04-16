import {useEffect, useState} from 'react';
import {getStorageItem} from '../../../../@lib/utils/functions/storage';

export const useProfileFollow = () => {
  const follower = getStorageItem('follower', 'num');
  const following = getStorageItem('following', 'num');
  const [followState, setFollowState] = useState(0);
  const [followingState, setFollowingState] = useState(0);
  useEffect(() => {
    setFollowState(follower);
    setFollowingState(following);
  }, [follower, following]);
  return {followState, followingState};
};
