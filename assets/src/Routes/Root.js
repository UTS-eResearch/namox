import React from 'react';
import ActionBox from "../Components/ActionBox";

const Root = ({actions}) => {
    return (
    <div className="container  h-100">
      <section className="row align-items-center h-100">
        <div className="col-12">
          <h3 className="mb-4">Research Pipelines</h3>
        </div>
        {actions.map((action, i) =>
          <ActionBox key={i} icon={action.icon} name={action.name} box={action.elements}/>
        )}
      </section>
    </div>
  );
}

export default Root;
