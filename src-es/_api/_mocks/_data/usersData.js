import { get as _get, keyBy as _keyBy } from 'lodash'
import moment from 'moment'
import usersToOrganizationsData from './usersToOrganizationsData'
import organizationsData from './organizationsData'
const list = [
  {
    id: 1,
    firstName: 'Gevorg',
    lastName: 'Harutyunyan',
    username: 'modularcoder',
    email: 'modularcoder@gmail.com',
    avatarUrl: 'https://avatars3.githubusercontent.com/u/3959008?v=3&s=40',
    globalRole: 'admin',
    status: 'active',
  },
  {
    id: 2,
    firstName: 'Jay',
    lastName: 'Nickolson',
    username: null,
    email: 'example@gmail.com',
    avatarUrl:
      'https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg',
    status: 'active',
  },
  {
    id: 3,
    firstName: 'Ana',
    lastName: 'De Armas',
    username: null,
    email: 'Ana+De+Armas@example.com',
    avatarUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NjYzMzE1MV5BMl5BanBnXkFtZTgwNTA4NDY4OTE@._V1_UX172_CR0,0,172,256_AL_.jpg',
    status: 'active',
  },
  {
    id: 4,
    firstName: 'Armas',
    lastName: 'De Ana',
    username: null,
    email: 'Ana+De+Armas@example.com',
    avatarUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MzgxMzQ5N15BMl5BanBnXkFtZTgwMzMzNjkwOTE@._V1_UX172_CR0,0,172,256_AL_.jpg',
    status: 'active',
  },
  {
    id: 5,
    firstName: 'Sonequa',
    lastName: 'Martin-Green',
    email: 'Sonequa+Martin+Green@example.com',
    avatarUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
    status: 'disabled',
  },
  {
    id: 6,
    firstName: 'Bessie',
    lastName: 'Walker',
    username: 'bwalk',
    email: 'bessie.walker@example.com',
    avatarUrl: 'https://randomuser.me/api/portraits/women/29.jpg',
    globalRole: 'admin',
    status: 'active',
  },
  {
    id: 7,
    firstName: 'Scarlett',
    lastName: 'Sanders',
    username: 'sanders',
    email: 'scarlett.sanders@example.com',
    avatarUrl: 'https://randomuser.me/api/portraits/women/26.jpg',
    status: 'active',
  },
  {
    id: 8,
    firstName: 'Scott',
    lastName: 'Jensen',
    username: 'scjx',
    email: 'scott.jensen@example.com',
    avatarUrl: 'https://randomuser.me/api/portraits/men/87.jpg',
    status: 'pending',
  },
  {
    id: 9,
    firstName: 'Marcus ',
    lastName: 'Barrett',
    username: null,
    email: 'marcus.barrett@example.com',
    avatarUrl: 'https://randomuser.me/api/portraits/men/88.jpg',
    status: 'pending',
  },
  {
    id: 10,
    firstName: 'Penny',
    lastName: 'Lawrence',
    email: 'penny.lawrence@example.com',
    avatarUrl: 'https://randomuser.me/api/portraits/women/79.jpg',
    status: 'active',
  },
  {
    id: 11,
    firstName: 'Melvin',
    lastName: 'Sutton',
    username: 'johndoe1',
    email: 'melvin.sutton@example.com',
    avatarUrl: 'https://randomuser.me/api/portraits/men/85.jpg',
    globalRole: 'admin',
    status: 'disabled',
  },
  {
    id: 12,
    firstName: 'Della',
    lastName: 'Case',
    username: null,
    email: 'della.case@example.com',
    avatarUrl:
      'https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e',
    status: 'pending',
  },
  {
    id: 13,
    firstName: 'Fischer',
    lastName: 'Garland',
    username: 'fgfr',
    email: 'Fischer+Garland@example.com',
    avatarUrl:
      'https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=f05c14dd4db49f08a789e6449604c490',
    status: 'active',
  },
  {
    id: 14,
    firstName: 'Abdullah',
    lastName: 'Hadley',
    username: 'hadley',
    email: 'Hadley+Abdullah@example.com',
    avatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f',
    status: 'active',
  },
  {
    id: 15,
    firstName: 'Lucy',
    lastName: 'Walker',
    email: 'Lucy+Walker@example.com',
    avatarUrl: 'https://randomuser.me/api/portraits/women/0.jpg',
    status: 'active',
  },
].map((user) => {
  const userToOrganization = usersToOrganizationsData.byUserId[user.id] || []
  return {
    ...user,
    userOgranizations: userToOrganization.map((relation) => {
      return {
        ...relation,
        organization: _get(organizationsData.byId, relation.organizationId, {}),
      }
    }),
    createdAt: moment().subtract(user.id, 'days').format(),
  }
})
const byId = _keyBy(list, 'id')
const usersData = {
  list,
  byId,
  current: byId[1],
}
export default usersData
