import PropTypes from 'prop-types';

import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
import CustomScrollbar from '../CustomVerticalScrollbar/CustomVerticalScrollbar';

import { ColumnTasksListStyles } from './ColumnTasksList.styled';

export default function ColumnTasksList({ tasks, openModal }) {

  return (
    <CustomScrollbar>
      <ColumnTasksListStyles>
        {tasks &&
          tasks.map((task) => (
            <TaskColumnCard
              key={task._id}
              task={task}
              tasksCount={tasks.length}
              openModal={openModal}
            />
          ))}
      </ColumnTasksListStyles>
    </CustomScrollbar>
  );
}

ColumnTasksList.propTypes = {
  tasks: PropTypes.array,
  openModal: PropTypes.func
};