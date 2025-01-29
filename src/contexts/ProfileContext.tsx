import React, { createContext, useContext, useState, useEffect } from 'react';
import { getProfile } from '../api/myPage/getProfile';

interface ProfileContextType {
  profileImage: string | null;
  fetchProfile: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const fetchProfile = async () => {
    try {
      const profileData = await getProfile();
      if (profileData) {
        setProfileImage(profileData.data.profileImage || null);
      }
    } catch (error) {
      console.error('프로필 데이터를 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <ProfileContext.Provider value={{ profileImage, fetchProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile은 ProfileProvider 내부에서 사용해야 합니다.');
  }
  return context;
};
