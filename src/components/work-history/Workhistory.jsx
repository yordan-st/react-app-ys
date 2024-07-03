import './workhistory.css'
import workHistoryData from '../../WorkhistoryData';

export default function WorkHistory() {
  return (
    <div>
      {workHistoryData.map((item, index) => (
        <article key={index} className="cv-item">
          <h3 className="cv-item__time">
            <time dateTime={item.startDate}>{item.startDate}</time> - {item.endDate || 'current'}
          </h3>
          <dl className="cv-item__main">
            <dt className="cv-item__heading">
              <h4 className="cv-item__title">{item.title}</h4>
              <h5 className="cv-item__location">{item.location}</h5>
              <img className="cv-item__logo" src={`src/assets/${item.logoUrl}`} alt={`Logo of ${item.company}`} />
            </dt>
            <dd className="text-s">
              {item.description}
            </dd>
          </dl>
        </article>
      ))}
    </div>
  );
}



