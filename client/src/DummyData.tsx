export interface UserType {
  _id: string;
  profilePicture : string,
  coverPicture: string;
  username: string;
  desc : string;
  city : string;
  from : string;
  relationship : string;
  job : string;
  followings : string[];
}

export interface PostType {
  _id: string;
  desc: string | undefined;
  img: string[];
  date: string;
  userId: number;
  likes: string[];
  comment: number;
  createdAt : any;
}

export const Users: UserType[] = [
  {
    _id: "1",
    profilePicture: "persons/1.jpeg",
    username: "Nguyễn Linh Đạt",
    desc: "",
    city:"",
    from:"",
    relationship:"",
    job:"",
    coverPicture: "",
    followings : []
  },
  {
    _id: "2",
    profilePicture: "persons/2.jpeg",
    username: "Nguyễn Hoàng Đạt",
    desc: "",
    city:"",
    from:"",
    relationship:"",
    job:"",
    coverPicture: "",
    followings : []

  },
  {
    _id: "3",
    profilePicture: "persons/3.jpeg",
    username: "Đoàn Minh Tiến",
    desc: "",
    city:"",
    from:"",
    relationship:"",
    job:"",
    coverPicture: "",
    followings : []

  },
  {
    _id: "4",
    profilePicture: "persons/4.jpeg",
    username: "Cù Thanh Long",
    desc: "",
    city:"",
    from:"",
    relationship:"",
    job:"",
    coverPicture: "",
    followings : []

  },
  {
    _id: "5",
    profilePicture: "persons/5.jpeg",
    username: "Nguyễn Linh Đạt Đò",
    desc: "",
    city:"",
    from:"",
    relationship:"",
    job:"",
    coverPicture: "",
    followings : []

  },
  {
    _id: "6",
    profilePicture: "persons/6.jpeg",
    username: "Nguyễn Hoàng Đạt Mếch",
    desc: "",
    city:"",
    from:"",
    relationship:"",
    job:"",
    coverPicture: "",
    followings : []

  },
  {
    _id: "7",
    profilePicture: "persons/7.jpeg",
    username: "Đoàn Minh Tiến Mèo",
    desc: "",
    city:"",
    from:"",
    relationship:"",
    job:"",
    coverPicture: "",
    followings : []

  },
  {
    _id: "8",
    profilePicture: "persons/8.jpeg",
    username: "Nguyễn Linh Đạt",
    desc: "",
    city:"",
    from:"",
    relationship:"",
    job:"",
    coverPicture: "",
    followings : []

  },
  {
    _id: "9",
    profilePicture: "persons/9.jpeg",
    username: "Nguyễn Linh Đạt",
    desc: "",
    city:"",
    from:"",
    relationship:"",
    job:"",
    coverPicture: "",
    followings : []

  },
  {
    _id: "10",
    profilePicture: "persons/10.jpeg",
    username: "Nguyễn Linh Đạt",
    desc: "",
    city:"",
    from:"",
    relationship:"",
    job:"",
    coverPicture: "",
    followings : []

  },
];

// export const Posts : PostType[] = [
//   {
//     id: 1,
//     desc: "Love For All, Hatred For None.",
//     photo: "posts/1.jpeg",
//     date: "5 mins ago",
//     userId: 1,
//     like: 32,
//     comment: 9,
//   },
//   {
//     id: 2,
//     desc: "",
//     photo: "posts/2.jpeg",
//     date: "15 mins ago",
//     userId: 2,
//     like: 2,
//     comment: 1,
//   },
//   {
//     id: 3,
//     desc: "Every moment is a fresh beginning.",
//     photo: "posts/3.jpeg",
//     date: "1 hour ago",
//     userId: 3,
//     like: 61,
//     comment: 2,
//   },
//   {
//     id: 4,
//     desc:"",
//     photo: "posts/4.jpeg",
//     date: "4 hours ago",
//     userId: 4,
//     like: 7,
//     comment: 3,
//   },
//   {
//     id: 5,
//     desc: "",
//     photo: "posts/5.jpeg",
//     date: "5 hours ago",
//     userId: 5,
//     like: 23,
//     comment: 5,
//   },
//   {
//     id: 6,
//     desc: "",
//     photo: "posts/6.jpeg",
//     date: "1 day ago",
//     userId: 6,
//     like: 44,
//     comment: 6,
//   },
//   {
//     id: 7,
//     desc: "Never regret anything that made you smile.",
//     photo: "posts/7.jpeg",
//     date: "2 days ago",
//     userId: 7,
//     like: 52,
//     comment: 3,
//   },
//   {
//     id: 8,
//     desc : "",
//     photo: "posts/8.jpeg",
//     date: "3 days ago",
//     userId: 8,
//     like: 15,
//     comment: 1,
//   },
//   {
//     id: 9,
//     desc: "Change the world by being yourself.",
//     photo: "posts/9.jpeg",
//     date: "5 days ago",
//     userId: 9,
//     like: 11,
//     comment: 2,
//   },
//   {
//     id: 10,
//     desc : "",
//     photo: "posts/10.jpeg",
//     date: "1 week ago",
//     userId: 10,
//     like: 104,
//     comment: 12,
//   },
// ];
