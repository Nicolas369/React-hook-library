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
        Name:
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      
      <label>
        Address:
        <input value={address} onChange={e => setAddress(e.target.value)} />
      </label>
      
      <div className='basicFlex'>
        <Greeting name={name} />  {/* component with memo */}
        <ShowAddress address={address} />
      </div>

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
