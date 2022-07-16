const Job = ({ company, time, title }) => (
  <div className="job">
    <div className="job-row highlight">
      <div className="job-company-name">
        { company }
      </div>
      <div className="job-time">
        { time }
      </div>
    </div>
    <div className="job-row">
      <div className="job-company-title">
        { title }
      </div>
    </div>
  </div>
);

export default Job;