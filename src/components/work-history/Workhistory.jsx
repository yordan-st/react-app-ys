import './workhistory.css'
import workHistoryData from '../../WorkhistoryData';
import PropTypes from 'prop-types';
import { useState } from 'react';

const WorkHistoryItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowMoreLess = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className="cv-item">
      <h3 className="cv-item__time">
        <time dateTime={item.startDate}>{item.startDate}</time> - {item.endDate || 'current'}
      </h3>
      <dl className="cv-item__main">
        <dt className="cv-item__heading">
          <h4 className="cv-item__title">{item.title}</h4>
          <h5 className="cv-item__location">{item.location}</h5>
          <img className="cv-item__logo" src={`src/assets/${item.logoUrl}`} alt={`Logo of ${item.company}`} />
        </dt>
        {isExpanded 
          ? <dd>
              {item.description}
            </dd>
          : <dd className='line-clamp'>
              {item.description}
            </dd>
        }
        <button className='link' onClick={handleShowMoreLess}>
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
      </dl>
    </article>
  );
};

export default function WorkHistory() {
  return (
    <div>
      {workHistoryData.map((item, index) => (
        <WorkHistoryItem key={index} item={item} />
      ))}
    </div>
  );
}

WorkHistoryItem.propTypes = {
  item: PropTypes.shape({
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    logoUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
  }).isRequired,
};