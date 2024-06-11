import { useState } from 'react';
import dayjs from 'dayjs';
import { CiMemoPad } from "react-icons/ci";



function Notes() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [editNoteId, setEditNoteId] = useState(null); 
  const [editNoteText, setEditNoteText] = useState(''); 

  const createNote = () => {
    const nowtime = new Date().toString();
    const nowYear = nowtime.substring(11, 15);
    let nowMonth = nowtime.substring(4, 7);
    if(nowMonth === 'Jan'){
        nowMonth = '1';
    } else if(nowMonth === 'Feb'){
        nowMonth = '2';
    } else if(nowMonth === 'Mar'){
        nowMonth = '3';
    } else if(nowMonth === 'Apr'){
        nowMonth = '4';
    } else if(nowMonth === 'May'){
        nowMonth = '5';
    } else if(nowMonth === 'Jun'){
        nowMonth = '6';
    } else if(nowMonth === 'Jul'){
        nowMonth = '7';
    } else if(nowMonth === 'Aug'){
        nowMonth = '8';
    } else if(nowMonth === 'Sep'){
        nowMonth = '9';
    } else if(nowMonth === 'Oct'){
        nowMonth = '10';
    } else if(nowMonth === 'Nov'){
        nowMonth = '11';
    } else if(nowMonth === 'Dec'){
        nowMonth = '12';
    }
    const nowDay = nowtime.substring(8, 10);
    const timeHour = nowtime.substring(16, 18);
    const timeMinute = nowtime.substring(19, 21);
    const timeSecond = nowtime.substring(22, 24);
    const note = {
      id: notes.length + 1,
      text: newNote,
      birth: nowYear + '년 ' + nowMonth + '월 ' + nowDay + '일 ' + timeHour + '시 ' + timeMinute + '분 ' + timeSecond + '초',
      nowtime: nowtime
    };
    setNotes([...notes, note]);
    setNewNote('');
  };

  const updateNote = (id) => {
    setNotes(
      notes.map(note =>
        note.id === id ? { ...note, text: editNoteText, nowtime: new Date} : note
      )
    );
    setEditNoteId(null);
    setEditNoteText('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div>
      <h2><div><CiMemoPad />메모</div></h2>
      <input
        type="text"
        placeholder="새 메모 입력"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
      <button onClick={createNote}>메모 추가</button>
      <ul>
        {notes.map(note => (
          <li key={note.id}>{editNoteId === note.id ? (
            <div>
              <input
                type="text"
                value={editNoteText}
                onChange={(e) => setEditNoteText(e.target.value)}
              /> - <small>{dayjs().format('YYYY년 MM월 DD일 HH:mm:ss')}</small>
              <button onClick={() => updateNote(note.id)}>저장</button>
              <button onClick={() => setEditNoteId(null)}>취소</button>
            </div>
          ) : (
            <div>
              {note.text} - <small>{dayjs().format('YYYY년 MM월 DD일 HH:mm:ss')}</small>
              <button onClick={() => {
                setEditNoteId(note.id);
                setEditNoteText(note.text);
              }}>수정</button>
              <button onClick={() => deleteNote(note.id)}>삭제</button>
            </div>
          )}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;