import React from 'react';
import ReactMarkdown from 'react-markdown';

import VideoDetail from './VideoDetail';

const renderList = (list) => {
  let colClass = 'col-md-8 offset-md-2'; // for 1 item
  if (list.length === 2) colClass = 'col-sm-6';
  if (list.length === 3) colClass = 'col-md-4';

  return list.map(({ title, video }) => {
    return (
      <div className={colClass} key={video}>
        <VideoDetail videoId={video} title={title} />
      </div>
    );
  });
};

const Wednesday = ({ title, description, list }) => {
  return (
    <section>
      <h2 className='fw-normal'>{title}</h2>
      <ReactMarkdown className='' children={description} />
      <div className='row mb-3'>{renderList(list)}</div>
    </section>
  );
};

export default Wednesday;
