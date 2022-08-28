import { StudentDetail } from '@/components/swr';
import React, {useState} from 'react';

export default function SWRPage () {
  const [detailList, setDetailList] = useState([1, 2, 3])
  function handleAddStudentDetail() {
    setDetailList(prevList => [...prevList, 1])
  }

  return (
    <div>
      <h1>SWR PAGE</h1>
      <button onClick={handleAddStudentDetail}>Add detail</button>

      {/* save same swr in define of component with setting on root _app.tsx */}
      <ul>
        {detailList.map((x, index) => (
          <li key={index}>
            <StudentDetail studentId="sktwi1cgkkuif36f3" />
          </li>
        ))}
      </ul>
    </div>
  )
}
