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

type City = {
  dId: string;
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
  description: string;
  interestedIn: string;
  photo: string;
  friends: Array<string>;
};

export { Recommendation, City, User };
