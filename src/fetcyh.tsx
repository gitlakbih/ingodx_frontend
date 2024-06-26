import { useEffect } from 'react'
import { useState } from 'react'

function FetchData() {
  const [records, setRecords] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {records.map(record => (
        <div key={record.id}>
          {record.name}
        </div>
      ))}
    </div>
  );
};

export default FetchData;