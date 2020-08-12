import React, {useState} from 'react';
import CheckboxTree from 'react-checkbox-tree';
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import {mdIcons} from '../Assets/Icons';
//TODO: read more on properties https://github.com/jakezatecky/react-checkbox-tree#properties
import history from '../history';

const nodes = [{
  value: '/app',
  label: 'app',
  children: [
    {
      value: '/app/Http',
      label: 'Http',
      children: [
        {
          value: '/app/Http/Controllers',
          label: 'Controllers',
          children: [{
            value: '/app/Http/Controllers/WelcomeController.js',
            label: 'WelcomeController.js',
          }],
        },
        {
          value: '/app/Http/routes.js',
          label: 'routes.js',
        },
      ],
    },
    {
      value: '/app/Providers',
      label: 'Providers',
      children: [{
        value: '/app/Providers/EventServiceProvider.js',
        label: 'EventServiceProvider.js',
      }],
    },
  ],
},
  {
    value: '/config',
    label: 'config',
    children: [
      {
        value: '/config/app.js',
        label: 'app.js',
      },
      {
        value: '/config/database.js',
        label: 'database.js',
      },
    ],
  },
  {
    value: '/public',
    label: 'public',
    children: [
      {
        value: '/public/assets/',
        label: 'assets',
        children: [{
          value: '/public/assets/style.css',
          label: 'style.css',
        }],
      },
      {
        value: '/public/index.html',
        label: 'index.html',
      },
    ],
  },
  {
    value: '/.env',
    label: '.env',
  },
  {
    value: '/.gitignore',
    label: '.gitignore',
  },
  {
    value: '/README.md',
    label: 'README.md',
  },
]

const PublishSelect = () => {

  const [checked, setChecked] = useState([
    '/app/Http/routes.js'
  ]);
  const [expanded, setExpanded] = useState([
    '/app',
    '/app/Http'
  ]);

  return (
    <div className="container  h-100">
     <section className="row align-items-center h-100">
       <div className="col-12">
         <h3 className="mb-4">Select Data</h3>
       </div>
    <CheckboxTree
      nodes={nodes}
      checked={checked}
      expanded={expanded}
      onCheck={(checked) => setChecked(checked)}
      onExpand={(expanded) => setExpanded(expanded)}
      icons={mdIcons}
    />
    </section>
    </div>
  );
}

export default PublishSelect;
