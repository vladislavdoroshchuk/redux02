const True = ({ is_deleted }) => !is_deleted;
const False = () => false;
const isCompleted = ({ completed, is_deleted }) => completed && !is_deleted;
const isNotCompleted = ({ completed, is_deleted }) => !completed && !is_deleted;
const isDeletedTodo = ({ is_deleted }) => is_deleted;

export const getFilterFunc = filter => (
  filter === 'all'? True :
  filter === 'completed' ? isCompleted :
  filter === 'not-completed' ? isNotCompleted : 
  filter === 'is-deleted' ? isDeletedTodo :
  False
);

export const filterList = (list, filter) => {
  return list.filter(filter);
};

export const get = field => obj => obj[field];
