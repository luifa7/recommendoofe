type Recommendation = {
  dId: string;
  placeName: string;
  title: string;
  text: string;
  address: string;
  maps: string;
  website: string;
  instagram: string;
  facebook: string;
  otherLink: string;
  photo: string;
  createdOn: number;
  cityDId: string;
  tags: Array<string>;
  fromUserDId: string;
  toUserDId: string;
};

type CreateRecommendation = {
  placeName: string;
  title: string;
  text: string;
  address: string;
  maps: string;
  website: string;
  instagram: string;
  facebook: string;
  otherLink: string;
  photo: string;
  cityDId: string;
  tags: Array<string>;
  fromUserDId: string;
  toUserDId: string;
};

type City = {
  dId: string;
  name: string;
  country: string;
  photo: string;
  userDId: string;
  visited: boolean;
};

type CreateCity = {
  name: string;
  country: string;
  photo: string;
  userDId: string;
  visited: boolean;
};

type User = {
  dId: string;
  userName: string;
  name: string;
  shortFact1: string;
  shortFact2: string;
  shortFact3: string;
  aboutMe: string;
  interestedIn: string;
  photo: string;
};

type CreateUser = {
  userName: string;
  name: string;
  shortFact1: string;
  shortFact2: string;
  shortFact3: string;
  aboutMe: string;
  interestedIn: string;
  photo: string;
};

type FriendRequest = {
  userDId: string;
  friendDId: string;
};

export {
  Recommendation,
  CreateRecommendation,
  City,
  CreateCity,
  User,
  CreateUser,
  FriendRequest,
};
