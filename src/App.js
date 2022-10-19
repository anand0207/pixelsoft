import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import FormComponent from './components/Form/form';
import FormProvider from './components/Form/formcontexts'
function App() {


  return (
    <div className="App">
      <FormProvider>
        <FormComponent />
      </FormProvider>
    </div>
  );
}

export default App;
