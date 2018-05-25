import * as types from '../const/ActionTypes';

export const addFriend = (newFriend, nextId) => (
  { type: types.ADD_FRIEND, newFriend, nextId }
);
export const deleteFriend = friendId => (
  { type: types.DELETE_FRIEND, friendId }
);
export const editFriend = (editFriendDetail, editFriendId) => (
   { type: types.EDIT_FRIEND, editFriendDetail, editFriendId }
 );
export const importantFriend = friendId => (
  { type: types.IMPORTANT_FRIEND, friendId }
);
export const sortfriendlist = (sortKey, sortKind) => (
  { type: types.SORT_FRIENDS, sortKey, sortKind }
);
export const searchAndFilterFriends = searchFilterData => (
  { type: types.SEARCH_AND_FILTER_FRIEND, searchFilterData }
);
export const changeLanguage = language => (
  { type: types.CHANGE_LANGUAGE, language }
);
