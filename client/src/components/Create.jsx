import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Form from './Form';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

function Create() {
  const [activeTab, setActiveTab] = useState('1');

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <NavBar />
      <Nav tabs className='sticky-top' style={{ backgroundColor: '#e0aa59' }}>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' }, 'tabs')}
            onClick={() => {
              toggleTab('1');
            }}
          >
            Create with forms
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' }, 'tabs')}
            onClick={() => {
              toggleTab('2');
            }}
          >
            Create with files
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId='1'>
          <Form />
        </TabPane>
        <TabPane tabId='2'>foo</TabPane>
      </TabContent>
      <Footer />
    </>
  );
}

export default Create;
