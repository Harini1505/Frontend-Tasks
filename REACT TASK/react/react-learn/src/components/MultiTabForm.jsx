import React, { useState } from 'react';

function MultiTabForm() {
  const [tab, setTab] = useState('profile');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  const [hobbies, setHobbies] = useState({ coding: false, music: false });
  const [notification, setNotification] = useState('');
  const [preferences, setPreferences] = useState({ email: false, sms: false });

  return (
    <div>
      <div>
        <button onClick={() => setTab('profile')}>Profile</button>
        <button onClick={() => setTab('interest')}>Interest</button>
        <button onClick={() => setTab('settings')}>Settings</button>
      </div>
    
      {tab === 'profile' && (
        <div>
          <h3>Profile</h3>
          <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} /><br />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
          <button onClick={() => alert("Profile Saved!")}>Submit</button>
        </div>
      )}

      {tab === 'interest' && (
        <div>
          <h3>Interest</h3>
          <select value={interest} onChange={(e) => setInterest(e.target.value)}>
            <option value="">Select</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </select><br />
          <label><input type="checkbox" checked={hobbies.coding} onChange={() => setHobbies({ ...hobbies, coding: !hobbies.coding })} /> Coding</label><br />
          <label><input type="checkbox" checked={hobbies.music} onChange={() => setHobbies({ ...hobbies, music: !hobbies.music })} /> Music</label><br />
          <button onClick={() => alert("Interest Saved!")}>Submit</button>
        </div>
      )}

      {tab === 'settings' && (
        <div>
          <h3>Settings</h3>
          <label><input type="radio" value="on" checked={notification === 'on'} onChange={() => setNotification('on')} /> On</label><br />
          <label><input type="radio" value="off" checked={notification === 'off'} onChange={() => setNotification('off')} /> Off</label><br />
          <label><input type="checkbox" checked={preferences.email} onChange={() => setPreferences({ ...preferences, email: !preferences.email })} /> Email</label><br />
          <label><input type="checkbox" checked={preferences.sms} onChange={() => setPreferences({ ...preferences, sms: !preferences.sms })} /> SMS</label><br />
          <button onClick={() => alert("Settings Saved!")}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default MultiTabForm;