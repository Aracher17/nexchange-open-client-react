import React from 'react';

const TeamMember = props => {
  let social = [];
  if (props.social) {
    for (const key of Object.keys(props.social)) {
      let className;

      if (key === 'medium' || key === 'quora' || key === 'stack-overflow') {
        className = `fa fa-${key}`;
      } else if (key === 'blog') {
        className = 'fas fa-laptop';
      } else {
        className = `fa fa-${key}-square`;
      }

      social.push(
        <a href={props.social[key]} key={key} target="_blank">
          <i className={className} aria-hidden="true" />
        </a>
      );
    }
  }

  return (
    <div className="col-xs-12 col-ms-6 col-md-4 text-center">
      <div className="team-member">
        <img src={`/img/team/${props.id}.jpg`} className="img-circle img-responsive lazy-loading-image" alt={`${props.name} profile`} />

        <h3>
          {props.name}
          {props.fullCountryName && (
            <img
              data-toggle="tooltip"
              data-placement="top"
              data-original-title={props.fullCountryName}
              alt={props.fullCountryName}
              src={`/img/flags/${props.country}.svg`}
              className="flag lazy-loading-image"
            />
          )}
        </h3>

        <div className="social">{social}</div>

        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default TeamMember;
