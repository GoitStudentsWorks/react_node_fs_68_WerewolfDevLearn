import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useUser } from 'src/redux/selectors';
import {
  useGetTasksQuery,
  useCreateTasksMutation,
  useDeleteTasksMutation,
  useUpdateTasksMutation
} from 'src/redux/tasks/tasksApi';

import TasksColumnsList from './TasksColumnsList/TasksColumnsList';
import DayCalendarHead from './DayCalendarHead/DayCalendarHead';
import { ChoosedDayStyles } from './ChoosedDay.styled';

const tasksList = [
  {
    _id: '64d3df9c877bb30f41b94be2',
    title: 'Meeting with Client',
    start: '14:00',
    end: '15:30',
    priority: 'medium',
    date: '2023-09-04',
    category: 'in-progress',
    owner: '64d387e745021a7e4d683ba0',
    createdAt: '2023-08-09T18:49:00.370+00:00',
    updatedAt: '2023-08-09T18:49:00.370+00:00'
  },
  {
    _id: '64d3dfaf877bb30f41b94be5',
    title: 'Coffee',
    start: '09:00',
    end: '09:30',
    priority: 'medium',
    date: '2023-09-04',
    category: 'to-do',
    owner: '64d387e745021a7e4d683ba0',
    createdAt: '2023-08-09T18:49:19.553+00:00',
    updatedAt: '2023-08-09T18:49:19.553+00:00'
  },
  {
    _id: '64d3dfcc877bb30f41b94be9',
    title: 'Fitness',
    start: '16:00',
    end: '18:30',
    priority: 'high',
    date: '2023-09-05',
    category: 'to-do',
    owner: '64d387e745021a7e4d683ba0',
    createdAt: '2023-08-09T18:49:48.655+00:00',
    updatedAt: '2023-08-09T18:49:48.655+00:00'
  },
  {
    _id: '64d3dfcc877bb30f41b94be9',
    title: 'Fitness',
    start: '16:00',
    end: '18:30',
    priority: 'high',
    date: '2023-09-05',
    category: 'to-do',
    owner: '64d387e745021a7e4d683ba0',
    createdAt: '2023-08-09T18:49:48.655+00:00',
    updatedAt: '2023-08-09T18:49:48.655+00:00'
  },
  {
    _id: '64d3dfdb877bb30f41b94ben',
    title: 'Swimming-pool',
    start: '14:00',
    end: '15:30',
    priority: 'low',
    date: '2023-09-05',
    category: 'to-do',
    owner: '64d387e745021a7e4d683ba0',
    createdAt: '2023-08-09T18:50:03.612+00:00',
    updatedAt: '2023-08-09T18:50:03.612+00:00'
  },
  {
    _id: '64d3dfdb877bb30f41b94bev',
    title: 'Swimming-pool',
    start: '14:00',
    end: '15:30',
    priority: 'low',
    date: '2023-08-15',
    category: 'to-do',
    owner: '64d387e745021a7e4d683ba0',
    createdAt: '2023-08-09T18:50:03.612+00:00',
    updatedAt: '2023-08-09T18:50:03.612+00:00'
  },
  {
    _id: '64d3dfdb877bb30f41b94bec',
    title: 'Swimming-pool',
    start: '14:00',
    end: '15:30',
    priority: 'low',
    date: '2023-08-15',
    category: 'to-do',
    owner: '64d387e745021a7e4d683ba0',
    createdAt: '2023-08-09T18:50:03.612+00:00',
    updatedAt: '2023-08-09T18:50:03.612+00:00'
  },
  {
    title: 'Team Meeting',
    start: '11:30',
    end: '12:30',
    priority: 'medium',
    date: '2023-08-28',
    category: 'in-progress'
  }
];

export default function ChoosedDay({ arg }) {
  const { currentDate } = useParams();
  const year = currentDate.split('-')[0];
  const month = currentDate.split('-')[1];
  const data = { year, month };
  // const user = useUser();
  const { data: task, isFetching, isLoading } = useGetTasksQuery(data);
  // const [createTask] = useCreateTasksMutation();
  // createTask({
  //   title: 'Team Meeting',
  //   start: '11:30',
  //   end: '12:30',
  //   priority: 'medium',
  //   date: '2023-08-28',
  //   category: 'in-progress'
  // });
  // // const [deleteTask, deleteResult] = useDeleteTasksMutation();
  // // const [updateTask, updateResult] = useUpdateTasksMutation();
  // // if (user.token) createTask();
  return (
    <ChoosedDayStyles>
      <DayCalendarHead date={currentDate} />
      <TasksColumnsList tasks={tasksList} />
    </ChoosedDayStyles>
  );
}

ChoosedDay.propTypes = {
  arg: PropTypes.any
};
