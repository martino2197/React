import React from "react";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              {/*identificador unico que ayuda a react a determinar cuando se
              vuelve a renderizar*/}
              <p>
                {badge.firstName} {badge.lastName}
              </p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
