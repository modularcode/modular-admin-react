import { get as _get, keyBy as _keyBy } from 'lodash'
import moment from 'moment'
import User from '../../_types/User'
import UserToOrganization from '../../_types/UserToOrganization'
import UsersToOrganizationsData from './organizationsToUsersData'
import organizationsData from './organizationsData'

const list: User[] = [
  {
    id: 1,
    firstName: 'Gevorg',
    lastName: 'Harutyunyan',
    username: 'modularcoder',
    email: 'modularcoder@gmail.com',
    avatarUrl: 'https://avatars3.githubusercontent.com/u/3959008?v=3&s=40',
    // userToOrganizations: organizationsToUsersData.byUserId[1],
    globalRole: 'admin',
  },
  {
    id: 2,
    firstName: 'Jay',
    lastName: 'Nickolson',
    username: null,
    email: 'example@gmail.com',
    avatarUrl:
      'https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg',
    // userToOrganizations: organizationsToUsersData.byUserId[2],
  },
  {
    id: 3,
    firstName: 'Ana',
    lastName: 'De Armas',
    username: null,
    email: 'Ana+De+Armas@example.com',
    avatarUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NjYzMzE1MV5BMl5BanBnXkFtZTgwNTA4NDY4OTE@._V1_UX172_CR0,0,172,256_AL_.jpg',
    // userToOrganizations: organizationsToUsersData.byUserId[3],
  },
  {
    id: 4,
    firstName: 'Armas',
    lastName: 'De Ana',
    username: null,
    email: 'Ana+De+Armas@example.com',
    avatarUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MzgxMzQ5N15BMl5BanBnXkFtZTgwMzMzNjkwOTE@._V1_UX172_CR0,0,172,256_AL_.jpg',
    // userToOrganizations: organizationsToUsersData.byUserId[4],
  },
  {
    id: 5,
    firstName: 'Sonequa',
    lastName: 'Martin-Green',
    email: 'Sonequa+Martin+Green@example.com',
    avatarUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
    // userToOrganizations: organizationsToUsersData.byUserId[5],
  },
  {
    id: 6,
    firstName: 'Bessie',
    lastName: 'Walker',
    username: 'bwalk',
    email: 'bessie.walker@example.com',
    avatarUrl: 'https://randomuser.me/api/portraits/women/29.jpg',
    // userToOrganizations: organizationsToUsersData.byUserId[6],
    globalRole: 'admin',
  },
  {
    id: 7,
    firstName: 'Scarlett',
    lastName: 'Sanders',
    username: 'sanders',
    email: 'scarlett.sanders@example.com',
    avatarUrl: 'https://randomuser.me/api/portraits/women/26.jpg',
    // userToOrganizations: organizationsToUsersData.byUserId[2],
  },
  {
    id: 8,
    firstName: 'Scott',
    lastName: 'Jensen',
    username: 'scjx',
    email: 'scott.jensen@example.com',
    avatarUrl: 'https://randomuser.me/api/portraits/men/87.jpg',
    // userToOrganizations: organizationsToUsersData.byUserId[3],
  },
  {
    id: 9,
    firstName: 'Marcus ',
    lastName: 'Barrett',
    username: null,
    email: 'marcus.barrett@example.com',
    avatarUrl: 'https://randomuser.me/api/portraits/men/88.jpg',
    // userToOrganizations: organizationsToUsersData.byUserId[4],
  },
  {
    id: 10,
    firstName: 'Penny',
    lastName: 'Lawrence',
    email: 'penny.lawrence@example.com',
    avatarUrl: 'https://randomuser.me/api/portraits/women/79.jpg',
    // userToOrganizations: organizationsToUsersData.byUserId[5],
  },
  {
    id: 11,
    firstName: 'Melvin',
    lastName: 'Sutton',
    username: 'johndoe1',
    email: 'melvin.sutton@example.com',
    avatarUrl: 'https://randomuser.me/api/portraits/men/85.jpg',
    // userToOrganizations: organizationsToUsersData.byUserId[1],
    globalRole: 'admin',
  },
  {
    id: 12,
    firstName: 'Jay',
    lastName: 'Nickolson',
    username: null,
    email: 'example@gmail.com',
    avatarUrl:
      'https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg',
    // userToOrganizations: organizationsToUsersData.byUserId[2],
  },
  {
    id: 13,
    firstName: 'Ana',
    lastName: 'De Armas',
    username: null,
    email: 'Ana+De+Armas@example.com',
    avatarUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NjYzMzE1MV5BMl5BanBnXkFtZTgwNTA4NDY4OTE@._V1_UX172_CR0,0,172,256_AL_.jpg',
    // userToOrganizations: organizationsToUsersData.byUserId[3],
  },
  {
    id: 14,
    firstName: 'Armas',
    lastName: 'De Ana',
    username: null,
    email: 'Ana+De+Armas@example.com',
    avatarUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NjYzMzE1MV5BMl5BanBnXkFtZTgwNTA4NDY4OTE@._V1_UX172_CR0,0,172,256_AL_.jpg',
    // userToOrganizations: organizationsToUsersData.byUserId[4],
  },
  {
    id: 15,
    firstName: 'Sonequa',
    lastName: 'Martin-Green',
    email: 'Sonequa+Martin+Green@example.com',
    avatarUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
    // userToOrganizations: organizationsToUsersData.byUserId[5],
  },
].map(user => {
  const userToOrganization = UsersToOrganizationsData.byUserId[user.id] || []

  return {
    ...user,
    userOgranizations: userToOrganization.map((relation: UserToOrganization) => {
      return {
        ...relation,
        organization: _get(organizationsData.byId, relation.organizationId, {}),
      }
    }),
    createdAt: moment()
      .subtract(user.id, 'days')
      .format(),
  }
})

const byId: { [key: number]: User } = _keyBy(list, 'id')

const usersData = {
  list,
  byId,
  current: byId[1],
}

export default usersData
