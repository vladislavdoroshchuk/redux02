const True = () => true;
const False = () => false;
const isCompleted = ({ completed }) => completed;
const isNotCompleted = ({ completed }) => !completed;
const isDeletedTodo = ({ is_deleted }) => is_deleted;
const isNotDeletedTodo = ({ is_deleted }) => { console.log(is_deleted); return !is_deleted};

export const getFilterFunc = (filter, isDeleted) => {
  console.log(isDeleted);
  console.log(filter);
  return isDeleted === true ? isNotDeletedTodo :
    filter === 'all' ? True :
    filter === 'completed' ? isCompleted :
    filter === 'not-completed' ? isNotCompleted :
    False;

};

export const getIsDeleted = isDeleted => (
  isDeleted === true ? isDeletedTodo :
    isDeleted === false ? isNotDeletedTodo :
  False
);

export const filterList = (list, filter) => list.filter(filter);

export const get = field => obj => obj[field];