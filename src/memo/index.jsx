import { memo, useState } from 'react';

export default function DemoComponent() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  return (
    <>
      <span>Open the console...</span>
      <p>Component {"<Greeting />"} will only rerender if its props changes. </p> 
      <p>Component {"<ShowAddress />"} will rerender every parent rerender. </p> 

      <label>
        Nombre{': '}
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      
      <label>
        Dirección{': '}
        <input value={address} onChange={e => setAddress(e.target.value)} />
      </label>
      
      <Greeting name={name} />
      <ShowAddress address={address} />

    </>
  );
}

const Greeting = memo(function Greeting({ name }) {

  console.log("Greeting was rendered at: ", new Date().toLocaleTimeString());
  
  return <h3>¡Hola{name && ', '}{name}!</h3>;

});

const ShowAddress = ({address}) => {
  console.log("ShowAddress was rendered ----------------------");
  return <h4>address: { address }</h4>
}
