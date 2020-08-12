import React from 'react';
import ActionBox from "../Components/ActionBox";

const Publish = () => {

  const actions = [
    {name: "Select", icon: 'gear', elements: [{ref: '/publish/select', text: 'select'}]},
    {name: "Archive", icon: 'box', elements: [{ref: '/publish/archive', text: 'archive'}]},
  ]
  return (
    <div className="container  h-100">
      <section className="row align-items-center h-100">
        <div className="col-12">
          <h3 className="mb-4">Publish</h3>
          <h3>Where is your data?</h3>
          <h3>Returning Customer (Most people will have one publication, so show them that)</h3>
        </div>
        {actions.map((action, i) =>
          <ActionBox key={i} icon={action.icon} name={action.name} box={action.elements}/>
        )}
      </section>
    </div>
  );
}

export default Publish;
