import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailTask from './FailTask';

const TaskList = ({ data }) => {
  return (
    <div
      id='tasklist'
      className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'
    >
      {data?.tasks?.length > 0 ? (
        data.tasks.map((elem, idx) => {
          if (elem.active) {
            return <AcceptTask key={idx} data={elem} />;
          }
          if (elem.NewTask) {
            return <NewTask key={idx} data={elem} />;
          }
          if (elem.completed) {
            return <CompleteTask key={idx} data={elem} />;
          }
          if (elem.failed) {
            return <FailTask key={idx} data={elem} />;
          }

          return null;
        })
      ) : (
        <p className='text-white'>No tasks available.</p>
      )}
    </div>
  );
};

export default TaskList;
