import { ADD_FRIEND, DELETE_FRIEND, EDIT_FRIEND, IMPORTANT_FRIEND, SORT_FRIENDS, SEARCH_AND_FILTER_FRIEND, CHANGE_LANGUAGE } from '../const/ActionTypes';
import userData from '../const/data';

export default function friendlist(state = userData, action) {
  // console.log('friendlist state :');
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case ADD_FRIEND: {
      const friendlistArray = state.friendlist.slice();
      friendlistArray.push({ id: action.nextId,
        important: false,
        name: action.newFriend.name,
        email: action.newFriend.email,
        phone: action.newFriend.phone,
        work: action.newFriend.work,
        city: action.newFriend.city,
      });
      return Object.assign({}, state, { friendlist: friendlistArray, nextId: action.nextId + 1 });
    }

    case DELETE_FRIEND: {
      const deletedfriendlistArray = state.friendlist.filter(user =>
        user.id !== action.friendId,
      );
      return Object.assign({}, state, { friendlist: deletedfriendlistArray });
    }

    case EDIT_FRIEND: {
      const editedFriend = state.friendlist.map((user) => {
        const userCopy = user;
        if (user.id.toString() === action.editFriendId.toString()) {
          const editFriend = { ...userCopy,
            ...userCopy.name = action.editFriendDetail.name,
            ...userCopy.email = action.editFriendDetail.email,
            ...userCopy.phone = action.editFriendDetail.phone,
            ...userCopy.work = action.editFriendDetail.work,
            ...userCopy.city = action.editFriendDetail.city,
          };
          return editFriend;
        }
        return userCopy;
      });
      return Object.assign({}, state, { friendlist: editedFriend });
    }

    case IMPORTANT_FRIEND: {
      const updatedItems = state.friendlist.map((user) => {
        const userCopy = user;
        if (user.id === action.friendId) {
          const importantFriend = { ...userCopy, ...userCopy.important = !userCopy.important };
          return importantFriend;
        }
        return userCopy;
      });
      return Object.assign({}, state, { friendlist: updatedItems });
    }

    case SORT_FRIENDS: {
      const sortkey = action.sortKey.toString().toLowerCase();
      const sortedFriendArray = state.friendlist.slice().sort((a, b) => {
        if (action.sortKind) {
          if (sortkey) {
            return a[sortkey] < b[sortkey];
          }
          return a < b;
        } else if (sortkey) {
          return a[sortkey] > b[sortkey];
        }
        return a > b;
      });

      const sortedSearchFilterArray = state.searchList.slice().sort((a, b) => {
        if (action.sortKind) {
          if (sortkey) {
            return a[sortkey] < b[sortkey];
          }
          return a < b;
        } else if (sortkey) {
          return a[sortkey] > b[sortkey];
        }
        return a > b;
      });
      if (state.isSearch) {
        return Object.assign(
          {}, state,
          { searchList: sortedSearchFilterArray, ascSortKind: action.sortKind, sortKey: sortkey });
      }
      return Object.assign(
          {}, state,
          { friendlist: sortedFriendArray, ascSortKind: action.sortKind, sortKey: sortkey });
    }

    case SEARCH_AND_FILTER_FRIEND: {
      if (action.searchFilterData.searchText === undefined &&
         action.searchFilterData.city === undefined && action.searchFilterData.work === undefined) {
        return Object.assign({}, state, { isSearch: false });
      }
      const check = action.searchFilterData.searchText === undefined ? undefined : new RegExp(action.searchFilterData.searchText, 'gi');
      const searchedList = state.friendlist.filter((user) => {
        let add = false;
        Object.keys(user).forEach((key) => {
          if ((user.city === action.searchFilterData.city
             || user.work === action.searchFilterData.work) ||
           (check !== undefined && user[key].toString().match(check))) {
            add = true;
          }
        });
        if (add === true) {
          return user;
        }
        return false;
      });
      return Object.assign({}, state, { searchList: searchedList, isSearch: true });
    }

    case CHANGE_LANGUAGE: {
      return Object.assign({}, state, { language: action.language });
    }

    default:
      return state;
  }
}
